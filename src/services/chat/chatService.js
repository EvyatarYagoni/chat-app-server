const Chat = require('../../models/Chat');

exports.createChat = async (newChat) => {
  const chat = new Chat(newChat);
  return await chat.save();
}
