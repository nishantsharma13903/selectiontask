// app.js
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const employeeRoutes = require("./routes/employee.routes");
const locationRoutes = require("./routes/location.routes");
const attendanceRoutes = require("./routes/attendance.routes");
const leaveRoutes = require("./routes/leave.routes");
const payrollRoutes = require("./routes/payroll.routes");
require("dotenv").config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.get("/api", (req,res) => {
    res.send("Server is live")
})

app.use("/api/employees", employeeRoutes);
app.use("/api/locations", locationRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/leaves", leaveRoutes);
app.use("/api/payroll", payrollRoutes);

const PORT = process.env.PORT || 5003;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
