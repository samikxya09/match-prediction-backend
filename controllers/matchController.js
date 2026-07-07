const { match } = require("../database/connection");

/**
 * Controller to handle registering a new match prediction game
 */
async function registermatch(req, res) {
  try {
    const { teamA, teamB, matchDate } = req.body;

    if (!teamA || !teamB) {
      return res.status(400).json({
        message: "Both Team A and Team B names are required to schedule a match."
      });
    }

    // Insert the match into database
    const newMatch = await match.create({
      TeamA: teamA,
      TeamB: teamB,
      matchDate: matchDate || null
    });

    return res.status(200).json({
      message: "Match created successfully",
      data: newMatch
    });
  } catch (error) {
    console.error("Match registration failed:", error);
    return res.status(500).json({
      message: "An error occurred while creating the match."
    });
  }
}

/**
 * Controller to fetch all registered matches
 */
async function fetchmatches(req, res) {
  try {
    const data = await match.findAll({
      order: [["createdAt", "DESC"]]
    });
    return res.status(200).json({
      message: "Matches fetched successfully",
      data
    });
  } catch (error) {
    console.error("Fetch matches failed:", error);
    return res.status(500).json({
      message: "An error occurred while fetching matches."
    });
  }
}

/**
 * Controller to delete a specific match by ID
 */
async function deletematches(req, res) {
  try {
    const { id } = req.params;
    
    const targetMatch = await match.findByPk(id);
    if (!targetMatch) {
      return res.status(404).json({
        message: "Match not found"
      });
    }

    await targetMatch.destroy();

    return res.status(200).json({
      message: "Match deleted successfully."
    });
  } catch (error) {
    console.error("Delete match failed:", error);
    return res.status(500).json({
      message: "An error occurred while deleting the match."
    });
  }
}

module.exports = {
  registermatch,
  fetchmatches,
  deletematches
};