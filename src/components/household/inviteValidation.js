export default function inviteValidation(data) {
  let errors = {};
  if (!data.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = 'Email address is invalid';
    console.log(errors);
  }
  if (!data.permission_level) {
    errors.permission_level = 'Permission level is required';
  } else if (data.permission_level < 1 || data.permission_level > 3) {
    errors.permission_level = 'Level of permission must be between 1 and 3';
  } 
  return errors;
}
