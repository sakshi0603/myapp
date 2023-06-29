const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.json({ limit: "200mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "400mb",
    extended: true,
  })
);
const { request } = require("express");

const JWT_SECRET = "nawl;dnawdnawk'dnac,'acoiwndwa()AWD)AWwkdnmaiwnda;asdlmanwdpiawd";


const mongoUrl = "mongodb+srv://guptearchit:HtT4xQ77tylr2sKd@cluster0.8dsu0oq.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoUrl, {
    useNewUrlParser: true
})
    .then(() => {
        console.log("connec  gud");
    })
    .catch((e) => console.log(e));

require("./userDetails");
require("./personalDetails");
require("./parentDetails");
require("./addressDetails");
require("./presentCourseDetails");
require("./previousCourseDetails");
require("./uploadDetails");



const Parent = mongoose.model("ParentsInfo");
const User = mongoose.model("UserInfo");
const Pers = mongoose.model("PersonalInfo");
const Add = mongoose.model("AddressInfo");
const Pres = mongoose.model("PresCourseInfo");
const Prev = mongoose.model("PrevCourseInfo");
const UploadInfo = mongoose.model("UploadInfo");


app.post("/signup", async (req, res) => {
    const { email, password, cpassword, seattype, year } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
    try {
        const oldUser = await User.findOne({ email });

        if (oldUser) {
            return res.json({ error: "User Exists" });
        }
        await User.create({
            email, password: encryptedPassword, cpassword, seattype, year,
        });
        res.send({ status: "ok" });
    } catch (error) {
        res.send({ status: "error" });
    }
})


app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.json({ error: "User Not found" });
    }
    if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ email: user.email }, JWT_SECRET);

        if (res.status(201)) {
            return res.json({ status: "ok", data: token });
        } else {
            return res.json({ error: "error" });
        }
    }

    res.json({ status: "error", error: "Invalid Password" });
});

app.post("/Basic/Personal", async (req, res) => {
    console.log(req.body);
    const { fname, dob, pob, gender, nation, religion, caste, scaste, mini, phone, lando, add1, add2, email, pgphone, pgemail, marital, baccno, bname, aadhar, lastcolatt } = req.body;

    const pers = await Pers.create({
        fname,
        dob,
        pob,
        gender,
        nation,
        religion,
        caste,
        scaste,
        mini,
        phone,
        lando,
        add1,
        add2,
        email,
        pgphone,
        pgemail,
        marital,
        baccno,
        bname,
        aadhar,
        lastcolatt
    });
    console.log(pers);
});

app.post("/Basic/ParentDetails", async (req, res) => {
    const {
        ffName,
        fContactNumber,
        fEmail,
        fOccupation,
        fDesignation,
        fProfessionalAddress,
        fAnnualIncome,
        mfName,
        mContactNumber,
        mEmail,
        mOccupation,
        mDesignation,
        mProfessionalAddress,
        mAnnualIncome,
    } = req.body;
    const parent = await Parent.create(
        {
            ffName,
            fContactNumber,
            fEmail,
            fOccupation,
            fDesignation,
            fProfessionalAddress,
            fAnnualIncome,
            mfName,
            mContactNumber,
            mEmail,
            mOccupation,
            mDesignation,
            mProfessionalAddress,
            mAnnualIncome,
        }
    );
    console.log(parent);
});

app.post("/Basic/Address", async (req, res) => {
    console.log(req.body);
    const { flatno, bldgno, bldg, area, city, state, pincode } = req.body;

    const add = await Add.create({
        flatno,
        bldgno,
        bldg,
        area,
        city,
        state,
        pincode
    });
    console.log(add);
});

app.post("/Education/PresentCourse", async (req, res) => {
    console.log(req.body);
    const { studid, selprog, seattype, grno, defstat, handicap } = req.body;

    const pres = await Pres.create({
        studid,
        selprog,
        seattype,
        grno,
        defstat,
        handicap
    });
    console.log(pres);
});

app.post("/Education/PreviousCourse", async (req, res) => {
    console.log(req.body);
    const {
        sscyear,
        sscseatno,
        sscboard,
        sscmarks,
        sscpercent,
        hscyear,
        hscseatno,
        hscboard,
        hscmarks,
        hscpercent,
        pmarks,
        cmarks,
        mmarks,
        vmarks,
        mhcetrollno,
        mhcetappno,
        jeeroll,
        jeepercentile,
        ename,
        escore
    } = req.body;

    const prev = await Prev.create({
        sscyear,
        sscseatno,
        sscboard,
        sscmarks,
        sscpercent,
        hscyear,
        hscseatno,
        hscboard,
        hscmarks,
        hscpercent,
        pmarks,
        cmarks,
        mmarks,
        vmarks,
        mhcetrollno,
        mhcetappno,
        jeeroll,
        jeepercentile,
        ename,
        escore
    });
    console.log(prev);
});

app.post("/upload", async (req, res) => {
    console.log(req.body)
    try {
       const data = await UploadInfo.create(req.body);
       console.log(data);
     } catch (error) {
       res.send({ status: error });
     }
   });


app.listen(5000, () => {
    console.log("server gud");
});
