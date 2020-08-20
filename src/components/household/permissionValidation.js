export default function permissionValidation(data, maxPermission) {
  let errors = {};
  if (!data.permissionLevel) {
    errors.permissionLevel = 'Permission level is required';
  } else if (!Number.isInteger(Number(data.permissionLevel))) {
    errors.permissionLevel = 'Permission level must be an integer';
  } else if (data.permissionLevel < 1 || data.permissionLevel > maxPermission) {
    errors.permissionLevel = `Level of permission must be between 1 and ${maxPermission}`;
  }
  return errors;
}
