
module.exports = function(sequelize, DataTypes){

  return sequelize.define('contribution', {
    candidate_summary_id: { type: DataTypes.INTEGER, allowNull: false },
    fec_spender_id: { type: DataTypes.STRING, allowNull: false },
    spender_name: { type: DataTypes.STRING, allowNull: false },
    election_type: { type: DataTypes.STRING, allowNull: false },
    expenditure_amount: { type: DataTypes.INTEGER, allowNull: false },
    expenditure_date: DataTypes.DATEONLY,
    aggregate_amount: { type: DataTypes.INTEGER, allowNull: false },
    support_or_oppose: { type: DataTypes.STRING, allowNull: false },
    purpose: { type: DataTypes.STRING, allowNull: false },
    name_of_payee: { type: DataTypes.STRING, allowNull: false },
    filing_receipt_date: { type: DataTypes.DATEONLY, allowNull: false },
    dissemination_date: DataTypes.DATEONLY
  }, {
    indexes: [
      { unique: true, fields: ['legislator_id', 'name_of_payee', 'filing_receipt_date', 'fec_spender_id'] },
      { fields: ['candidate_summary_id'] }
    ],
    underscored: true
  })
}