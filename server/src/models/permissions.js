const Role = require('./role');

class Permissions {
    constructor() {
      this.permissions = [];
    }
  
  getPermissionsByRoleName(roleName) {
      const role = new Role().getRoleByName(roleName);//roles.roles.find((r) => r.name === roleName);
      return role ? role.permissions : [];
    }
  }
  module.exports = Permissions;