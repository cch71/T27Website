import O from"./DocsAside.EUlgUsHl.js";import R from"./ProseCodeInline.asjJwDyI.js";import W from"./Alert.JAsCheMv.js";import Z from"./DocsPageBottom.S2zJIPfh.js";import G from"./DocsPrevNext.o0WBygAE.js";import{d as J,U as K,ai as Q,s as X,H as m,r as V,q as Y,o as ee,ak as oe,b as u,W as A,w as h,I as t,c as g,g as r,f as k,e as _,Z as te,j as x,t as ne,F as se,n as y,$ as ae,al as ce,p as le,i as re,l as ie}from"./entry.mKgyC713.js";import pe from"./DocsToc.2Ijt-_RI.js";import"./slot.wrt7xh9_.js";import"./node.V6KjywBy.js";import"./ProseA.Xu-2dEhV.js";import"./EditOnLink.vue.s1MzxYLu.js";import"./DocsTocLinks.ZoWYpaKK.js";const ue=d=>(le("data-v-73d798d2"),d=d(),re(),d),_e={class:"page-body"},de={key:1,class:"toc"},me={class:"toc-wrapper"},fe=ue(()=>_("span",{class:"title"},"Table of Contents",-1)),ve=J({__name:"DocsPageLayout",setup(d){const{page:s}=K(),{config:f,tree:T}=Q(),H=X(),j=(e,o=!0)=>{var n;return typeof((n=s.value)==null?void 0:n[e])<"u"?s.value[e]:o},S=m(()=>{var e,o,n;return!s.value||((n=(o=(e=s.value)==null?void 0:e.body)==null?void 0:o.children)==null?void 0:n.length)>0}),b=m(()=>{var e,o,n,c,l;return((e=s.value)==null?void 0:e.toc)!==!1&&((l=(c=(n=(o=s.value)==null?void 0:o.body)==null?void 0:n.toc)==null?void 0:c.links)==null?void 0:l.length)>=2}),C=m(()=>{var e,o,n,c,l;return((e=s.value)==null?void 0:e.aside)!==!1&&(((o=T.value)==null?void 0:o.length)>1||((l=(c=(n=T.value)==null?void 0:n[0])==null?void 0:c.children)==null?void 0:l.length))}),F=m(()=>j("bottom",!0)),i=V(!1),a=V(null),v=()=>H.path.split("/").slice(0,2).join("/"),p=Y("asideScroll",()=>{var e;return{parentPath:v(),scrollTop:((e=a.value)==null?void 0:e.scrollTop)||0}});function P(){a.value&&(a.value.scrollHeight===0&&setTimeout(P,0),a.value.scrollTop=p.value.scrollTop)}return ee(()=>{p.value.parentPath!==v()?(p.value.parentPath=v(),p.value.scrollTop=0):P()}),oe(()=>{a.value&&(p.value.scrollTop=a.value.scrollTop)}),(e,o)=>{var w,B,D,I,N,$;const n=O,c=R,l=W,M=Z,U=G,q=ae,z=pe,E=ce;return u(),A(E,{fluid:(B=(w=t(f))==null?void 0:w.main)==null?void 0:B.fluid,padded:(I=(D=t(f))==null?void 0:D.main)==null?void 0:I.padded,class:y(["docs-page-content",{fluid:($=(N=t(f))==null?void 0:N.main)==null?void 0:$.fluid,"has-toc":t(b),"has-aside":t(C)}])},{default:h(()=>[t(C)?(u(),g("aside",{key:0,ref_key:"asideNav",ref:a,class:"aside-nav"},[r(n,{class:"app-aside"})],512)):k("",!0),_("article",_e,[t(S)?te(e.$slots,"default",{key:0},void 0,!0):(u(),A(l,{key:1,type:"info"},{default:h(()=>[x(" Start writing in "),r(c,null,{default:h(()=>[x("content/"+ne(t(s)._file),1)]),_:1}),x(" to see this page taking shape. ")]),_:1})),t(S)&&t(s)&&t(F)?(u(),g(se,{key:2},[r(M),r(U)],64)):k("",!0)]),t(b)?(u(),g("div",de,[_("div",me,[_("button",{onClick:o[0]||(o[0]=L=>i.value=!t(i))},[fe,r(q,{name:"heroicons-outline:chevron-right",class:y(["icon",[t(i)&&"rotate"]])},null,8,["class"])]),_("div",{class:y(["docs-toc-wrapper",[t(i)&&"opened"]])},[r(z,{onMove:o[1]||(o[1]=L=>i.value=!1)})],2)])])):k("",!0)]),_:3},8,["fluid","padded","class"])}}}),De=ie(ve,[["__scopeId","data-v-73d798d2"]]);export{De as default};