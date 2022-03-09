const { Schema, Types } = require('mongoose');

const mindfullnessSchema = new Schema(
  {
    date: {
        type: Date,
        default: Date.now,  
    },

    duration: {
        type: Number,
    },

    notes: {
        type: String,
        minlength: 1,
        maxlength: 200,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = mindfulnessSchema;
