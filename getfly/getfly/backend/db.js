const express = require("express");
const mysql = require("mysql");
const multer = require("multer");
const cors = require("cors");
const session = require("express-session");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(cors());

const dbase = new mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "getfly",
});

app.post("/SignUp", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const cpassword = req.body.cpassword;
  const seattype = req.body.seattype;
  const year = req.body.year;
  console.log(req.body);
  if(password!==cpassword)
  return res.json({success:false})

  dbase.query(
    "INSERT INTO user (email, password, cpassword, seattype, year) VALUES (?,?,?,?,?)",
    [email, password, cpassword, seattype, year],
    (err, result) => {
      console.log(result);
    }
  );
  res.json({ success: true });
});

app.post("/Login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(req.body);

  dbase.query(
    "SELECT * FROM user WHERE email=? AND password=?",
    [email, password],
    (err, result) => {
      if (result.length === 0) {
        console.log(err);
        res.json({ result: err });
      } else if (result) {
        console.log(result);
        res.json({
          result: result,
        });
      }
    }
  );
});

app.get("/logout", (req, res) => {
  res
    .status(200)
    .cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: false,
    })
    .json({ message: "Loggedout successfully" });
});

app.post("/Basic/Personal", (req, res) => {
  const fname = req.body.fname;
  const dob = req.body.dob;
  const pob = req.body.pob;
  const gender = req.body.gender;
  const nation = req.body.nation;
  const religion = req.body.religion;
  const caste = req.body.caste;
  const scaste = req.body.scaste;
  const mini = req.body.mini;
  const phone = req.body.phone;
  const lando = req.body.lando;
  const add1 = req.body.add1;
  const add2 = req.body.add2;
  const email = req.body.email;
  const pgphone = req.body.pgphone;
  const pgemail = req.body.pgemail;
  const marital = req.body.marital;
  const baccno = req.body.baccno;
  const bname = req.body.bname;
  const aadhar = req.body.aadhar;
  const lastcolatt = req.body.lastcolatt;
  console.log(req.body);

  dbase.query(
    "INSERT INTO personal(fname, dob, pob, gender, nation, religion, caste, scaste, mini, phone, landno, add1, add2, email, pgphone, pgemail, marital, baccno, bname, aadhar, lastcolatt)  VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
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
      lastcolatt,
    ],
    (err, result) => {
      console.log(result);
    }
  );
});
app.post("/Basic/ParentDetails", (req, res) => {
  const ffname = req.body.ffname;
  const fContactNumber = req.body.fContactNumber;
  const fOccupation = req.body.fOccupation;
  const fDesignation = req.body.fDesignation;
  const fProfessionalAddress = req.body.fProfessionalAddress;
  const fAnnualIncome = req.body.fAnnualIncome;
  const fEmail = req.body.fEmail;
  const mfName = req.body.mfName;
  const mContactNumber = req.body.mContactNumber;
  const mOccupation = req.body.mOccupation;
  const mDesignation = req.body.mDesignation;
  const mProfessionalAddress = req.body.mProfessionalAddress;
  const mAnnualIncome = req.body.mAnnualIncome;
  const mEmail = req.body.mEmail;
  console.log(req.body);

  dbase.query(
    "INSERT INTO parents(ffName, fContactNumber, fOccupation, fDesignation, fProfessionalAddress, fAnnualIncome, fEmail, mfName, mContactNumber, mOccupation, mDesignation, mProfessionalAddress, mAnnualIncome, mEmail) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      ffname,
      fContactNumber,
      fOccupation,
      fDesignation,
      fProfessionalAddress,
      fAnnualIncome,
      fEmail,
      mfName,
      mContactNumber,
      mOccupation,
      mDesignation,
      mProfessionalAddress,
      mAnnualIncome,
      mEmail,
    ],
    (err, result) => {
      console.log(result);
    }
  );
  res.json({success:true})
});

app.post("/Basic/Address", (req, res) => {
  const flatno = req.body.flatno;
  const bldgno = req.body.bldgno;
  const bldg = req.body.bldg;
  const area = req.body.area;
  const city = req.body.city;
  const state = req.body.state;
  const pincode = req.body.pincode;
  console.log(req.body);

  dbase.query(
    "INSERT INTO address(flatno, bldgno, bldg, area, city, state, pincode) VALUES (?,?,?,?,?,?,?)",
    [flatno, bldgno, bldg, area, city, state, pincode],
    (err, result) => {
      console.log(result);
    }
  );
});

