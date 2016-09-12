module.exports = function(sequelize, DataTypes) {
  return sequelize.define('legislator', {
    last_name: { type: DataTypes.STRING, unique: 'legislatorIndex' },
    first_name: { type: DataTypes.STRING, unique: 'legislatorIndex' },
    birthday: { type: DataTypes.STRING, unique: 'legislatorIndex' },
    gender: { type: DataTypes.STRING, unique: 'legislatorIndex' },
    type: { type: DataTypes.STRING, unique: 'legislatorIndex' },
    state: DataTypes.STRING,
    district: DataTypes.STRING,
    party: DataTypes.STRING,
    url: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    contact_form: DataTypes.STRING,
    twitter: DataTypes.STRING,
    facebook: DataTypes.STRING,
    govtrack_id: DataTypes.STRING
  })

  
}
