function match(sequelize, datatypes) {
  const match = sequelize.define("match", {
    TeamA: {
      type: datatypes.STRING,
      allowNull: true
    },
    TeamB: {
      type: datatypes.STRING,
      allowNull: true
    },
    matchDate: {
      type: datatypes.STRING,
      allowNull: true
    }
  });
  return match;
}

module.exports = match;