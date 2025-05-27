-- 3. Inactive Users
-- Retrieve users who have not registered for any events in the last 90 days.

SELECT
  u.user_id,
  u.full_name,
  u.email
FROM
  Users u
WHERE
  NOT EXISTS (
    SELECT 1
    FROM Registrations r
    WHERE r.user_id = u.user_id
      AND r.registration_date >= CURDATE() - INTERVAL 90 DAY
  );