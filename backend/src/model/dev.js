const { Schema, model } = require('mongoose');

const devSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    bio: String,
    avatar:{
        type: String,
        required: true,
    },
    like: [{
        type: Schema.Types.ObjectId,
        ref: 'dev',
    }],
    dislike: [{
        type: Schema.Types.ObjectId,
        ref: 'dev',
    }]
},{
    timestamps: true,
});

module.exports = model('dev', devSchema);