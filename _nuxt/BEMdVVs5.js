import{d as w,x as i,G as o,af as p,a1 as v}from"./B-UNK_D0.js";const S=w({props:{baseUrl:{type:String,default:()=>{var e,t,r;return((r=(t=(e=i())==null?void 0:e.docus)==null?void 0:t.github)==null?void 0:r.baseUrl)||"https://github.com"},required:!1},owner:{type:String,default:()=>{var e,t,r;return(r=(t=(e=i())==null?void 0:e.docus)==null?void 0:t.github)==null?void 0:r.owner},required:!1},repo:{type:String,default:()=>{var e,t,r;return(r=(t=(e=i())==null?void 0:e.docus)==null?void 0:t.github)==null?void 0:r.repo},required:!1},branch:{type:String,default:()=>{var e,t,r;return(r=(t=(e=i())==null?void 0:e.docus)==null?void 0:t.github)==null?void 0:r.branch},required:!1},dir:{type:String,default:()=>{var e,t,r;return(r=(t=(e=i())==null?void 0:e.docus)==null?void 0:t.github)==null?void 0:r.dir},required:!1},source:{type:String,required:!1,default:void 0},page:{type:Object,required:!1,default:void 0},contentDir:{type:String,required:!1,default:()=>{var e,t,r;return((r=(t=(e=i())==null?void 0:e.docus)==null?void 0:t.github)==null?void 0:r.dir)||"content"}},edit:{type:Boolean,required:!1,default:()=>{var e,t,r;return(r=(t=(e=i())==null?void 0:e.docus)==null?void 0:t.github)==null?void 0:r.edit}}},setup(e){if(!e.owner||!e.repo||!e.branch)throw new Error("If you want to use `GithubLink` component, you must specify: `owner`, `repo` and `branch`.");const t=o(()=>{var h,b;let{baseUrl:n,repo:a,owner:c,branch:l,contentDir:f}=e,s="";if((b=(h=i())==null?void 0:h.public)!=null&&b.content){let u;const{sources:g}=i().public.content;for(const y in g||[])if(e.page._id.startsWith(y)){u=g[y];break}(u==null?void 0:u.driver)==="github"&&(a=u.repo||e.repo||"",c=u.owner||e.owner||"",l=u.branch||e.branch||"main",f=u.dir||e.contentDir||"",s=u.prefix||"")}return{baseUrl:n,repo:a,owner:c,branch:l,contentDir:f,prefix:s}}),r=o(()=>p(`${t.value.baseUrl}/${t.value.owner}/${t.value.repo}`)),d=o(()=>{var a;const n=[];return(a=e==null?void 0:e.page)!=null&&a._path?(t.value.contentDir&&n.push(t.value.contentDir),n.push(e.page._file.substring(t.value.prefix.length)),n):(e.dir&&n.push(e.dir),e.source&&n.push(e.source),n)});return{url:o(()=>{var a;const n=[r.value];return e.edit?n.push("edit"):n.push("tree"),n.push(((a=t==null?void 0:t.value)==null?void 0:a.branch)||"",...d.value),n.filter(Boolean).join("/")})}},render(e){var d;const{url:t}=e,r=v();return(d=r==null?void 0:r.default)==null?void 0:d.call(r,{url:t})}});export{S as _};
