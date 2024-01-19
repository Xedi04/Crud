let id=new URLSearchParams(window.location.search).get ("id");

let divAlll = document.querySelector(".c-all");

fetch(`http://localhost:3000/Crud/${id}`)
.then(res=>res.json())
.then(data=>{
        divAlll.innerHTML+=`
        <div class="div3">
        <div class="img">
            <img src="${data.image}" alt="">
        </div>
        <div class="text">
            <h3>${data.name}</h3>
            <p>${data.des}</p>
            <p>${data.price}$</p>
        </div>
    </div>
        `

})
