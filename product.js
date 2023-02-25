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

  console.log("working in close");
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


