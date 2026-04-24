import express from "express";
import cors from "cors";

import bfhlroutes from "./routes/bfhlroutes.js";

const app=express();
app.use(cors());
app.use(express.json());

app.use("/bfhl", bfhlroutes);

app.get("/", (req, res) => {
    res.send("Welcome to the BFHL API");
});
const PORT=3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});