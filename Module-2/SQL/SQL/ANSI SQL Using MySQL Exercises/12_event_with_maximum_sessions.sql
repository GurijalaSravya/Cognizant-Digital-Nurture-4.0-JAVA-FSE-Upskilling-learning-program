-- 12. Event with Maximum Sessions
-- List the event(s) with the highest number of sessions.

SELECT
  e.event_id,
  e.title,
  COUNT(s.session_id) AS session_count
FROM
  Events e
  JOIN Sessions s ON e.event_id = s.event_id
GROUP BY
  e.event_id, e.title
HAVING
  session_count = (
    SELECT MAX(session_counts)
    FROM (
      SELECT COUNT(s2.session_id) AS session_counts
      FROM Events e2
      JOIN Sessions s2 ON e2.event_id = s2.event_id
      GROUP BY e2.event_id
    ) AS sub
  );