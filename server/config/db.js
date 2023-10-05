import mongoose from "mongoose";

const options = {
  useNewUrlParser: true,
  autoIndex: false,
  connectTimeoutMS: 0,
  family: 4,
};

export const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URL, options)
    .then((c) => {
      console.log(`mongo is connected on ${c.connection.host}`);
    })
    .catch((error) => {
      console.log(error);
    });
};
