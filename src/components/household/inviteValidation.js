export default function inviteValidation(data, maxPermission) {
  let errors = {};
  if (!data.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = 'Email address is invalid';
    console.log(errors);
  }
  if (!data.permissionLevel) {
    errors.permissionLevel = 'Permission level is required';
  } else if (!Number.isInteger(Number(data.permissionLevel))) {
    errors.permissionLevel = 'Permission level must be an integer';
  } else if (data.permissionLevel < 1 || data.permissionLevel > maxPermission) {
    errors.permissionLevel = `Level of permission must be between 1 and ${maxPermission}`;
  }
  return errors;
}
