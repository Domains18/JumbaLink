import { toast } from "react-hot-toast";
import { validatePassword } from "./validate";

export async function resetPassword(values) {
    const errors = validatePassword({}, values);
    if (values.Password != values.confirmPassword) {
        errors.exist = toast.error("Password does not match");
    }
    
    return errors;
}
