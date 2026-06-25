const express = require("express");
const cors = require("cors");
const logger = require("./logger");

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

const notifications = [
  {
    type: "Placement",
    message: "CSX Corporation Hiring",
    time: "22 Jul 2025 10:30 AM",
    read: false,
  },
  {
    type: "Result",
    message: "Mid Semester Results",
    time: "22 Jul 2025 11:15 AM",
    read: false,
  },
  {
    type: "Event",
    message: "Tech Fest Registration",
    time: "22 Jul 2025 01:00 PM",
    read: true,
  },
  {
    type: "Placement",
    message: "AMD Hiring Drive",
    time: "22 Jul 2025 02:00 PM",
    read: false,
  },
  {
    type: "Result",
    message: "External Examination Results",
    time: "22 Jul 2025 03:00 PM",
    read: true,
  },
  {
    type: "Event",
    message: "Hackathon Registration",
    time: "22 Jul 2025 04:00 PM",
    read: false,
  },
  {
    type: "Placement",
    message: "Microsoft Internship Opportunity",
    time: "22 Jul 2025 05:00 PM",
    read: false,
  },
  {
    type: "Result",
    message: "Project Review Results",
    time: "22 Jul 2025 05:30 PM",
    read: true,
  },
  {
    type: "Event",
    message: "Campus Tech Fest",
    time: "22 Jul 2025 06:00 PM",
    read: false,
  },
  {
    type: "Placement",
    message: "Amazon Recruitment Drive",
    time: "22 Jul 2025 06:30 PM",
    read: false,
  },
];

app.get("/notifications", (req, res) => {
  res.json(notifications);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});