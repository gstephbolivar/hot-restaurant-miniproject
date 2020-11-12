// 1.
const express = require("express");
const path = require("path");
// 2.
const app = express();
// 3.
const PORT = process.env.PORT || 3000;
// 5.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/api/config", (req, rest) => {
  rest.json({
    success: true,
  });
});

const reservations = [
  {
    routeName: "sarah",
    name: "Sarah",
    phoneNumber: "7707894561",
    email: "sgo@gmail.com",
    uniqueID: "1",
  },
  {
    routeName: "tyler",
    name: "Tyler",
    phoneNumber: "7707894561",
    email: "tyty@gmail.com",
    uniqueID: "2",
  },
  {
    routeName: "zach",
    name: "Zach",
    phoneNumber: "7707894561",
    email: "zach@gmail.com",
    uniqueID: "3",
  },
];

const waitList = [
  {
    routeName: "brett",
    name: "Brett",
    phoneNumber: "7707894561",
    email: "brett@gmail.com",
    uniqueID: "4",
  },
  {
    routeName: "caleb",
    name: "Caleb",
    phoneNumber: "7707894561",
    email: "caleb@gmail.com",
    uniqueID: "5",
  },
  {
    routeName: "sally",
    name: "Sally",
    phoneNumber: "7707894561",
    email: "sally@gmail.com",
    uniqueID: "6",
  },
];

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/home.html"));
});

app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/tables.html"));
});

app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/reserve.html"));
});

app.get("/api/waitlist", (req, res) => {
  res.json({
    reservations: reservations,
    waitList: waitList,
  });
});

app.get("/api/reservations", (req, res) => {
  res.json({
    reservations: reservations,
    waitList: waitList,
  });
});

app.post("/api/reservations", (req, res) => {
  const newReservation = req.body;

  newReservation.routeName = newReservation.name
    .replace(/\s+/g, "")
    .toLowerCase();

  console.log(newReservation);

  reservations.push(newReservation);

  res.json(newReservation);
});

app.post("/api/waitlist", (req, res) => {
  const newWaitList = req.body;

  newWaitList.routeName = newWaitList.name.replace(/\s+/g, "").toLowerCase();

  console.log(newWaitList);

  waitlist.push(newWaitList);

  res.json(newWaitList);
});

// 4.
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
