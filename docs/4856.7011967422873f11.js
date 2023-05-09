"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4856],{5484:(Z,v,r)=>{r.r(v),r.d(v,{RegularListingPageModule:()=>V});var p=r(7693),g=r(6019),f=r(7537),a=r(2747),m=r(7410),F=r(7908);class P extends F.w0{constructor(e,i){super()}schedule(e,i=0){return this}}const c={setInterval(...s){const{delegate:e}=c;return((null==e?void 0:e.setInterval)||setInterval)(...s)},clearInterval(s){const{delegate:e}=c;return((null==e?void 0:e.clearInterval)||clearInterval)(s)},delegate:void 0};var A=r(3980);const l={now:()=>(l.delegate||Date).now(),delegate:void 0};class d{constructor(e,i=d.now){this.schedulerActionCtor=e,this.now=i}schedule(e,i=0,n){return new this.schedulerActionCtor(this,e).schedule(n,i)}}d.now=l.now;const y=new class extends d{constructor(e,i=d.now){super(e,i),this.actions=[],this._active=!1,this._scheduled=void 0}flush(e){const{actions:i}=this;if(this._active)return void i.push(e);let n;this._active=!0;do{if(n=e.execute(e.state,e.delay))break}while(e=i.shift());if(this._active=!1,n){for(;e=i.shift();)e.unsubscribe();throw n}}}(class extends P{constructor(e,i){super(e,i),this.scheduler=e,this.work=i,this.pending=!1}schedule(e,i=0){if(this.closed)return this;this.state=e;const n=this.id,u=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(u,n,i)),this.pending=!0,this.delay=i,this.id=this.id||this.requestAsyncId(u,this.id,i),this}requestAsyncId(e,i,n=0){return c.setInterval(e.flush.bind(e,this),n)}recycleAsyncId(e,i,n=0){if(null!=n&&this.delay===n&&!1===this.pending)return i;c.clearInterval(i)}execute(e,i){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const n=this._execute(e,i);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,i){let u,n=!1;try{this.work(e)}catch(h){n=!0,u=h||new Error("Scheduled action threw falsy error")}if(n)return this.unsubscribe(),u}unsubscribe(){if(!this.closed){const{id:e,scheduler:i}=this,{actions:n}=i;this.work=this.state=this.scheduler=null,this.pending=!1,(0,A.P)(n,this),null!=e&&(this.id=this.recycleAsyncId(i,e,null)),this.delay=null,super.unsubscribe()}}}),L=y;var O=r(1404),I=r(9468),x=r(9947),E=r(8889),S=r(6921),U=r(4753),D=r(5724);function T(s,e){return e?i=>(0,O.z)(e.pipe((0,I.q)(1),(0,x.e)((s,e)=>{s.subscribe(new E.Q(e,S.Z))})),i.pipe(T(s))):(0,D.z)((i,n)=>s(i,n).pipe((0,I.q)(1),function(s){return(0,U.U)(()=>s)}(i)))}var C=r(8305),B=r(7398);var t=r(3556),W=r(4522),K=r(9604);function z(s,e){1&s&&(t.TgZ(0,"ion-row",7),t.TgZ(1,"ion-col"),t._UZ(2,"ion-spinner"),t.TgZ(3,"p"),t._uU(4,"Loading projects..."),t.qZA(),t.TgZ(5,"i"),t._uU(6,"Added custom delay of 3000ms to test spinner functionality"),t.qZA(),t.qZA(),t.qZA())}function Y(s,e){if(1&s&&(t.TgZ(0,"ion-col"),t._UZ(1,"app-project-item",9),t.qZA()),2&s){const i=e.$implicit;t.xp6(1),t.Q6J("item",i)}}function Q(s,e){if(1&s&&(t.TgZ(0,"ion-row"),t.YNc(1,Y,2,1,"ion-col",8),t.qZA()),2&s){const i=t.oxw();t.xp6(1),t.Q6J("ngForOf",i.listOfItems)}}const b=[{path:"",component:(()=>{class s{constructor(i,n){this.changeDetector=i,this.http=n,this.itemsLoaded=!1}ngOnInit(){this.loadProjects()}loadProjects(i){this.http.get("https://api.github.com/users/Callan003/repos",{params:{sort:"created"}}).pipe(function(s,e=y){const i=function(s=0,e,i=L){let n=-1;return null!=e&&((0,B.K)(e)?i=e:n=e),new C.y(u=>{let h=function(s){return s instanceof Date&&!isNaN(s)}(s)?+s-i.now():s;h<0&&(h=0);let H=0;return i.schedule(function(){u.closed||(u.next(H++),0<=n?this.schedule(void 0,n):u.complete())},h)})}(3e3,e);return T(()=>i)}()).subscribe(n=>{this.itemsLoaded=!0,this.listOfItems=n,this.changeDetector.detectChanges(),i&&i.target.complete()})}doRefresh(i){this.loadProjects(i)}}return s.\u0275fac=function(i){return new(i||s)(t.Y36(t.sBO),t.Y36(W.eN))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-regular-listing"]],decls:18,vars:2,consts:[["slot","fixed",3,"ionRefresh"],["pullingIcon","chevron-down-circle-outline","pullingText","Pull to refresh","refreshingSpinner","circles","refreshingText","Refreshing... custom 3000ms delay"],[1,"center-grid"],[1,"ion-no-padding"],[1,"ion-padding-horizontal"],["class","ion-text-center",4,"ngIf"],[4,"ngIf"],[1,"ion-text-center"],[4,"ngFor","ngForOf"],[3,"item"]],template:function(i,n){1&i&&(t.TgZ(0,"ion-content"),t.TgZ(1,"ion-refresher",0),t.NdJ("ionRefresh",function(h){return n.doRefresh(h)}),t._UZ(2,"ion-refresher-content",1),t.qZA(),t.TgZ(3,"ion-grid",2),t.TgZ(4,"ion-row"),t.TgZ(5,"ion-col",3),t.TgZ(6,"h2",4),t._uU(7,"Here you can find a list of all my public Github Projects"),t.qZA(),t.TgZ(8,"h5",4),t.TgZ(9,"i"),t.TgZ(10,"q"),t._uU(11,"It ain't much, but it's honest work!"),t.qZA(),t._uU(12," - "),t.TgZ(13,"strong"),t._uU(14," David Brandt"),t.qZA(),t._uU(15,", Farmer"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(16,z,7,0,"ion-row",5),t.YNc(17,Q,2,1,"ion-row",6),t.qZA(),t.qZA()),2&i&&(t.xp6(16),t.Q6J("ngIf",!n.itemsLoaded),t.xp6(1),t.Q6J("ngIf",n.itemsLoaded))},directives:[a.W2,a.nJ,a.Wo,a.jY,a.Nd,a.wI,g.O5,a.PQ,g.sg,K.b],styles:[""]}),s})()}];let G=(()=>{class s{}return s.\u0275fac=function(i){return new(i||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[m.Bz.forChild(b)],m.Bz]}),s})(),V=(()=>{class s{}return s.\u0275fac=function(i){return new(i||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[g.ez,f.u5,a.Pc,G,p.K]]}),s})()},8191:(Z,v,r)=>{r.d(v,{e:()=>P});var p=r(4762),g=r(273),f=r(2953),a=r(3556),m=r(2747),F=r(6632);let P=(()=>{class c{constructor(o,l){this.toastController=o,this.achievementService=l,this.localFavoritesSubscriber=new g.x,this.localFavorites=this.getFavorites()||[]}getFavorites(){const o=JSON.parse(localStorage.getItem("favorites"));return this.localFavoritesSubscriber.next(o),o}addToFavorites(o){this.achievementService.increaseAchievementProgress(f.TH.FAVORITE),!this.isProjectOnFavoriteList(o)&&(this.localFavorites.push(o),localStorage.setItem("favorites",JSON.stringify(this.localFavorites)))}removeFromFavorites(o){this.localFavorites=this.localFavorites.filter(l=>(null==l?void 0:l.id)!==(null==o?void 0:o.id)),localStorage.setItem("favorites",JSON.stringify(this.localFavorites))}toggleFavorites(o){this.isProjectOnFavoriteList(o)?(this.localFavorites=this.localFavorites.filter(l=>(null==l?void 0:l.id)!==(null==o?void 0:o.id)),this.presentToast("remove",o)):(this.achievementService.increaseAchievementProgress(f.TH.FAVORITE),this.localFavorites.push(o),this.presentToast("add",o)),this.localFavoritesSubscriber.next(this.localFavorites),localStorage.setItem("favorites",JSON.stringify(this.localFavorites))}isProjectOnFavoriteList(o){var l;return null===(l=this.localFavorites)||void 0===l?void 0:l.find(d=>(null==d?void 0:d.id)===(null==o?void 0:o.id))}presentToast(o,l){return(0,p.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({position:"bottom",color:"add"===o?"success":"danger",icon:"add"===o?"heart":"heart-dislike",message:"add"===o?"Added to Favorites!":"Removed from favorites!",duration:3e3,buttons:[{side:"end",icon:"arrow-undo-outline",text:"Undo",handler:()=>{this.toggleFavorites(l)}}]})).present()})}}return c.\u0275fac=function(o){return new(o||c)(a.LFG(m.yF),a.LFG(F.o))},c.\u0275prov=a.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()}}]);