"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5885,2358],{5885:(T,p,o)=>{o.r(p),o.d(p,{AchievementsPageModule:()=>u});var v=o(7693),d=o(6019),i=o(7537),t=o(2747),c=o(7410),g=o(4762),e=o(3556),h=o(6632),f=o(7899);function A(r,l){if(1&r){const n=e.EpF();e.TgZ(0,"ion-list",8),e.TgZ(1,"ion-item",9),e.NdJ("click",function(){return e.CHM(n),e.oxw().openInfo()}),e._UZ(2,"ion-icon",10),e.TgZ(3,"ion-label"),e._uU(4,"Info"),e.qZA(),e.qZA(),e.TgZ(5,"ion-item",9),e.NdJ("click",function(){return e.CHM(n),e.oxw().resetAchievements()}),e._UZ(6,"ion-icon",11),e.TgZ(7,"ion-label"),e._uU(8,"Reset Progress"),e.qZA(),e.qZA(),e.qZA()}2&r&&(e.xp6(1),e.Q6J("button",!0)("detail",!1),e.xp6(4),e.Q6J("button",!0)("detail",!1))}function x(r,l){1&r&&(e.TgZ(0,"ion-badge",20),e._uU(1," Max Level"),e.qZA())}function M(r,l){if(1&r){const n=e.EpF();e.TgZ(0,"div",12),e.NdJ("click",function(){const b=e.CHM(n).$implicit;return e.oxw().openAchievementInfo(b)}),e._UZ(1,"img",13),e.TgZ(2,"div",14),e.TgZ(3,"h4",15),e.TgZ(4,"strong"),e._uU(5),e.qZA(),e.qZA(),e.TgZ(6,"p",16),e.TgZ(7,"i"),e._uU(8),e.qZA(),e.qZA(),e.TgZ(9,"ion-badge",17),e._uU(10),e.qZA(),e.YNc(11,x,2,0,"ion-badge",18),e._UZ(12,"ion-progress-bar",19),e.qZA(),e.qZA()}if(2&r){const n=l.$implicit,m=e.oxw();e.xp6(1),e.Q6J("src",m.getImage(n),e.LSH)("alt",n.title),e.xp6(4),e.Oqu(n.title),e.xp6(3),e.Oqu(n.description),e.xp6(1),e.Q6J("color",m.isMaxLevel(n)?"success":0===n.progress?"medium":"dark"),e.xp6(1),e.AsE(" ",n.progress>n.limit[n.level-1]&&n.progress<n.limit[n.level]?n.progress:n.limit[n.level-1]||0," / ",n.limit[n.level]?n.limit[n.level]:n.limit[n.limit.length-1]," "),e.xp6(1),e.Q6J("ngIf",m.isMaxLevel(n)),e.xp6(1),e.Q6J("value",m.getProgressBarValue(n))("color",m.isMaxLevel(n)?"success":0===n.progress?"medium":"dark")}}const _=[{path:"",component:(()=>{class r{constructor(n,m){this.achievementService=n,this.alertController=m}ngOnInit(){this.achievements=this.achievementService.getAchievementList()}getImage(n){return`../../assets/Badges/${n.title}${n.level}.webp`}getProgressBarValue(n){return n.progress/(n.limit.length===n.level?n.limit[n.limit.length-1]:n.limit[n.level])}resetAchievements(){return(0,g.mG)(this,void 0,void 0,function*(){(yield this.alertController.create({header:"Please confirm",mode:"ios",message:"Are you sure you want to reset your Achivements?",buttons:[{text:"Cancel",cssClass:"color-dark",role:"cancel"},{text:"Reset",cssClass:"color-success",handler:()=>{this.achievements=this.achievementService.resetAchievements()}}]})).present()})}isMaxLevel(n){return this.achievementService.isAchievementAtMaxLevel(n)}openAchievementInfo(n){this.achievementService.displayNewAchievementAlert(n,!1)}openInfo(){return(0,g.mG)(this,void 0,void 0,function*(){(yield this.alertController.create({header:"Achievements Info",mode:"ios",message:"Here you can find a list of achievements that you can unlock by exploring my portofolio!",buttons:[{text:"Ok",role:"cancel",cssClass:"color-success"}]})).present()})}}return r.\u0275fac=function(n){return new(n||r)(e.Y36(h.o),e.Y36(t.Br))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-achievements"]],decls:13,vars:2,consts:[["collapse","fade",3,"translucent"],["header",""],[1,"center-content"],[1,"text-sub","ion-margin-start"],["id","open-popover","fill","clear","color","dark",1,"ion-float-right"],["name","settings-outline"],["arrow","true","dismissOnSelect","true","trigger","open-popover"],["class","achievement cursor-pointer",3,"click",4,"ngFor","ngForOf"],["lines","none"],[3,"button","detail","click"],["name","information-circle-outline","slot","end"],["name","refresh","slot","end"],[1,"achievement","cursor-pointer",3,"click"],[1,"achievement-image",3,"src","alt"],[1,"w-100"],[1,"ion-no-margin"],[1,"smaller-margin"],["mode","ios",3,"color"],["color","success","mode","ios",4,"ngIf"],[3,"value","color"],["color","success","mode","ios"]],template:function(n,m){1&n&&(e.TgZ(0,"ion-header",0),e._UZ(1,"app-header",null,1),e.qZA(),e.TgZ(3,"ion-content"),e.TgZ(4,"div",2),e.TgZ(5,"h2"),e.TgZ(6,"span",3),e._uU(7,"Achievements"),e.qZA(),e.TgZ(8,"ion-button",4),e._UZ(9,"ion-icon",5),e.qZA(),e.qZA(),e.TgZ(10,"ion-popover",6),e.YNc(11,A,9,4,"ng-template"),e.qZA(),e.YNc(12,M,13,10,"div",7),e.qZA(),e.qZA()),2&n&&(e.Q6J("translucent",!0),e.xp6(12),e.Q6J("ngForOf",m.achievements))},directives:[t.Gu,f.G,t.W2,t.YG,t.gu,t.d8,d.sg,t.q_,t.Ie,t.Q$,t.yp,d.O5,t.X7],styles:[".center-content[_ngcontent-%COMP%]{max-width:768px;margin:auto}.achievement[_ngcontent-%COMP%]{display:flex;align-content:space-around;justify-content:center;align-items:center;width:calc(100% - 40px);margin:20px;grid-gap:10px;gap:10px}.achievement-image[_ngcontent-%COMP%]{width:200px;height:200px}.text-sub[_ngcontent-%COMP%]{vertical-align:sub}.smaller-margin[_ngcontent-%COMP%]{margin:10px 0}ion-badge[_ngcontent-%COMP%]{margin:0 2px}@media (max-width: 768px){.achievement-image[_ngcontent-%COMP%]{width:150px;height:150px}}@media (max-width: 425px){.achievement-image[_ngcontent-%COMP%]{width:100px;height:100px}}"]}),r})()}];let s=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[c.Bz.forChild(_)],c.Bz]}),r})(),u=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[d.ez,i.u5,t.Pc,s,v.K]]}),r})()},7693:(T,p,o)=>{o.d(p,{K:()=>c});var v=o(7410),d=o(6019),i=o(2747),t=o(3556);let c=(()=>{class g{}return g.\u0275fac=function(h){return new(h||g)},g.\u0275mod=t.oAB({type:g}),g.\u0275inj=t.cJS({imports:[[i.Pc,d.ez,v.Bz]]}),g})()},7899:(T,p,o)=>{o.d(p,{G:()=>M});var v=o(4762),d=o(6019),i=o(2953),t=o(3556),c=o(2747),g=o(2297),e=o(6632),h=o(7410);function f(a,_){if(1&a){const s=t.EpF();t.TgZ(0,"ion-toolbar",2),t.TgZ(1,"ion-buttons",3),t._UZ(2,"ion-menu-button",4),t.qZA(),t.TgZ(3,"ion-buttons",5),t.TgZ(4,"ion-button",6),t.NdJ("click",function(){return t.CHM(s),t.oxw().changeTheme()}),t._UZ(5,"ion-icon",7),t.qZA(),t.qZA(),t.qZA()}if(2&a){const s=t.oxw();t.xp6(5),t.Q6J("name",s.themeIcon)}}function A(a,_){if(1&a&&(t.TgZ(0,"ion-button",11),t._UZ(1,"ion-icon",12),t.TgZ(2,"ion-label"),t._uU(3),t.qZA(),t.qZA()),2&a){const s=_.$implicit;t.Q6J("routerLink","/"+(null==s?null:s.link)),t.xp6(1),t.Q6J("name",s.icon),t.xp6(2),t.Oqu(s.name)}}function x(a,_){if(1&a){const s=t.EpF();t.TgZ(0,"ion-toolbar",8),t.TgZ(1,"div",9),t.YNc(2,A,4,3,"ion-button",10),t.qZA(),t.TgZ(3,"ion-buttons",5),t.TgZ(4,"ion-button",6),t.NdJ("click",function(){return t.CHM(s),t.oxw().changeTheme()}),t._UZ(5,"ion-icon",7),t.qZA(),t.qZA(),t.qZA()}if(2&a){const s=t.oxw();t.xp6(2),t.Q6J("ngForOf",s.menuItems),t.xp6(3),t.Q6J("name",s.themeIcon)}}let M=(()=>{class a{constructor(s,u,r,l,n,m){this.document=s,this.platform=u,this.menuController=r,this.thingsToDoService=l,this.achievementService=n,this.toastController=m,this.menuItems=i.sd,this.theme=localStorage.getItem(i._X)||i.b3.DARK,s.body.setAttribute(i._X,this.theme),this.setThemeIcon()}ngOnInit(){const s=this.platform.width();this.setMenuType(s)}onResize(s){this.setMenuType(s.target.innerWidth)}setMenuType(s){s<768?(this.mobileMenu=!0,this.menuController.enable(!0,"custom")):(this.mobileMenu=!1,this.menuController.enable(!1,"custom"))}changeTheme(){switch(this.thingsToDoService.setThingDone(4),this.achievementService.increaseAchievementProgress(i.TH.DAYNIGHT),this.theme){case i.b3.DARK:this.theme=i.b3.LIGHT,localStorage.setItem(i._X,i.b3.LIGHT),this.document.body.setAttribute(i._X,i.b3.LIGHT);break;case i.b3.LIGHT:this.theme=i.b3.DARK,localStorage.setItem(i._X,i.b3.DARK),this.document.body.setAttribute(i._X,i.b3.DARK)}this.presentToast(),this.setThemeIcon()}setThemeIcon(){this.themeIcon=this.theme===i.b3.LIGHT?i.Xe.LIGHT:i.Xe.DARK}presentToast(){return(0,v.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:this.theme===i.b3.LIGHT?"Let there be light!":"Welcome to the dark side!",duration:2e3,position:"top",color:"dark",cssClass:"ion-text-center",icon:this.theme===i.b3.LIGHT?i.Xe.LIGHT:i.Xe.DARK})).present()})}}return a.\u0275fac=function(s){return new(s||a)(t.Y36(d.K0),t.Y36(c.t4),t.Y36(c._q),t.Y36(g.u),t.Y36(e.o),t.Y36(c.yF))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-header"]],hostBindings:function(s,u){1&s&&t.NdJ("resize",function(l){return u.onResize(l)},!1,t.Jf7)},decls:2,vars:2,consts:[["id","mobile-header","mode","md",4,"ngIf"],["id","desktop-header",4,"ngIf"],["id","mobile-header","mode","md"],["slot","start"],["auto-hide","false"],["slot","secondary"],[3,"click"],["slot","end","color","dark",3,"name"],["id","desktop-header"],[1,"desktop-menu-buttons"],["class","menu-item-button ion-text-capitalize","fill","clear","routerDirection","root","routerLinkActive","selected",3,"routerLink",4,"ngFor","ngForOf"],["fill","clear","routerDirection","root","routerLinkActive","selected",1,"menu-item-button","ion-text-capitalize",3,"routerLink"],["slot","start",3,"name"]],template:function(s,u){1&s&&(t.YNc(0,f,6,1,"ion-toolbar",0),t.YNc(1,x,6,2,"ion-toolbar",1)),2&s&&(t.Q6J("ngIf",u.mobileMenu),t.xp6(1),t.Q6J("ngIf",!u.mobileMenu))},directives:[d.O5,c.sr,c.Sm,c.fG,c.YG,c.gu,d.sg,h.Od,c.YI,h.rH,c.Q$],styles:[".logo[_ngcontent-%COMP%]{margin:auto 30px;vertical-align:middle;font-size:xx-large}.menu-item-button[_ngcontent-%COMP%]{--color: var(--ion-color-dark)}.menu-item-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-bottom:6px}.selected[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-primary);animation:colorIn 1s}ion-toolbar[_ngcontent-%COMP%]{box-shadow:0 2px 3px -3px var(--ion-color-dark)}.desktop-menu-buttons[_ngcontent-%COMP%]{text-align:left;margin-left:30px;display:inline-block}.fade-in-and-out[_ngcontent-%COMP%]{font-size:14px;opacity:0;animation:fadeInOut 3s}@keyframes fadeInOut{0%{opacity:0}10%{opacity:1}65%{opacity:1}to{opacity:0}}@keyframes colorIn{0%{color:var(--ion-color-dark)}to{color:var(--ion-color-primary)}}@keyframes colorOut{0%{color:var(--ion-color-primary)}to{color:var(--ion-color-dark)}}"]}),a})()},2297:(T,p,o)=>{o.d(p,{u:()=>t});var v=o(2953),d=o(273),i=o(3556);let t=(()=>{class c{constructor(){this.thingsToDo=v.el,this.localThingsToDoSubscriber=new d.x}getThingsToDoFromLS(){return(JSON.parse(localStorage.getItem("thingsDone"))||[]).forEach(h=>this.thingsToDo[h].isDone=!0),this.localThingsToDoSubscriber.next(this.thingsToDo),this.thingsToDo}setThingDone(e){const h=JSON.parse(localStorage.getItem("thingsDone"))||[];!h.find(f=>f===e)&&0!==h.find(f=>f===e)&&(h.push(e),localStorage.setItem("thingsDone",JSON.stringify(h)),this.getThingsToDoFromLS())}resetThingsToDo(){localStorage.removeItem("thingsDone"),this.thingsToDo.forEach(e=>e.isDone=!1),this.getThingsToDoFromLS()}}return c.\u0275fac=function(e){return new(e||c)},c.\u0275prov=i.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()}}]);