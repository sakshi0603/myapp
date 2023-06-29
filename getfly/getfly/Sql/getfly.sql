-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 15, 2023 at 10:00 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `getfly`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `add_id` int(11) NOT NULL,
  `flatno` varchar(250) NOT NULL,
  `bldgno` varchar(250) NOT NULL,
  `bldg` varchar(250) NOT NULL,
  `area` varchar(250) NOT NULL,
  `city` varchar(250) NOT NULL,
  `state` varchar(250) NOT NULL,
  `pincode` varchar(250) NOT NULL,
  `studid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `parents`
--

CREATE TABLE `parents` (
  `parents_id` int(11) NOT NULL,
  `ffName` varchar(250) NOT NULL,
  `fContactNumber` varchar(250) NOT NULL,
  `fOccupation` varchar(250) NOT NULL,
  `fDesignation` varchar(250) NOT NULL,
  `fProfessionalAddress` varchar(250) NOT NULL,
  `fAnnualIncome` varchar(250) NOT NULL,
  `fEmail` varchar(250) NOT NULL,
  `mfName` varchar(250) NOT NULL,
  `mContactNumber` varchar(250) NOT NULL,
  `mOccupation` varchar(250) NOT NULL,
  `mDesignation` varchar(250) NOT NULL,
  `mProfessionalAddress` varchar(250) NOT NULL,
  `mAnnualIncome` varchar(250) NOT NULL,
  `mEmail` varchar(250) NOT NULL,
  `studid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `personal`
--

