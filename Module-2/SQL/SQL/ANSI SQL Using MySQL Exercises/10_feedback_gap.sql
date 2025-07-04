-- 10. Feedback Gap
-- Identify events that had registrations but received no feedback at all.

SELECT
  e.event_id,
  e.title
FROM
  Events e
  JOIN Registrations r ON e.event_id = r.event_id
  LEFT JOIN Feedback f ON e.event_id = f.event_id
GROUP BY
  e.event_id, e.title
HAVING
  COUNT(DISTINCT r.registration_id) > 0
  AND COUNT(DISTINCT f.feedback_id) = 0;