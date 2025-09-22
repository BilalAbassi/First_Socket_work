import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Server } from 'socket.io';
import http from 'http';

const app = express();
app.use(bodyParser.json());
app.use(cors());



//  socket.io is used for signaling 
const io = new Server()



app.listen(4000,()=>{
    console.log("Server is running on port 4000");
})

io.listen(4001)