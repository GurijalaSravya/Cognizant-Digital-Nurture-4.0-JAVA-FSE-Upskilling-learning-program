-- 16. Unregistered Active Users
-- Find users who created an account in the last 30 days but haven’t registered for any events.

SELECT
  u.user_id,
  u.full_name,
  u.registration_date
FROM
  Users u
WHERE
  u.registration_date >= CURDATE() - INTERVAL 30 DAY
  AND NOT EXISTS (
    SELECT 1
    FROM Registrations r
    WHERE r.user_id = u.user_id
  );