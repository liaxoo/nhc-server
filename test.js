const express = require('express');
const app = express();
app.use(express.json());

let moderationLogs = [];

app.post('/moderation/logs', (req, res) => {
    moderationLogs.push(req.body);
    console.log("New moderation log:", req.body);
    res.status(200).send({ status: "Logged" });
});

app.post('/player/join', (req, res) => {
    console.log("Player joined:", req.body);
    res.status(200).send({ status: "Player Recorded" });
});

app.post('/player/leave', (req, res) => {
    console.log("Player left:", req.body);
    res.status(200).send({ status: "Player Removed" });
});

app.listen(3000, () => console.log("Server running on port 3000"));