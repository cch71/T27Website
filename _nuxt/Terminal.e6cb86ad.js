import{u as m}from"./index.be6b7d2c.js";import{d as v,r as h,K as y,b as s,c as o,L as i,f as p,e,F as f,ai as k,p as C,i as b,t as g,k as x}from"./entry.fa2ca939.js";const c=t=>(C("data-v-63eb7158"),t=t(),b(),t),S={key:0,class:"copied"},w=c(()=>e("div",{class:"scrim"},null,-1)),B=c(()=>e("div",{class:"content"}," Copied! ",-1)),I=[w,B],T=c(()=>e("div",{class:"header"},[e("div",{class:"controls"},[e("div"),e("div"),e("div")]),e("div",{class:"title"}," Bash ")],-1)),F={class:"window"},L=c(()=>e("span",{class:"sign"},"$",-1)),N={class:"content"},V={key:1,class:"prompt"},j=v({__name:"Terminal",props:{content:{type:[Array,String],required:!0}},setup(t){const a=t,{copy:_}=m(),n=h("init"),r=y(()=>typeof a.content=="string"?[a.content]:a.content),l=u=>{_(r.value.join(`
`)).then(()=>{n.value="copied",setTimeout(()=>{n.value="init"},1e3)}).catch(()=>{console.warn("Couldn't copy to clipboard!")})};return(u,q)=>(s(),o("div",{class:"terminal",onClick:l},[i(n)==="copied"?(s(),o("div",S,I)):p("",!0),T,e("div",F,[(s(!0),o(f,null,k(i(r),d=>(s(),o("span",{key:d,class:"line"},[L,e("span",N,g(d),1)]))),128))]),i(n)!=="copied"?(s(),o("div",V," Click to copy ")):p("",!0)]))}});const E=x(j,[["__scopeId","data-v-63eb7158"]]);export{E as default};