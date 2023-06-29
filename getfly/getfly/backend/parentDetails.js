const mongoose = require("mongoose");

const parentDetailsSchema = new mongoose.Schema({
    ffName: {
        type: String,

    },
    fContactNumber: {
        type: String,
    },
    fEmail: {
        type: String,
    },
    fOccupation: {
        type: String,
    },
    fProfessionalAddress: {
        type: String,
    },
    fAnnualIncome: {
        type: String,
    },
    mContactNumber: {
        type: String,
    },
    mEmail: {
        type: String,
    },
    mOccupation: {
        type: String,
    },
    mDesignation: {
        type: String,
    },
    mProfessionalAddress: {
        type: String,
    },
    mAnnualIncome: {
        type: String,
    },


},
    {
        collection: "ParentsInfo",
    }
)
mongoose.model("ParentsInfo", parentDetailsSchema)