
import React, { useRef, useEffect, useState } from "react";

const LoudoutRandomizer = () => {

    //Default Ammo Types
    const COMPACT = 'compact';
    const MEDIUM = 'medium';
    const LONG = 'long';
    const SHOTGUN = 'shotgun';
    const SPECIAL = 'special';
    const MELEE = 'melee';

    //Special Ammo Types
    const NONE = '';
    const INCENDIARY = 'Incendiary';
    const HIGH_VELOCITY = 'High Velocity';
    const SPITZER = 'Spitzer';
    const DUMDUM = 'Dumdum';
    const FMJ = 'FMJ';
    const EXPLOSIVE = 'Explosive';
    const POISON = 'Poison';
    const FLECHETTE = 'Flechette';
    const STARSHELL = 'Starshell';
    const DRAGON_BREATH = 'Dragon Breath';
    const SLUG = 'Slug';
    const PENNY_SHOT = 'Penny Shot'

    const DEADEYE = 'Deadeye';
    const MARKSMAN = 'Marksman';
    const SNIPER = 'Sniper';

    //Small Slot Weapons
    const weaponsSmall = [
        { name: 'Bornheim No. 3', size: 'S', defaultAmmo: COMPACT, specialAmmo: [[NONE, INCENDIARY, HIGH_VELOCITY]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661889146/Tarot%20Cards/borneheim-no3_vctocq.png' },
        { name: 'Bornheim No. 3 Extended', size: 'S', defaultAmmo: COMPACT, specialAmmo: [[NONE, INCENDIARY, HIGH_VELOCITY]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661889055/Tarot%20Cards/bornheim-extended_ktju8j.png' },
        { name: 'Caldwell 92 New Army', size: 'S', defaultAmmo: COMPACT, specialAmmo: [[NONE, DUMDUM, FMJ]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661966102/Tarot%20Cards/new-army_ecrtbw.png' },
        { name: 'Caldwell Conversion Chain Pistol', size: 'S', defaultAmmo: COMPACT, specialAmmo: [[NONE, DUMDUM, FMJ]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661966101/Tarot%20Cards/conversion-chain_zvgjar.png' },
        { name: 'Caldwell Conversion Pistol', size: 'S', defaultAmmo: COMPACT, specialAmmo: [[NONE, DUMDUM, FMJ]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661966103/Tarot%20Cards/conversion-base_sycuwu.png' },
        { name: 'Caldwell Conversion Uppercut', size: 'S', defaultAmmo: LONG, specialAmmo: [[NONE, INCENDIARY, EXPLOSIVE]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661966101/Tarot%20Cards/uppercut_gk0gq0.png' },
        { name: 'Caldwell Pax', size: 'S', defaultAmmo: MEDIUM, specialAmmo: [[NONE, INCENDIARY, DUMDUM]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661966101/Tarot%20Cards/pax-base_ppith7.png' },
        { name: 'Caldwell Pax Claw', size: 'S', defaultAmmo: MEDIUM, specialAmmo: [[NONE, INCENDIARY, DUMDUM]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661966103/Tarot%20Cards/pax-claw_rrbyim.png' },
        { name: 'Cavalry Saber', size: 'S', defaultAmmo: MELEE, specialAmmo: [[NONE]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661966102/Tarot%20Cards/saber_m9f3l6.png' },
        { name: 'Dolch 96', size: 'S', defaultAmmo: SPECIAL, specialAmmo: [[NONE]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661966103/Tarot%20Cards/dolch96_oqiahd.png' },
        { name: 'Hand Crossbow', size: 'S', defaultAmmo: SPECIAL, specialAmmo: [[NONE, 'Poison Bolt', 'Chaos Bolt', 'Choke Bolt'], [NONE, 'Poison Bolt', 'Chaos Bolt', 'Choke Bolt']], extraAmmo: true, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661966103/Tarot%20Cards/hand-crossbow_pvrxk3.png' },
        { name: 'LeMat Mark II', size: 'S', defaultAmmo: COMPACT, secondaryAmmo: SHOTGUN, specialAmmo: [[NONE, INCENDIARY, FMJ], [NONE, STARSHELL, DRAGON_BREATH, SLUG]], extraAmmo: true, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661966103/Tarot%20Cards/lemat_z1uamh.png' },
        { name: 'Machete', size: 'S', defaultAmmo: MELEE, specialAmmo: [[NONE]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661966101/Tarot%20Cards/machete_tleqzn.png' },
        { name: 'Nagant M1895', size: 'S', defaultAmmo: COMPACT, specialAmmo: [[NONE, POISON, HIGH_VELOCITY]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661966103/Tarot%20Cards/nagant-base_iogjlq.png' },
        { name: 'Nagant M1895 Officer', size: 'S', defaultAmmo: COMPACT, specialAmmo: [[NONE, POISON, HIGH_VELOCITY]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661966103/Tarot%20Cards/nagant-officer_dxypdu.png' },
        { name: 'Nagant M1895 Officer Brawler', size: 'S', defaultAmmo: COMPACT, specialAmmo: [[NONE, POISON, HIGH_VELOCITY]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661966104/Tarot%20Cards/nagant-officer-brawler_uyzing.png' },
        { name: 'Nagant M1895 Silencer', size: 'S', defaultAmmo: COMPACT, specialAmmo: [[NONE, POISON, HIGH_VELOCITY]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661966104/Tarot%20Cards/nagant-silencer_efllfh.png' },
        { name: 'Scottfield Model 3', size: 'S', defaultAmmo: MEDIUM, specialAmmo: [[NONE, INCENDIARY, FMJ]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661966104/Tarot%20Cards/scott-base_un5zlb.png' },
        { name: 'Scottfield Model 3 Brawler', size: 'S', defaultAmmo: MEDIUM, specialAmmo: [[NONE, INCENDIARY, FMJ]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661966101/Tarot%20Cards/scott-brawler_te1bnq.png' },
        { name: 'Scottfield Model 3 Spitfire', size: 'S', defaultAmmo: MEDIUM, specialAmmo: [[NONE, INCENDIARY, FMJ]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661966101/Tarot%20Cards/scott-spitfire_qvr7tf.png' },
        { name: 'Scottfield Model 3 Swift', size: 'S', defaultAmmo: MEDIUM, specialAmmo: [[NONE, INCENDIARY, FMJ]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661966102/Tarot%20Cards/scott-swift_pwe0co.png' },
        { name: 'Sparks Pistol', size: 'S', defaultAmmo: LONG, specialAmmo: [[NONE, INCENDIARY, POISON, FMJ], [NONE, INCENDIARY, POISON, FMJ]], extraAmmo: true, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661966103/Tarot%20Cards/sparks-pistol_vn8nm1.png' },
    ];

    //Weapon Pairs
    const weaponsDual = [
        { name: 'Bornheim No. 3 Pair', size: 'M', defaultAmmo: COMPACT, specialAmmo: [[NONE, INCENDIARY, HIGH_VELOCITY]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661967911/Tarot%20Cards/borneheim-no3-pair_mhjlsz.png' },
        { name: 'Bornheim No. 3 Extended Pair', size: 'M', defaultAmmo: COMPACT, specialAmmo: [[NONE, INCENDIARY, HIGH_VELOCITY]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661967911/Tarot%20Cards/bornheim-extended-pair_julyoo.png' },
        { name: 'Caldwell 92 New Army Pair', size: 'M', defaultAmmo: COMPACT, specialAmmo: [[NONE, DUMDUM, FMJ]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661967706/Tarot%20Cards/new-army-pair_gwebjw.png' },
        { name: 'Caldwell Conversion Chain Pistol Pair', size: 'M', defaultAmmo: COMPACT, specialAmmo: [[NONE, DUMDUM, FMJ]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661967704/Tarot%20Cards/conversion-chain_zy806q.png' },
        { name: 'Caldwell Conversion Pistol Pair', size: 'M', defaultAmmo: COMPACT, specialAmmo: [[NONE, DUMDUM, FMJ]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661967706/Tarot%20Cards/conversion-base-pair_inwfqt.png' },
        { name: 'Caldwell Conversion Uppercut Pair', size: 'M', defaultAmmo: LONG, specialAmmo: [[NONE, INCENDIARY, EXPLOSIVE]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661967705/Tarot%20Cards/uppercut-pair_ubejbp.png' },
        { name: 'Caldwell Pax Pair', size: 'M', defaultAmmo: MEDIUM, specialAmmo: [[NONE, INCENDIARY, DUMDUM]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661967705/Tarot%20Cards/pax-base-pair_gtuzln.png' },
        { name: 'Caldwell Pax Claw Pair', size: 'M', defaultAmmo: MEDIUM, specialAmmo: [[NONE, INCENDIARY, DUMDUM]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661967706/Tarot%20Cards/pax-claw-pair_nxw1pl.png' },
        { name: 'Dolch 96 Pair', size: 'M', defaultAmmo: SPECIAL, specialAmmo: [[NONE]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661967705/Tarot%20Cards/dolch96-pair_ibsdcc.png' },
        { name: 'LeMat Mark II Pair', size: 'M', defaultAmmo: COMPACT, secondaryAmmo: SHOTGUN, specialAmmo: [[NONE, INCENDIARY, FMJ], [NONE, STARSHELL, DRAGON_BREATH, SLUG]], extraAmmo: true, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661967705/Tarot%20Cards/lemat-pair_l00nhz.png' },
        { name: 'Nagant M1895 Pair', size: 'M', defaultAmmo: COMPACT, specialAmmo: [[NONE, POISON, HIGH_VELOCITY]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661967705/Tarot%20Cards/nagant-base-pair_j2cfv9.png' },
        { name: 'Nagant M1895 Officer Pair', size: 'M', defaultAmmo: COMPACT, specialAmmo: [[NONE, POISON, HIGH_VELOCITY]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661967705/Tarot%20Cards/nagant-officer-pair_jypurm.png' },
        { name: 'Nagant M1895 Officer Brawler Pair', size: 'M', defaultAmmo: COMPACT, specialAmmo: [[NONE, POISON, HIGH_VELOCITY]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661967706/Tarot%20Cards/nagant-officer-brawler-pair_jqdvhs.png' },
        { name: 'Nagant M1895 Silencer Pair', size: 'M', defaultAmmo: COMPACT, specialAmmo: [[NONE, POISON, HIGH_VELOCITY]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661967705/Tarot%20Cards/nagant-silencer-pair_a8srvq.png' },
        { name: 'Scottfield Model 3 Pair', size: 'M', defaultAmmo: MEDIUM, specialAmmo: [[NONE, INCENDIARY, FMJ]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661967704/Tarot%20Cards/scott-base-pair_qjunmi.png' },
        { name: 'Scottfield Model 3 Brawler Pair', size: 'M', defaultAmmo: MEDIUM, specialAmmo: [[NONE, INCENDIARY, FMJ]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661967704/Tarot%20Cards/scott-brawler-pair_tfeamh.png' },
        { name: 'Scottfield Model 3 Spitfire Pair', size: 'M', defaultAmmo: MEDIUM, specialAmmo: [[NONE, INCENDIARY, FMJ]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661967704/Tarot%20Cards/scott-spitfire-pair_qpkxrj.png' },
        { name: 'Scottfield Model 3 Swift Pair', size: 'M', defaultAmmo: MEDIUM, specialAmmo: [[NONE, INCENDIARY, FMJ]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661967704/Tarot%20Cards/scott-swift-pair_tuyee5.png' },
        { name: 'Sparks Pistol Pair', size: 'M', defaultAmmo: LONG, specialAmmo: [[NONE, INCENDIARY, POISON, FMJ], [NONE, INCENDIARY, POISON, FMJ]], extraAmmo: true, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661967704/Tarot%20Cards/sparks-pistol-pair_xfd9j8.png' },
    ];

    //Medium Slot Weapons
    const weaponsMedium = [
        { name: 'Bornheim No. 3 Match', size: 'M', defaultAmmo: COMPACT, specialAmmo: [[NONE, INCENDIARY, HIGH_VELOCITY]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661887574/Tarot%20Cards/bornheim_match_mdngtb.jpg' },
        { name: 'Caldwell Rival 78 Handcannon', size: 'M', defaultAmmo: SHOTGUN, specialAmmo: [[NONE, FLECHETTE, SLUG, PENNY_SHOT]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661969329/Tarot%20Cards/caldwell78-handcannon_nxxxtm.png' },
        { name: 'Combat Axe', size: 'M', defaultAmmo: MELEE, specialAmmo: [[NONE]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661969327/Tarot%20Cards/axe_mfjk1l.png' },
        { name: 'Dolch 96 Percision', size: 'M', defaultAmmo: SPECIAL, specialAmmo: [[NONE]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661969327/Tarot%20Cards/dolch-precision_rhxkii.png' },
        { name: 'Hunting Bow', size: 'M', defaultAmmo: SPECIAL, specialAmmo: [[NONE, 'Poison Arrow', 'Concertina Arrow', 'Frag Arrow'], [NONE, 'Poison Arrow', 'Concertina Arrow', 'Frag Arrow']], extraAmmo: true, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661969326/Tarot%20Cards/bow_g0luia.png' },
        { name: 'Mosin-Nagant M1891 Obrez', size: 'M', defaultAmmo: LONG, specialAmmo: [[NONE, SPITZER, INCENDIARY]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661969327/Tarot%20Cards/mosin-compact_pc6gub.png' },
        { name: 'Mosin-Nagant M1891 Obrez Drum', size: 'M', defaultAmmo: LONG, specialAmmo: [[NONE, SPITZER, INCENDIARY]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661969327/Tarot%20Cards/mosin-drum_vdvwzm.png' },
        { name: 'Mosin-Nagant M1891 Obrez Mace', size: 'M', defaultAmmo: LONG, specialAmmo: [[NONE, SPITZER, INCENDIARY]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661969327/Tarot%20Cards/mosin-mace_rehfd7.png' },
        { name: 'Nagant M1895 Deadeye', size: 'M', defaultAmmo: COMPACT, specialAmmo: [[NONE, POISON, HIGH_VELOCITY]], scope: DEADEYE, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661969328/Tarot%20Cards/nagant-precision-deadeye_gwamg8.png' },
        { name: 'Nagant M1895 Precision', size: 'M', defaultAmmo: COMPACT, specialAmmo: [[NONE, POISON, HIGH_VELOCITY]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661969327/Tarot%20Cards/nagant-precision_fys7x0.png' },
        { name: 'Romero 77 Handcannon', size: 'M', defaultAmmo: SHOTGUN, specialAmmo: [[NONE, STARSHELL, DRAGON_BREATH, SLUG, PENNY_SHOT], [NONE, STARSHELL, DRAGON_BREATH, SLUG, PENNY_SHOT]], extraAmmo: true, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661969327/Tarot%20Cards/romero-handcannon_qsfkz3.png' },
        { name: 'Romero 77 Hatchet', size: 'M', defaultAmmo: SHOTGUN, specialAmmo: [[NONE, STARSHELL, DRAGON_BREATH, SLUG, PENNY_SHOT], [NONE, STARSHELL, DRAGON_BREATH, SLUG, PENNY_SHOT]], extraAmmo: true, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661969327/Tarot%20Cards/romero-hatchet_x9ixht.png' },
        { name: 'Scottfield Model 3 Precision', size: 'M', defaultAmmo: MEDIUM, specialAmmo: [[NONE, INCENDIARY, FMJ]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661969328/Tarot%20Cards/scott-precision_huft26.png' },
        { name: 'Specter 1882 Compact', size: 'M', defaultAmmo: SHOTGUN, specialAmmo: [[NONE, FLECHETTE, DRAGON_BREATH, SLUG, PENNY_SHOT]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661969328/Tarot%20Cards/specter-compact_ly2v1w.png' },
        { name: 'Springfield 1886 Compact', size: 'M', defaultAmmo: MEDIUM, specialAmmo: [[NONE, DUMDUM, EXPLOSIVE], [NONE, DUMDUM, EXPLOSIVE]], extraAmmo: true, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661969328/Tarot%20Cards/spring-compact_xta7uw.png' },
        { name: 'Springfield 1886 Compact Deadeye', size: 'M', defaultAmmo: MEDIUM, specialAmmo: [[NONE, DUMDUM, EXPLOSIVE], [NONE, DUMDUM, EXPLOSIVE]], extraAmmo: true, scope: DEADEYE, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661969328/Tarot%20Cards/spring-deadeye_m19msi.png' },
        { name: 'Springfield 1886 Compact Striker', size: 'M', defaultAmmo: MEDIUM, specialAmmo: [[NONE, DUMDUM, EXPLOSIVE], [NONE, DUMDUM, EXPLOSIVE]], extraAmmo: true, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661969328/Tarot%20Cards/spring-striker_f0miya.png' },
        { name: 'Winfield 1887 Terminus Handcannon', size: 'M', defaultAmmo: SHOTGUN, specialAmmo: [[NONE, FLECHETTE, DRAGON_BREATH, SLUG, PENNY_SHOT]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661969328/Tarot%20Cards/terminus-handcannon_lpgwdb.png' },
        { name: 'Winfield M1873C Vandal', size: 'M', defaultAmmo: COMPACT, specialAmmo: [[NONE, FMJ, HIGH_VELOCITY, INCENDIARY]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661969328/Tarot%20Cards/vandal_b0io7q.png' },
        { name: 'Winfield M1873C Vandal Deadeye', size: 'M', defaultAmmo: COMPACT, specialAmmo: [[NONE, FMJ, HIGH_VELOCITY, INCENDIARY]], scope: DEADEYE, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661969329/Tarot%20Cards/vandal-deadeye_wfcd39.png' },
        { name: 'Winfield M1873C Vandal Striker', size: 'M', defaultAmmo: COMPACT, specialAmmo: [[NONE, FMJ, HIGH_VELOCITY, INCENDIARY]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661969329/Tarot%20Cards/vandal-striker_iamla4.png' },
    ];

    //Large Slot Weapons
    const weaponsLarge = [
        { name: 'Berthier Mle 1892', size: 'L', defaultAmmo: LONG, specialAmmo: [[NONE, INCENDIARY, SPITZER]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971791/Tarot%20Cards/berthy-base_ra8mti.png' },
        { name: 'Berthier Mle 1892 Deadeye', size: 'L', defaultAmmo: LONG, specialAmmo: [[NONE, INCENDIARY, SPITZER]], scope: DEADEYE, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971792/Tarot%20Cards/berthy-deadeye_wfumz5.png' },
        { name: 'Berthier Mle 1892 Riposte', size: 'L', defaultAmmo: LONG, specialAmmo: [[NONE, INCENDIARY, SPITZER]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971792/Tarot%20Cards/berthy-bayo_ifchjm.png' },
        { name: 'Bomb Lance', size: 'L', defaultAmmo: SPECIAL, specialAmmo: [[NONE]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971792/Tarot%20Cards/bomblance_ys0agf.png' },
        { name: 'Caldwell Rival 78', size: 'L', defaultAmmo: SHOTGUN, specialAmmo: [[NONE, FLECHETTE, SLUG, PENNY_SHOT]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971792/Tarot%20Cards/caldwell78_c0qhqi.png' },
        { name: 'Crossbow', size: 'L', defaultAmmo: SPECIAL, specialAmmo: [[NONE, 'Explosive Bolt', 'Shot Bolt'], [NONE, 'Explosive Bolt', 'Shot Bolt']], extraAmmo: true, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971792/Tarot%20Cards/crossbow_zmahfn.png' },
        { name: 'Crown & King Auto-5', size: 'L', defaultAmmo: SHOTGUN, specialAmmo: [[NONE, SLUG, PENNY_SHOT]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971792/Tarot%20Cards/king_mosprl.png' },
        { name: 'Lebel 1886', size: 'L', defaultAmmo: LONG, specialAmmo: [[NONE, INCENDIARY, SPITZER]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661888932/Tarot%20Cards/lebel_fxon4g.png' },
        { name: 'Lebel 1886 Aperture', size: 'L', defaultAmmo: LONG, specialAmmo: [[NONE, INCENDIARY, SPITZER]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661888788/Tarot%20Cards/lebel-apeture_huzfek.png' },
        { name: 'Lebel 1886 Marksman', size: 'L', defaultAmmo: LONG, specialAmmo: [[NONE, INCENDIARY, SPITZER]], scope: MARKSMAN, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661883811/Tarot%20Cards/lebel_marksman.jpeg_yvfcyq.png' },
        { name: 'Lebel 1886 Talon', size: 'L', defaultAmmo: LONG, specialAmmo: [[NONE, INCENDIARY, SPITZER]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661888684/Tarot%20Cards/lebel-talon_mgx3gs.png' },
        { name: 'Martini-Henry IC1', size: 'L', defaultAmmo: LONG, specialAmmo: [[NONE, INCENDIARY, FMJ, EXPLOSIVE], [NONE, INCENDIARY, FMJ, EXPLOSIVE]], extraAmmo: true, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971792/Tarot%20Cards/martini-base_a2kupm.png' },
        { name: 'Martini-Henry IC1 Deadeye', size: 'L', defaultAmmo: LONG, specialAmmo: [[NONE, INCENDIARY, FMJ, EXPLOSIVE], [NONE, INCENDIARY, FMJ, EXPLOSIVE]], extraAmmo: true, scope: DEADEYE, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971792/Tarot%20Cards/martini-deadeye_n3sddj.png' },
        { name: 'Martini-Henry IC1 Marksman', size: 'L', defaultAmmo: LONG, specialAmmo: [[NONE, INCENDIARY, FMJ, EXPLOSIVE], [NONE, INCENDIARY, FMJ, EXPLOSIVE]], extraAmmo: true, scope: MARKSMAN, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971793/Tarot%20Cards/martini-marksman_suayru.png' },
        { name: 'Martini-Henry IC1 Riposte', size: 'L', defaultAmmo: LONG, specialAmmo: [[NONE, INCENDIARY, FMJ, EXPLOSIVE], [NONE, INCENDIARY, FMJ, EXPLOSIVE]], extraAmmo: true, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971788/Tarot%20Cards/martini-riposte_cpcfgb.png' },
        { name: 'Mosin-Nagant M1891', size: 'L', defaultAmmo: LONG, specialAmmo: [[NONE, INCENDIARY, SPITZER]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971788/Tarot%20Cards/mosin-base_p0jf6k.png' },
        { name: 'Mosin-Nagant M1891 Avtomat', size: 'L', defaultAmmo: LONG, specialAmmo: [[NONE, INCENDIARY, SPITZER]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971788/Tarot%20Cards/avto_ecnlmd.png' },
        { name: 'Mosin-Nagant M1891 Bayonet', size: 'L', defaultAmmo: LONG, specialAmmo: [[NONE, INCENDIARY, SPITZER]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971788/Tarot%20Cards/mosin-bayo_r6hpqx.png' },
        { name: 'Mosin-Nagant M1891 Sniper', size: 'L', defaultAmmo: LONG, specialAmmo: [[NONE, INCENDIARY, SPITZER]], scope: SNIPER, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971788/Tarot%20Cards/mosin-sniper_pdwd2j.png' },
        { name: 'Nagant M1895 Officer Carbine', size: 'L', defaultAmmo: COMPACT, specialAmmo: [[NONE, POISON, HIGH_VELOCITY]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971788/Tarot%20Cards/carbine_lbn080.png' },
        { name: 'Nagant M1895 Officer Carbine Deadeye', size: 'L', defaultAmmo: COMPACT, specialAmmo: [[NONE, POISON, HIGH_VELOCITY]], scope: DEADEYE, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971788/Tarot%20Cards/carbine-deadeye_u2a8hf.png' },
        { name: 'Nitro Express Rifle', size: 'L', defaultAmmo: SPECIAL, specialAmmo: [[NONE, 'Shredder', EXPLOSIVE]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971788/Tarot%20Cards/nitro_btapmr.png' },
        { name: 'Romero 77', size: 'L', defaultAmmo: SHOTGUN, specialAmmo: [[NONE, STARSHELL, DRAGON_BREATH, SLUG, PENNY_SHOT], [NONE, STARSHELL, DRAGON_BREATH, SLUG, PENNY_SHOT]], extraAmmo: true, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971788/Tarot%20Cards/romero-base_lsmqpf.png' },
        { name: 'Romero 77 Alamo', size: 'L', defaultAmmo: SHOTGUN, specialAmmo: [[NONE, STARSHELL, DRAGON_BREATH, SLUG, PENNY_SHOT]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971788/Tarot%20Cards/alamo_k5cgun.png' },
        { name: 'Romero 77 Talon', size: 'L', defaultAmmo: SHOTGUN, specialAmmo: [[NONE, STARSHELL, DRAGON_BREATH, SLUG, PENNY_SHOT], [NONE, STARSHELL, DRAGON_BREATH, SLUG, PENNY_SHOT]], extraAmmo: true, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971788/Tarot%20Cards/romero-talon_ptscju.png' },
        { name: 'Sparks LRR', size: 'L', defaultAmmo: LONG, specialAmmo: [[NONE, INCENDIARY, POISON, FMJ], [NONE, INCENDIARY, POISON, FMJ]], extraAmmo: true, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971789/Tarot%20Cards/sparks-base_qdjarj.png' },
        { name: 'Sparks LRR Silencer', size: 'L', defaultAmmo: LONG, specialAmmo: [[NONE, INCENDIARY, POISON, FMJ], [NONE, INCENDIARY, POISON, FMJ]], extraAmmo: true, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971789/Tarot%20Cards/sparks-silenced_r2ry1j.png' },
        { name: 'Sparks LRR  Sniper', size: 'L', defaultAmmo: LONG, specialAmmo: [[NONE, INCENDIARY, POISON, FMJ], [NONE, INCENDIARY, POISON, FMJ]], extraAmmo: true, scope: SNIPER, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971789/Tarot%20Cards/sparks-sniper_gkstpb.png' },
        { name: 'Specter 1882', size: 'L', defaultAmmo: SHOTGUN, specialAmmo: [[NONE, FLECHETTE, DRAGON_BREATH, SLUG, PENNY_SHOT]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971789/Tarot%20Cards/specter-base_rmdrtl.png' },
        { name: 'Specter 1882 Bayonet', size: 'L', defaultAmmo: SHOTGUN, specialAmmo: [[NONE, FLECHETTE, DRAGON_BREATH, SLUG, PENNY_SHOT]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971789/Tarot%20Cards/specter-bayo_xsizqj.png' },
        { name: 'Springfield 1886', size: 'L', defaultAmmo: MEDIUM, specialAmmo: [[NONE, DUMDUM, EXPLOSIVE], [NONE, DUMDUM, EXPLOSIVE]], extraAmmo: true, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971789/Tarot%20Cards/spring-base_thkqqe.png' },
        { name: 'Springfield 1886 Marksman', size: 'L', defaultAmmo: MEDIUM, specialAmmo: [[NONE, DUMDUM, EXPLOSIVE], [NONE, DUMDUM, EXPLOSIVE]], extraAmmo: true, scope: MARKSMAN, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971790/Tarot%20Cards/spring-marksman_un87et.png' },
        { name: 'Vetterli 71 Karabiner', size: 'L', defaultAmmo: MEDIUM, specialAmmo: [[NONE, INCENDIARY, FMJ, HIGH_VELOCITY]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971789/Tarot%20Cards/vett-base_bxongl.png' },
        { name: 'Vetterli 71 Karabiner Bayonet', size: 'L', defaultAmmo: MEDIUM, specialAmmo: [[NONE, INCENDIARY, FMJ, HIGH_VELOCITY]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971790/Tarot%20Cards/vett-bayo_hmy6dh.png' },
        { name: 'Vetterli 71 Karabiner Deadeye', size: 'L', defaultAmmo: MEDIUM, specialAmmo: [[NONE, INCENDIARY, FMJ, HIGH_VELOCITY]], scope: DEADEYE, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971790/Tarot%20Cards/vett-deadeye_fqkyhq.png' },
        { name: 'Vetterli 71 Karabiner Marksman', size: 'L', defaultAmmo: MEDIUM, specialAmmo: [[NONE, INCENDIARY, FMJ, HIGH_VELOCITY]], scope: MARKSMAN, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971790/Tarot%20Cards/vett-marksman_btgz1x.png' },
        { name: 'Vetterli 71 Karabiner Silencer', size: 'L', defaultAmmo: MEDIUM, specialAmmo: [[NONE, INCENDIARY, FMJ, HIGH_VELOCITY]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971790/Tarot%20Cards/vett-silenced_wmcpfv.png' },
        { name: 'Winfield 1887 Terminus', size: 'L', defaultAmmo: SHOTGUN, specialAmmo: [[NONE, FLECHETTE, DRAGON_BREATH, SLUG, PENNY_SHOT]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971790/Tarot%20Cards/terminus_tk3wiz.png' },
        { name: 'Winfield 1893 Slate', size: 'L', defaultAmmo: SHOTGUN, specialAmmo: [[NONE, SLUG, PENNY_SHOT]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971790/Tarot%20Cards/sleight_daq5jy.png' },
        { name: 'Winfield M1873', size: 'L', defaultAmmo: COMPACT, specialAmmo: [[NONE, FMJ, HIGH_VELOCITY, INCENDIARY]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971790/Tarot%20Cards/winnie-base_mzaikz.png' },
        { name: 'Winfield M1873 Aperture', size: 'L', defaultAmmo: COMPACT, specialAmmo: [[NONE, FMJ, HIGH_VELOCITY, INCENDIARY]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971790/Tarot%20Cards/winnie-aperture_dxzds3.png' },
        { name: 'Winfield M1873 Musket Bayonet', size: 'L', defaultAmmo: COMPACT, specialAmmo: [[NONE, FMJ, HIGH_VELOCITY, INCENDIARY]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971790/Tarot%20Cards/winnie-musket_u4sjmw.png' },
        { name: 'Winfield M1873 Swift', size: 'L', defaultAmmo: COMPACT, specialAmmo: [[NONE, FMJ, HIGH_VELOCITY, INCENDIARY]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971791/Tarot%20Cards/winnie-swift_mhm1nx.png' },
        { name: 'Winfield M1873 Talon', size: 'L', defaultAmmo: COMPACT, specialAmmo: [[NONE, FMJ, HIGH_VELOCITY, INCENDIARY]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971791/Tarot%20Cards/winnie-talon_yamlpi.png' },
        { name: 'Winfield M1873C', size: 'L', defaultAmmo: COMPACT, specialAmmo: [[NONE, FMJ, HIGH_VELOCITY, INCENDIARY]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971791/Tarot%20Cards/winnie-c_m0ujs0.png' },
        { name: 'Winfield M1873C Marksman', size: 'L', defaultAmmo: COMPACT, specialAmmo: [[NONE, FMJ, HIGH_VELOCITY, INCENDIARY]], scope: MARKSMAN, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971791/Tarot%20Cards/winnie-sniper_mhbzbn.png' },
        { name: 'Winfield M1873C Silencer', size: 'L', defaultAmmo: COMPACT, specialAmmo: [[NONE, FMJ, HIGH_VELOCITY, INCENDIARY]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971791/Tarot%20Cards/winnie-silenced_gmcljj.png' },
        { name: 'Winfield M1876 Centennial', size: 'L', defaultAmmo: MEDIUM, specialAmmo: [[NONE, FMJ, POISON]], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971791/Tarot%20Cards/centennial_esmvx6.png' },
        { name: 'Winfield M1876 Centennial Sniper', size: 'L', defaultAmmo: MEDIUM, specialAmmo: [[NONE, FMJ, POISON]], scope: SNIPER, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661971791/Tarot%20Cards/centtenial-sniper_zgs69i.png' },
    ];

    //Special Ammo Images
    const specialAmmoImages = [
        { name: INCENDIARY, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661973456/Tarot%20Cards/incendiary_ervwwg.png' },
        { name: HIGH_VELOCITY, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661973456/Tarot%20Cards/high-velocity_j5va1a.png' },
        { name: SPITZER, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1662068487/Tarot%20Cards/spitzer_h5mt8a.png' },
        { name: DUMDUM, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661973456/Tarot%20Cards/dumdum_rno0w5.png' },
        { name: FMJ, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661973456/Tarot%20Cards/fmj_ddafsr.png' },
        { name: POISON, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1662068487/Tarot%20Cards/poison-ammo_rj7flv.png' },
        { name: EXPLOSIVE, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1662068487/Tarot%20Cards/explosive-ammo_dtjyeh.png' },
        { name: SLUG, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661973456/Tarot%20Cards/slug_fchcjd.png' },
        { name: STARSHELL, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1662068487/Tarot%20Cards/starshell_le3acs.png' },
        { name: DRAGON_BREATH, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1662068487/Tarot%20Cards/dragon-breath_bbhdkx.png' },
        { name: FLECHETTE, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661973456/Tarot%20Cards/flechette_lwckx8.png' },
        { name: PENNY_SHOT, image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661973456/Tarot%20Cards/pennyshot_e1wvfn.png' },
        { name: 'Poison Bolt', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1662068487/Tarot%20Cards/poison-bolt_q2qizk.png' },
        { name: 'Chaos Bolt', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1662068487/Tarot%20Cards/chaos-bolt_i0u66d.png' },
        { name: 'Choke Bolt', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1662068487/Tarot%20Cards/choke-bolt_wsur6o.png' },
        { name: 'Poison Arrow', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1662068487/Tarot%20Cards/poison-arrow_s55tso.png' },
        { name: 'Concertina Arrow', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1662068487/Tarot%20Cards/concertina-arrow_ikdyo2.png' },
        { name: 'Frag Arrow', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1662068487/Tarot%20Cards/frag-arrow_wtbgbt.png' },
        { name: 'Shot Bolt', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1662068487/Tarot%20Cards/shot-bolt_utygan.png' },
        { name: 'Explosive Bolt', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1662068487/Tarot%20Cards/explosive-xbow_xg9dlh.png' },
        { name: 'Shredder', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661973456/Tarot%20Cards/dumdum_rno0w5.png' },
    ];

    //Tools
    const tools = [
        { name: 'Alert Trip Mine', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661957236/Tarot%20Cards/alert-mine_cw742u.png' },
        { name: 'Blank Fire Decoys', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661956646/Tarot%20Cards/blankfire-decoys_wctalu.png' },
        { name: 'Choke Bomb', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661891054/Tarot%20Cards/choke-bomb_h1ugv8.png' },
        { name: 'Concertina Trip Mine', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661890746/Tarot%20Cards/concertina-mine_uwkm7u.png' },
        { name: 'Decoy Fuses', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661957238/Tarot%20Cards/decoy-fuses_y8cq36.png' },
        { name: 'Decoys', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661890748/Tarot%20Cards/decoys_gernzt.png' },
        { name: 'Dusters', type: 'melee', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661891055/Tarot%20Cards/dusters_okdzh4.png' },
        { name: 'Electric Lamp', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661890752/Tarot%20Cards/lamp_uyszss.png' },
        { name: 'First Aid Kit', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661890339/Tarot%20Cards/medkit_x1pqx5.png' },
        { name: 'Flare Pistol', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661957240/Tarot%20Cards/flare-pistol_jedtqh.png' },
        { name: 'Fusees', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661956595/Tarot%20Cards/fusee_yvsbvf.png' },
        { name: 'Heavy Knife', type: 'melee', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661890333/Tarot%20Cards/heavy-knife_uxnh6n.png' },
        { name: 'Knife', type: 'melee', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661891068/Tarot%20Cards/knife_xbrvxb.png' },
        { name: 'Knuckle Knife', type: 'melee', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661890750/Tarot%20Cards/knuckle-knife_ijtllt.png' },
        { name: 'Poison Trip Mine', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661956605/Tarot%20Cards/poison-mine_ajvdgf.png' },
        { name: 'Quad Derringer', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661890330/Tarot%20Cards/derringer_z0pbny.png' },
        { name: 'Spyglass', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661889783/Tarot%20Cards/spyglass_gzeu0h.png' },
        { name: 'Throwing Axes', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661957569/Tarot%20Cards/throwing-axes_lmveng.png' },
        { name: 'Throwing Knives', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661890346/Tarot%20Cards/throwing-knives_yfmt0q.png' },
    ];

    //Consumables
    const consumables = [
        { name: 'Ammo Box', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661891052/Tarot%20Cards/ammo-box_inhglj.png' },
        { name: 'Antidote Shot', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661957300/Tarot%20Cards/poison-shot_pgid9o.png' },
        { name: 'Big Dynamite Bundle', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661890739/Tarot%20Cards/big-dynamite-bundle_m8ujd6.png' },
        { name: 'Chaos Bomb', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661956638/Tarot%20Cards/chaos-bomb_k0kbp1.png' },
        { name: 'Concertina Bomb', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661957245/Tarot%20Cards/concertina-bomb_ivbxwk.png' },
        { name: 'Dynamite Bundle', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661890741/Tarot%20Cards/dynamite-bundle_fubjxp.png' },
        { name: 'Dynamite Stick', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661891060/Tarot%20Cards/dynamite-stick_rhwho9.png' },
        { name: 'Fire Bomb', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661890331/Tarot%20Cards/firebomb_xkroes.png' },
        { name: 'Flash Bomb', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661957571/Tarot%20Cards/flash-bomb_psqfkp.png' },
        { name: 'Frag Bomb', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661890743/Tarot%20Cards/frag_eqe339.png' },
        { name: 'Hellfire Bomb', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661957296/Tarot%20Cards/hellfire-bomb_asv4m4.png' },
        { name: 'Hive Bomb', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661957242/Tarot%20Cards/hive-bomb_thfmlh.png' },
        { name: 'Liquid Fire Bomb', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661890338/Tarot%20Cards/liquid-firebomb_h6iioi.png' },
        { name: 'Poison Bomb', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661891090/Tarot%20Cards/poison-bomb_mi0ohq.png' },
        { name: 'Regeneration Shot', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661956659/Tarot%20Cards/regen-shot_ggiihh.png' },
        { name: 'Stamina Shot', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661889797/Tarot%20Cards/stam-shot_dv2aun.png' },
        { name: 'Sticky Bomb', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661890756/Tarot%20Cards/sticky_xifdeg.png' },
        { name: 'Vitality Shot', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661890342/Tarot%20Cards/vitality-shot_zblhw9.png' },
        { name: 'Waxed Dynamite Stick', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661891065/Tarot%20Cards/wax-stick_r7zmqg.png' },
        { name: 'Weak Antidote Shot', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661956682/Tarot%20Cards/weak-antidote-shot_g19nsy.png' },
        { name: 'Weak Regeneration Shot', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661890377/Tarot%20Cards/weak-regen-shot_sruqvx.png' },
        { name: 'Weak Stamina Shot', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661956668/Tarot%20Cards/weak-stam-shot_yrudqa.png' },
        { name: 'Weak Vitality Shot', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661956675/Tarot%20Cards/weak-vitality-Shot_tj78le.png' },
    ];

    //Loader Logic
    const [loadingText, setLoadingText] = useState('GENERATE');
    const [repeat, setRepeat] = useState(false);
    const updateLoader = () => {
        const loadingCircle = document.querySelector('.loading-circle');
        let load = 0;

        const myInterval = setInterval(count, 140);
        function count() {
            if (load === 100) {
                setGenerating(false);
                setLoadingText(<img className='repeat' src='https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661865924/Tarot%20Cards/repeat_sor1y0.png' alt='' />);
                setRepeat(true);
                clearInterval(myInterval);
            } else {
                load += (load < 100);
                setLoadingText(load + '%');
            }
            loadingCircle.style.background = 'conic-gradient(from 0deg at 50% 50%, red 0%, red ' + load + '%, #101012 ' + load + '%)';
        }
    }

    //STATES///////////////////////////////////////////////////////////////////////////////

    //Main States
    const weaponsMasterList = [].concat(weaponsSmall, weaponsMedium, weaponsDual, weaponsLarge);
    const [weaponsPool, setWeaponsPool] = useState([].concat(weaponsSmall, weaponsMedium, weaponsDual, weaponsLarge));
    const [toolPool, setToolPool] = useState(tools);
    const [consumablePool, setConsumablePool] = useState(consumables);
    const [generating, setGenerating] = useState(false);

    //Toggle Options
    const [quartermaster, setQuartermaster] = useState(false);
    const [customAmmo, setCustomAmmo] = useState(false);
    const [disableScopes, setDisableScopes] = useState(false);
    const [fixedMedkit, setFixedMedkit] = useState(false);
    const [fixedMeleeTool, setFixedMeleeTool] = useState(false);

    //Weapons
    const [weaponOne, setWeaponOne] = useState('');
    const [weaponOneAmmo, setWeaponOneAmmo] = useState('');
    const [weaponOneAmmo2, setWeaponOneAmmo2] = useState('');
    const [weaponTwo, setWeaponTwo] = useState('');
    const [weaponTwoAmmo, setWeaponTwoAmmo] = useState('');
    const [weaponTwoAmmo2, setWeaponTwoAmmo2] = useState('');

    //Tools
    const [toolOne, setToolOne] = useState('');
    const [toolTwo, setToolTwo] = useState('');
    const [toolThree, setToolThree] = useState('');
    const [toolFour, setToolFour] = useState('');

    //Consumables
    const [consumableOne, setConsumableOne] = useState('');
    const [consumableTwo, setConsumableTwo] = useState('');
    const [consumableThree, setConsumableThree] = useState('');
    const [consumableFour, setConsumableFour] = useState('');

    //Text Outputs
    const [w1, setW1] = useState('');
    const [w2, setW2] = useState('');
    const [t1, setT1] = useState('');
    const [t2, setT2] = useState('');
    const [t3, setT3] = useState('');
    const [t4, setT4] = useState('');
    const [c1, setC1] = useState('');
    const [c2, setC2] = useState('');
    const [c3, setC3] = useState('');
    const [c4, setC4] = useState('');

    //Filters
    const [activeFilter, setActiveFilter] = useState('');
    const [toggleCompactAll, setToggleCompactAll] = useState(false);
    const [toggleMediumAll, setToggleMediumAll] = useState(false);
    const [toggleLongAll, setToggleLongAll] = useState(false);
    const [toggleShotgunAll, setToggleShotgunAll] = useState(false);
    const [toggleSpecialAll, setToggleSpecialAll] = useState(false);
    const [toggleMeleeAll, setToggleMeleeAll] = useState(false);
    const [toggleToolAll, setToggleToolAll] = useState(false);
    const [toggleConsumableAll, setToggleConsumableAll] = useState(false);


    //FUNCTIONS/////////////////////////////////////////////////////////////////////////////

    //Handle Toggle Scopes
    const handleDisableScopes = () => {
        setDisableScopes(!disableScopes);
        if (!disableScopes) {
            setWeaponsPool(weaponsPool.filter((weapon) => !weapon.scope));
        } else {
            let scopes = weaponsMasterList.filter((weapon) => weapon.scope);
            setWeaponsPool([].concat(weaponsPool, scopes));
        }
    }

    //Info Box Code   
    function consoleText(go, words, id, consoleId, colors) {
        if (colors === undefined) colors = ['#fff'];
        var visible = true;
        var con = document.getElementById(consoleId);
        var letterCount = 1;
        var x = 1;
        var waiting = false;
        var target = document.getElementById(id);
        target.setAttribute('style', 'color:' + colors[0]);
        window.setInterval(function () {

            if (waiting === false) {
                go(words[0].substring(0, letterCount))
                letterCount += x;
                if (letterCount > words[0].length) {
                    waiting = true;
                }
            }
        }, 120)
        window.setInterval(function () {
            if (visible === true) {
                con.className = 'console-underscore hidden'
                visible = false;

            } else {
                con.className = 'console-underscore'
                visible = true;
            }
        }, 400)
    }

    const clearText = () => {
        let idArray = ['w1', 'w2', 't1', 't2', 't3', 't4', 'c1', 'c2', 'c3', 'c4'];
        for (let i = 0; i < idArray.length; i++) {
            let target = document.getElementById(idArray[i]);
            target.innerHTML = "";
        }
    }

    const exclude = (category, id) => {
        let checkbox = document.getElementById(id);
        if (category === 'weapon') {
            if (checkbox.checked) {
                setWeaponsPool(weaponsPool.filter((item) => item.name !== id));
            } else {
                setWeaponsPool([].concat(weaponsPool, weaponsMasterList.filter((item) => item.name === id)));
            }
        } else if (category === 'tool') {
            if (checkbox.checked) {
                setToolPool(toolPool.filter((item) => item.name !== id));
            } else {
                setToolPool([].concat(toolPool, tools.filter((item) => item.name === id)));
            }
        } else if (category === 'consumable') {
            if (checkbox.checked) {
                setConsumablePool(consumablePool.filter((item) => item.name !== id));
            } else {
                setConsumablePool([].concat(consumablePool, consumables.filter((item) => item.name === id)));
            }
        }
    }

    const excludeAll = (type, id) => {
        let checkbox = document.getElementById(id);
        if (type === COMPACT) {
            let tempArr = weaponsMasterList.filter(item => item.defaultAmmo === type)
            if (checkbox.checked) {
                for (let i = 0; i < tempArr.length; i++) {
                    checkbox = document.getElementById(tempArr[i].name);
                    checkbox.checked = true;
                }
                setToggleCompactAll(true);
                setWeaponsPool(weaponsPool.filter((item) => item.defaultAmmo !== COMPACT));
            } else {
                for (let i = 0; i < tempArr.length; i++) {
                    checkbox = document.getElementById(tempArr[i].name);
                    checkbox.checked = false;
                }
                setToggleCompactAll(false);
                setWeaponsPool([].concat(weaponsPool, weaponsMasterList.filter((item) => item.defaultAmmo === COMPACT)));
            }
        } else if (type === MEDIUM) {
            let tempArr = weaponsMasterList.filter(item => item.defaultAmmo === type)
            if (checkbox.checked) {
                for (let i = 0; i < tempArr.length; i++) {
                    checkbox = document.getElementById(tempArr[i].name);
                    checkbox.checked = true;
                }
                setWeaponsPool(weaponsPool.filter((item) => item.defaultAmmo !== MEDIUM));
                setToggleMediumAll(true);
            } else {
                for (let i = 0; i < tempArr.length; i++) {
                    checkbox = document.getElementById(tempArr[i].name);
                    checkbox.checked = false;
                }
                setWeaponsPool([].concat(weaponsPool, weaponsMasterList.filter((item) => item.defaultAmmo === MEDIUM)));
                setToggleMediumAll(false);
            }
        } else if (type === LONG) {
            let tempArr = weaponsMasterList.filter(item => item.defaultAmmo === type)
            if (checkbox.checked) {
                for (let i = 0; i < tempArr.length; i++) {
                    checkbox = document.getElementById(tempArr[i].name);
                    checkbox.checked = true;
                }
                setWeaponsPool(weaponsPool.filter((item) => item.defaultAmmo !== LONG));
                setToggleLongAll(true);
            } else {
                for (let i = 0; i < tempArr.length; i++) {
                    checkbox = document.getElementById(tempArr[i].name);
                    checkbox.checked = false;
                }
                setWeaponsPool([].concat(weaponsPool, weaponsMasterList.filter((item) => item.defaultAmmo === LONG)));
                setToggleLongAll(false);
            }
        } else if (type === SHOTGUN) {
            let tempArr = weaponsMasterList.filter(item => item.defaultAmmo === type)
            if (checkbox.checked) {
                for (let i = 0; i < tempArr.length; i++) {
                    checkbox = document.getElementById(tempArr[i].name);
                    checkbox.checked = true;
                }
                setWeaponsPool(weaponsPool.filter((item) => item.defaultAmmo !== SHOTGUN));
                setToggleShotgunAll(true);
            } else {
                for (let i = 0; i < tempArr.length; i++) {
                    checkbox = document.getElementById(tempArr[i].name);
                    checkbox.checked = false;
                }
                setWeaponsPool([].concat(weaponsPool, weaponsMasterList.filter((item) => item.defaultAmmo === SHOTGUN)));
                setToggleShotgunAll(false);
            }
        } else if (type === SPECIAL) {
            let tempArr = weaponsMasterList.filter(item => item.defaultAmmo === type)
            if (checkbox.checked) {
                for (let i = 0; i < tempArr.length; i++) {
                    checkbox = document.getElementById(tempArr[i].name);
                    checkbox.checked = true;
                }
                setWeaponsPool(weaponsPool.filter((item) => item.defaultAmmo !== SPECIAL));
                setToggleSpecialAll(true);
            } else {
                for (let i = 0; i < tempArr.length; i++) {
                    checkbox = document.getElementById(tempArr[i].name);
                    checkbox.checked = false;
                }
                setWeaponsPool([].concat(weaponsPool, weaponsMasterList.filter((item) => item.defaultAmmo === SPECIAL)));
                setToggleSpecialAll(false);
            }
        } else if (type === MELEE) {
            let tempArr = weaponsMasterList.filter(item => item.defaultAmmo === type)
            if (checkbox.checked) {
                for (let i = 0; i < tempArr.length; i++) {
                    checkbox = document.getElementById(tempArr[i].name);
                    checkbox.checked = true;
                }
                setWeaponsPool(weaponsPool.filter((item) => item.defaultAmmo !== MELEE));
                setToggleMeleeAll(true);
            } else {
                for (let i = 0; i < tempArr.length; i++) {
                    checkbox = document.getElementById(tempArr[i].name);
                    checkbox.checked = false;
                }
                setWeaponsPool([].concat(weaponsPool, weaponsMasterList.filter((item) => item.defaultAmmo === MELEE)));
                setToggleMeleeAll(false);
            }
        } else if (type === 'tool') {
            if (checkbox.checked) {
                for (let i = 0; i < tools.length; i++) {
                    checkbox = document.getElementById(tools[i].name);
                    checkbox.checked = true;
                }
                setToolPool([]);
                setToggleToolAll(true);
            } else {
                for (let i = 0; i < tools.length; i++) {
                    checkbox = document.getElementById(tools[i].name);
                    checkbox.checked = false;
                }
                setToolPool(tools);
                setToggleToolAll(false);
            }
        }
        else if (type === 'consumable') {
            if (checkbox.checked) {
                for (let i = 0; i < consumables.length; i++) {
                    checkbox = document.getElementById(consumables[i].name);
                    checkbox.checked = true;
                }
                setConsumablePool([]);
                setToggleConsumableAll(true);
            } else {
                for (let i = 0; i < consumables.length; i++) {
                    checkbox = document.getElementById(consumables[i].name);
                    checkbox.checked = false;
                }
                setConsumablePool(consumables);
                setToggleConsumableAll(false);
            }
        } else if (type === 'misc') {
            if (checkbox.checked) {
                if (id === 'weaponPair') {

                } else {
                    setWeaponsPool(weaponsPool.filter((item) => item.scope !== id));
                }
            } else {
                if (id === 'weaponPair') {

                } else {
                    setWeaponsPool([].concat(weaponsPool, weaponsMasterList.filter((item) => item.scope === id)));
                }

            }
        }
    }

    //Generate Loudout
    const roll = () => {
        setGenerating(true);
        setRepeat(false);
        updateLoader();
        if (repeat) {
            clearText();
        }
        setWeaponOne('');
        setWeaponTwo('');
        setWeaponOneAmmo('');
        setWeaponOneAmmo2('');
        setWeaponTwoAmmo('');
        setWeaponTwoAmmo2('');
        setToolOne('');
        setToolTwo('');
        setToolThree('');
        setToolFour('');
        setConsumableOne('');
        setConsumableTwo('');
        setConsumableThree('');
        setConsumableFour('');

        let timeoutStart = 1000;

        //Roll Weapons
        let randomWeaponOne = '';
        let randomWeaponOneAmmo = '';
        let randomWeaponTwo = '';
        let randomWeaponTwoAmmo = '';
        let randomWeaponOneAmmoImg = '';
        let randomWeaponTwoAmmoImg = '';
        let randomWeaponOneAmmo2 = '';
        let randomWeaponTwoAmmo2 = '';

        if (quartermaster) {
            let largeWeapons = weaponsPool.filter((weapon) => weapon.size === 'L');
            let mediumWeapons = weaponsPool.filter((weapon) => weapon.size === 'M');

            randomWeaponOne = largeWeapons[Math.floor(Math.random() * largeWeapons.length)];
            if (randomWeaponOne !== undefined) {
                randomWeaponOneAmmoImg = specialAmmoImages.filter((ammo) => ammo.name === (randomWeaponOne.specialAmmo[0][Math.floor(Math.random() * randomWeaponOne.specialAmmo[0].length)]))[0];
                randomWeaponOneAmmo = customAmmo ? (randomWeaponOneAmmoImg === undefined ? '' : randomWeaponOneAmmoImg) : '';
                if (randomWeaponOne.extraAmmo === true) {
                    randomWeaponOneAmmoImg = specialAmmoImages.filter((ammo) => ammo.name === (randomWeaponOne.specialAmmo[1][Math.floor(Math.random() * randomWeaponOne.specialAmmo[1].length)]))[0];
                    randomWeaponOneAmmo2 = customAmmo ? (randomWeaponOneAmmoImg === undefined ? '' : randomWeaponOneAmmoImg) : '';
                }
            }
            setTimeout(() => {
                setWeaponOne(randomWeaponOne);
                consoleText(setW1, [randomWeaponOne !== undefined ? randomWeaponOne.name : ''], 'w1', 'w1c', ['white']);
                setWeaponOneAmmo(randomWeaponOneAmmo);
                setWeaponOneAmmo2(randomWeaponOneAmmo2);
            }, timeoutStart + 1000);

            randomWeaponTwo = mediumWeapons[Math.floor(Math.random() * mediumWeapons.length)];
            if (randomWeaponTwo !== undefined) {
                randomWeaponTwoAmmoImg = specialAmmoImages.filter((ammo) => ammo.name === (randomWeaponTwo.specialAmmo[0][Math.floor(Math.random() * randomWeaponTwo.specialAmmo[0].length)]))[0];
                randomWeaponTwoAmmo = customAmmo ? (randomWeaponTwoAmmoImg === undefined ? '' : randomWeaponTwoAmmoImg) : '';
                if (randomWeaponTwo.extraAmmo === true) {
                    randomWeaponTwoAmmoImg = specialAmmoImages.filter((ammo) => ammo.name === (randomWeaponTwo.specialAmmo[1][Math.floor(Math.random() * randomWeaponTwo.specialAmmo[1].length)]))[0];
                    randomWeaponTwoAmmo2 = customAmmo ? (randomWeaponTwoAmmoImg === undefined ? '' : randomWeaponTwoAmmoImg) : '';
                }
            }
            setTimeout(() => {
                setWeaponTwo(randomWeaponTwo);
                consoleText(setW2, [randomWeaponTwo !== undefined ? randomWeaponTwo.name : ''], 'w2', 'w2c', ['white']);
                setWeaponTwoAmmo(randomWeaponTwoAmmo);
                setWeaponTwoAmmo2(randomWeaponTwoAmmo2);
            }, timeoutStart + 2000);

        } else {
            //Roll Weapon One
            randomWeaponOne = weaponsPool[Math.floor(Math.random() * weaponsPool.length)];
            if (randomWeaponOne !== undefined) {
                randomWeaponOneAmmoImg = specialAmmoImages.filter((ammo) => ammo.name === (randomWeaponOne.specialAmmo[0][Math.floor(Math.random() * randomWeaponOne.specialAmmo[0].length)]))[0];
                randomWeaponOneAmmo = customAmmo ? (randomWeaponOneAmmoImg === undefined ? '' : randomWeaponOneAmmoImg) : '';
                if (randomWeaponOne.extraAmmo === true) {
                    randomWeaponOneAmmoImg = specialAmmoImages.filter((ammo) => ammo.name === (randomWeaponOne.specialAmmo[1][Math.floor(Math.random() * randomWeaponOne.specialAmmo[1].length)]))[0];
                    randomWeaponOneAmmo2 = customAmmo ? (randomWeaponOneAmmoImg === undefined ? '' : randomWeaponOneAmmoImg) : '';
                }
            }
            setTimeout(() => {
                setWeaponOne(randomWeaponOne);
                consoleText(setW1, [randomWeaponOne !== undefined ? randomWeaponOne.name : ''], 'w1', 'w1c', ['white']);
                setWeaponOneAmmo2(randomWeaponOneAmmo2);
            }, timeoutStart + 1000);


            //Roll Weapon Two
            let weapon2Pool = [];
            if (randomWeaponOne !== undefined) {
                if (randomWeaponOne.size === 'L') {
                    weapon2Pool = weaponsPool.filter((weapon) => weapon.size === 'S');
                } else if (randomWeaponOne.size === 'M') {
                    weapon2Pool = weaponsPool.filter((weapon) => weapon.size !== 'L');
                } else if (randomWeaponOne.size === 'S') {
                    weapon2Pool = weaponsPool;
                }
            }

            randomWeaponTwo = weapon2Pool[Math.floor(Math.random() * weapon2Pool.length)];
            if (randomWeaponTwo !== undefined) {
                randomWeaponTwoAmmoImg = specialAmmoImages.filter((ammo) => ammo.name === (randomWeaponTwo !== undefined ? randomWeaponTwo.specialAmmo[0][Math.floor(Math.random() * randomWeaponTwo.specialAmmo[0].length)] : ''))[0];
                randomWeaponTwoAmmo = customAmmo ? (randomWeaponTwoAmmoImg === undefined ? '' : randomWeaponTwoAmmoImg) : '';
                if (randomWeaponTwo.extraAmmo === true) {
                    randomWeaponTwoAmmoImg = specialAmmoImages.filter((ammo) => ammo.name === (randomWeaponTwo !== undefined ? randomWeaponTwo.specialAmmo[1][Math.floor(Math.random() * randomWeaponTwo.specialAmmo[1].length)] : ''))[0];
                    randomWeaponTwoAmmo2 = customAmmo ? (randomWeaponTwoAmmoImg === undefined ? '' : randomWeaponTwoAmmoImg) : '';
                }
            }
            setTimeout(() => {
                setWeaponTwo(randomWeaponTwo);
                consoleText(setW2, [randomWeaponTwo !== undefined ? randomWeaponTwo.name : ''], 'w2', 'w2c', ['white']);
                setWeaponTwoAmmo(randomWeaponTwoAmmo);
                setWeaponTwoAmmo2(randomWeaponTwoAmmo2);
            }, timeoutStart + 2000);

        }

        //Roll Tools
        let randomToolOne = '';
        let randomToolTwo = '';
        let randomToolThree = '';
        let randomToolFour = '';
        let currentToolPool = toolPool;

        //Tool 1
        if (fixedMedkit) {
            randomToolOne = tools.filter((tool) => tool.name === 'First Aid Kit')
            currentToolPool = currentToolPool.filter((tool) => tool.name !== 'First Aid Kit');
            setTimeout(() => {
                setToolOne(randomToolOne[0]);
                consoleText(setT1, [randomToolOne[0].name], 't1', 't1c', ['white']);
            }, timeoutStart + 3000);
        } else {
            randomToolOne = currentToolPool[Math.floor(Math.random() * currentToolPool.length)];
            if (randomToolOne !== undefined) {
                currentToolPool = currentToolPool.filter((tool) => tool.name !== randomToolOne.name);
            }
            setTimeout(() => {
                setToolOne(randomToolOne);
                consoleText(setT1, [randomToolOne !== undefined ? randomToolOne.name : ''], 't1', 't1c', ['white']);
            }, timeoutStart + 3000);
        }
        //Tool 2
        if (fixedMeleeTool) {
            let randomMeleeTools = toolPool.filter((tool) => tool.type === 'melee')
            randomToolTwo = randomMeleeTools[Math.floor(Math.random() * randomMeleeTools.length)];
            if (randomToolTwo !== undefined) {
                currentToolPool = currentToolPool.filter((tool) => tool.name !== randomToolTwo.name);
            }
            setTimeout(() => {
                setToolTwo(randomToolTwo);
                consoleText(setT2, [randomToolTwo !== undefined ? randomToolTwo.name : ''], 't2', 't2c', ['white']);
            }, timeoutStart + 4000);
        } else {
            randomToolTwo = currentToolPool[Math.floor(Math.random() * currentToolPool.length)];
            if (randomToolTwo !== undefined) {
                currentToolPool = currentToolPool.filter((tool) => tool.name !== randomToolTwo.name);
            }
            setTimeout(() => {
                setToolTwo(randomToolTwo);
                consoleText(setT2, [randomToolTwo !== undefined ? randomToolTwo.name : ''], 't2', 't2c', ['white']);
            }, timeoutStart + 4000);
        }
        //Tool 3
        randomToolThree = currentToolPool[Math.floor(Math.random() * currentToolPool.length)];
        currentToolPool = currentToolPool.filter((tool) => tool.name !== randomToolThree.name);
        setTimeout(() => {
            setToolThree(randomToolThree);
            consoleText(setT3, [randomToolThree.name], 't3', 't3c', ['white']);
        }, timeoutStart + 5000);

        //Tool 4
        randomToolFour = currentToolPool[Math.floor(Math.random() * currentToolPool.length)];
        setTimeout(() => {
            setToolFour(randomToolFour);
            consoleText(setT4, [randomToolFour.name], 't4', 't4c', ['white']);
        }, timeoutStart + 6000);


        //Roll Consumables
        let randomConsumableOne = '';
        let randomConsumableTwo = '';
        let randomConsumableThree = '';
        let randomConsumableFour = '';

        //Consumable One
        randomConsumableOne = consumablePool[Math.floor(Math.random() * consumablePool.length)];
        setTimeout(() => {
            setConsumableOne(randomConsumableOne);
            consoleText(setC1, [randomConsumableOne !== undefined ? randomConsumableOne.name : ''], 'c1', 'c1c', ['white']);
        }, timeoutStart + 7000);

        //Consumable Two
        randomConsumableTwo = consumablePool[Math.floor(Math.random() * consumablePool.length)];
        setTimeout(() => {
            setConsumableTwo(randomConsumableTwo);
            consoleText(setC2, [randomConsumableTwo.name], 'c2', 'c2c', ['white']);
        }, timeoutStart + 8000);


        //Consumable Three
        randomConsumableThree = consumablePool[Math.floor(Math.random() * consumablePool.length)];
        setTimeout(() => {
            setConsumableThree(randomConsumableThree);
            consoleText(setC3, [randomConsumableThree.name], 'c3', 'c3c', ['white']);
        }, timeoutStart + 9000);


        //Consumable Four
        randomConsumableFour = consumablePool[Math.floor(Math.random() * consumablePool.length)];
        setTimeout(() => {
            setConsumableFour(randomConsumableFour);
            consoleText(setC4, [randomConsumableFour.name], 'c4', 'c4c', ['white']);
        }, timeoutStart + 10000);

    }

    return (
        <div className="Deck">
            <div className="scroll-indicator">
                <div className="top"></div>
            </div>
            <h3 className="loudout-title">
                <span role="img">♢</span>Loudout Randomizer<span role="img">♢</span>
                <h4 className="loudout-subtitle">
                    A <span>Randomized</span> Loadout Generator
                </h4>
            </h3>
            <div className="main-panel-container">
                {/*LEFT CONTAINER*/}
                <div className="left-container">
                    <div className="options-box">
                        <div className="form">
                            <div class="infoHelp">
                                <div class="infoHelpDropdown">
                                    <p>Weapon ammo type will be randomized</p>
                                </div>
                            </div>
                            <p className="optionLarge">Enable Custom Ammo</p>
                            <input type={'checkbox'} className='checkbox' onClick={() => setCustomAmmo(!customAmmo)} />
                        </div>
                        <div className="form">
                            <div class="infoHelp">
                                <div class="infoHelpDropdown">
                                    <p>Loudout will always contain one large slot and one medium slot weapon</p>
                                </div>
                            </div>
                            <p className="optionLarge">Enable Quartermaster</p>
                            <input type={'checkbox'} className='checkbox' onClick={() => setQuartermaster(!quartermaster)} />
                        </div>
                        <div className="form">
                            <div class="infoHelp">
                                <div class="infoHelpDropdown">
                                    <p>Loudout will always contain a First Aid Kit</p>
                                </div>
                            </div>
                            <p className="optionLarge">Enable Fixed Medkit</p>
                            <input type={'checkbox'} className='checkbox' onClick={() => setFixedMedkit(!fixedMedkit)} />
                        </div>
                        <div className="form">
                            <div class="infoHelp">
                                <div class="infoHelpDropdown">
                                    <p>Loudout will always contain a melee tool</p>
                                </div>
                            </div>
                            <p className="optionLarge">Enable Fixed Melee Tool</p>
                            <input type={'checkbox'} className='checkbox' onClick={() => setFixedMeleeTool(!fixedMeleeTool)} />
                        </div>
                    </div>
                    <h4 className="exclusion"><span>EXCLUSIONS</span></h4>
                    <div className="options-box2">
                        <div className="left-col">
                            <div class="dropdown" onClick={() => { setActiveFilter(COMPACT) }} style={activeFilter === COMPACT ? { backgroundColor: 'rgb(128, 128, 128, 0.5)' } : {}}>
                                <h5>Compact Ammo</h5>
                            </div>
                            <div class="dropdown" onClick={() => { setActiveFilter(MEDIUM) }} style={activeFilter === MEDIUM ? { backgroundColor: 'rgb(128, 128, 128, 0.5)' } : {}}>
                                <h5>Medium Ammo</h5>
                            </div>

                            <div class="dropdown" onClick={() => { setActiveFilter(LONG) }} style={activeFilter === LONG ? { backgroundColor: 'rgb(128, 128, 128, 0.5)' } : {}}>
                                <h5>Long Ammo</h5>
                            </div>
                            <div class="dropdown" onClick={() => { setActiveFilter(SHOTGUN) }} style={activeFilter === SHOTGUN ? { backgroundColor: 'rgb(128, 128, 128, 0.5)' } : {}}>
                                <h5>Shotgun Ammo</h5>
                            </div>
                            <div class="dropdown" onClick={() => { setActiveFilter(SPECIAL) }} style={activeFilter === SPECIAL ? { backgroundColor: 'rgb(128, 128, 128, 0.5)' } : {}}>
                                <h5>Special Ammo</h5>
                            </div>
                            <div class="dropdown" onClick={() => { setActiveFilter(MELEE) }} style={activeFilter === MELEE ? { backgroundColor: 'rgb(128, 128, 128, 0.5)' } : {}}>
                                <h5>Melee</h5>
                            </div>

                            <div class="dropdown" onClick={() => { setActiveFilter('tools') }} style={activeFilter === 'tools' ? { backgroundColor: 'rgb(128, 128, 128, 0.5)' } : {}}>
                                <h5>Tools</h5>
                            </div>
                            <div class="dropdown" onClick={() => { setActiveFilter('consumables') }} style={activeFilter === 'consumables' ? { backgroundColor: 'rgb(128, 128, 128, 0.5)' } : {}}>
                                <h5>Consumables</h5>
                            </div>
                            <div class="dropdown" onClick={() => { setActiveFilter('misc') }} style={activeFilter === 'misc' ? { backgroundColor: 'rgb(128, 128, 128, 0.5)' } : {}}>
                                <h5>Misc.</h5>
                            </div>
                        </div>
                        <div className="right-col">
                            <div className='info-page' style={activeFilter === COMPACT ? { visibility: 'visible' } : { visibility: 'hidden' }}>
                                <div className="drop-form">
                                    <input type={'checkbox'} className='checkbox' id={COMPACT} onClick={() => excludeAll(COMPACT, COMPACT)} />
                                    <p>{toggleCompactAll ? 'None' : 'All'}</p>
                                </div>
                                {weaponsMasterList.filter((item) => item.defaultAmmo === COMPACT).map((element) => element.name).sort().map((element) => {
                                    return (
                                        <div>
                                            <div className="drop-form">
                                                <input type={'checkbox'} className='checkbox' id={element} onClick={() => exclude('weapon', element)} />
                                                <p>{element}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='info-page' style={activeFilter === MEDIUM ? { visibility: 'visible' } : { visibility: 'hidden' }}>
                                <div className="drop-form">
                                    <input type={'checkbox'} className='checkbox' id={MEDIUM} onClick={() => excludeAll(MEDIUM, MEDIUM)} />
                                    <p>{toggleMediumAll ? 'None' : 'All'}</p>
                                </div>
                                {weaponsMasterList.filter((item) => item.defaultAmmo === MEDIUM).map((element) => element.name).sort().map((element) => {
                                    return (
                                        <div>
                                            <div className="drop-form">
                                                <input type={'checkbox'} className='checkbox' id={element} onClick={() => exclude('weapon', element)} />
                                                <p>{element}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='info-page' style={activeFilter === LONG ? { visibility: 'visible' } : { visibility: 'hidden' }}>
                                <div className="drop-form">
                                    <input type={'checkbox'} className='checkbox' id={LONG} onClick={() => excludeAll(LONG, LONG)} />
                                    <p>{toggleLongAll ? 'None' : 'All'}</p>
                                </div>
                                {weaponsMasterList.filter((item) => item.defaultAmmo === LONG).map((element) => element.name).sort().map((element) => {
                                    return (
                                        <div>
                                            <div className="drop-form">
                                                <input type={'checkbox'} className='checkbox' id={element} onClick={() => exclude('weapon', element)} />
                                                <p>{element}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='info-page' style={activeFilter === SHOTGUN ? { visibility: 'visible' } : { visibility: 'hidden' }}>
                                <div className="drop-form">
                                    <input type={'checkbox'} className='checkbox' id={SHOTGUN} onClick={() => excludeAll(SHOTGUN, SHOTGUN)} />
                                    <p>{toggleShotgunAll ? 'None' : 'All'}</p>
                                </div>
                                {weaponsMasterList.filter((item) => item.defaultAmmo === SHOTGUN).map((element) => element.name).sort().map((element) => {
                                    return (
                                        <div>
                                            <div className="drop-form">
                                                <input type={'checkbox'} className='checkbox' id={element} onClick={() => exclude('weapon', element)} />
                                                <p>{element}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='info-page' style={activeFilter === SPECIAL ? { visibility: 'visible' } : { visibility: 'hidden' }}>
                                <div className="drop-form">
                                    <input type={'checkbox'} className='checkbox' id={SPECIAL} onClick={() => excludeAll(SPECIAL, SPECIAL)} />
                                    <p>{toggleSpecialAll ? 'None' : 'All'}</p>
                                </div>
                                {weaponsMasterList.filter((item) => item.defaultAmmo === SPECIAL).map((element) => element.name).sort().map((element) => {
                                    return (
                                        <div>
                                            <div className="drop-form">
                                                <input type={'checkbox'} className='checkbox' id={element} onClick={() => exclude('weapon', element)} />
                                                <p>{element}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='info-page' style={activeFilter === MELEE ? { visibility: 'visible' } : { visibility: 'hidden' }}>
                                <div className="drop-form">
                                    <input type={'checkbox'} className='checkbox' id={MELEE} onClick={() => excludeAll(MELEE, MELEE)} />
                                    <p>{toggleMeleeAll ? 'None' : 'All'}</p>
                                </div>
                                {weaponsMasterList.filter((item) => item.defaultAmmo === MELEE).map((element) => element.name).sort().map((element) => {
                                    return (
                                        <div>
                                            <div className="drop-form">
                                                <input type={'checkbox'} className='checkbox' id={element} onClick={() => exclude('weapon', element)} />
                                                <p>{element}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='info-page' style={activeFilter === 'tools' ? { visibility: 'visible' } : { visibility: 'hidden' }}>
                                <div className="drop-form">
                                    <input type={'checkbox'} className='checkbox' id={'tool'} onClick={() => excludeAll('tool', 'tool')} />
                                    <p>{toggleToolAll ? 'None' : 'All'}</p>
                                </div>
                                {tools.map((element) => {
                                    return (
                                        <div>
                                            <div className="drop-form">
                                                <input type={'checkbox'} className='checkbox' id={element.name} onClick={() => exclude('tool', element.name)} />
                                                <p>{element.name}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='info-page' style={activeFilter === 'consumables' ? { visibility: 'visible' } : { visibility: 'hidden' }}>
                                <div className="drop-form">
                                    <input type={'checkbox'} className='checkbox' id={'consumable'} onClick={() => excludeAll('consumable', 'consumable')} />
                                    <p>{toggleConsumableAll ? 'None' : 'All'}</p>
                                </div>
                                {consumables.map((element) => {
                                    return (
                                        <div>
                                            <div className="drop-form">
                                                <input type={'checkbox'} className='checkbox' id={element.name} onClick={() => exclude('consumable', element.name)} />
                                                <p>{element.name}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='info-page' style={activeFilter === 'misc' ? { visibility: 'visible' } : { visibility: 'hidden' }}>
                                <div className="drop-form">
                                    <p>- Scopes -</p>
                                </div>
                                <div className="drop-form">
                                    <input type={'checkbox'} className='checkbox' id={DEADEYE} onClick={() => excludeAll('misc', DEADEYE)} />
                                    <p>Deadeye Scopes</p>
                                </div>
                                <div className="drop-form">
                                    <input type={'checkbox'} className='checkbox' id={MARKSMAN} onClick={() => excludeAll('misc', MARKSMAN)} />
                                    <p>Marksman Scopes</p>
                                </div>
                                <div className="drop-form">
                                    <input type={'checkbox'} className='checkbox' id={SNIPER} onClick={() => excludeAll('misc', SNIPER)} />
                                    <p>Sniper Scopes</p>
                                </div>
                                <div className="drop-form">
                                    <p></p>
                                </div>
                                <div className="drop-form">
                                    <p>- Other -</p>
                                </div>
                                <div className="drop-form">
                                    <input type={'checkbox'} className='checkbox' id={'weaponPair'} onClick={() => excludeAll('misc', 'weaponPair')} />
                                    <p>Weapon Pairs</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* Loudout Container */}
                <div className="loudout-container">
                    {console.log(weaponOne)}
                    <h4 className="test">Primary Weapon</h4>
                    <div className="weapon-slot-container">
                        <div className="weapon-slot" style={(repeat && generating) || weaponOne === '' ? { borderColor: 'rgb(128, 128, 128, 0.1)' } : { backgroundImage: `url(${weaponOne !== undefined ? weaponOne.image : ''})`, borderColor: 'rgb(128, 128, 128)' }}>
                            {generating && weaponOne === '' ? <div id="loader"></div> : ''}
                        </div>
                        <div className="ammo-slot" style={(repeat && generating) || (weaponOneAmmo.image === undefined && weaponOneAmmo2.image === undefined) ? { borderColor: 'rgb(128, 128, 128, 0.1)' } : { backgroundImage: `url(${weaponOneAmmo.image === undefined ? weaponOneAmmo2.image : weaponOneAmmo.image})`, borderColor: 'rgb(128, 128, 128)' }}>
                        </div>
                        <div className="ammo-slot" style={(repeat && generating) || (weaponOneAmmo2.image === undefined || weaponOneAmmo.image === undefined) ? { borderColor: 'rgb(128, 128, 128, 0.1)' } : { backgroundImage: `url(${weaponOneAmmo.image === undefined ? '' : weaponOneAmmo2.image})`, borderColor: 'rgb(128, 128, 128)' }}>
                        </div>
                    </div>
                    <h4 className="test">Secondary Weapon</h4>
                    <div className="weapon-slot-container">
                        <div className="weapon-slot" style={(repeat && generating) || weaponTwo === '' ? { borderColor: 'rgb(128, 128, 128, 0.1)' } : { backgroundImage: `url(${weaponTwo !== undefined ? weaponTwo.image : ''})`, borderColor: 'rgb(128, 128, 128)' }}>
                            {generating && weaponTwo === '' ? <div id="loader"></div> : ''}
                        </div>
                        <div className="ammo-slot" style={(repeat && generating) || (weaponTwoAmmo.image === undefined && weaponTwoAmmo2.image === undefined) ? { borderColor: 'rgb(128, 128, 128, 0.1)' } : { backgroundImage: `url(${weaponTwoAmmo.image === undefined ? weaponTwoAmmo2.image : weaponTwoAmmo.image})`, borderColor: 'rgb(128, 128, 128)' }}>
                        </div>
                        <div className="ammo-slot" style={(repeat && generating) || (weaponTwoAmmo2.image === undefined || weaponTwoAmmo.image === undefined) ? { borderColor: 'rgb(128, 128, 128, 0.1)' } : { backgroundImage: `url(${weaponTwoAmmo.image === undefined ? '' : weaponTwoAmmo2.image})`, borderColor: 'rgb(128, 128, 128)' }}>
                        </div>
                    </div>
                    <h4 className="test">Tools</h4>
                    <div className="tool-slot-container">
                        <div className="tool-slot" style={(repeat && generating) || toolOne === '' ? { borderColor: 'rgb(128, 128, 128, 0.1)' } : { backgroundImage: `url(${toolOne !== undefined ? toolOne.image : ''})`, borderColor: 'rgb(128, 128, 128)' }}>
                            {generating && toolOne === '' ? <div id="loader"></div> : ''}
                        </div>
                        <div className="tool-slot" style={(repeat && generating) || toolTwo === '' ? { borderColor: 'rgb(128, 128, 128, 0.1)' } : { backgroundImage: `url(${toolTwo !== undefined ? toolTwo.image : ''})`, borderColor: 'rgb(128, 128, 128)' }}>
                            {generating && toolTwo === '' ? <div id="loader"></div> : ''}
                        </div>
                        <div className="tool-slot" style={(repeat && generating) || toolThree === '' ? { borderColor: 'rgb(128, 128, 128, 0.1)' } : { backgroundImage: `url(${toolThree !== undefined ? toolThree.image : ''})`, borderColor: 'rgb(128, 128, 128)' }}>
                            {generating && toolThree === '' ? <div id="loader"></div> : ''}
                        </div>
                        <div className="tool-slot" style={(repeat && generating) || toolFour === '' ? { borderColor: 'rgb(128, 128, 128, 0.1)' } : { backgroundImage: `url(${toolFour !== undefined ? toolFour.image : ''})`, borderColor: 'rgb(128, 128, 128)' }}>
                            {generating && toolFour === '' ? <div id="loader"></div> : ''}
                        </div>
                    </div>
                    <h4 className="test">Consumables</h4>
                    <div className="tool-slot-container">
                        <div className="tool-slot" style={(repeat && generating) || consumableOne === '' ? { borderColor: 'rgb(128, 128, 128, 0.1)' } : { backgroundImage: `url(${consumableOne !== undefined ? consumableOne.image : ''})`, borderColor: 'rgb(128, 128, 128)' }}>
                            {generating && consumableOne === '' ? <div id="loader"></div> : ''}
                        </div>
                        <div className="tool-slot" style={(repeat && generating) || consumableTwo === '' ? { borderColor: 'rgb(128, 128, 128, 0.1)' } : { backgroundImage: `url(${consumableTwo !== undefined ? consumableTwo.image : ''})`, borderColor: 'rgb(128, 128, 128)' }}>
                            {generating && consumableTwo === '' ? <div id="loader"></div> : ''}
                        </div>
                        <div className="tool-slot" style={(repeat && generating) || consumableThree === '' ? { borderColor: 'rgb(128, 128, 128, 0.1)' } : { backgroundImage: `url(${consumableThree !== undefined ? consumableThree.image : ''})`, borderColor: 'rgb(128, 128, 128)' }}>
                            {generating && consumableThree === '' ? <div id="loader"></div> : ''}
                        </div>
                        <div className="tool-slot" style={(repeat && generating) || consumableFour === '' ? { borderColor: 'rgb(128, 128, 128, 0.1)' } : { backgroundImage: `url(${consumableFour !== undefined ? consumableFour.image : ''})`, borderColor: 'rgb(128, 128, 128)' }}>
                            {generating && consumableFour === '' ? <div id="loader"></div> : ''}
                        </div>
                    </div>
                </div>
                {/* RIGHT CONTAINER */}
                <div className="right-container">
                    <div className="loading-box">
                        <div className="loading-circle">
                            {repeat === false ?
                                <p className="loading-count" style={generating ? { color: 'red' } : {}} onClick={generating ? () => { } : () => roll()}><span id="loadingNumber">{loadingText}</span></p>
                                :
                                <p className="loading-count-two" style={generating ? { color: 'red' } : {}} onClick={generating ? () => { } : () => roll()}><span id="loadingNumber">{loadingText}</span></p>}
                        </div>
                    </div>
                    <div className="info-box">
                        <div className='console-container'>Primary Weapon:<span id='w1'>{w1}</span><div className='console-underscore' id='w1c'>&#95;</div></div>
                        <div className='console-container'>Secondary Weapon:<span id='w2'>{w2}</span><div className='console-underscore' id='w2c'>&#95;</div></div>
                        <div className='console-container'>Tool 1:<span id='t1'>{t1}</span><div className='console-underscore' id='t1c'>&#95;</div></div>
                        <div className='console-container'>Tool 2:<span id='t2'>{t2}</span><div className='console-underscore' id='t2c'>&#95;</div></div>
                        <div className='console-container'>Tool 3:<span id='t3'>{t3}</span><div className='console-underscore' id='t3c'>&#95;</div></div>
                        <div className='console-container'>Tool 4:<span id='t4'>{t4}</span><div className='console-underscore' id='t4c'>&#95;</div></div>
                        <div className='console-container'>Consumable 1:<span id='c1'>{c1}</span><div className='console-underscore' id='c1c'>&#95;</div></div>
                        <div className='console-container'>Consumable 2:<span id='c2'>{c2}</span><div className='console-underscore' id='c2c'>&#95;</div></div>
                        <div className='console-container'>Consumable 3:<span id='c3'>{c3}</span><div className='console-underscore' id='c3c'>&#95;</div></div>
                        <div className='console-container'>Consumable 4:<span id='c4'>{c4}</span><div className='console-underscore' id='c4c'>&#95;</div></div>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="bottom"></div>
            </div>
        </div>


    );
};

export default LoudoutRandomizer;