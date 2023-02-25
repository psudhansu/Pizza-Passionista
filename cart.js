function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function openNavright() {
  document.getElementById("mySidenavRight").style.width = "350px";
}

function closeNavright() {
  document.getElementById("mySidenavRight").style.width = "0";
}

////  signup

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

showCart.innerHTML = fetchAndRenderCart();

function fetchAndRenderCart() {
  data.forEach((element) => {
    return `<div>
                                <div>
                                    <img src="https://images.dominos.co.in/cart/new_peppy_paneer.jpg" alt="item-pic">
                                </div>
                                <div>
                                    <span class="item-title">Peppy Paneer</span>
                                    <span class="item-description">Flavorful trio of juicy paneer, crisp capsicum with spicy red
                                        paprika</span>
            
                                    <div class="item--option">
                                        <span>Medium</span><span>|</span><span>New Hand
                                            Tossed</span>
                                    </div>
                                    <div class="increase-price">
                                        <div class="price">
                                            <div class="price-final" data-label="cart-item-price"><span class="rupee"> 958.00</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="item-quantity" data-label="quantity">
                                                <div class="quantity" data-label="decrease"></div><span
                                                    class="number-of-item">2</span>
                                                <div>
                                                    <div class="increase-item" data-label="increase"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
            
                                </div>`;
  });
}
