export const validateUserLoginForm = (values) => {
    const errors = {};


    const regU = /^[\S]{6,15}$/;
    if (!regU.test(values.username)) {
        errors.username = 'Username is required, and should be 6-15 chars (all chars accepted...no spaces)';
    }


    const regP = /^[\S]{8,20}$/;
    if (!regP.test(values.password)) {
        errors.password = 'Password is required, 8+ characters, no spaces';
    }

    return errors;

};