const chatService = require('../../services/chat/chatService');

exports.createChat = async (req, res) => {
  try {
    const newChat = await chatService.createChat(req.body);

    res.status(201).send({ message: 'Create chat successfully', data: newChat });
  } catch (error) {
    res.status(409).send({ error: 'Create chat failed', message: error.message });
  }
}




