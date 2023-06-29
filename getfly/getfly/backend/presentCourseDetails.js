const mongoose = require("mongoose");

const presentCourseDetailsSchema = new mongoose.Schema({
    studid: {
        type: String,

    },
    selectedprog: {
        type: String,
    },
    seattype: {
        type: String,
    },
    grno: {
        type: String,

    },
    defstat: {
        type: String,

    },
    handicap: {
        type: String,
    },

},
    {
        collection: "PresCourseInfo",
    }
)
mongoose.model("PresCourseInfo", presentCourseDetailsSchema)