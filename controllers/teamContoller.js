const { teams } = require("../database/connection");

/**
 * Controller to handle creating/registering a new team
 */
async function Registerteam(req, res) {
  try {
    const { name, captain, coach } = req.body;

    if (!name) {
      return res.status(400).json({
        message: "Team name is required."
      });
    }

    const newTeam = await teams.create({
      teamname: name,
      teamcaptain: captain || "Unknown",
      teamcoach: coach || "Unknown"
    });

    return res.status(200).json({
      message: "Team created successfully",
      data: newTeam
    });
  } catch (error) {
    console.error("Team registration failed:", error);
    return res.status(500).json({
      message: "An error occurred while creating the team."
    });
  }
}

/**
 * Controller to fetch all registered teams
 */
async function fetchteams(req, res) {
  try {
    const data = await teams.findAll();
    return res.status(200).json({
      message: "Teams fetched successfully",
      data
    });
  } catch (error) {
    console.error("Fetch teams failed:", error);
    return res.status(500).json({
      message: "An error occurred while fetching teams."
    });
  }
}

/**
 * Controller to delete a team by ID
 */
async function deleteteams(req, res) {
  try {
    const { id } = req.params;

    const targetTeam = await teams.findByPk(id);
    if (!targetTeam) {
      return res.status(404).json({
        message: "Team not found."
      });
    }

    await targetTeam.destroy();

    return res.status(200).json({
      message: "Team deleted successfully."
    });
  } catch (error) {
    console.error("Delete team failed:", error);
    return res.status(500).json({
      message: "An error occurred while deleting the team."
    });
  }
}

module.exports = {
  Registerteam,
  fetchteams,
  deleteteams
};