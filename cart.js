function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function openNavright() {
  document.getElementById("mySidenavRight").style.width = "350px";
  document.getElementById("mySidenavRight").style.display = "block";
}

function closeNavright() {
  document.getElementById("mySidenavRight").style.width = "0";
  document.getElementById("mySidenavRight").style.display = "none";
}

////  signup


// profile name

function pro() {
  let name = document.getElementById('account');
  let chk = document.querySelector('.profile-text');
  let arr = JSON.parse(localStorage.getItem('userlogin')) || [];
  if (arr.length != 0) {
      name.textContent = arr[0].name;
      chk.textContent = "Welcome back👋";
  }
}
pro();


// logout button

let arr5 = JSON.parse(localStorage.getItem('userlogin')) || [];

if (arr5.length != 0) {
    let log = document.querySelector('.socialbutton');
    let html = `<div type="button" class="google" style="margin-left: 15px">
    <button class="red-google" onclick="logouttt()">
        <span>logout</span>
    </button>
</div>`
log.innerHTML += html;

let d = document.querySelector('.loginForm p');
d.innerHTML = "";
d.textContent = "Hello "+arr5[0].name

function logouttt(){
    alert("You Want to Logout");
    let arr = [];
    localStorage.setItem('userlogin',JSON.stringify(arr));
    pro();
}


}




let signupElement = document.getElementById("signup");

signupElement.addEventListener("click", () => {
  let formDiv = document.getElementById("form-here");

  formDiv.innerHTML = `<h4>Sign Up for Free</h4>
  <form action="/" id="signupForm">
                
                    <table>
                <tr>
                                <td>
                                    <label>
                                        Email <span class="req">*</span>
                                    </label>
                            </td>
                            <td>
                                <input type="email" required autocomplete="off" id="email" />
                            </td>
                            </tr>
                            <tr>
                                <td>Phone<span class="req">*</span></td>
                                <td><input type="number" required autocomplete="off" id="phone"  /></td>
                            </tr>
                            <tr>
                                <td>
                                    <label>
                                        Create Password<span class="req">*</span>
                                    </label>
                            </td>
                            <td><input type="password" required autocomplete="off" id="pass" /></td>
                            </tr>
                            </table>
                            <button type="submit" class="signupbutton">Sign Up</button>
                </form>`;
});

////  login

let login = document.getElementById("login");

login.addEventListener("click", () => {
  let formDiv = document.getElementById("form-here");

  formDiv.innerHTML = ` <div id="logindiv">
                <h4>Welcome Back!</h4>

                <form action="/" method="post" id="loginForm">

                    <table>
                        <tr>
                            <td><label>
                                    Email <span class="req">*</span>
                                </label>
                                </td>
                                <td>
                                    <input type="email" required id="enteremail" />
                                </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>
                                            Password<span class="req">*</span>
                                        </label>
                                </td>
                                <td>
                                    <input type="password" required autocomplete="off" id="enterpass" />
                                </td>
                                </tr>
                                </table>

                    <button class="loginbutton" />Log In</button>

                </form>
                <p id="forgot"><a>Forgot password</a></p>

            </div>

    
`;
});




let orderData = JSON.parse(localStorage.getItem("cart")) || [];

let showCart = document.getElementById("show-cart-items");

fetchAndRenderCart(orderData);

function fetchAndRenderCart(data) {
  showCart.innerHTML = "";

  if (data.length === 0) {
    showCart.innerHTML = `
    <div class="empty-cart">
   <img src="https://pizzaonline.dominos.co.in/static/assets/cart_empty.png" id="empty-img">
   <div class="empty-text"><span id="empty-text-1">Your Cart is Empty</span><br><br><span class="empty-text-2">Please add some items from the menu.</span></div>
   <div>
      <div id="explore-div"><button id="explore"><span>Explore Menu</span></button></div>
   </div>
</div>
`;
    return;
  }

  let cardDetail = [];
  data.forEach((element) => {
    cardDetail.push(getCard(element));
  });

  //   cardDetail = [`<div id=1>First div</div>`, `<div id=1>Second div</div>`];
  showCart.innerHTML = `<div id="entire-div">${cardDetail.join("")}</div>`;
}

