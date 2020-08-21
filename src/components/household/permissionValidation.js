export default function permissionValidation(data, max) {
  let errors = {};
  if (!data.permissionLevel) {
    errors.permissionLevel = 'Permission level is required';
  } else if (!Number.isInteger(Number(data.permissionLevel))) {
    errors.permissionLevel = 'Permission level must be an integer';
  } else if (data.permissionLevel < 1 || data.permissionLevel > max) {
    errors.permissionLevel = `Level of permission must be between 1 and ${max}`;
  }
  return errors;
}
