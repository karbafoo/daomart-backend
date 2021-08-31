const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Contract Schema
const ContractSchema = mongoose.Schema(
    {
        address: {
            type: String,
            required: true,
            trim: true,
        },
        name: {
            type: String,
            required: true,
            trim: true,
        },
        chain: {
            type: String,
            required: true,
            trim: true,
        },

        kind: {
            type: String,
            default: 'Contract',
        },
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    }
);

const Contract =
    mongoose.models.Contract || mongoose.model('Contract', ContractSchema);
module.exports = Contract;
