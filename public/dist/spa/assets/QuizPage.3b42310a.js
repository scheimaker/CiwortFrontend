import{a as T,b as g}from"./words.fac39540.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";import{r as s,o as b,m as p,t as _,x as r,u as d,a2 as k,a0 as w}from"./index.6cc5e6e2.js";import"./utils.67f5346b.js";import"./index-68602d24.94131bdb.js";const C={class:"game-container"},M={class:"pinyin-display"},P={class:"mole-container"},z=["onClick"],B={class:"score-display"},F={__name:"QuizPage",setup(N){var i=[];const l=s([]),c=s(""),u=s(""),y=s(0),t=s("pinyinToText"),m=async()=>{try{const e=await T();console.log(e),e?(i=e,v(i)):console.error("Failed to fetch words or no words available.")}catch(e){console.error("Error fetching words:",e)}},v=e=>{if(!e||e.length===0){console.error("No words available to start a new round.");return}const n=Math.floor(Math.random()*e.length),o=e[n];if(!o){console.error("Correct word is undefined.");return}t.value==="pinyinToText"?(c.value=o.pinyin,u.value=""):(u.value=o.text,c.value=""),l.value=g(e,o,6)},f=()=>{t.value=t.value==="pinyinToText"?"textToPinyin":"pinyinToText",v(i)},x=e=>{let n=!1;if(t.value==="pinyinToText"){const o=l.value.find(a=>a.pinyin===c.value);n=e.text===o.text}else{const o=l.value.find(a=>a.text===u.value);n=e.pinyin===o.pinyin}n?(y.value+=1,v(i)):alert("\u9009\u62E9\u9519\u8BEF\uFF0C\u7EE7\u7EED\u52A0\u6CB9\uFF01")};return b(m),(e,n)=>(p(),_("div",C,[n[0]||(n[0]=r("br",null,null,-1)),r("button",{class:"mode-toggle",onClick:f},d(t.value==="pinyinToText"?"\u5207\u6362\u5230\u9009\u62E9\u62FC\u97F3":"\u5207\u6362\u5230\u9009\u62E9\u6587\u672C"),1),r("div",M,[r("h2",null,d(t.value==="pinyinToText"?c.value:u.value),1)]),r("div",P,[(p(!0),_(k,null,w(l.value,(o,a)=>(p(),_("button",{key:a,class:"mole",onClick:Q=>x(o)},d(t.value==="pinyinToText"?o.text:o.pinyin),9,z))),128))]),r("div",B,[r("p",null,"\u5F97\u5206: "+d(y.value),1)])]))}};var G=h(F,[["__scopeId","data-v-214c943b"]]);export{G as default};
