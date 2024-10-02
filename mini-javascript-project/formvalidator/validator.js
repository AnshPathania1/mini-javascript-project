const form = document.getElementById("form_1");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm-password");
 const submit = document.getElementById("btn");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInput();

})

const validateInput = ()=>{
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirm_passwordValue = confirm_password.value.trim();
    
    if(usernameValue === ''){
        seterror(username,'username is required');

    }
    else {
        setsuccess(username);
    }

    if(emailValue === ""){
        seterror(email,'email is required');
    }
    else if(!isValidEmail(emailValue)){
        seterror(email,'email is not valid');
    }
    else{
        setsuccess(email);
    }




    if(passwordValue === ""){
        seterror(password,'Password is required');
    }
    else if(passwordValue.length < 10){
        seterror(password,"it should be more than 10 character");

    } 
    else{
        setsuccess(password);
    } 
    
    if(confirm_passwordValue === ""){
        seterror(confirm_password,'confirm-Password is required');
    }
    else if(confirm_passwordValue !== passwordValue){
        seterror(confirm_password,"it should be match with password");

    } 
    else{
        setsuccess(confirm_password);
    } 
}

const seterror = (element,messege)=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText =messege;

    inputControl.classList.add('erro');
    inputControl.classList.remove('success');

}
const setsuccess =(element)=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = "";
    inputControl.classList.remove('erro');
    inputControl.classList.add('success');
}
function isValidEmail(e) {
    var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(e);
  }