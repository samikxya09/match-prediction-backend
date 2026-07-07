const jwt = require("jsonwebtoken");
const { users } = require("../database/connection");

// JWT Secret Key used for signing tokens
const JWT_SECRET = "hahahehhuh";

/**
 * Middleware to authenticate and authorize administrator access.
 * Verifies the JWT token and checks if the user role is 'admin'.
 */
async function adminauthenticationmiddleware(req, res, next) {
  const token = req.headers.token;
  if (!token) {
    return res.status(403).json({
      message: "Access denied. Please provide an authentication token."
    });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await users.findByPk(decoded.id);

    if (!user) {
      return res.status(403).json({
        message: "Invalid token. User not found."
      });
    }

    if (user.role !== "admin") {
      return res.status(403).json({
        message: "Access forbidden. Admin role required to perform this action."
      });
    }

    // Attach user to request object and proceed
    req.user = user;
    next();
  } catch (error) {
    return res.status(403).json({
      message: "Invalid or expired token.",
      error: error.message
    });
  }
}

/**
 * Middleware to authenticate and authorize regular user access.
 * Verifies the JWT token and checks if the user role is 'user'.
 */
async function userauthenticationmiddleware(req, res, next) {
  const token = req.headers.token;
  if (!token) {
    return res.status(403).json({
      message: "Access denied. Please provide an authentication token."
    });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await users.findByPk(decoded.id);

    if (!user) {
      return res.status(403).json({
        message: "Invalid token. User not found."
      });
    }

    // Admins should also be allowed to access general user routes
    if (user.role !== "user" && user.role !== "admin") {
      return res.status(403).json({
        message: "Access forbidden. User or admin role required."
      });
    }

    // Attach user to request object and proceed
    req.user = user;
    next();
  } catch (error) {
    return res.status(403).json({
      message: "Invalid or expired token.",
      error: error.message
    });
  }
}

/**
 * General middleware to check if a user is logged in, regardless of their role.
 */
async function loginauthenticationmiddleware(req, res, next) {
  const token = req.headers.token;
  if (!token) {
    return res.status(403).json({
      message: "Access denied. Please provide an authentication token."
    });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await users.findByPk(decoded.id);

    if (!user) {
      return res.status(403).json({
        message: "Invalid token. User not found."
      });
    }

    // Attach user to request object and proceed
    req.user = user;
    next();
  } catch (error) {
    return res.status(403).json({
      message: "Invalid or expired token.",
      error: error.message
    });
  }
}

module.exports = {
  adminauthenticationmiddleware,
  userauthenticationmiddleware,
  loginauthenticationmiddleware
};