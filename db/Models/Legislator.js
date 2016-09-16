module.exports = function(sequelize, DataTypes) {
  return sequelize.define('legislator', {
    fec_candidate_id: { type: DataTypes.STRING, unique: true },
    last_name: { type: DataTypes.STRING, allowNull: false },
    first_name: { type: DataTypes.STRING, allowNull: false },
    birthday: DataTypes.STRING,
    gender: DataTypes.STRING,
    type: DataTypes.STRING,
    state: { type: DataTypes.STRING, allowNull: false },
    district: { type: DataTypes.INTEGER, allowNull: false },
    party: DataTypes.STRING,
    url: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    contact_form: DataTypes.STRING,
    twitter: DataTypes.STRING,
    facebook: DataTypes.STRING,
    govtrack_id: { type: DataTypes.STRING, allowNull: false, unique: true }
  }, {
    indexes: [
      { unique: true, fields: ['state', 'last_name', 'first_name', 'district'] },
      { fields: ['fec_candidate_id'] },
      { fields: ['govtrack_id'] }
    ],
    underscored: true
  })

  
}
