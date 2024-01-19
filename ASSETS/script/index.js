let divAlll = document.querySelector(".c-all");
let Sort = document.querySelector("#sort")
let Search = document.querySelector("#search")
let filterArr = [];
let copyArr = [];

function ShowData() {
    fetch("http://localhost:3000/Crud")
        .then(res => res.json())
        .then(data => {
           divAlll.innerHTML=""
           copyArr=data;
           filterArr=filterArr.length ||Search.value ? filterArr:data;
        filterArr.forEach(element => {
                divAlll.innerHTML += `
        <div class="div3">
                    <div class="img">
                        <img src="${element.image}" alt="">
                    </div>
                    <div class="text">
                        <h3>${element.name}</h3>
                        <p>${element.des}</p>
                        <p>${element.price}$</p>
                        <button onclick="Fav(${element.id})">Fav</button>
                        <button onclick="Detal(${element.id})">Detal</button>
                        </div>
                </div>
        `
            });
        })
}
ShowData();







Search.addEventListener("input", (e)=>{
    filterArr=copyArr;
    filterArr=filterArr.filter((el)=>
    el.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    )
    ShowData()
})

Sort.addEventListener("change", (e)=>{
    if(e.target.value==="as"){
        filterArr.sort((a,b)=>a.price-b.price)
    }else if (e.target.value==="des"){
        filterArr.sort((a,b)=>b.price-a.price)
    }
    else{
        filterArr=[]
    }
    ShowData();
})


function Fav (id){
    axios.get("http://localhost:3000/Crud/"+id)
    .then(res=>{
        axios.post("http://localhost:3000/Fav", res.data)
        .then(res=>window.location="./fav.html")
    })
}

function Delete (id){
    axios.delete("http://localhost:3000/Crud/"+id)
    .then(res=>window.location="./index.html")
}

function Detal(id){
    window.location=`./detail.html?id=${id}`;
}