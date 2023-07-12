const { Schema, Types } = require('mongoose');
const { getFormattedDate } = require('../utils/date');

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: String,
            default: getFormattedDate,
        },
    },
    {
        timestamps: true,
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

module.exports = ReactionSchema;