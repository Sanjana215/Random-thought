const url="https://catfact.ninja/fact";

let button=document.querySelector(".thought");
let para=document.querySelector(".para");


action=async()=> {
    let promise=await fetch(url);
    let res=await promise.json();
    para.innerText=res.fact;
}

button.addEventListener("click",action);



