(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const i=document.querySelector(".send-button"),u=document.querySelector(".button"),d=document.querySelector(".close-but"),l=document.querySelector(".container-modal-window");u.addEventListener("click",()=>{l.classList.add("is-open")});d.addEventListener("click",()=>{l.classList.remove("is-open")});i.addEventListener("click",s=>{s.preventDefault();const o=document.getElementById("user-name").value,r=document.getElementById("user-phone").value,n=document.getElementById("user-mail").value,e=document.getElementById("user-comment").value,t=document.getElementById("user-privacy").checked;o===""||r===""||n===""||e===""||!t?alert("Please fill in all the form fields."):document.querySelector(".modal-form").submit()});
//# sourceMappingURL=commonHelpers.js.map
