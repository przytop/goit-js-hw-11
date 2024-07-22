import"./assets/styles-f3635d75.js";import{S as y,i}from"./assets/vendor-8c59ed88.js";const f="45020443-554fa7ec416e1f918b290a17c",d="https://pixabay.com/api/";function S(a){const t=new URLSearchParams({key:f,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${d}?${t}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).catch(e=>console.log(e))}const s=document.querySelector(".form"),o=document.querySelector(".loader"),l=document.querySelector(".gallery"),$=new y(".gallery a",{captionsData:"alt",captionDelay:250});function b(){o.classList.remove("disabled")}function r(){o.classList.add("disabled")}s.addEventListener("submit",a=>{a.preventDefault();const t=a.target.search.value.trim();if(t===""){i.warning({message:"Complete the field correctly",position:"topRight"});return}l.innerHTML="",b(),S(t).then(e=>{if(e.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),r();return}r(),l.innerHTML=e.hits.map(({webformatURL:n,largeImageURL:c,tags:m,likes:h,views:g,comments:u,downloads:p})=>`
          <li class="gallery-item">
            <a class="gallery-link" href="${c}">
              <img class="gallery-image" src="${n}" alt="${m}">
            </a>
            <ul class="image-info">
              <li>
                <h3 class="image-title">Likes</h3>
                <p class="image-stats">${h}</p>
              </li>
              <li>
                <h3 class="image-title">Views</h3>
                <p class="image-stats">${g}</p>
              </li>
              <li>
                <h3 class="image-title">Comments</h3>
                <p class="image-stats">${u}</p>
              </li>
              <li>
                <h3 class="image-title">Downloads</h3>
                <p class="image-stats">${p}</p>
              </li>
            </ul>
          </li>`).join(""),$.refresh()}),s.reset()});
//# sourceMappingURL=commonHelpers.js.map
