export const validateCommentForm = (values) => {
    const errors = {};

    const regR = /^[\d]$/;
    if (!regR.test(values.rating)) {
        errors.rating = 'Slow down Speedy! Please Select a rating: 1-5 ';
    }

    const regA = /^[\S]?[\s\S]{1,14}$/;
    if (!regA.test(values.author)) {
        errors.author = 'Name is required, and should be 2-15 chars (all chars accepted crazy emoji people)';
    }

    const regC = /[\S]+/m;
    if (!regC.test(values.commentText)) {
        errors.commentText = 'Please Leave a comment';
    }

    return errors;

};