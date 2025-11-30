import{a as v,S as w,i as n}from"./assets/vendor-BkVuWn-o.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))p(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&p(u)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function p(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();async function f(s,e){try{return(await v.get("https://pixabay.com/api/",{params:{key:"53324223-e08795bb9ae8d90e4ba564674",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})).data}catch(a){console.log(a)}}const S=new w(".gallery a",{captionsData:"alt",captionDelay:250}),g=document.querySelector(".gallery"),h=document.querySelector(".loader"),d=document.querySelector(".load-button");function m(s){const e=s.map(a=>`<li class="gallery-item">
    <a href="${a.largeImageURL}" class="gallery-link"><img src="${a.webformatURL}" alt="${a.tags}" class="card-image"></a>
    
      <ul class="stats">
        <li class="stat">
          <span class="stat-label">Likes</span>
          <span class="stat-value">${a.likes}</span>
        </li>
        <li class="stat">
          <span class="stat-label">Views</span>
          <span class="stat-value">${a.views}</span>
        </li>
        <li class="stat">
          <span class="stat-label">Comments</span>
          <span class="stat-value">${a.comments}</span>
        </li>
        <li class="stat">
          <span class="stat-label">Downloads</span>
          <span class="stat-value">${a.downloads}</span>
        </li>
      </ul>
</li>`).join("");g.insertAdjacentHTML("beforeend",e),S.refresh()}function q(){g.textContent=""}function y(){h.classList.remove("hidden")}function L(){h.classList.add("hidden")}function P(){d.classList.remove("hidden")}function i(){d.classList.add("hidden")}const R=document.querySelector("form"),B=15;let l,o,c;R.addEventListener("submit",async s=>{if(s.preventDefault(),q(),i(),l=s.target.elements.search.value.trim(),o=1,c=0,!l){n.info({message:"Please enter a query",position:"topRight",color:"yellow"});return}y();try{const e=await f(l,o);if(e.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"});return}else m(e.hits),c=Math.ceil(e.totalHits/B),b()}catch(e){n.error({message:e.message,position:"topRight"})}finally{L()}});d.addEventListener("click",async()=>{if(o>=c){i();return}o+=1,y(),i();try{const s=await f(l,o);m(s.hits),b(),$()}catch(s){n.error({message:s.message,position:"topRight"})}finally{L()}});function b(){o<c?P():(i(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"bottomRight"}))}function $(){const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
