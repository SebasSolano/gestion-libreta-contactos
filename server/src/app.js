import express from "express";
import contactRoutes from "./routes/contacts.routes.js";
import userRoutes from "./routes/users.routes.js";
import cors from 'cors';

const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.use(userRoutes);
app.use(contactRoutes);

export default app;
