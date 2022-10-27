exports.JOB_SEEKER_COMPL = 'INSERT INTO complaints (email, date, reason, rating) VALUES (?, CURRENT_TIMESTAMP, ?, ?);'

exports.VIEW_COMPL = 'SELECT * FROM complaints;'

exports.DELETE_COMPL = 'DELETE FROM complaints WHERE id = ?;'