CREATE TABLE `personal` (
  `personal_id` int(11) NOT NULL,
  `fname` varchar(250) NOT NULL,
  `dob` varchar(250) NOT NULL,
  `pob` varchar(250) NOT NULL,
  `gender` varchar(250) NOT NULL,
  `nation` varchar(250) NOT NULL,
  `religion` varchar(250) NOT NULL,
  `caste` varchar(250) NOT NULL,
  `scaste` varchar(250) NOT NULL,
  `mini` varchar(250) NOT NULL,
  `phone` varchar(250) NOT NULL,
  `landno` varchar(250) NOT NULL,
  `add1` varchar(250) NOT NULL,
  `add2` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `pgphone` varchar(250) NOT NULL,
  `pgemail` varchar(250) NOT NULL,
  `marital` varchar(250) NOT NULL,
  `baccno` varchar(250) NOT NULL,
  `bname` varchar(250) NOT NULL,
  `aadhar` varchar(250) NOT NULL,
  `lastcolatt` varchar(250) NOT NULL,
  `studid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `prescourse`
--

CREATE TABLE `prescourse` (
  `studid` int(250) NOT NULL,
  `selectedprog` varchar(250) NOT NULL,
  `seattype` varchar(250) NOT NULL,
  `grno` varchar(250) NOT NULL,
  `defseat` varchar(250) NOT NULL,
  `handicap` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `prevcourse`
--

CREATE TABLE `prevcourse` (
  `prevcourse_id` int(11) NOT NULL,
  `sscyear` varchar(250) NOT NULL,
  `sscseatno` varchar(250) NOT NULL,
  `sscboard` varchar(250) NOT NULL,
  `sscmarks` varchar(250) NOT NULL,
  `sscpercent` varchar(250) NOT NULL,
  `hscyear` varchar(250) NOT NULL,
  `hscseatno` varchar(250) NOT NULL,
  `hscboard` varchar(250) NOT NULL,
  `hscmarks` varchar(250) NOT NULL,
  `hscpercentage` varchar(250) NOT NULL,
  `pmarks` varchar(250) NOT NULL,
  `cmarks` varchar(250) NOT NULL,
  `mmarks` varchar(250) NOT NULL,
  `vmarks` varchar(250) NOT NULL,
  `mhcetrollno` varchar(250) NOT NULL,
  `mhcetappno` varchar(250) NOT NULL,
  `jeerollno` varchar(250) NOT NULL,
  `jeepercentile` varchar(250) NOT NULL,
  `ename` varchar(250) NOT NULL,
  `escore` varchar(250) NOT NULL,
  `studid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `upload`
--

CREATE TABLE `upload` (
  `upload_id` int(11) NOT NULL,
  `profile` varchar(250) NOT NULL,
  `signature` varchar(250) NOT NULL,
  `sscmarksheet` varchar(250) NOT NULL,
  `hscmarksheet` varchar(250) NOT NULL,
  `mhtcetmarksheet` varchar(250) NOT NULL,
  `jeescorecard` varchar(250) NOT NULL,
  `capallotment` varchar(250) NOT NULL,
  `fccenterverification` varchar(250) NOT NULL,
  `aadharcard` varchar(250) NOT NULL,
  `rationcard` varchar(250) NOT NULL,
  `bankpassbook` varchar(250) NOT NULL,
  `incomecertificate` varchar(250) NOT NULL,
  `castecertificate` varchar(250) NOT NULL,
  `castevalidation` varchar(250) NOT NULL,
  `domicilecertificate` varchar(250) NOT NULL,
  `feereceipt` varchar(250) NOT NULL,
  `collegeadmissionletter` varchar(250) NOT NULL,
  `studid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `email` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `cpassword` varchar(250) NOT NULL,
  `seattype` varchar(250) NOT NULL,
  `year` varchar(250) NOT NULL,
  `studid` int(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`add_id`),
  ADD KEY `studid` (`studid`);

--
-- Indexes for table `parents`
--
ALTER TABLE `parents`
  ADD PRIMARY KEY (`parents_id`),
  ADD KEY `studid` (`studid`);

--
-- Indexes for table `personal`
--
ALTER TABLE `personal`
  ADD PRIMARY KEY (`personal_id`),
  ADD KEY `studid` (`studid`);

--
-- Indexes for table `prescourse`
--
ALTER TABLE `prescourse`
  ADD PRIMARY KEY (`studid`);

--
-- Indexes for table `prevcourse`
--
ALTER TABLE `prevcourse`
  ADD PRIMARY KEY (`prevcourse_id`),
  ADD KEY `studid` (`studid`);

--
-- Indexes for table `upload`
--
ALTER TABLE `upload`
  ADD PRIMARY KEY (`upload_id`),
  ADD KEY `studid` (`studid`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `studid` (`studid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `add_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `parents`
--
ALTER TABLE `parents`
  MODIFY `parents_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal`
--
ALTER TABLE `personal`
  MODIFY `personal_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `prevcourse`
--
ALTER TABLE `prevcourse`
  MODIFY `prevcourse_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `upload`
--
ALTER TABLE `upload`
  MODIFY `upload_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `address`
--
ALTER TABLE `address`
  ADD CONSTRAINT `FK_studid4` FOREIGN KEY (`studid`) REFERENCES `prescourse` (`studid`);

--
-- Constraints for table `parents`
--
ALTER TABLE `parents`
  ADD CONSTRAINT `FK_studid3` FOREIGN KEY (`studid`) REFERENCES `prescourse` (`studid`);

--
-- Constraints for table `personal`
--
ALTER TABLE `personal`
  ADD CONSTRAINT `FK_studid2` FOREIGN KEY (`studid`) REFERENCES `prescourse` (`studid`);

--
-- Constraints for table `prevcourse`
--
ALTER TABLE `prevcourse`
  ADD CONSTRAINT `FK_studid1` FOREIGN KEY (`studid`) REFERENCES `prescourse` (`studid`);

--
-- Constraints for table `upload`
--
ALTER TABLE `upload`
  ADD CONSTRAINT `FK_studid5` FOREIGN KEY (`studid`) REFERENCES `prescourse` (`studid`);

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `FK_studid` FOREIGN KEY (`studid`) REFERENCES `prescourse` (`studid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