app.post("/Education/PresentCourse", (req, res) => {
  const studid = req.body.studid;
  const selectedprog = req.body.selectedprog;
  const seattype = req.body.seattype;
  const grno = req.body.grno;
  const defseat = req.body.defseat;
  const handicap = req.body.handicap;
  console.log(req.body,"as");
  
  dbase.query(
    "INSERT INTO prescourse(studid, selectedprog, seattype, grno, defseat, handicap) VALUES (?,?,?,?,?,?)",
    [studid, selectedprog, seattype, grno, defseat, handicap],
    (err, result) => {
      console.log(result);
    }
  );
});

app.post("/Education/PreviousCourse", (req, res) => {
  const sscyear = req.body.sscyear;
  const sscseatno = req.body.sscseatno;
  const sscboard = req.body.sscboard;
  const sscmarks = req.body.sscmarks;
  const sscpercent = req.body.sscpercent;
  const hscyear = req.body.hscyear;
  const hscseatno = req.body.hscseatno;
  const hscboard = req.body.hscboard;
  const hscmarks = req.body.hscmarks;
  const hscpercentage = req.body.hscpercentage;
  const pmarks = req.body.pmarks;
  const cmarks = req.body.cmarks;
  const mmarks = req.body.mmarks;
  const vmarks = req.body.vmarks;
  const mhcetrollno = req.body.mhcetrollno;
  const mhcetappno = req.body.mhcetappno;
  const jeerollno = req.body.jeerollno;
  const jeepercentile = req.body.jeepercentile;
  const ename = req.body.ename;
  const escore = req.body.escore;
  console.log(req.body);

  dbase.query(
    "INSERT INTO prevcourse(sscyear, sscseatno, sscboard, sscmarks, sscpercent, hscyear, hscseatno, hscboard, hscmarks, hscpercentage, pmarks, cmarks, mmarks, vmarks, mhcetrollno, mhcetappno, jeerollno, jeepercentile, ename, escore) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      sscyear,
      sscseatno,
      sscboard,
      sscmarks,
      sscpercent,
      hscyear,
      hscseatno,
      hscboard,
      hscmarks,
      hscpercentage,
      pmarks,
      cmarks,
      mmarks,
      vmarks,
      mhcetrollno,
      mhcetappno,
      jeerollno,
      jeepercentile,
      ename,
      escore,
    ],
    (err, result) => {
      console.log(result);
    }
  );
  res.json({success:true})
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Uploads");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}.${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
});

const Files = upload.fields([
  { name: "profile" },
  { name: "signature" },
  { name: "sscmarksheet" },
  { name: "hscmarksheet" },
  { name: "mhtcetmarksheet" },
  { name: "jeescorecard" },
  { name: "capallotment" },
  { name: "fccenterverification" },
  { name: "aadharcard" },
  { name: "rationcard" },
  { name: "bankpassbook" },
  { name: "incomecertificate" },
  { name: "castecertificate" },
  { name: "castevalidation" },
  { name: "domicilecertificate" },
  { name: "feereceipt" },
  { name: "collegeadmissionletter" },
]);
console.log(Files);

app.post("/upload", Files, (req, res) => {
  if (req.files) {
    console.log("files uploaded");
    console.log(req.files);
  }

  console.log(req.files);

  console.log(req.files.signature[0].filename, "we");
  try {
    dbase.query(
      "INSERT INTO upload SET ?",
      {
        profile: req.files.profile[0].filename,
        signature: req.files.signature[0].filename,
        sscmarksheet: req.files.sscmarksheet[0].filename,
        hscmarksheet: req.files.hscmarksheet[0].filename,
        mhtcetmarksheet: req.files.mhtcetmarksheet[0].filename,
        jeescorecard: req.files.jeescorecard[0].filename,
        capallotment: req.files.capallotment[0].filename,
        fccenterverification: req.files.fccenterverification[0].filename,
        aadharcard: req.files.aadharcard[0].filename,
        rationcard: req.files.rationcard[0].filename,
        bankpassbook: req.files.bankpassbook[0].filename,
        incomecertificate: req.files.incomecertificate[0].filename,
        castecertificate: req.files.castecertificate[0].filename,
        castevalidation: req.files.castevalidation[0].filename,
        domicilecertificate: req.files.domicilecertificate[0].filename,
        feereceipt: req.files.feereceipt[0].filename,
        collegeadmissionletter: req.files.collegeadmissionletter[0].filename,
      },
      (err, result) => {
        if (err) {
          console.log(err, "err");
        } else {
          console.log(result, "res");
        }
      }
    );
  } catch (error) {
    res.status(422).json({ status: 422, error });
  }
});

app.listen(5000, () => {
  console.log("server gud");
});
