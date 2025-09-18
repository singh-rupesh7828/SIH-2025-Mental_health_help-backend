import express from "express";
import dotenv from "dotenv";
import chatRoutes from "./src/router/chats.routes.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/", chatRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`🚀 Server running on port ${process.env.PORT || 3000}`);
});
