import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://udaygoel295:GaGo1EfqvGNpsDy1@cluster0.8y4cn.mongodb.net/food-delivery"
    )
    .then(() => console.log("DB Connected"));
};
