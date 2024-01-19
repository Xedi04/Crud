let id=new URLSearchParams(window.location.search).get("id");
let divAlll = document.querySelector(".c-all");

fetch("http://localhost:3000/Fav")
.then(res=>res.json())
.then(data=>{
    data.forEach(element => {
        divAlll.innerHTML+=`
        <div class="div3">
        <div class="img">
            <img src="./ASSETS/image/services1 (1).svg" alt="">
        </div>
        <div class="text">
            <h3>${element.name}</h3>
            <p>${element.des}</p>
            <p>${element.price}$</p>
            <button onclick="Delete(${element.id})">Delete</button>
        </div>
    </div>
        `
    });
})

function Delete (id){
    axios.delete("http://localhost:3000/Fav/"+id)
    .then(res=>window.location="./fav.html")
}