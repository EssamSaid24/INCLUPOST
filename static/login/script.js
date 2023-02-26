const $loginContainer = $("#login-container");
const $signupContainer = $("#signup-container");

const $loginForm = $loginContainer.find("form");
const $signupForm = $signupContainer.find("form");

$loginForm.on("submit", (event) => {
    event.preventDefault();

    const email = $loginForm.find("#email").val();
    const password = $loginForm.find("#password").val();
    const logindata = {
        email: email,
        password: password
    };

    //login Api call

    
    //redirect to the post page if the login is successful
    window.location.href = "/templates/post";


});

$signupForm.on("submit", (event) => {
    event.preventDefault();

    const name = $signupForm.find("#name").val();
    const email = $signupForm.find("#email").val();
    const password = $signupForm.find("#password").val();

    const signupdata = {
        name: name,
        email: email,
        password: password
    };
    //signup Api call

    /////////////////////////////////

    //Append a login button that redirects to the login page when clicked if the signup is successful
    $signupContainer.empty();
    $signupContainer.append("<h1>You are signed up successfully</h1>");
    var $loginButton = $("<button id='login-btn'>Click here to login</button>");
    $signupContainer.append($loginButton);
    $loginButton.on("click", () => {
        showLogin();
    });




});

function showLogin() {
    $loginContainer.removeClass("hidden");
    $signupContainer.addClass("hidden");
}

function showSignup() {
    $loginContainer.addClass("hidden");
    $signupContainer.removeClass("hidden");
}

