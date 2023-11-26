-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 26, 2023 at 12:26 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `travel_appdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_travel`
--

CREATE TABLE `tbl_travel` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `travelling_from` varchar(255) DEFAULT NULL,
  `travelling_to` varchar(255) DEFAULT NULL,
  `car_type` varchar(50) DEFAULT NULL,
  `date_added` date DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `seats` int(11) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_travel`
--

INSERT INTO `tbl_travel` (`id`, `first_name`, `email`, `travelling_from`, `travelling_to`, `car_type`, `date_added`, `last_name`, `seats`, `phone_number`) VALUES
(1, 'Naveed', 'naveed.ahmed6453@gmail.com', 'Texas', 'California ', NULL, '2023-11-27', 'Malik', 4, '+923134445675'),
(2, 'Naveed', 'naveed.ahmed6453@gmail.com', 'Ohio', 'Hawaii', 'Civic 2023', '2023-11-29', 'Malik', 4, '+923134445675'),
(3, 'Robert', 'designer6453@gmail.com', 'California ', 'Newyork', 'Mercedes Benz 2020', '2023-11-30', 'Lewondoski ', 4, '+923334563214');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `id` int(11) NOT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `date_added` date DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`id`, `lastname`, `email`, `phone_number`, `date_added`, `password`, `firstname`) VALUES
(1, 'Malik', 'naveed.ahmed6453@gmail.com', '+923134445675', '2023-11-22', 'naveed', 'Naveed'),
(2, 'Lewondoski', 'designer6453@gmail.com', '+923344562222', '2023-11-26', 'naveed', 'Robert'),
(3, 'Lewondoski ', 'designer6453@gmail.com', '+923334563214', '2023-11-26', 'designer', 'Robert');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_travel`
--
ALTER TABLE `tbl_travel`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_travel`
--
ALTER TABLE `tbl_travel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
