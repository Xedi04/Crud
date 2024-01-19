let id=new URLSearchParams(window.location.search).get("id");
let divAlll = document.querySelector(".c-all");
let Form = document.querySelector("#form");
let Name = document.querySelector("#name");
let Des = document.querySelector("#des");
let Price = document.querySelector("#price");
let Submit = document.querySelector("#submit");
let Table = document.querySelector("table");
let imgDiv = document.querySelector("#imgdiv");
let fileImg = document.querySelector("#file");
let Modal = document.querySelector(".modal");
let Close = document.querySelector("#Close");

fileImg.addEventListener("input", (e)=>{
    let file=e.target.files[0];
    if(file){
        let reader =new FileReader;
        reader.readAsDataURL(file);
        reader.onload=function(){
            imgDiv.src=reader.result
        }
    }
})

Form.addEventListener("submit", (e)=>{
e.preventDefault();
if(imgDiv.value !=="" && Des.value !==""  && Name.value !==""  && Price.value !==""){
    axios.post("http://localhost:3000/Crud", {
        name:Name.value,
        des:Des.value,
        price:Price.value,
        image:imgDiv.src
    }).then(res=>window.location="./index.html")
}else{
  Modal.style.display="flex"
  Close.addEventListener("click", ()=>{
    Modal.style.display="none"
  })
}
})




fetch("http://localhost:3000/Crud")
.then(res=>res.json())
.then(data=>{
    data.forEach(element => {
        Table.innerHTML+=`
        <tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.des}</td>
        <td>${element.price}</td>
        <td>  <button onclick="Delete (${element.id})">Delete</button></td>
      </tr>
        `
    });
})

function Delete (id){
    axios.delete("http://localhost:3000/Crud/"+id)
    .then(res=>window.location="./add.html")
}