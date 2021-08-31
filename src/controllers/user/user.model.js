const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const UserSchema = mongoose.Schema(
    {
        status: {
            type: String,
            default: 'not-verified',
        },
        badge: {
            type: [String],
            default: ['pleb'],
        },
        addresses: {
            type: [{type: Schema.Types.ObjectId, ref: 'Address'}],
            default: [],
        },
        name: {
            type: String,
            required: true,
            trim: true,
            ,
        },
        roles: {
            type: [String],
            default: [],
        },
        kind: {
            type: String,
            default: 'User',
        },
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    }
);

const User = (module.exports = mongoose.model('User', UserSchema));
