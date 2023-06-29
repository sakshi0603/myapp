const mongoose = require("mongoose");

const personalDetailSchema = new mongoose.Schema({
    fname: {
        type: String,

    },
    dob: {
        type: String,
    },
    pob: {
        type: String,
    },
    gender: {
        type: String,
    },
    nation: {
        type: String,
    },
    religion: {
        type: String,
    },
    caste: {
        type: String,
    },
    scaste: {
        type: String,
    },
    mini: {
        type: String,
    },
    phone: {
        type: String,
    },
    lando: {
        type: String,
    },
    add1: {
        type: String,
    },
    add2: {
        type: String,
    },
    email: {
        type: String,
    },
    pgphone: {
        type: String,
    },
    pgemail: {
        type: String,
    },
    marital: {
        type: String,
    },
    baccno: {
        type: String,
    },
    bname: {
        type: String,
    },
    aadhar: {
        type: String,
    },
    lastcolatt: {
        type: String,
    },

},
    {
        collection: "PersonalInfo",
    }
)
mongoose.model("PersonalInfo", personalDetailSchema)