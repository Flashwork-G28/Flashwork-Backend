exports.POST_CHAT = 'INSERT INTO chat (sender_id, receiver_id, message) VALUES (?, ?, ?);'

exports.GET_CHAT = 'SELECT message FROM chat WHERE receiver_id = ?;'