export const validateContactForm = (values) => {
    const errors = {};

    // First Name

    const regF = /^[A-Z][a-z]{1,14}$/;
    if (!regF.test(values.firstName)) {
        errors.firstName = 'First name is required and should be in the the Xxxx format...2-15 chars';
    }

    // Last Name

    const regL = /^[A-Z][a-z]{1,14}$/;
    if (!regL.test(values.lastName)) {
        errors.lastName = 'The Last name should be in the the Xxxx format...2-15 chars';
    }

    //Email

    const regPh = /^([1]?)[-]?([\d]{3})[-]?([\d]{3})[-]?([\d]{4})$/;
    if (!regPh.test(values.phoneNum)) {
        errors.phoneNum = 'The phone number should be formatted as 10-11 digits, area code and prefix optional ';
    }
    // Phone
    const regE = /^(\w)+([\.-]?\w+)*(@)([\w]+)([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regE.test(values.email)) {
        errors.email = 'Email improperly formated -- please use: xxxxxx@xxxx.xxx';
    }

    //Feedback
    if (!values.feedback) {
        errors.feedback = 'Feedback Field Required';
    }


    return errors;
};


