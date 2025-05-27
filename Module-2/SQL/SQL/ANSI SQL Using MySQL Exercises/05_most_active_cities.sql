-- 5. Most Active Cities
-- List the top 5 cities with the highest number of distinct user registrations.

SELECT
  u.city,
  COUNT(DISTINCT r.user_id) AS user_count
FROM
  Users u
  JOIN Registrations r ON u.user_id = r.user_id
GROUP BY
  u.city
ORDER BY
  user_count DESC
LIMIT 5;