const { users } = require("../database/connection");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// JWT Secret Key (consistent with middleware secret)
const JWT_SECRET = "hahahehhuh";

/**
 * Controller to handle API health check or about information
 */
function userController(req, res) {
  return res.json({ msg: "Match Prediction API v1.0.0" });
}

/**
 * Controller to handle user registration
 * Validates request payload, checks for duplicate email, and hashes password
 */
async function Registeruser(req, res) {
  try {
    const { name, email, password } = req.body;

    // Validate request inputs
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Missing required fields: name, email, and password are required."
      });
    }

    // Check if the user is already registered with this email
    const existingUser = await users.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({
        message: "This email is already registered. Please login or try another one."
      });
    }

    // Hash password and create user in database
    const hashedPassword = bcrypt.hashSync(password, 8);
    const newUser = await users.create({
      name,
      email,
      password: hashedPassword,
      role: req.body.role || "user" // Default to user if not specified
    });

    return res.status(200).json({
      message: "User registered successfully.",
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email
      }
    });
  } catch (error) {
    console.error("Registration Error:", error);
    return res.status(500).json({
      message: "An error occurred during registration. Please try again later."
    });
  }
}

/**
 * Controller to handle user login
 * Verifies email and password, generates JWT token on success
 */
async function Loginuser(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Please provide email and password."
      });
    }

    // Retrieve user by email
    const user = await users.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password."
      });
    }

    // Verify password match
    const isMatched = bcrypt.compareSync(password, user.password);
    if (!isMatched) {
      return res.status(403).json({
        message: "Invalid email or password."
      });
    }

    // Generate JWT token valid for 1 day
    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1d" });

    return res.status(200).json({
      message: "Logged in successfully",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({
      message: "An error occurred during login. Please try again later."
    });
  }
}

module.exports = {
  userController,
  Registeruser,
  Loginuser
};