let box=document.createElement("div")
box.setAttribute("class","bigbox")

let div1=document.createElement("div")
div1.setAttribute("class","parent")

let row=document.createElement("div") 
row.setAttribute("class","row")

let row1=document.createElement("i")
row1.setAttribute("class","i")
row1.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
<path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z fa-3px"/>
</svg>`

let row2=document.createElement("div")
row2.setAttribute("class","row2")
row2.innerHTML="YouTube "

let row3=document.createElement("div")
row3.setAttribute("class","row3")
let input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("class","form-control")
input.setAttribute("placeholder","Search");
input.style.width="520px"


let row4=document.createElement("div")
row4.setAttribute("class","row4")
let button=document.createElement("button")
button.setAttribute("type","button")
 button.classList.add("btn","btn-danger")
 button.innerHTML="Search"




 
let div23=document.createElement("div")
div23.setAttribute("class","main23")

let div2=document.createElement("div")
div2.setAttribute("class","main2")

let con=document.createElement("div")
con.setAttribute("class","fun")
let buttons=document.createElement("button")
buttons.setAttribute("type","button")
 buttons.classList.add("btn","btn-light")
 buttons.innerHTML="Information"
 buttons.addEventListener("click",foo)
  
 let Information=document.createElement("div")
 Information.setAttribute("id","Information")
//  div3.append(buttons)

let con1=document.createElement("div")
con1.setAttribute("class","fun1")
let buttons1=document.createElement("button")
buttons1.setAttribute("type","button")
 buttons1.classList.add("btn","btn-light")
 buttons1.innerHTML="Uploaded"

 buttons1.addEventListener("click",foo1)
  
 let Uploaded=document.createElement("div")
 Uploaded.setAttribute("id","Uploaded")
//  div3.append(buttons1)

let con2=document.createElement("div")
con2.setAttribute("class","fun2")
let buttons2=document.createElement("button")
buttons2.setAttribute("type","button")
 buttons2.classList.add("btn","btn-light")
 buttons2.innerHTML="Subscriptions"
 
 buttons2.addEventListener("click",foo2)
  
 let Subscriptions=document.createElement("div")
 Subscriptions.setAttribute("id","Subscriptions")
//  div3.append(buttons2)

let con3=document.createElement("div")
con3.setAttribute("class","fun3")
let buttons3=document.createElement("button")
buttons3.setAttribute("type","button")
 buttons3.classList.add("btn","btn-light")
 buttons3.innerHTML="Playlists"
 
 buttons3.addEventListener("click",foo3)
  
 let Playlists=document.createElement("div")
 Playlists.setAttribute("id","Playlists")
//  div3.append(buttons3)

let con4=document.createElement("div")
con4.setAttribute("class","fun4")
let buttons4=document.createElement("button")
buttons4.setAttribute("type","button")
 buttons4.classList.add("btn","btn-light")
 buttons4.innerHTML="Update"

 buttons4.addEventListener("click",foo4)
  
 let Update=document.createElement("div")
 Update.setAttribute("id","Update")
//  div3.append(buttons4)

let div3=document.createElement("div")
div3.setAttribute("class","main3")

con4.append(buttons4)
con3.append(buttons3)
con2.append(buttons2)
con1.append(buttons1)
con.append(buttons)
div2.append(con,con1,con2,con3,con4)
row4.append(button)
row3.append(input)
row.append(row1,row2,row3,row4)
div1.append(row)
div23.append(div2,div3)
box.append(div1,div23)
document.body.append(box)

async function foo(){
      let res=await fetch("https://youtube.googleapis.com/youtube/v3/channels?key=AIzaSyCtuvSRqQdKmeJwUgsedgXiwruWOaB1aX0")
      let res1=await res.json();
      console.log(res1)
     Information.innerHTML=`${res1}`;
}

async function foo1(){
    let res=await fetch("https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyC7siBTguxpSWXcxOQ8RVJte-zvvv1QV9Y")
    let res1=await res.json();
    console.log(res1.etag)
    Uploaded.innerHTML=`${res1}`;
}

async function foo2(){
    let res=await fetch("https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyC7siBTguxpSWXcxOQ8RVJte-zvvv1QV9Y")
    let res1=await res.json();
    console.log(res1.regionCode)
    Subscriptions.innerHTML=`${res1}`;
}

async function foo3(){
    let res=await fetch("https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyC7siBTguxpSWXcxOQ8RVJte-zvvv1QV9Y")
    let res1=await res.json();
    console.log(res1)
    
    console.log(res1.items)
    Playlists.innerHTML=`${res1}`;
}

async function foo4(){
    let res=await fetch("https://youtube.googleapis.com/youtube/v3/playlists?key=AIzaSyCtuvSRqQdKmeJwUgsedgXiwruWOaB1aX0")
    let res1=await res.json();
    console.log(res1)
    Update.innerHTML=`${res1}`;
}
