const mongoose = require("mongoose");

const uploadDetailsSchema = new mongoose.Schema({
    profile: String,
    signature: String,
    sscmarksheet: String,
    hscmarksheet: String,
    mhtcetmarksheet: String,
    jeescorecard: String,
    capallotment: String,
    fccenterverification: String,
    aadharcard: String,
    rationcard: String,
    bankpassbook: String,
    incomecertificate: String,
    castecertificate: String,
    castevalidation: String,
    domicilecertificate: String,
    feereceipt: String,
    collegeadmissionletter: String,
  
  },
  {
      collection: "UploadInfo",
  }
  );
  
  mongoose.model("UploadInfo", uploadDetailsSchema);