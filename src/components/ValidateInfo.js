/*For the admin form to verify the informations */

export default function validateInfo(values) {
    let errors= {}
 
 
    if (!values.username.trim()) {
        errors.username= "Username required!";
    }else if(values.username!='admin'){
        errors.username="Error,please retry!";
    }
 
    //email
    if(!values.email) {
        errors.email = "Email required!";
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email= "email adress is invalid";
    }else if(values.email!='admin@gmail.com'){
        errors.email="Error,please retry!";
    }
    if(!values.password){
        errors.password= "Password is required!";
    } else if(values.password.length <6){
        errors.password = "Password needs to be 6 characters or more!";
    } else if(values.password!='admin123'){
        errors.password="Error,please retry!";
    }
    return errors;
 }