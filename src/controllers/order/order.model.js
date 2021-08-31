const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Order Schema
const OrderSchema = mongoose.Schema(
    {
        status: {
            type: String,
            required: true,
        },
        items: {
            type: [
                {
                    type: Schema.Types.ObjectId,
                    ref: 'OrderItem',
                },
            ],
            required: true,
            ,
        },
        User: {
            type: Schema.Types.ObjectId,
            ref: 'OrderItem',
            required: true,
            ,
        },
        description: {
            type: String,
            default: '',
        },
        timestamp: {
            type: String,
            default: Date.now(),
        },
        kind: {
            type: String,
            default: 'Order',
        },
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    }
);

const Order = (module.exports = mongoose.model('Order', OrderSchema));
