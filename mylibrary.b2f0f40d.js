var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},t={},i=e.parcelRequire7475;null==i&&((i=function(e){if(e in a)return a[e].exports;if(e in t){var i=t[e];delete t[e];var s={id:e,exports:{}};return a[e]=s,i.call(s.exports,s,s.exports),s.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,a){t[e]=a},e.parcelRequire7475=i),i("2794w");const s=document.querySelector(".myLibrary--watched"),n=document.querySelector(".myLibrary--queue"),l=document.querySelector(".watched"),r=document.querySelector(".queue"),d=document.querySelector(".header_library");let o;function c(){if(s.innerHTML="",s.classList.remove("is-hidden"),n.classList.add("is-hidden"),r.classList.remove("aktiv"),l.classList.add("aktiv"),localStorage.getItem("watched-films")){o=localStorage.getItem("watched-films");const e=JSON.parse(o).map((e=>`<a class="gallery__link">\n        <div class="gallery__item" id="${e.id}">\n          <img class="gallery__item-img" src="https://image.tmdb.org/t/p/w500/${e.poster_path}" />\n          <h4 class="gallery__item-header">${e.title}</h4>\n          <span class="gallery__item-info">${e.genres.map((e=>`${e.name}`)).join(", ")}</span>\n          <span class="gallery__item-info">${e.release_date.substring(0,4)}</span>\n        </div>\n      </a>`)).join("");s.insertAdjacentHTML("afterbegin",e)}}l.addEventListener("click",c),d.addEventListener("click",c),r.addEventListener("click",(function(){if(n.innerHTML="",s.classList.add("is-hidden"),n.classList.remove("is-hidden"),l.classList.remove("aktiv"),r.classList.add("aktiv"),localStorage.getItem("queued-films")){o=localStorage.getItem("queued-films");const e=JSON.parse(o).map((e=>`<a class="gallery__link">\n    <div class="gallery__item" id="${e.id}">\n      <img class="gallery__item-img" src="https://image.tmdb.org/t/p/w500/${e.poster_path}" />\n      <h4 class="gallery__item-header">${e.title}</h4>\n      <span class="gallery__item-info">${e.genres.map((e=>`${e.name}`)).join(", ")}</span>\n      <span class="gallery__item-info">${e.release_date.substring(0,4)}</span>\n    </div>\n  </a>`)).join("");n.insertAdjacentHTML("afterbegin",e)}})),window.addEventListener("load",c),i("h2L8D"),i("dDcbB");
//# sourceMappingURL=mylibrary.b2f0f40d.js.map