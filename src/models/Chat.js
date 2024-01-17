const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    name: {
      type: String,
      trim: true,
      default: ""
    },
    isGroupChat: {
      type: Boolean,
      default: false
    },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    participants: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    ],
    messages: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'Message' }
    ]
  },
  { timestamps: true }
);


const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
