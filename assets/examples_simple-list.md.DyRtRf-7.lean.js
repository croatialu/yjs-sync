import{u as g,c as I,_ as S}from"./chunks/webrtc.C5wBx066.js";import{d as k,j as C,o as l,c as a,a as v,t as c,m as i,l as t,a3 as w,a4 as N,F as m,E as _,p as O,q as j,_ as D,D as V,I as d,w as f}from"./chunks/framework.DMzS6LXT.js";const B=n=>(O("data-v-1635911d"),n=n(),j(),n),L={class:"list-container"},P=["value","onInput"],$=B(()=>t("br",null,null,-1)),A=k({__name:"index",setup(n){g("counter-example-yjs-vue-simple-list",{signaling:["wss://yjs-server.cccboy.com"]});const[o,u]=I("state"),s=C("");return(M,r)=>(l(),a("div",null,[v(c(JSON.stringify(i(o)))+" ",1),t("div",null,[w(t("input",{"onUpdate:modelValue":r[0]||(r[0]=e=>s.value=e),placeholder:"please enter"},null,512),[[N,s.value]]),t("button",{onClick:r[1]||(r[1]=()=>{i(u)(e=>{e.push({name:s.value,id:Math.random().toString()})}),s.value=""})}," Add ")]),t("div",L,[t("ul",null,[(l(!0),a(m,null,_(i(o),e=>(l(),a("li",{key:e.id},[t("input",{value:e.name,style:{border:"1px solid black"},onInput:h=>{i(u)(x=>{const y=h.target,p=x.find(b=>b.id===e.id);p&&(p.name=y.value)})}},null,40,P)]))),128))]),$,t("ul",null,[(l(!0),a(m,null,_(i(o),e=>(l(),a("li",{key:e.id},c(e.name),1))),128))])])]))}}),E=D(A,[["__scopeId","data-v-1635911d"]]),F=t("h1",{id:"simple-list",tabindex:"-1"},[v("simple list "),t("a",{class:"header-anchor",href:"#simple-list","aria-label":'Permalink to "simple list"'},"​")],-1),R=JSON.parse('{"title":"simple list","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"examples/simple-list.md","filePath":"examples/simple-list.md"}'),J={name:"examples/simple-list.md"},U=Object.assign(J,{setup(n){return(o,u)=>{const s=V("ClientOnly");return l(),a("div",null,[F,d(s,null,{default:f(()=>[d(S,null,{default:f(()=>[d(E)]),_:1})]),_:1})])}}});export{R as __pageData,U as default};