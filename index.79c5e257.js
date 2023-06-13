const e=document.getElementById("search-form"),t=document.querySelector(".input"),n=document.getElementById("gallery"),o=document.getElementById("loader"),a=document.querySelector(".notitle"),l="e7c806d7ce9bbdf1ef93bebcabbfe0f1";let c={};async function s(e){try{o.style.display="flex";const t=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${l}&language=en-US&query=${e}&page=1&include_adult=false`),s=(await t.json()).results;i(),function(e){n.innerHTML="";const t=e.map((e=>{const{id:t,poster_path:n,title:o,release_date:a,genre_ids:l}=e;if(!a||!n||0===l.length)return"";const s=`https://image.tmdb.org/t/p/w500/${n}`,i=new Date(a).getFullYear();return`\n  <a class="gallery__link">\n  <div class="gallery__item" id="${t}">\n    <img class="gallery__item-img" src="${s}" loading="lazy" />\n    <h4 class="gallery__item-header">${o}</h4>\n    <span class="gallery__item-info">${l.map((e=>c[e])).slice(0,2).join(", ")}</span>\n    <span class="gallery__item-info">${i}</span>\n  </div>\n</a>\n  `})).join("");n.insertAdjacentHTML("beforeend",t)}(s),0===s.length?(i(),r()):a.style.display="none"}catch(e){console.log(e.toString()),i(),r()}}function i(){o.style.display="none"}function r(){a.innerText="Search result not successful. Enter the correct movie name.",a.style.display="block"}i(),e.addEventListener("submit",(e=>{e.preventDefault();s(t.value),t.value=""})),async function(){try{const e=await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${l}&language=en-US`),t=(await e.json()).genres;for(const e of t)c[e.id]=e.name}catch(e){console.log(e.toString())}}();const d="e7c806d7ce9bbdf1ef93bebcabbfe0f1",u=document.querySelector(".gallery");!async function(){try{const e=await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${d}`),t=await e.json(),n=await async function(){try{const e=await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${d}`),t=await e.json();return t.genres}catch(e){console.log(e)}}();(function(e,t){const n=e.sort(((e,t)=>t.popularity-e.popularity)).map((e=>{const{poster_path:n,id:o,title:a,release_date:l,genre_ids:c}=e,s=new Date(l).getFullYear();return`\n          <a class="gallery__link">\n            <div class="gallery__item" id="${o}">\n              <img class="gallery__item-img" src="https://image.tmdb.org/t/p/w500/${n}"/>\n              <h4 class="gallery__item-header">${a}</h4>\n              <span class="gallery__item-info">${t.filter((e=>c.includes(e.id))).map((e=>e.name)).join(", ")}</span>\n              \n              <span class="gallery__item-info">${s}</span>\n              \n            </div>\n          </a>\n        `})).join("");u.insertAdjacentHTML("afterbegin",n)})(t.results,n)}catch(e){console.log(e)}}();const m=document.querySelector(".btnUp");m.style.display="none",window.onscroll=function(){!function(){document.documentElement.scrollTop>200?m.style.display="block":m.style.display="none";m.addEventListener("click",(()=>{document.documentElement.scrollTop=0}))}()};const g=document.querySelector(".toggle-icon-sun"),y=document.querySelector(".day-night-switch");function p(){document.body.classList.add("dark__theme"),g.classList.remove("toggle-icon-sun"),g.classList.add("toggle-icon-moon")}function _(){document.body.classList.remove("dark__theme"),g.classList.remove("toggle-icon-moon"),g.classList.add("toggle-icon-sun")}null===localStorage.getItem("darkMode")&&localStorage.setItem("darkMode","false"),"true"===localStorage.getItem("darkMode")?(p(),y.checked=!0):(_(),y.checked=!1),y.addEventListener("change",(()=>{y.checked?p():_(),localStorage.setItem("darkMode",y.checked)}));const h=document.querySelector(".backdrop"),f=document.querySelector(".modal__btnClose"),b=document.querySelector(".modal__btnWatched"),v=document.querySelector(".modal__btnQueue"),S=document.querySelector(".modal__moviePoster"),k=document.querySelector(".modal__title"),w=document.querySelector(".modal__about"),$=document.querySelector(".modal__genre"),q=document.querySelector(".modal__votes"),L=document.querySelector(".modal__popularity"),E=document.querySelector(".modal__originalTitle");let j,I=[],x=[];async function C(e){try{const t=await fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=e7c806d7ce9bbdf1ef93bebcabbfe0f1`);return await t.json()}catch(e){console.log(e)}}function M(){h.classList.toggle("is-hidden")}gallery.addEventListener("click",(function(e){e.target.matches("img")&&(j=e.target.parentNode.id,C(j).then((e=>{S.setAttribute("src",`https://image.tmdb.org/t/p/w500/${e.poster_path}`),k.textContent=e.title,q.textContent=`${e.vote_average}/ ${e.vote_count}`,L.textContent=e.popularity,E.textContent=e.original_title,w.textContent=e.overview,$.textContent=e.genres[0].name,console.log(e)})),M())})),f.addEventListener("click",M),b.addEventListener("click",(function(){C(j).then((e=>{x.push(e),localStorage.setItem("watched-films",JSON.stringify(x))}))})),v.addEventListener("click",(function(){C(j).then((e=>{I.push(e),localStorage.setItem("queued-films",JSON.stringify(I))}))}));
//# sourceMappingURL=index.79c5e257.js.map
