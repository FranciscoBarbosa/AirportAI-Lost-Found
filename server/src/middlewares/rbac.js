const Permissions = require('../models/permissions');

exports.checkPermission = (permission) => {
  return (req, res, next) => {
    console.log("Checking permissions for user:", req.user);
    const userRole = req.user ? req.user.role : 'anonymous';
    const userPermissions = new Permissions().getPermissionsByRoleName(userRole);

    console.log("userRole = ", userRole);
    console.log("user permissions = ", userPermissions);

    if (userPermissions.includes(permission)) {
        return next();
    } else {
      return res.status(403).json({ error: 'Access denied' });
    }
  };
};