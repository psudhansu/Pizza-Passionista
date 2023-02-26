
const url = "https://striped-telling-dryer.glitch.me/pizza"

let container = document.querySelector("#container")
let cartContainer = document.querySelector("#cart-container")
let priceContainer = document.querySelector("#price-container")
var orderData = JSON.parse(localStorage.getItem("cart")) || []


let totalArr = []


let Data = []

var totalPrice = 0

var length=0
displaydata3()





window.addEventListener("load", () => {
  fetchData(url)
  
  if (cartContainer.innerHTML == "") {

    displaydata2()
  }
  

  

})

function fetchData(params) {
  fetch(params)
    .then((res) => res.json())
    .then((aka) => {

      Data = aka.map((e, i) => {
        return {
          brand: e.brand,
          name: e.name,
          title: e.title,
          image: e.image,
          description: e.description,
          category: e.category,
          price: e.price,
          id: e.id

        }
      })
      displayData(Data)
      console.log(aka)
    })
    .catch((error) => {
      console.log(error)
    })
}

function displayData(data) {

  container.innerHTML = null;
  data.forEach((el, i) => {
    let card = document.createElement("div")
    card.setAttribute("class", "card")

    let image = document.createElement("img")
    image.setAttribute("src", el.image)
    image.setAttribute("id", "image")

    let price = document.createElement("p")
    price.textContent = el.price
    price.setAttribute("class", "price")



    let name = document.createElement("h2")
    name.textContent = el.name
    name.setAttribute("id", "name")

    let description = document.createElement("p")
    description.textContent = el.description
    description.setAttribute("id", "desc")




    var array = ["Regular", "Medium", "Large"];

    //Create and append select list
    let selectList = document.createElement("select");
    selectList.setAttribute("id", "selectList")
    selectList.addEventListener("select", function () {

    })



    //Create and append the options
    for (var i = 0; i < array.length; i++) {
      var option = document.createElement("option");
      option.value = array[i];
      option.text = array[i];
      selectList.append(option);
    }


    var array1 = ["New Hand Tossed", "100% Wheat Thin Crust", "Cheese Burst", "Fresh Pan Pizza"];

    //Create and append select list
    let List = document.createElement("select");
    List.setAttribute("id", "List")



    //Create and append the options
    for (var i = 0; i < array1.length; i++) {
      var option = document.createElement("option");
      option.value = array1[i];
      option.text = array1[i];
      List.append(option);
    }

    let btn = document.createElement("button")
    btn.textContent = "ADD TO CART"
    btn.setAttribute("id", "btn")
    
    btn.addEventListener("click", function () {

      

      let cartData = JSON.parse(localStorage.getItem("cart")) || []
      let isPresent = false
      for (let i = 0; i < cartData.length; i++) {
        if (cartData[i].id == el.id) {
          isPresent = true;

          break;
        }
      }
      if (isPresent == true) {
        // alert("Product already in the cart")
      } else {
        cartData.push(el)
        localStorage.setItem("cart", JSON.stringify(cartData))
        // alert("Product added to The cart")
        let orderData = JSON.parse(localStorage.getItem("cart")) || []
        displaydata(orderData)
        
        let totalArr = JSON.parse(localStorage.getItem("total")) || []
        totalArr.push(Number(el.price))
        var bag = 0
        for (let i = 0; i < totalArr.length; i++) {
          bag = bag + totalArr[i]
        }

        totalPrice = bag
        
        
        
        let done = localStorage.setItem("total", JSON.stringify(totalArr))

        length = orderData.length

        console.log(length)
       
    
       

      
displaydata3()






      }





    })







    card.append(image, price, name, description, selectList, List, btn)
    container.append(card)

  })

  
}







function displaydata(data) {


  cartContainer.innerHTML = null

  data.forEach((el, i) => {
    let cart = document.createElement("div")

    let img = document.createElement("img")
    img.setAttribute("src", el.image)
    img.setAttribute("id", "image")

    let prc = document.createElement("p")
    prc.textContent = el.price
    prc.setAttribute("class", "price")



    let nam = document.createElement("h2")
    nam.textContent = el.name
    nam.setAttribute("id", "name")

    let desc = document.createElement("p")
    desc.textContent = el.description
    desc.setAttribute("id", "desc")

    
    





    let count = document.createElement("span")
    count.textContent = Number(1)

    let plus = document.createElement("button")
    plus.textContent = "+"
    plus.addEventListener("click",function(){
      count.textContent = Number(count.textContent) + Number(1)
      
    })
    
    let minus = document.createElement("button")
      minus.textContent = "-"
    minus.addEventListener("click",function(){
      count.textContent -= Number(1)

      if(count.textContent<1){
        orderData.splice(i,1)
        
        localStorage.setItem("cart", JSON.stringify(orderData))
        window.location.reload()
        
        console.log('done')
      }
      

    })
    





    cart.append(img, prc, nam, desc,minus ,count,plus)
    cartContainer.append(cart)





  })
}

displaydata(orderData)

function displaydata2() {

  let cartImg = document.createElement("img")

  cartImg.setAttribute("src", "https://png.pngtree.com/png-vector/20220629/ourmid/pngtree-empty-shopping-cart-store-icon-png-image_5624129.png")
  cartImg.setAttribute("class", "cartImg")

  let empty = document.createElement("h2")
  empty.textContent = "YOUR CART IS EMPTY"
  empty.setAttribute("class", "empty")

  let addCart = document.createElement("p")
  addCart.textContent = "Please add some items from the menu."
  addCart.setAttribute("class", "addCart")

  cartContainer.append(cartImg, empty, addCart)
}


function displaydata3() {
  
  priceContainer.innerHTML = null
  let total = document.createElement("div")
  let totalP = document.createElement("h2")
  totalP.textContent = `Subtotal‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ${totalPrice}.00`
  totalP.setAttribute("class", "totalP")
  let button = document.createElement("button")
  button.textContent = "CHECKOUT"
  button.setAttribute("class", "button")

  total.append(totalP, button)

  priceContainer.append(total)








}
