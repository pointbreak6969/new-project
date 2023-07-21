const formValidation=()=>{
    if(document.myForm.name.value==""){
    document.getElementById("name_message").innerHTML="Name is required";
    return false;
    }

    if(document.myForm.address.value==""){
        document.getElementById("address_message").innerHTML="Address is required";
        return false;
    }

    if(document.myForm.phone.value==""){
        document.getElementById("phone_message").innerHTML="Phone number is required.";
        return false;
    }
    if(isNaN(document.myForm.phone.value)){
        document.getElementById("phone_message").innerHTML="Phone number must be numeric";
        return false;
    }
    if(document.getElementById.myForm.phone.value.lenght!=10){
        document.getElementById("phone_message").innerHTML="Phone number must be exactly 10";
        return false;
    }
    if(document.getElementById.myFrom.password==""){
        document.getElementById("password_message").innerHTML="Enter your password";
        return false;
    }
    if(document.getElementById.myForm.password.lenght<=7){
        document.getElementById("password_message").innerHTML="Your password must be more than 8"
    }
    return true;
}