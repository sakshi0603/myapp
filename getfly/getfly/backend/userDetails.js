const mongoose = require("mongoose");

const UserDetailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    seattype: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },

},
    {
        collection: "UserInfo",
    }
)
mongoose.model("UserInfo", UserDetailSchema)