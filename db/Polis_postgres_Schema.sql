CREATE TABLE "Candidate_Summaries" (
	"lin_ima" Text,
	"can_id" Text UNIQUE,
	"can_nam" Text,
	"can_off" Text,
	"can_off_sta" Text,
	"can_off_dis" BIGINT ,
	"can_par_aff" Text,
	"can_inc_cha_ope_sea" Text,
	"can_str1" Text,
	"can_str2" Text,
	"can_cit" Text,
	"can_sta" Text,
	"can_zip" BIGINT,
	"ind_ite_con" MONEY,
	"ind_uni_con" MONEY,
	"ind_con" MONEY,
	"par_com_con" MONEY,
	"oth_com_con" MONEY,
	"can_con" MONEY,
	"tot_con" MONEY,
	"tra_fro_oth_aut_com" MONEY,
	"can_loa" MONEY,
	"oth_loa" MONEY,
	"tot_loa" MONEY,
	"off_to_ope_exp" MONEY,
	"off_to_fun" MONEY,
	"off_to_leg_acc" MONEY,
	"oth_rec" MONEY,
	"tot_rec" MONEY,
	"ope_exp" MONEY,
	"exe_leg_acc_dis" MONEY,
	"fun_dis" MONEY,
	"tra_to_oth_aut_com" MONEY,
	"can_loa_rep" MONEY,
	"oth_loa_rep" MONEY,
	"tot_loa_rep" MONEY,
	"ind_ref" MONEY,
	"par_com_ref" MONEY,
	"oth_com_ref" MONEY,
	"tot_con_ref" MONEY,
	"oth_dis" MONEY,
	"tot_dis" MONEY,
	"cas_on_han_beg_of_per" MONEY,
	"cas_on_han_clo_of_per" MONEY,
	"net_con" MONEY,
	"net_ope_exp" MONEY,
	"deb_owe_by_com" MONEY,
	"deb_owe_to_com" MONEY,
	"cov_sta_dat" DATE,
	"cov_end_dat" DATE,

	CONSTRAINT Candidate_Summaries_pk PRIMARY KEY ("can_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Contributions" (
	"can_id" TEXT,
	"can_nam" TEXT,
	"spe_id" TEXT,
	"spe_nam" TEXT,
	"ele_typ" TEXT,
	"can_off_sta" TEXT,
	"can_off_dis" VARCHAR,
	"can_off" TEXT,
	"can_par_aff" TEXT,
	"exp_amo" MONEY,
	"exp_dat" Text,
	"agg_amo" MONEY,
	"sup_opp" TEXT,
	"pur" TEXT,
	"pay" TEXT,
	"file_num" BIGINT,
	"amn_ind" TEXT,
	"tra_id" TEXT,
	"ima_num" BIGINT,
	"rec_dat" TEXT,
	"prev_file_num" TEXT,
	"dissem_dt" TEXT
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Districts" (
	"zip_code" BIGINT,
	"state" VARCHAR(4),
	"district" BIGINT,
	CONSTRAINT Districts_pk PRIMARY KEY ("zip_code")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "LDR_PAC_Sponsor" (
	"com_id" TEXT,
	"com_nam" TEXT,
	"lin_ima" TEXT,
	"spo_nam" TEXT,
	"aff_com_nam" TEXT,
	"tot_rec" MONEY,
	"tot_dis" MONEY,
	"cas_on_han" MONEY,
	"cov_end_dat" DATE,
	CONSTRAINT LDR_PAC_Sponsor_pk PRIMARY KEY ("com_id")
) WITH (
  OIDS=FALSE
);







