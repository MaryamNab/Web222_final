var countErrors = 0;

function showErrors(messages) {
    countErrors++;
    if(countErrors <= 5){
    document.querySelector('#errors').innerHTML += messages;
    }
  }
function clearErrors(){
    document.querySelector('#errors').innerHTML = "";
 }
function firstLetter(inputValue){
    valid = true;
    if(inputValue.charAt(0) < "A" || inputValue.charAt(0) > "Z") { valid = false; }
    return valid;
}



 function validName(firstlast, elem){
    var valid = true;
    var allAlpha = true;
   var FirstLetter = true;
    var errorDiv = document.querySelector("#errors");
    var message1 = "* First Letter of First Name should be Capital <br>";
    var message2 = "* First Letter of Last Name should be Capital <br>";
    var message3 = "* First Name should have Alphabets only <br>";
    var message4 = "* Last Name should have Alphabets only <br>";

    var inputValue = elem.value.trim();
    FirstLetter = firstLetter(inputValue);

    inputValue = inputValue.toUpperCase();
    for(var i = 0; i < inputValue.length; i++){
        if (inputValue.charAt(i) < "A" || inputValue.charAt(i) > "Z" )  { allAlpha = false; }
    }
   

    if(!FirstLetter || !allAlpha) { 
        valid = false; 
       if(!FirstLetter){ 
           if(firstlast == "first"){
               showErrors(message1);
           }
           else if(firstlast == "last"){
               showErrors(message2);
           }
        }
        if(!allAlpha){ 
           if(firstlast == "first"){
               showErrors(message3);
           }
           else if(firstlast == "last"){
               showErrors(message4);
           }
        }
    }
    return valid;
}
 

function validFirstName(){
    var elem = document.querySelector("#firstname");
    return validName("first", elem);
}

function validLastName(){
    var elem = document.querySelector("#lastname");
    return validName("last", elem);
}

function validUserName(){
    valid = true;
    validFirst = true;
    validCount = true;
    var message1 = "* First Letter of user Name should be Capital <br>";
    var message2 = "* User Name should have at least 6 characters <br>";
    var elem = document.querySelector("#username");
    var inputValue = elem.value.trim();
    var errorDiv = document.querySelector("#errors");
    validFirst = firstLetter(inputValue);
    if(!validFirst){
        valid = false;
        showErrors(message1);
        //var error1 = document.createTextNode("    First Letter of user Name should be Capital    ");
        //errorDiv.appendChild(error1);
    }
    if(inputValue.length < 6){
        validCount = false;
        valid = false;
        showErrors(message2);
    }

    return valid;
}

function validPass(){
    valid = true;
    validFirst = true;
    validCount = true;
    validDigit = false;
    validUpperCase = false;
    var message1 = "* Password must start with an alphabet <br>";
    var message2 = "* Password must be 6 characters long <br>";
    var message3 = "* Password should have at least 1 digit <br>";
    var message4 = "* Password should have at least 1 upperCase <br>";
    var elem = document.querySelector("#password");
    var errorDiv = document.querySelector("#errors");
    var inputValue = elem.value.trim();
    validFirst = firstLetter(inputValue);
    if(!validFirst){
        valid = false;
        showErrors(message1);
    }
    if(inputValue.length != 6){
        validCount = false;
        valid = false;
        showErrors(message2);
    }
    for(var i = 0; i < inputValue.length; i++){

        if(inputValue.charAt(i) >= "A" && inputValue.charAt(i) <= "Z"){
            validUpperCase = true;
        }
        if(inputValue.charAt(i) >= "0" && inputValue.charAt(i) <= "9") { 
            validDigit = true;
        }
      
    }
        if(!validDigit){
            valid = false;
            showErrors(message3);
        }
        if(!validUpperCase){
            valid = false;
            showErrors(message4);
                    
        }


    return valid;
}

function confirmPass(){
    valid = true;
    var elem1 = document.querySelector("#password");
    var elem2 = document.querySelector("#confirm");
    var errorDiv = document.querySelector("#errors");
    var inputValue1 = elem1.value.trim();
    var inputValue2 = elem2.value.trim();
    var message = "* Passwords should match <br>";

    if(inputValue1.length != inputValue2.length)    {  valid = false; }
    for(var i = 0; i < inputValue1.length && valid; i++){
        if(inputValue1.charAt(i) != inputValue2.charAt(i)){
            valid = false;
        }
    }
    if(!valid){
        showErrors(message);
    }
return valid;    

}

function formValidation(){
    clearErrors();
    var result = validPass();
    result = confirmPass() && result;
    result = validUserName() && result;
    result = validFirstName() && result;
    result = validLastName() && result;
    return result;
}

