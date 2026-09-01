const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BH-7WAUK.js","assets/index-DwdO1xOW.js","assets/client-DBOQWKWh.js","assets/App-DmiLJOkZ.js","assets/jsx-runtime-u17CrQMm.js"])))=>i.map(i=>d[i]);
import{j as f}from"./jsx-runtime-u17CrQMm.js";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const y="modulepreload",L=function(t){return"/fio-prototipo/"+t},h={},p=function(c,l,i){let e=Promise.resolve();if(l&&l.length>0){let g=function(n){return Promise.all(n.map(d=>Promise.resolve(d).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),s=o?.nonce||o?.getAttribute("nonce");e=g(l.map(n=>{if(n=L(n),n in h)return;h[n]=!0;const d=n.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${u}`))return;const a=document.createElement("link");if(a.rel=d?"stylesheet":y,d||(a.as="script"),a.crossOrigin="",a.href=n,s&&a.setAttribute("nonce",s),document.head.appendChild(a),d)return new Promise((E,v)=>{a.addEventListener("load",E),a.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${n}`)))})}))}function r(o){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o}return e.then(o=>{for(const s of o||[])s.status==="rejected"&&r(s.reason);return c().catch(r)})},m=document.getElementById("root");m.innerHTML=`
  <div class="boot-screen">
    <strong>Fio</strong>
    <span>Carregando painel local...</span>
  </div>
`;window.addEventListener("error",t=>{m.innerHTML=`
    <div class="boot-error">
      <h1>Erro ao carregar o Fio</h1>
      <p>O navegador encontrou um erro antes de abrir o painel.</p>
      <pre>${t.message}</pre>
    </div>
  `});window.addEventListener("unhandledrejection",t=>{m.innerHTML=`
    <div class="boot-error">
      <h1>Erro ao carregar o Fio</h1>
      <p>Uma importacao ou promessa falhou durante o carregamento.</p>
      <pre>${String(t.reason?.message||t.reason)}</pre>
    </div>
  `});try{const t=await p(()=>import("./index-BH-7WAUK.js").then(i=>i.i),__vite__mapDeps([0,1])),{createRoot:c}=await p(async()=>{const{createRoot:i}=await import("./client-DBOQWKWh.js").then(e=>e.c);return{createRoot:i}},__vite__mapDeps([2,1])),{default:l}=await p(async()=>{const{default:i}=await import("./App-DmiLJOkZ.js");return{default:i}},__vite__mapDeps([3,4,0,1]));c(document.getElementById("root")).render(f.jsx(t.default.StrictMode,{children:f.jsx(l,{})}))}catch(t){document.getElementById("root").innerHTML=`
    <div class="boot-error">
      <h1>Erro ao carregar o painel</h1>
      <p>O Fio encontrou um problema ao iniciar.</p>
      <pre>${String(t?.message||t)}</pre>
    </div>
  `}
