-- 23. Registration Trends
-- Show a month-wise registration count trend over the past 12 months.

SELECT
  YEAR(registration_date) AS reg_year,
  MONTH(registration_date) AS reg_month,
  COUNT(registration_id) AS registration_count
FROM
  Registrations
WHERE
  registration_date >= CURDATE() - INTERVAL 12 MONTH
GROUP BY
  reg_year, reg_month
ORDER BY
  reg_year, reg_month;