import{c,a as s,h as l,d as u,i,e as a,l as p,f,g as y}from"./index.6cc5e6e2.js";var m=c({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(t,{slots:r}){const n=s(()=>`q-card__section q-card__section--${t.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>l(t.tag,{class:n.value},u(r.default))}}),Q=c({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(t,{slots:r}){const{proxy:{$q:n}}=y(),e=i(p,a);if(e===a)return console.error("QPage needs to be a deep child of QLayout"),a;if(i(f,a)===a)return console.error("QPage needs to be child of QPageContainer"),a;const d=s(()=>{const o=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof t.styleFn=="function"){const h=e.isContainer.value===!0?e.containerHeight.value:n.screen.height;return t.styleFn(o,h)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-o+"px":n.screen.height===0?o!==0?`calc(100vh - ${o}px)`:"100vh":n.screen.height-o+"px"}}),g=s(()=>`q-page${t.padding===!0?" q-layout-padding":""}`);return()=>l("main",{class:g.value,style:d.value},u(r.default))}});export{Q,m as a};
