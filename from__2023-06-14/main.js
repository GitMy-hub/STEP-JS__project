// 1) Get user : name , email , password , age +
// 2) name must has at least 2 symbols +
// 3) if name is valid -> check user email +
// 4) email should include into it -> "@" symbol +
// 5) password should be longer than 7 and * might
// include : numbers and strings +
// 6) This case migth be acceed only if all conditions above
// is TRUE...age must be bigger than 18
// 7) If all above is true -> console -> Welcome!
// Otherwise -> Go out of here!


var validation = {
    isValidName : false,
    isValidEmail : false,
    isValidPassword : false,
    isValidAge : false,
}


while(!validation.isValidName) {
    var userName = prompt("Укажите свое имя");

    if(userName.length > 2){
        validation.isValidName = true;
        break;    
    }
   
}

if (validation.isValidName) {

    while(!validation.isValidEmail) {
        var userEmail = prompt("Укажите свою почту");

        for (var i = 0 ; i < userEmail.length ;i++) {
            var char = userEmail[i];

            if(char === "@"){
                validation.isValidEmail = true; 
                console.log("Привет");
                break;
            }
        }
    }
}

if(validation.isValidEmail) {
    while(!validation.isValidPassword) {
        var userPassword = prompt("Enter your password");

        var isNumberInPassword = false;
        var isStrInPassword = false;

        for(var i = 0 ; i < userPassword.length ;i++) {
            var char = parseInt(userPassword[i]);

           
            if (!isFinite(char)) {
                
                isNumberInPassword = true;
            } else {
                console.log("There");
                isStrInPassword = true;
            }
        }
        
        if(userPassword.length > 7 && isNumberInPassword && isStrInPassword) {
            validation.isValidPassword = false
            break;
        }
    }
}

alert( "Добро пожаловать :)" );
 

