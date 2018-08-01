'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sponsor = sequelize.define('Sponsor', {
    name:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    uuid:{
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      autoIncrement: false,
      defaultValue: DataTypes.UUIDV4,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone:{
      type: DataTypes.STRING,
      allowNull: true
    },
    website:{
      type: DataTypes.STRING,
      allowNull:true
    },
  });
  Sponsor.associate = function(models) {
    Sponsor.hasMany(models.Program, {
      foreignKey: 'sponsor_uuid',
      as: 'programs',
    })
  };
  sequelize.sync();
  return Sponsor;
};