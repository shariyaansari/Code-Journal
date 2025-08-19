import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import notesRoutes from "./routes/notes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGO_URI)

app.use("/api/notes", notesRoutes);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
