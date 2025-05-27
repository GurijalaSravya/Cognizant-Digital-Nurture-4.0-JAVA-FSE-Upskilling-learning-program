-- 1. User Upcoming Events
-- Show a list of all upcoming events a user is registered for in their city, sorted by date.

SELECT
  u.user_id,
  u.full_name,
  e.event_id,
  e.title,
  e.city,
  e.start_date,
  e.end_date
FROM
  Users u
  JOIN Registrations r ON u.user_id = r.user_id
  JOIN Events e ON r.event_id = e.event_id
WHERE
  e.status = 'upcoming'
  AND u.city = e.city
ORDER BY
  u.user_id,
  e.start_date;