import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log("Connected to port " + process.env.PORT);
    });
  })
  .catch(function (err) {
    console.error(" Couldn't connect to database" + err.message);
  });
