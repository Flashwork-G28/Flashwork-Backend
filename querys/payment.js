exports.INSET_PAY = 'INSERT INTO payment (id, user_id, price, start_date, end_date) VALUES (NULL, ? , ?, CURRENT_TIMESTAMP, ?);'

exports.PRO = 'SELECT id FROM payment WHERE end_date>CURRENT_DATE AND user_id = ?'