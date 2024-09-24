import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "../backend/routes/auth.route.js";
import userRoutes from "../backend/routes/user.route.js";
import postRoutes from "../backend/routes/post.route.js";
import notificationRoutes from "../backend/routes/notification.route.js";
import connectionRoutes from "../backend/routes/connection.route.js";
import { connectDB } from "./lib/db.js";
import path from "path";

dotenv.config();

const app = express();
const __dirname = path.resolve();
app.use(
       cors({
              origin: "http://localhost:5173",
              credentials: true,
       })
);
const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: "5mb" })); // parse JSON request bodies
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/posts", postRoutes);
 app.use("/api/v1/notifications",notificationRoutes);
app.use("/api/v1/connections", connectionRoutes);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
       connectDB();
});
