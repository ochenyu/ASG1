const form = document.querySelector("form"),
eField = form.querySelector(".email"),
eInput = eField .querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");


// when blank
form.onsubmit = (e) => {
    e.preventDefault();
    
    if (eInput.value == "") {
        eField.classList.add("shake", "error");
    }
    else {
        validateEmail();
    }

    if(pInput.value == "") {
        pField.classList.add("shake", "error");
    }

    setTimeout(()=>{
        eField.classList.remove("shake");
        pField.classList.remove("shake");}, 500);


// input keyup
eInput.onkeyup = () => {
    validateEmail();    
}   

function validateEmail() {
    let eformat = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!eInput.value.match(eformat)) {
        eField.classList.add("error");
        let errorTxt = eField.querySelector(".error-txt");
        if (eInput.value != "") {
            errorTxt.innerText = "Invalid email address"
        }
        else {
            errorTxt.innerText = "Please fill in your email address"
        }
    }
    else {
        eField.classList.remove("error");
    }
}

pInput.onkeyup = () => {
    
    if (pInput.value == "") {
        pField.classList.add("error");
    }
    else {
        pField.classList.remove("error");
    }
}

// login successful
if (!eField.classList.contains("error") && !pField.classList.contains("error")) {
alert("Login successful. You may go back to Homepage.")
form.reset();
}
}


// toggle show/hide
function showPassword() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }





