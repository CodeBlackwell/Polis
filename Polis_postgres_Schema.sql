CREATE TABLE "Candidate_Summaries" (
	"lin_ima" Text NOT NULL,
	"can_id" Text NOT NULL UNIQUE,
	"can_nam" Text NOT NULL,
	"can_off" Text NOT NULL,
	"can_off_sta" Text NOT NULL UNIQUE,
	"can_off_dis" BIGINT  NOT NULL,
	"can_par_aff" Text NOT NULL,
	"can_inc_cha_open_sea" Text NOT NULL,
	"can_str1" Text,
	"can_str2" Text,
	"can_cit" Text NOT NULL,
	"can_sta" Text NOT NULL,
	"can_zip" BIGINT NOT NULL,
	"ind_ite_cont" MONEY,
	"ind_uni_cont" MONEY,
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
	"open_exp" MONEY,
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
	"cov_sta_date" DATE NOT NULL,
	"cov_end_date" DATE,

	CONSTRAINT Candidate_Summaries_pk PRIMARY KEY ("can_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Contributions" (
	"can_id" TEXT,
	"can_nam" TEXT,
	"spe_id" TEXT NOT NULL,
	"spe_nam" TEXT NOT NULL,
	"ele_typ" TEXT NOT NULL,
	"can_off_sta" TEXT NOT NULL,
	"can_off_dis" BIGINT NOT NULL,
	"can_off" TEXT NOT NULL,
	"can_par_aff" TEXT NOT NULL,
	"exp_amo" MONEY NOT NULL,
	"exp_dat" DATE NOT NULL,
	"agg_amo" MONEY NOT NULL,
	"sup_opp" TEXT NOT NULL,
	" pur" TEXT NOT NULL,
	"pay" TEXT NOT NULL,
	"file_num" BIGINT NOT NULL,
	"amn_ind" TEXT NOT NULL,
	"tra_id" TEXT NOT NULL,
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
	"com_id" TEXT NOT NULL,
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







