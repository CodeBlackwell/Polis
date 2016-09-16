module.exports = function(sequelize, DataTypes) {

  return sequelize.define('candidate_summary', {
    candidate_office: { type: DataTypes.STRING, allowNull: false },
    candidate_office_state: { type: DataTypes.STRING },
    candidate_office_district: { type: DataTypes.INTEGER, allowNull: false },
    candidate_party_affiliation: { type: DataTypes.STRING, allowNull: false },
    candidate_incoming_seat_status: { type: DataTypes.STRING, allowNull: false },
    candidate_city: { type: DataTypes.INTEGER, allowNull: false },
    candidate_state: { type: DataTypes.INTEGER, allowNull: false },
    candidate_zip: { type: DataTypes.INTEGER, allowNull: false },
    indiv_itemized_contributions: DataTypes.INTEGER,
    indiv_unitemized_contributions: DataTypes.INTEGER,
    indiv_contributions: DataTypes.INTEGER,
    candidate_contributions: DataTypes.INTEGER,
    total_contributions: { type: DataTypes.INTEGER, allowNull: false },
    cash_on_hand_beg_of_period: DataTypes.INTEGER,
    cash_on_hand_clo_of_period: DataTypes.INTEGER,
    net_contributions: DataTypes.INTEGER,
    coverage_start_date: { type: DataTypes.DATEONLY, allowNull: false },
    coverage_end_date: { type: DataTypes.DATEONLY, allowNull: false }

  }, {
    indexes: [
      { unique: true, fields: ['legislator_id', 'coverage_start_date'] }
    ],
    underscored: true
  })
}