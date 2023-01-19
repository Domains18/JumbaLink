import { toast } from "react-hot-toast"
function verifyUsername(error = {}, values) {
    if (!values.UserName || values.UserName.includes(" ")) {
        error.UserName = toast.error('Missing or Invalid UserName')
    } 
    return error;
}

export async function validateUserName(values) {
    const errors = verifyUsername({}, values)

    return errors
}
