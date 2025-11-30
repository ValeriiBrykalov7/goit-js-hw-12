import{a as w,S,i}from"./assets/vendor-BkVuWn-o.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))p(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&p(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function p(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();async function f(s,e){try{return(await w.get("https://pixabay.com/api/",{params:{key:"53324223-e08795bb9ae8d90e4ba564674",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})).data}catch(a){console.log(a)}}const q=new S(".gallery a",{captionsData:"alt",captionDelay:250}),g=document.querySelector(".gallery"),h=document.querySelector(".loader"),d=document.querySelector(".load-button");function y(s){const e=s.map(a=>`<li class="gallery-item">
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
</li>`).join("");g.insertAdjacentHTML("beforeend",e),q.refresh()}function P(){g.textContent=""}function m(){h.classList.remove("hidden")}function u(){h.classList.add("hidden")}function B(){d.classList.remove("hidden")}function r(){d.classList.add("hidden")}const $=document.querySelector("form"),O=15;let l,n,L;$.addEventListener("submit",async s=>{if(s.preventDefault(),m(),r(),P(),l=s.target.elements.search.value,n=1,!l){r(),i.info({message:"Please enter value",position:"topRight",color:"yellow"}),u();return}try{const e=await f(l,n);if(e.hits.length===0){r(),i.error({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"});return}else y(e.hits),L=Math.ceil(e.totalHits/O),v()}catch(e){console.log(e)}finally{u()}b(),s.target.reset()});d.addEventListener("click",async()=>{r(),n+=1,m();try{const s=await f(l,n);y(s.hits),b(),v()}catch(s){console.log(s)}finally{u()}});function b(){n<L?B():(r(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"bottomRight"}))}function v(){const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
