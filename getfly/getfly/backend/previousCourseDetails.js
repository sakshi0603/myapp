const mongoose = require("mongoose");

const previousCourseDetailsSchema = new mongoose.Schema({
    sscyear: {
        type: String,

    },
    sscseatno: {
        type: String,

    },
    sscboard: {
        type: String,

    },
    sscmarks: {
        type: String,

    },
    sscpercent: {
        type: String,

    },
    hscyear: {
        type: String,

    },
    hscseatno: {
        type: String,

    },
    hscboard: {
        type: String,

    },
    hscmarks: {
        type: String,

    },
    hscpercent: {
        type: String,

    },
    pmarks: {
        type: String,

    },
    cmarks: {
        type: String,

    },
    mmarks: {
        type: String,

    },
    vmarks: {
        type: String,

    },
    mhcetrollno: {
        type: String,

    },
    mhcetappno: {
        type: String,

    },
    jeeroll: {
        type: String,

    },
    jeepercentile: {
        type: String,

    },
    ename: {
        type: String,

    },
    escore: {
        type: String,

    },

},
    {
        collection: "PrevCourseInfo",
    }
)
mongoose.model("PrevCourseInfo", previousCourseDetailsSchema)