// validate user input
// (arguments) = input field name & input value :
function validateInput(name, userData){
    const result = { isValid: true, msg: '' };

    // inputs 'Name/name'
    if (name.match(/Name/i)) {
        if (userData.length < 2) {
            result.msg +="Name should contain at least 2 characters.\n";
            result.isValid = false;
        } 
        if (userData.length > 40) {
            result.msg +="Name is too long.\n";
            result.isValid = false;
        }
        if (!/^[a-zàâçéèêëîïôûùüÿñæœ .'-]*$/i.test(userData)) {
            result.msg +="Name shouldn't contain special characters.\n";
            result.isValid = false;
        }
    }

    // inputs 'Mail/mail' 
    if (name.match(/Mail/i)) {
        if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(userData)) {
            result.msg +="Email address is not correct.\n";
            result.isValid = false;
        }
    }

    // inputs 'Tel/tel' 
    if (name.match(/Tel/i)) {
        if (userData.length < 10) {
            result.msg +="Telephone number must have at least 10 numbers.\n";
            result.isValid = false;
        } 
        if (userData.length > 15) {
            result.msg +="Telephone number is too long.\n";
            result.isValid = false;
        }
        if (!/^[+0]{1}\d{9,14}$/.test(userData)) {
            result.msg +="Telephone number should start with '0' or '+' and contain only numbers.\n";
            result.isValid = false;
        }
    } 

    return result;
}

export { validateInput }