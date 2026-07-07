const express = require("express");
const cors = require("cors");
const { userController, Registeruser, Loginuser } = require("./controllers/userController.js");
const { fetchteams, Registerteam, deleteteams } = require("./controllers/teamContoller.js");
const { registermatch, fetchmatches, deletematches } = require("./controllers/matchController.js");
const authenticationmiddleware = require("./middleware/middleware.js");

// Initialize database connection
require("./database/connection.js");

const app = express();

// Global Middleware
app.use(cors());
app.use(express.json());

// Auth & User Routes
app.get("/about", userController);
app.post("/register", Registeruser);
app.post("/login", Loginuser);

// Team Management Routes (Admin Auth required)
app.post("/createteam", authenticationmiddleware.adminauthenticationmiddleware, Registerteam);
app.get("/fetch-teams", authenticationmiddleware.adminauthenticationmiddleware, fetchteams);
app.delete("/delete-team/:id", authenticationmiddleware.adminauthenticationmiddleware, deleteteams);

// Match Prediction / Scheduling Routes
// In the original design, team-match was mapped to Registerteam. We corrected this to registermatch.
app.post("/team-match", registermatch);
app.get("/fetch-matches", fetchmatches);
app.get("/fetchteam", fetchmatches); // Backward compatibility
app.delete("/delete-match/:id", deletematches);

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started successfully on port ${PORT}`);
});
