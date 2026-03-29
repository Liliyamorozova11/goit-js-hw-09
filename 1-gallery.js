import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as a}from"./assets/vendor-D0gBiHs0.js";const i=[{preview:"https://cdn.pixabay.com/photo/2019/06/19/18/18/chef-4285077_1280.jpg",original:"https://cdn.pixabay.com/photo/2019/06/19/18/18/chef-4285077_1280.jpg",description:"Chef preparing food in the kitchen"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/15/07/apple-1834639_1280.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/15/07/apple-1834639_1280.jpg",description:"Fresh apples on the table"},{preview:"https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_1280.jpg",original:"https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_1280.jpg",description:"Beautiful food platter"},{preview:"https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg",original:"https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg",description:"Burger with fries"},{preview:"https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",original:"https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",description:"Hot pizza on wooden board"},{preview:"https://cdn.pixabay.com/photo/2016/11/29/09/08/coffee-1869598_1280.jpg",original:"https://cdn.pixabay.com/photo/2016/11/29/09/08/coffee-1869598_1280.jpg",description:"Cup of coffee and dessert"}],e=document.querySelector(".gallery"),r=i.map(({preview:p,original:o,description:t})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${o}">
          <img
            class="gallery-image"
            src="${p}"
            alt="${t}"
          />
        </a>
      </li>
    `).join("");e.innerHTML=r;new a(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});
//# sourceMappingURL=1-gallery.js.map
