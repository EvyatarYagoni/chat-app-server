const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    conversationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Conversation'
    },
    content: String,
    type: {
        type: String,
        enum: ['text', 'image', 'video', 'audio', 'location', 'file'],
        default: 'text',
    },
    read: { type: Boolean, default: false },
}, { timestamps: true });

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
