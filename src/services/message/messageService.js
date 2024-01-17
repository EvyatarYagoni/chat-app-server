const Message = require('../../models/message');

exports.createMessage = async (newMessage) => {
  const message = new Message(newMessage);
  return await message.save();
}
