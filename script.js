// displaying task name 
var title=document.createElement("h1");
title.innerText="ISRO-Customer_satellites"
// creating an container 
var container=document.createElement("div");
container.setAttribute("class","container");
// creating an row
var row=document.createElement("div");
row.setAttribute("class","row");
// appending row into container and container into document
container.append(row);
document.body.append(title,container);
// fetch api
async function foo(){
    let res=await fetch("https://isro.vercel.app/api/customer_satellites");
    res=await res.json();
    return fun(res.customer_satellites)
}
function fun(res){
 for(var i in res){
// Adding an col and card in row
    row.innerHTML+=`
    <div class="col-md-4 col-sm-6">
    <div class="card">
    <div class="card-header bg-secondary text-white">Country: ${res[i].country}</div>
    <div class="list-group">
    <li class="list-group-item">ID: ${res[i].id}</li>
    <li class="list-group-item">Launch Date: ${res[i].launch_date}</li>
    <li class="list-group-item">Mass: ${res[i].mass}</li>
    <li class="list-group-item">Launcher: ${res[i].launcher}</li>
  </div>
</div>
    </div>
    `
 }
}
foo()





