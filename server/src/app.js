import express from "express";
import contactRoutes from "./routes/contacts.routes.js";
import userRoutes from "./routes/users.routes.js";

const app = express();

// middleware
app.use(express.json());

app.use(userRoutes);
app.use(contactRoutes);

export default app;
