const messageService = require('../../services/message/messageService');

exports.createMessage = async (req, res) => {
  try {
    const newMessage = await messageService.createMessage(req.body);

    res.status(201).send({ message: 'Create message successfully', data: newMessage });
  } catch (error) {
    res.status(409).send({ error: 'Create message failed', message: error.message });
  }
}




