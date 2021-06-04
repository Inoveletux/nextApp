import React, {createContext} from "react";
import socketIOClient from "socket.io-client";

const socket  = socketIOClient('http://localhost:3001');

export const SocketContext = createContext(socket);