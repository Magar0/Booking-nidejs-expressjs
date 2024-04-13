const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080;
const path = require('path')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const { connection } = require("./connector");
const cors = require('cors')
app.use(cors())

const dotEnv = require("dotenv");
dotEnv.config()

//for booking ticket
app.post("/api/booking", async (req, res) => {
    const { movie, slot, seats } = req.body
    if (!movie || !slot || !seats) {
        return res.status(400).json({ message: "movie, slot, seats can't be empty" })
    }

    try {
        const data = await connection.create({ movie, slot, seats })
        res.status(200).json({ data })
    } catch (err) {
        res.status(500).json({ message: "Error Booking!" })
    }

})


//get last booking details
app.get("/api/booking", async (req, res) => {
    try {
        const data = await connection.find().sort({ _id: -1 }).limit(1)
        if (data.length === 0) {
            return res.status(200).json({ message: "no previous booking found" })
        }
        res.status(200).json(data[0])
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error fetching last booking!" })
    }
})


app.use("/", (err, req, res, next) => {
    res.status(500).json({ message: "Something went wrong" })
})

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;   