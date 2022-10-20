var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var addressError = document.getElementById('address-error');
var passwordError = document.getElementById('password-error');
var confirmpasswordError = document.getElementById('confirm-password-error');
var submitError = document.getElementById('subit-error');
//VALIDATION OF FIRST NAME
function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0) {
        nameError.innerHTML = 'First name is reqiured!';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = '';
        return false;
    }
    nameError.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>';
    return true;
}
//VALIDATION OF LAST NAME
function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0) {
        nameError.innerHTML = 'Last name is reqiured!';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = '';
        return false;
    }
    nameError.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>';
    return true;
}
//VALIDATION OF EMAIL
function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email is required'
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,9}$/)){
        emailError.innerHTML = 'Email Invalid'
        return false;
    }
    emailError.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>';
    return true;
}
//VALIDATION OF ADDRESS
function validateAddress(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0) {
        nameError.innerHTML = 'Address is reqiured!';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = '';
        return false;
    }
    nameError.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>';
    return true;
}
