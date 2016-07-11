SELECT user_email FROM xscore.User 
SELECT * FROM xscore.User where user_id like '%thmytm_o%'
UPDATE User SET user_email=REPLACE(user_email, ".co.com", ".com");

UPDATE User SET user_email=REPLACE(user_email, "@yahoo", "@xscore");


SELECT 
    d.user_kbn,
    gpb_date,
    team_name,
    gpb_pl_id AS tbr_pl_idx,
    gpb_team_id AS tbr_team_id,
    b.pl_back_num AS tbr_back_num,
    b.pl_hit_hand_side AS hit_side,
    gpb_pl_name AS pl_name,
    SUM(gpb_hit_num) AS hit_num,
    SUM(gpb_safe_hit) AS safe_hit,
    SUM(gpb_HR) AS homerun,
    SUM(gpb_hit_score) AS hit_score,
    SUM(gpb_H) AS hits,
    SUM(gpb_2B) AS doubles,
    SUM(gpb_3B) AS triples,
    SUM(gpb_SB) AS stolen_base,
    SUM(gpb_SF) AS sacrifice_fly,
    SUM(gpb_SH) AS sacrifice_hit,
    SUM(gpb_BB) AS bb,
    SUM(gpb_HBP) AS tbr_HBP,
    COUNT(a.game_id) AS tbr_game,
    SUM(gpb_safe_hit) / SUM(gpb_hit_num) AS hit_rate,
    (SUM(gpb_H) + 2 * SUM(gpb_2B) + 3 * SUM(gpb_H) + 4 * SUM(gpb_HR)) / SUM(gpb_hit_num) AS slg,
    (SUM(gpb_hit_num) + SUM(gpb_BB) + SUM(gpb_HBP) + SUM(gpb_SF) + SUM(gpb_SH)) AS PA,
    CASE
        when (SUM(gpb_hit_num) + SUM(gpb_BB) + SUM(gpb_SF)) = 0 then 0
        else (SUM(gpb_safe_hit) + SUM(gpb_BB)) / (SUM(gpb_hit_num) + SUM(gpb_BB) + SUM(gpb_SF))
    END AS obp,
    CASE
        when (SUM(gpb_hit_num) + SUM(gpb_BB) + SUM(gpb_SF)) = 0 then 0
        else ((SUM(gpb_H) + 2 * SUM(gpb_2B) + 3 * SUM(gpb_H) + 4 * SUM(gpb_HR)) / SUM(gpb_hit_num)) + (SUM(gpb_safe_hit) + SUM(gpb_BB)) / (SUM(gpb_hit_num) + SUM(gpb_BB) + SUM(gpb_SF))
    END AS ops
FROM
    GamePlayerBatting a
        LEFT JOIN
    Player b ON a.gpb_pl_id = b.pl_idx
        LEFT JOIN
    Game c ON a.game_id = c.game_id
        INNER JOIN
    User d ON d.indexno = gpb_pl_id
        INNER JOIN
    Team e ON e.team_id = gpb_team_id
WHERE
    a.gpb_team_id = 11320
        AND d.user_del_flg = 'N'
        AND (c.game_input1 >= '2'
        or c.game_input2 >= '2'
        or c.game_input3 >= '2')
        AND d.user_kbn = 1
        and gpb_date >= '2016-06-01'
        and gpb_date <= '2016-06-28'
group by a.gpb_pl_id



SELECT 
    d.user_kbn,
    gpb_date,
    team_name,
    gpb_pl_id AS tbr_pl_idx,
    gpb_team_id AS tbr_team_id,
    b.pl_back_num AS tbr_back_num,
    b.pl_hit_hand_side AS hit_side,
    gpb_pl_name AS pl_name,
    SUM(gpb_hit_num) AS hit_num,
    SUM(gpb_safe_hit) AS safe_hit,
    SUM(gpb_HR) AS homerun,
    SUM(gpb_hit_score) AS hit_score,
    SUM(gpb_H) AS hits,
    SUM(gpb_2B) AS doubles,
    SUM(gpb_3B) AS triples,
    SUM(gpb_SB) AS stolen_base,
    SUM(gpb_SF) AS sacrifice_fly,
    SUM(gpb_SH) AS sacrifice_hit,
    SUM(gpb_BB) AS bb,
    SUM(gpb_HBP) AS tbr_HBP,
    COUNT(a.game_id) AS tbr_game,
    SUM(gpb_safe_hit) / SUM(gpb_hit_num) AS hit_rate,
    (SUM(gpb_H) + 2 * SUM(gpb_2B) + 3 * SUM(gpb_H) + 4 * SUM(gpb_HR)) / SUM(gpb_hit_num) AS slg,
    (SUM(gpb_hit_num) + SUM(gpb_BB) + SUM(gpb_HBP) + SUM(gpb_SF) + SUM(gpb_SH)) AS PA,
    CASE
        when (SUM(gpb_hit_num) + SUM(gpb_BB) + SUM(gpb_SF)) = 0 then 0
        else (SUM(gpb_safe_hit) + SUM(gpb_BB)) / (SUM(gpb_hit_num) + SUM(gpb_BB) + SUM(gpb_SF))
    END AS obp,
    CASE
        when (SUM(gpb_hit_num) + SUM(gpb_BB) + SUM(gpb_SF)) = 0 then 0
        else ((SUM(gpb_H) + 2 * SUM(gpb_2B) + 3 * SUM(gpb_H) + 4 * SUM(gpb_HR)) / SUM(gpb_hit_num)) + (SUM(gpb_safe_hit) + SUM(gpb_BB)) / (SUM(gpb_hit_num) + SUM(gpb_BB) + SUM(gpb_SF))
    END AS ops
FROM
    GamePlayerBatting a
        LEFT JOIN
    Player b ON a.gpb_pl_id = b.pl_idx
        LEFT JOIN
    Game c ON a.game_id = c.game_id
        INNER JOIN
    User d ON d.indexno = gpb_pl_id
        INNER JOIN
    Team e ON e.team_id = gpb_team_id
WHERE
    a.gpb_team_id = 11320
        AND d.user_del_flg = 'N'
        AND (c.game_input1 >= '2'
        or c.game_input2 >= '2'
        or c.game_input3 >= '2')
        and gpb_date >= '2016-05-01'
        and gpb_date <= '2016-05-31'
group by a.gpb_pl_id
