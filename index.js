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
        image.addEventListener('click',()=>{
          fundisp(el.id);
          document.getElementById('sidebar').classList.toggle('active');
        })
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

    let fundisp = async (id)=>{
      let a = await fetch(`${url}/${id}`);
      let pro = await a.json();
      append(pro);
    }

    let append=(pro)=>{
      let side = document.getElementById('sidebar');
      let cardd=`<img src="${pro.image}" class="sideimage">
        <div class = "headings">
        <p class="sideprice">₹ ${pro.price}</p>
        <h2>${pro.name}</h2>
        <p>${pro.description}</p>
        </div>`;
      side.innerHTML = cardd;
    }