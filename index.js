const url = "https://striped-telling-dryer.glitch.me/pizza"

let container = document.querySelector("#container")

let Data = []

window.addEventListener("load",()=>{
    fetchData(url)
  })

  function fetchData(params){
    fetch(params)
    .then((res)=>res.json())
    .then((aka)=>{

    Data = aka.map((e,i)=>{
      return {
        brand:e.brand,
        name:e.name,
        title:e.title,
        image:e.image,
        description:e.description,
        category:e.category,
        price:e.price,
        id:e.id

      }
    })
    displayData(Data)
    console.log(aka)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  function displayData(data){
        
    container.innerHTML = null;
      data.forEach((el,i)=>{
        let card = document.createElement("div")
        card.setAttribute("class","card")

        let image = document.createElement("img")
        image.setAttribute("src",el.image)
        image.setAttribute("id","image")

        let price = document.createElement("p")
        price.textContent = el.price

        let name = document.createElement("h2")
          name.textContent = el.name

          let description = document.createElement("p")
          description.textContent = el.description
          description.setAttribute("id","desc")

        

        


        card.append(image,price,name,description)
        container.append(card)

      })
    }