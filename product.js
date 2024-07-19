//selecting side navbar, menu

var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var closenav=document.getElementById("close-nav")

menuicon.addEventListener("click",function(){
  sidenav.style.right=0
})

closenav.addEventListener("click",function(){
  sidenav.style.right= "-50%"
})


//Enabling search

var search=document.getElementById("search")
var productContainer=document.getElementById("product-container")
var productlist=productContainer.querySelectorAll("div")

search.addEventListener("keyup", function(){
  var enteredValue= event.target.value
  var val=enteredValue.toUpperCase()

  for(count=0;count<productlist.length;count=count+1){

    var productName= productlist[count].querySelector("h1").textContent
    if(productName.toUpperCase().indexOf(val)<0){
      productlist[count].style.display="none"
    }
    else{
      productlist[count].style.display="block"
    }
  }
})