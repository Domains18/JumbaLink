import { toast } from "react-hot-toast"
function verifyUsername(error = {}, values) {
    if (!values.UserName || values.UserName.includes(" ")) {
        error.UserName = toast.error('Missing or Invalid UserName');
    } 
    return error;
}

export async function validateUserName(values) {
    const errors = verifyUsername({}, values);

    return errors;
}
//  password
function verifyPassword( error = {}, values){
    const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (!values.Password || values.Password.includes(" ") ) {
        error.Password = toast.error("Password cannot be empty");
    } 
    else if (values.Password.length < 4) {
        error.Password = toast.error("Password Must be at least 4 characters");
    }
    else if(!specialChars.test(values.Password)) {
        error.Password = toast.error("Password Must contain at least one special character");
    }
    return error;
}

export async function validatePassword(values) {
    const error = verifyPassword({}, values);

    return error;
}
