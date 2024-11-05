import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "taskManager",
    });
    console.log("DB connected Sucessfully!");
  } catch (error) {
    console.error("Database connection failed:", error.message);
  }
};
