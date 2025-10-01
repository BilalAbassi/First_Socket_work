import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Server} from "socket.io";
import http from "http";

const app = express();
app.use(bodyParser.json());
app.use(cors());

// create a connection

// creating a server
const custom_server = http.createServer(app);

// creating and setting rules for socket.io
const io = new Server(custom_server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

// creating a connection

io.on("connection", (socket) => {
  console.log("user is Connected");

socket.emit("reply", "hello from server 👋")

  socket.on("disconnect", () => {
    console.log("User Disconnected");
  });
});

// get api For testing Purpose
app.get("/", (req, res) => {
  res.send({
    mesg: "working",
  });
});

//  socket.io is used for signaling
custom_server.listen(4000, () => {
  console.log("Server is running on port 4000");
});

// io.listen(4001)
