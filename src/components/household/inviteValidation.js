export default function inviteValidation(data) {
  let errors = {};
  if (!data.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = 'Email address is invalid';
    console.log(errors);
  }
  if (!data.permissionLevel) {
    errors.permissionLevel = 'Permission level is required';
  } else if (data.permissionLevel < 1 || data.permissionLevel > 3) {
    errors.permissionLevel = 'Level of permission must be between 1 and 3';
  } 
  return errors;
}
