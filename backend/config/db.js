import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://bandivenkatesh205:255ub8Xgi3gxpYbE@cluster0.zcvvva1.mongodb.net/food-del"
    );
    console.log("DB Connected");
  } catch (e) {
    console.log(e);
  }
};
