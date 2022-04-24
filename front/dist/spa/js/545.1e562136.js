"use strict";(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[545],{1545:(e,a,t)=>{t.r(a),t.d(a,{default:()=>z});var n=t(9835);const l=(0,n._)("h2",null,"Admin Website Page",-1);function d(e,a,t,d,o,i){const u=(0,n.up)("TabAdminWebsite"),m=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(m,{class:"q-pa-md"},{default:(0,n.w5)((()=>[l,(0,n.Wm)(u)])),_:1})}const o=(0,n._)("div",{class:"text-h4 q-mb-md"},"Contact",-1);function i(e,a,t,l,d,i){const u=(0,n.up)("q-tab"),m=(0,n.up)("q-tabs"),r=(0,n.up)("LandingPage"),s=(0,n.up)("q-card-section"),p=(0,n.up)("q-card"),c=(0,n.up)("q-expansion-item"),b=(0,n.up)("q-list"),w=(0,n.up)("q-tab-panel"),W=(0,n.up)("Header"),f=(0,n.up)("EditArray"),g=(0,n.up)("q-tab-panels");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(m,{modelValue:l.tab,"onUpdate:modelValue":a[0]||(a[0]=e=>l.tab=e),"inline-label":"",class:"bg-primary text-white shadow-2",style:{"min-width":"70vw"}},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{name:"landing",icon:"home",label:"landing"}),(0,n.Wm)(u,{name:"home",icon:"home",label:"home"}),(0,n.Wm)(u,{name:"contact",icon:"phone",label:"contact"})])),_:1},8,["modelValue"]),(0,n.Wm)(g,{modelValue:l.tab,"onUpdate:modelValue":a[1]||(a[1]=e=>l.tab=e),animated:"",swipeable:"",vertical:"","transition-prev":"jump-up","transition-next":"jump-up"},{default:(0,n.w5)((()=>[(0,n.Wm)(w,{name:"landing"},{default:(0,n.w5)((()=>[(0,n.Wm)(b,{bordered:"",class:"rounded-borders"},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{"expand-separator":"",icon:"perm_identity",label:"Landing Page",caption:"edit"},{default:(0,n.w5)((()=>[(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[(0,n.Wm)(s,null,{default:(0,n.w5)((()=>[(0,n.Wm)(r)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,n.Wm)(w,{name:"home"},{default:(0,n.w5)((()=>[(0,n.Wm)(b,{bordered:"",class:"rounded-borders"},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{"expand-separator":"",icon:"perm_identity",label:"Header",caption:"edit"},{default:(0,n.w5)((()=>[(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[(0,n.Wm)(s,null,{default:(0,n.w5)((()=>[(0,n.Wm)(W),(0,n.Wm)(f,{data:l.sliders},null,8,["data"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,n.Wm)(w,{name:"contact"},{default:(0,n.w5)((()=>[o])),_:1})])),_:1},8,["modelValue"])])}var u=t(499),m=t(4282),r=t(6970);const s=(0,n._)("h5",null,"Edit",-1);function p(e,a,t,l,d,o){const i=(0,n.up)("FormEdit");return(0,n.wg)(),(0,n.iD)("div",null,[s,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.array,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e},[(0,n._)("p",null,"Item "+(0,r.zw)(e.label+": "+e.value),1),(0,n.Wm)(i,{data:e},null,8,["data"])])))),128))])}const c={class:"q-gutter-md q-my-xs row items-start"};function b(e,a,t,l,d,o){const i=(0,n.up)("q-input");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",c,[(0,n.Wm)(i,{square:"",filled:"",modelValue:l.item.value,"onUpdate:modelValue":a[0]||(a[0]=e=>l.item.value=e),label:"Value"},null,8,["modelValue"]),(0,n.Wm)(i,{square:"",filled:"",modelValue:l.item.icon,"onUpdate:modelValue":a[1]||(a[1]=e=>l.item.icon=e),label:"Icon"},null,8,["modelValue"])]),(0,n.Wm)(i,{modelValue:l.item.description,"onUpdate:modelValue":a[2]||(a[2]=e=>l.item.description=e),filled:"",type:"textarea",label:"Description"},null,8,["modelValue"])])}const w={name:"FormEdit",props:["data"],setup(e){const a=(0,u.iH)(e.data);return{item:a}}};var W=t(1639),f=t(9605),g=t(9984),_=t.n(g);const v=(0,W.Z)(w,[["render",b]]),h=v;_()(w,"components",{QInput:f.Z});const Z={name:"EditComp",components:{FormEdit:h},props:["data"],setup(e){const a=(0,u.iH)(e.data);return{array:a}}},q=(0,W.Z)(Z,[["render",p]]),V=q;var y=t(8806),x=t(9813),Q=t(1273);const E={components:{Header:m.Z,EditArray:V,LandingPage:y.Z},setup(){const e=(0,x.h)(),a=(0,Q.A)();return{tab:(0,u.iH)("home"),splitterModel:(0,u.iH)(20),sliders:e.sliders,monitStore:a}}};var H=t(2230),P=t(900),A=t(9800),C=t(4106),D=t(3246),T=t(1123),k=t(4458),I=t(3190);const U=(0,W.Z)(E,[["render",i]]),L=U;_()(E,"components",{QTabs:H.Z,QTab:P.Z,QTabPanels:A.Z,QTabPanel:C.Z,QList:D.Z,QExpansionItem:T.Z,QCard:k.Z,QCardSection:I.Z});const j=(0,n.aZ)({name:"IndexPage",components:{TabAdminWebsite:L},setup(){return{}}});var F=t(9885);const S=(0,W.Z)(j,[["render",d]]),z=S;_()(j,"components",{QPage:F.Z})}}]);