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
	"ind_ite_con" BIGINT,
	"ind_uni_con" BIGINT,
	"ind_con" BIGINT,
	"par_com_con" BIGINT,
	"oth_com_con" BIGINT,
	"can_con" BIGINT,
	"tot_con" BIGINT,
	"tra_fro_oth_aut_com" BIGINT,
	"can_loa" BIGINT,
	"oth_loa" BIGINT,
	"tot_loa" BIGINT,
	"off_to_ope_exp" BIGINT,
	"off_to_fun" BIGINT,
	"off_to_leg_acc" BIGINT,
	"oth_rec" BIGINT,
	"tot_rec" BIGINT,
	"ope_exp" BIGINT,
	"exe_leg_acc_dis" BIGINT,
	"fun_dis" BIGINT,
	"tra_to_oth_aut_com" BIGINT,
	"can_loa_rep" BIGINT,
	"oth_loa_rep" BIGINT,
	"tot_loa_rep" BIGINT,
	"ind_ref" BIGINT,
	"par_com_ref" BIGINT,
	"oth_com_ref" BIGINT,
	"tot_con_ref" BIGINT,
	"oth_dis" BIGINT,
	"tot_dis" BIGINT,
	"cas_on_han_beg_of_per" BIGINT,
	"cas_on_han_clo_of_per" BIGINT,
	"net_con" BIGINT,
	"net_ope_exp" BIGINT,
	"deb_owe_by_com" BIGINT,
	"deb_owe_to_com" BIGINT,
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
	"exp_amo" BIGINT,
	"exp_dat" Text,
	"agg_amo" BIGINT,
	"sup_opp" TEXT,
	"pur" TEXT,
	"pay" TEXT,
	"file_num" BIGINT,
	"amn_ind" TEXT,
	"tra_id" TEXT,
	"ima_num" BIGINT,
	"rec_dat" DATE,
	"prev_file_num" TEXT,
	"dissem_dt" DATE
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Districts" (
	"zip_code" BIGINT,
	"state" VARCHAR(4),
	"district" BIGINT
) WITH (
  OIDS=FALSE
);



CREATE TABLE "LDR_PAC_Sponsor" (
	"com_id" TEXT,
	"com_nam" TEXT,
	"lin_ima" TEXT,
	"spo_nam" TEXT,
	"aff_com_nam" TEXT,
	"tot_rec" BIGINT,
	"tot_dis" BIGINT,
	"cas_on_han" BIGINT,
	"cov_end_dat" DATE
	) WITH (
  OIDS=FALSE
);

CREATE TABLE "Legislators" (
	"last_name" TEXT,
	"first_name" TEXT,
	"birthday" DATE,
	"gender" VARCHAR(1),
	"type" VARCHAR(5),
	"state" VARCHAR(3),
	"district" VARCHAR(3),
	"party" VARCHAR(30),
	"url" TEXT,
	"address" TEXT,
	"phone" TEXT,
	"contact_form" TEXT,
	"rss_url" TEXT,
	"twitter" TEXT,
	"facebook" TEXT,
	"facebook_id" TEXT,
	"youtube" TEXT,
	"youtube_id" TEXT,
	"bioguide_id" TEXT,
	"thomas_id" VARCHAR(12),
	"open_secrets" TEXT,
	"lis_id" VARCHAR(5),
	"cspan_id" VARCHAR(20),
	"govtrack_id" VARCHAR(10),
	"votesmart_id" VARCHAR(10),
	"ballotpedia_id" TEXT,
	"washington_post_id" TEXT,
	"icpsr_id" VARCHAR(10),
	"wikipedia_id" VARCHAR(50)
) WITH (
	OIDS=FALSE
);






