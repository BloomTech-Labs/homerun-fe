export default function permissionValidation(data) {
    let errors = {};
    if (!data.permissionLevel) {
      errors.email = 'Permission level is required';
    } else if (data.permissionLevel < 1 || data.permissionLevel > 3) {
      errors.permissionLevel = 'Level of permission must be between 1 and 3';
    } 
    return errors;
  }