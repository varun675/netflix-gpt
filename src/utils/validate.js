export const validateForm = (email, password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(!(emailRegex.test(email))) {
        return 'email is not valid';
    }  
    // if (!(passwordRegex.test(password))) {
    //     return 'password is not valid;'
    // };
    return null;
    

}
