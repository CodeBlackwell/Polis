CREATE TABLE "Candidate_Summaries" (
	"can_id" VARCHAR(15) NOT NULL UNIQUE,
	"lin_ima" VARCHAR(200) NOT NULL,
	"can_nam" VARCHAR(50) NOT NULL,
	"can_off" VARCHAR(50) NOT NULL,
	"can_off_sta" VARCHAR(3) NOT NULL UNIQUE,
	"can_off_dis" BIGINT  NOT NULL,
	"can_par_aff" VARCHAR(10) NOT NULL,
	"can_inc_cha_open_sea" VARCHAR(15) NOT NULL,
	"can_str1" VARCHAR(30),
	"can_str2" VARCHAR(30),
	"can_cit" VARCHAR(30) NOT NULL,
	"can_sta" VARCHAR(3) NOT NULL,
	"can_zip" BIGINT NOT NULL,
	"ind_ite_cont" DECIMAL(15, 10),
	"ind_uni_cont" DECIMAL(15, 10),
	"ind_con" DECIMAL(15, 10),
	"par_com_con" DECIMAL(15, 10),
	"oth_com_con" DECIMAL(15, 10),
	"can_con" DECIMAL(15, 10),
	"tra_fro_oth_aut_com" DECIMAL(15, 10),
	"can_loa" DECIMAL(15, 10),
	"oth_loa" DECIMAL(15, 10),
	"tot_loa" DECIMAL(15, 10),
	"off_to_ope_exp" DECIMAL(15, 10),
	"off_to_fun" DECIMAL(15, 10),
	"off_to_leg_acc" DECIMAL(15, 10),
	"oth_rec" DECIMAL(15, 10),
	"tot_rec" DECIMAL(15, 10),
	"open_exp" DECIMAL(15, 10),
	"exe_leg_acc_dis" DECIMAL(15, 10),
	"fun_dis" DECIMAL(15, 10),
	"tra_to_oth_com" DECIMAL(15, 10),
	"can_loa_rep" DECIMAL(15, 10),
	"oth_loa_rep" DECIMAL(15, 10),
	"tot_loa_rep" DECIMAL(15, 10),
	"ind_ref" DECIMAL(15, 10),
	"par_com_ref" DECIMAL(15, 10),
	"oth_com_ref" DECIMAL(15, 10),
	"tot_con_ref" DECIMAL(15, 10),
	"oth_dis" DECIMAL(15, 10),
	"tot_dis" DECIMAL(15, 10),
	"cas_on_han_beg_of_per" DECIMAL(15, 10),
	"cas_on_han_clo_of_per" DECIMAL(15, 10),
	"net_con" DECIMAL(15, 10),
	"net_ope_exp" DECIMAL(15, 10),
	"deb_owe_by_com" DECIMAL(15, 10),
	"deb_owe_to_com" DECIMAL(15, 10),
	"cov_sta_date" DATE NOT NULL,
	CONSTRAINT Candidate_Summaries_pk PRIMARY KEY ("can_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Contributions" (
	"can_id" VARCHAR(11),
	"can_nam" VARCHAR(40),
	"spe_id" VARCHAR(40) NOT NULL,
	"40" VARCHAR(40) NOT NULL,
	"ele_typ" VARCHAR(3) NOT NULL,
	"can_off_sta" VARCHAR(3) NOT NULL,
	"can_off_dis" BIGINT NOT NULL,
	"can_off" VARCHAR(3) NOT NULL,
	"can_par_aff" VARCHAR(5) NOT NULL,
	"exp_amo" DECIMAL(15, 10) NOT NULL,
	"exp_dat" DATE NOT NULL,
	"agg_amo" DECIMAL(15, 10) NOT NULL,
	"sup_opp" VARCHAR(12) NOT NULL,
	" pur" VARCHAR(25) NOT NULL,
	"pay" VARCHAR(25) NOT NULL,
	"file_num" BIGINT NOT NULL,
	"amn_ind" VARCHAR(3) NOT NULL,
	"tra_id" VARCHAR(30) NOT NULL,
	"ima_num" BIGINT NOT NULL,
	"rec_dat" DATE NOT NULL,
	"prev_file_num" BIGINT,
	"dissem_dt" DATE,
	CONSTRAINT Contributions_pk PRIMARY KEY ("tra_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Districts" (
	"zip_code" BIGINT NOT NULL,
	"state" VARCHAR(4) NOT NULL,
	"district" BIGINT NOT NULL,
	CONSTRAINT Districts_pk PRIMARY KEY ("zip_code")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "LDR_PAC_Sponsor" (
	"com_id" VARCHAR(15) NOT NULL,
	"com_nam" VARCHAR(100),
	"lin_ima" VARCHAR(100),
	"spo_nam" VARCHAR(100),
	"aff_com_nam" VARCHAR(100),
	"tot_rec" DECIMAL(15, 10),
	"tot_dis" DECIMAL(15, 10),
	"cas_on_han" DECIMAL(15, 10),
	"cov_end_dat" DECIMAL(15, 10),
	CONSTRAINT LDR_PAC_Sponsor_pk PRIMARY KEY ("com_id")
) WITH (
  OIDS=FALSE
);







