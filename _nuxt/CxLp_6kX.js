import{d as f,r as k,o as g,c as m,O as b,k as i,X as y,V as s,e as c,Y as x,w as d,Z as u,g as S,H as _,$ as C}from"./BKhW9TKa.js";import{u as T}from"./B1qWPdU4.js";const $=Symbol.for("nuxt:client-only"),v=f({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(r,{slots:e,attrs:t}){const a=k(!1);return g(()=>{a.value=!0}),b($,!0),o=>{var p;if(a.value)return(p=e.default)==null?void 0:p.call(e);const n=e.fallback||e.placeholder;if(n)return n();const l=o.fallback||o.placeholder||"",h=o.fallbackTag||o.placeholderTag||"span";return m(h,t,l)}}}),O={name:y,props:{placeholder:String,tag:{type:String,default:"span"}}};function M(r,e,t,a,o,n){const l=v;return c(),s(l,{placeholder:t.placeholder,"placeholder-tag":t.tag},x({default:d(()=>[u(r.$slots,"default")]),_:2},[t.placeholder?void 0:{name:"fallback",fn:d(()=>[u(r.$slots,"placeholder")]),key:"0"}]),1032,["placeholder","placeholder-tag"])}const B=i(O,[["render",M]]),w=f({__name:"ThemeSelect",setup(r){const e=T(),t=()=>{const a=["system","light","dark"],n=(a.indexOf(e.preference)+1)%a.length;e.preference=a[n]};return(a,o)=>{const n=C,l=B;return c(),m("button",{"aria-label":"Color Mode",onClick:t},[S(l,{placeholder:"..."},{default:d(()=>[_(e).preference==="dark"?(c(),s(n,{key:0,name:"uil:moon"})):_(e).preference==="light"?(c(),s(n,{key:1,name:"uil:sun"})):(c(),s(n,{key:2,name:"uil:desktop"}))]),_:1})])}}}),V=i(w,[["__scopeId","data-v-87324333"]]);export{V as default};
