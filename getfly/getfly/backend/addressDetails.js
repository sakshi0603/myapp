const mongoose = require("mongoose");

const addressDetailsSchema = new mongoose.Schema({
    flatno: {
        type: String,

    },
    bldgno: {
        type: String,
    },
    bldg: {
        type: String,
    },
    area: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    pincode: {
        type: String,
    },

},
    {
        collection: "AddressInfo",
    }
)
mongoose.model("AddressInfo", addressDetailsSchema)