function getCard(item) {
  //item =  {
  // 	"id": 1,
  // 	"name": "Margherita",
  // 	"image": "https://images.dominos.co.in/new_margherita_2502.jpg",
  // 	"price": "199",
  // 	"category": "Veg",
  // 	"description": "Delightful Kashundi flavours on a veg pizza which is Loaded with spicy jalapenos ",
  // 	"size": "Regular"
  // }

  return `<div id="card">
                <div>
                    <div>
                        <img src="${item.image}" alt="photo" id="cart-photo">
                    </div>
                    <div>
                        <span class="item-title">${item.name}</span>
                    <br>
                    <span class="item-description">${item.description}</span>
                    <div class="item-option"><span>${
                      item.size
                    }</span><span>|</span><span>New Hand Tossed</span></div>
                    <hr style="width:95%;text-align:left;margin-left:0;text-decoration: dashed;">
                    <p id="customization-head">Your Customization</p>
                    <p id="customization-title">Added Toppings : <span>Extra Cheese</span></p>
                    </div>
                    <div>
                        <div class="increase-price">
                            <div class="price">
                                <div class="price-final"><span class="rupee"> ₹ ${
                                  item.quantity * item.price
                                }</span></div>
                                </div>
                                <div id="quantity-change">
                                    <div class="decrease"> <img src="https://pizzaonline.dominos.co.in/static/assets/icons/minus.svg" alt=""></div>
                                    |<div class="count">${item.quantity}</div> |
                                    <div class="increase"><img src="https://pizzaonline.dominos.co.in/static/assets/icons/plus.svg" alt=""></div>
                                </div>
                                </div>
                        </div>
                        </div>
                        </div>
                        `;
}

///Calculating final total

let taxAndCharges = document.getElementById("total-tax");
let tax = `₹ ${(18 / 100) * 100}`;
taxAndCharges.innerText = tax;

let grandTotal = document.getElementById("grand");
let grand = 1000 - 100;
grandTotal.innerText = `₹ ${grand}`;

//// Increasing and decreasing quantity

let countElement = document.getElementsByClassName("count");

let increase = document.getElementsByClassName("increase");

let decrease = document.getElementsByClassName("decrease");

let increaseIndex = 0;

for (let item of increase) {
  console.log(item, "here inside increase",increaseIndex)

  item.addEventListener("click", function(){increaseQuantity(increaseIndex)})
  increaseIndex++;
}


for (let item of decrease) {
  console.log(item, "here inside decrease");
  item.addEventListener("click", decreaseQuantity);
}


// for (let item of countElement) {
//   console.log(item, "here inside increase");
//   item.addEventListener("click", increaseQuantity);
// }

// decrease.addEventListener("click", decreaseQuantity);

function increaseQuantity(index) {
  console.log("++++");
  let count = countElement.innerText;
  count++;
  countElement.innerText = count;
  console.log("index is", index)
}

function decreaseQuantity() {
  console.log("-----");

  let count = countElement.innerText;
  count--;
  countElement.innerText = count;
}

//Redirection logic on clicking explore menu

// let exploreButton = document.getElementById("explore-div");

// exploreButton.addEventListener("click", () => {
//   location.href = "product.html";
// });

/// Write logic for registration here//////////////////
/////////////////////////////////////////////////////////

// let registerForm = document.querySelector("#signupForm");
// let phone = document.querySelector("#phone");
// let email = document.querySelector("#email");
// let password = document.querySelector("#pass");

// registerForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let user_register = {
//     mobile: phone.value,
//     email: email.value,
//     password: password.value,
//   };

//   // send the user data to the API
//   fetch("https://narrow-internal-record.glitch.me/users", {
//     method: "POST",
//     body: JSON.stringify(user_register),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       // do something with the response data, such as redirecting to a success page
//       console.log(data);
//     })
//     .catch((error) => {
//       // handle any errors that occur during the registration process
//       console.error(error);
//     });
//});
