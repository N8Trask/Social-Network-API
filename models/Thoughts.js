const { Schema, model } = require("mongoose");

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [
        {
            type: Schema.Types.ObjectId,
            ref: "Reaction",
        },
    ],
},
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;