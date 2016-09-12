module.exports = function(sequelize, DataTypes) {

  return sequelize.define('candidate_summary', {
    fec_candidate_id: DataTypes.STRING,
    legislator_id: { type: DataTypes.INTEGER, allowNull: false },
    candidate_name: { type: DataTypes.STRING, unique: 'summaryIndex' },
    candidate_office: { type: DataTypes.STRING, unique: 'summaryIndex' },
    candidate_office_state: { type: DataTypes.STRING, unique: 'summaryIndex' },
    candidate_office_district: DataTypes.INTEGER,
    candidate_party_affiliation: DataTypes.INTEGER,
    candidate_incoming_seat_status: { type: DataTypes.STRING, unique: 'summaryIndex' },
    candidate_city: DataTypes.INTEGER,
    candidate_state: DataTypes.INTEGER,
    candidate_zip: DataTypes.INTEGER,
    indiv_itemized_contributions: { type: DataTypes.INTEGER, unique: 'summaryIndex' },
    indiv_unitemized_contributions: { type: DataTypes.INTEGER, unique: 'summaryIndex' },
    indiv_contributions: { type: DataTypes.INTEGER, unique: 'summaryIndex' },
    candidate_contributions: { type: DataTypes.INTEGER, unique: 'summaryIndex' },
    total_contributions: { type: DataTypes.INTEGER, unique: 'summaryIndex' },
    cash_on_hand_beg_of_period: DataTypes.INTEGER,
    cash_on_hand_clo_of_period: DataTypes.INTEGER,
    net_contributions: DataTypes.INTEGER,
    coverage_start_date: DataTypes.DATEONLY,
    coverage_end_date: DataTypes.DATEONLY

  })
}