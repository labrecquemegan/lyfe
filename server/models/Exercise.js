const { Schema, Types } = require('mongoose');

const exerciseSchema = new Schema(
  {
    date: {
        type: Date,
        default: Date.now,
      },
    
      duration: {
        type: Number,
        required: true,
      },

      intensity: {
        type: String,
        required: true
      },

      met_rating: {
          type: Number,
          required: true,
      },

      notes: {
          type: String,
          minlength: 1,
          maxlength: 200,
      }
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = exerciseSchema;
