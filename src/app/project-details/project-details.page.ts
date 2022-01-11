import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { MarkdownService } from 'ngx-markdown';
import { Chart, registerables } from 'chart.js';
import * as githubColors from '../../assets/colors.json';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.page.html',
  styleUrls: ['./project-details.page.scss'],
})
export class ProjectDetailsPage implements OnInit {

  @ViewChild('pieChart') pieChart;
  pie: any;
  colorArray: any;

  public projectName;
  public readme;
  public htmlString;
  public projectDetails;
  public scrollPosition = 0;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private mdService: MarkdownService,
    public alertController: AlertController,
    private toastController: ToastController
    ) { }
    

  ngOnInit() {
    this.route.params.pipe(
      tap(res => this.projectName = res.projectName),
      switchMap(() => this.http.get(`https://api.github.com/repos/Callan003/${this.projectName}`)),
      tap(projectDetails => this.projectDetails = projectDetails),
      switchMap(() => this.http.get(`https://api.github.com/repos/Callan003/${this.projectName}/readme`)),
      catchError(async (error) => console.error(error)),
      tap((res: any) => {
        if(res) {
          this.readme = this.mdService.compile(atob(res?.content));
        }
      }),
      switchMap(() => this.http.get(`https://api.github.com/repos/Callan003/${this.projectName}/languages`))
    ).subscribe((result: any) => {
      this.createPieChart(result);
    });
  }

  getImageSrc(date: string): string {
    const projectDate = new Date(date);
    const today = new Date();

    if(today.getFullYear() > projectDate.getFullYear()) {
      return '../../../assets/icon/old.svg'
    } else if (today.getMonth() > projectDate.getMonth() && (today.getMonth() + 1) - (projectDate.getMonth() + 1) < 3 ) {
      return '../../../assets/icon/baby-solid.svg'
    }

    return '';
  }

  async showDescription(): Promise<void> {
    const alert = await this.alertController.create({
      cssClass: 'description-alert',
      header: 'ChartJS',
      message: 'I created this chart using <strong>ChartJS</strong> library.<br/> It was quite a challange but I am happy with how it turned out!',
      buttons: [
        {
          text: 'Looks awesome! Great job!',
          cssClass: 'description-alert-button-success',
          id: 'confirm-button',
          handler: () => {
            this.presentToast(true);
          }
        },
        {
          text: 'It still has some bugs...',
          cssClass: 'description-alert-button-fail',
          id: 'cancel-button',
          handler: () => {
            this.presentToast(false);
          }
        }
      ]
    });

    await alert.present();

  }

  async presentToast(positiveActionClicked: boolean) {
    const toast = await this.toastController.create({
      position: 'middle',
      color: positiveActionClicked? 'success' : 'danger',
      icon: positiveActionClicked? 'happy-outline' : 'sad-outline',
      message: positiveActionClicked? 'Thanks a lot!' : 'Give me a break!',
      duration: 2000
    });
    toast.present();
  }

  async logScrolling($event) {
    if($event.target.localName != "ion-content") {
      return;
    }
    const scrollElement = await $event.target.getScrollElement();
    const scrollHeight = scrollElement.scrollHeight - scrollElement.clientHeight;
    const currentScrollDepth = $event.detail.scrollTop;
    if (this.scrollPosition < (((currentScrollDepth * 100) / scrollHeight) / 100)) {
      this.scrollPosition = (((currentScrollDepth * 100) / scrollHeight) / 100);
    }
  }

  public createPieChart(chartData) {

    const datas = Object.keys(chartData).map(key => chartData[key]);
    const labels = Object.keys(chartData);

    let totalDatas = 0;

    datas.forEach(data => totalDatas = totalDatas + data);

    let percentageDatas = []

    datas.forEach(data => {
      percentageDatas.push(((100 * data)/ totalDatas).toFixed(2));
    });

    let randomColors = [];
    
    labels.forEach(label => {
      randomColors.push(githubColors[label].color);
    });

    Chart.register(...registerables);
    this.pie = new Chart(this.pieChart.nativeElement, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          label: 'Programming Languages',
          data: percentageDatas,
          backgroundColor: randomColors,
          borderWidth: 1,
          hoverOffset: 10,
        }]
      }, 
      options: {
        animation: {
          animateScale: true,
          animateRotate: false,
          delay: 100
        },
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: 20,
        },
        plugins: {
          legend: {
            labels:{
              boxWidth: 10,
              boxHeight: 10,
              padding: 20,
              font: {
                weight: 'bold',
                size: 15
              },
              color: '#708090'
            },
            position: "right",
            // onClick: (e) => e.native.stopPropagation()
          },
          tooltip: {
            xAlign: 'center',
            yAlign: 'top',
            callbacks: {
              label: function(tooltipItem: any) {
                return ` ${tooltipItem.label}: ${tooltipItem.dataset.data[tooltipItem.dataIndex]}%`;
              }
            },
          }
        }
    },   
    plugins: [{
      id: 'pieChart',
      afterDraw: chart => {
        var image = new Image();      
        image.src = '../../assets/icon/code-slash2.svg';

        const ctx = chart.ctx;
        const {
          width,
          height
        } = chart.chartArea;
        const x = (width / 2);
        const y = height / 2;
        ctx.drawImage(image, x, y, 40, 40);
      }
    }]
    });
  }
}
