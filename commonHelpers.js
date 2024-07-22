import"./assets/styles-f3635d75.js";import{S as p,i as y}from"./assets/vendor-8c59ed88.js";const d="45020443-554fa7ec416e1f918b290a17c",f="https://pixabay.com/api/";function S(e){const t=new URLSearchParams({key:d,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${f}?${t}`).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()}).catch(a=>console.log(a))}const s=document.querySelector(".form"),r=document.querySelector(".loader"),i=document.querySelector(".gallery"),$=new p(".gallery a",{captionsData:"alt",captionDelay:250});function b(){r.classList.remove("disabled")}function l(){r.classList.add("disabled")}s.addEventListener("submit",e=>{e.preventDefault();const t=e.target.search.value.trim();i.innerHTML="",b(),S(t).then(a=>{if(a.hits.length===0){y.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l();return}l(),i.innerHTML=a.hits.map(({webformatURL:o,largeImageURL:n,tags:c,likes:m,views:h,comments:g,downloads:u})=>`
          <li class="gallery-item">
            <a class="gallery-link" href="${n}">
              <img class="gallery-image" src="${o}" alt="${c}">
            </a>
            <ul class="image-info">
              <li>
                <h3 class="image-title">Likes</h3>
                <p class="image-stats">${m}</p>
              </li>
              <li>
                <h3 class="image-title">Views</h3>
                <p class="image-stats">${h}</p>
              </li>
              <li>
                <h3 class="image-title">Comments</h3>
                <p class="image-stats">${g}</p>
              </li>
              <li>
                <h3 class="image-title">Downloads</h3>
                <p class="image-stats">${u}</p>
              </li>
            </ul>
          </li>`).join(""),$.refresh()}),s.reset()});
//# sourceMappingURL=commonHelpers.js.map
