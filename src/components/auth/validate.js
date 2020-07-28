export default function validate(data) {
    let errors = {};
    if (!data.email) {
        errors.email="Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email="Email address is invalid";
        console.log(errors)
    }
    return errors;
}