
module.exports = function(sequelize, DataTypes){

  return sequelize.define('contribution', {
    fec_candidate_id: { type: DataTypes.STRING, unique: 'contributionIndex' },
    legislator_id: { type: DataTypes.INTEGER, allowNull: false },
    candidate_name: DataTypes.STRING,
    fec_spender_id: DataTypes.STRING,
    spender_name: { type: DataTypes.STRING, unique: 'contributionIndex' },
    election_type: { type: DataTypes.STRING, unique: 'contributionIndex' },
    candidate_office_state: DataTypes.STRING,
    candidate_office_district: DataTypes.INTEGER,
    candidate_office: DataTypes.STRING,
    candidate_party_affiliation: DataTypes.STRING,
    expenditure_amount: { type: DataTypes.STRING, unique: 'contributionIndex' },
    expenditure_date: { type: DataTypes.STRING, unique: 'contributionIndex' },
    aggregate_amount: DataTypes.STRING,
    support_or_oppose: { type: DataTypes.STRING, unique: 'contributionIndex' },
    purpose: DataTypes.STRING,
    name_of_payee: DataTypes.STRING,
    filing_receipt_date: { type: DataTypes.DATEONLY, unique: 'contributionIndex' },
    dissemination_date: DataTypes.DATEONLY
  })
}