import{d as C,m as g,ab as v,aB as D,s as w,M as o,V as d}from"./entry.iq1QiD0e.js";import _ from"./ContentRenderer.pC-AXc5V.js";import S from"./ContentQuery.86CqglbQ.js";import"./ContentRendererMarkdown.vue.YfK2wZkD.js";import"./query.Cp9VYWyC.js";const q=C({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:void 0}},render(f){const{contentHead:c}=g().public.content,e=v(),{tag:m,excerpt:i,path:s,query:a,head:r}=f,u=r===void 0?c:r,l={...a||{},path:s||(a==null?void 0:a.path)||D(w().path),find:"one"},h=(t,n)=>o("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:t,data:n},null,2));return o(S,l,{default:e!=null&&e.default?({data:t,refresh:n,isPartial:y})=>{var p;return u&&d(t),(p=e.default)==null?void 0:p.call(e,{doc:t,refresh:n,isPartial:y,excerpt:i,...this.$attrs})}:({data:t})=>(u&&d(t),o(_,{value:t,excerpt:i,tag:m,...this.$attrs},{empty:n=>e!=null&&e.empty?e.empty(n):h("default",t)})),empty:t=>{var n;return((n=e==null?void 0:e.empty)==null?void 0:n.call(e,t))||o("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":t=>{var n;return((n=e==null?void 0:e["not-found"])==null?void 0:n.call(e,t))||o("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),j=q;export{j as default};
