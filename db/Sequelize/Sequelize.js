var Sequelize = require('sequelize')

var connection = new Sequelize('Polis', 'root', 'Dreamwork21', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

var candidate_summary = connection.define('candidate_summary', {
  lin_ima: Sequelize.TEXT,
  can_id: Sequelize.STRING,
  can_nam: Sequelize.STRING,
  can_off: Sequelize.STRING,
  can_off_sta: Sequelize.STRING,
  can_off_dis: Sequelize.INTEGER,
  can_par_aff: Sequelize.INTEGER,
  can_inc_cha_ope_sea: Sequelize.INTEGER,
  can_str1: Sequelize.INTEGER,
  can_str2: Sequelize.INTEGER,
  can_cit: Sequelize.INTEGER,
  can_sta: Sequelize.INTEGER,
  can_zip: Sequelize.INTEGER,
  ind_ite_con: Sequelize.INTEGER,
  ind_uni_con: Sequelize.INTEGER,
  ind_con: Sequelize.INTEGER,
  par_com_con: Sequelize.INTEGER,
  oth_com_con: Sequelize.INTEGER,
  can_con: Sequelize.INTEGER,
  tot_con: Sequelize.INTEGER,
  tra_fro_oth_aut_com: Sequelize.INTEGER,
  can_loa: Sequelize.INTEGER,
  oth_loa: Sequelize.INTEGER,
  tot_loa: Sequelize.INTEGER,
  off_to_ope_exp: Sequelize.INTEGER,
  off_to_fun: Sequelize.INTEGER,
  off_to_leg_acc: Sequelize.INTEGER,
  oth_rec: Sequelize.INTEGER,
  tot_rec: Sequelize.INTEGER,
  ope_exp: Sequelize.INTEGER,
  exe_leg_acc_dis: Sequelize.INTEGER,
  fun_dis: Sequelize.INTEGER,
  tra_to_oth_aut_com: Sequelize.INTEGER,
  can_loa_rep: Sequelize.INTEGER,
  oth_loa_rep: Sequelize.INTEGER,
  tot_loa_rep: Sequelize.INTEGER,
  ind_ref: Sequelize.INTEGER,
  par_com_ref: Sequelize.INTEGER,
  oth_com_ref: Sequelize.INTEGER,
  tot_con_ref: Sequelize.INTEGER,
  oth_dis: Sequelize.INTEGER,
  tot_dis: Sequelize.INTEGER,
  cas_on_han_beg_of_per: Sequelize.INTEGER,
  cas_on_han_clo_of_per: Sequelize.INTEGER,
  net_con: Sequelize.INTEGER,
  net_ope_exp: Sequelize.INTEGER,
  deb_owe_by_com: Sequelize.INTEGER,
  deb_owe_to_com: Sequelize.INTEGER,
  cov_sta_dat: Sequelize.DATEONLY,
  cov_end_dat: Sequelize.DATEONLY

})

var legislators = connection.define('legislators', {
  last_name: Sequelize.STRING,
  first_name: Sequelize.STRING,
  birthday: Sequelize.STRING,
  gender: Sequelize.STRING,
  type: Sequelize.STRING,
  state: Sequelize.STRING,
  district: Sequelize.STRING,
  party: Sequelize.STRING,
  url: Sequelize.STRING,
  address: Sequelize.STRING,
  phone: Sequelize.STRING,
  contact_form: Sequelize.STRING,
  rss_url: Sequelize.STRING,
  twitter: Sequelize.STRING,
  facebook: Sequelize.STRING,
  facebook_id: Sequelize.STRING,
  youtube: Sequelize.STRING,
  youtube_id: Sequelize.STRING,
  bioguide_id: Sequelize.STRING,
  thomas_id: Sequelize.STRING,
  opensecrets_id: Sequelize.STRING,
  lis_id: Sequelize.STRING,
  cspan_id: Sequelize.STRING,
  govtrack_id: Sequelize.STRING,
  votesmart_id: Sequelize.STRING,
  ballotpedia_id: Sequelize.STRING,
  washington_post_id: Sequelize.STRING,
  icpsr_id: Sequelize.STRING,
  wikipedia_id: Sequelize.STRING
})

var contributors = conncection.define('contributors', {
  can_id: Sequelize.STRING,
  can_nam: Sequelize.STRING,
  spe_id: Sequelize.STRING,
  spe_nam: Sequelize.STRING,
  ele_typ: Sequelize.STRING,
  can_off_sta: Sequelize.STRING,
  can_off_dis: Sequelize.INTEGER,
  can_off: Sequelize.STRING,
  can_par_aff: Sequelize.STRING,
  exp_amo: Sequelize.STRING,
  exp_dat: Sequelize.STRING,
  agg_amo: Sequelize.STRING,
  sup_opp: Sequelize.STRING,
  pur: Sequelize.STRING,
  pay: Sequelize.STRING,
  file_num: Sequelize.INTEGER,
  amn_ind: Sequelize.STRING,
  tra_id: Sequelize.STRING,
  ima_num: Sequelize.INTEGER,
  rec_dat: Sequelize.DATEONLY,
  prev_file_num: Sequelize.STRING,
  dissem_dt: Sequelize.DATEONLY
})








connection.sync().then(function () {
  
})