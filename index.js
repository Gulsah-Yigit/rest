import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";

// Settings
const PORT = 5000;
const app = express();
app.use(bodyParser.json());

//ROUTES
//GET
app.get("/users", usersRoutes);

//GET With ID
app.get("/users/:id", usersRoutes);

//POST
app.post("/users", usersRoutes);

//DELETE
app.delete("/users/:id", usersRoutes);

//UPDATE -> PATCH
app.patch("/users/:id", usersRoutes);

app.listen(PORT, () => console.log(`http://192.168.1.137:${PORT}`));
