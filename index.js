let count=0;
let countEl=document.getElementById("count");
let saveEl=document.getElementById("save-el");

increment=()=>{
    count++;
    countEl.innerText=count;
}




save=()=>{
    let entries=count+ ' - ';
    saveEl.textContent+=entries; 
    count=0;
    countEl.innerText=count;
}