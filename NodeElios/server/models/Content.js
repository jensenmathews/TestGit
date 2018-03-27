/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Content', {
    ContentEntryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Text: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'Content'
  });
};
