let btn = document.querySelector("button");
let h2 = document.querySelector("h2");
let img = document.querySelector("img");
let h3 = document.querySelector("h3");
let id = 0;

async function fetchData(){
    let response = await fetch("../json/food.json");
    let data =  await response.json();
    h2.innerText = data[id].name;
    h3.innerText = data[id].price;
    img.setAttribute("src",data[id].image);
    id = (id == 14) ? 0 : id + 1;
}

btn.addEventListener("click",fetchData);