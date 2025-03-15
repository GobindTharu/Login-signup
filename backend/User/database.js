import mongoose from "mongoose";
const dbName = "Daraz-Online-Shopping-User";
const dbUserName = "mern";
const dbPassword = encodeURIComponent('mern@123');
const dbHost = "school.xg9dy.mongodb.net";
const dbOptions = "retryWrites=true&w=majority&appName=School";
const url = `mongodb+srv://${dbUserName}:${dbPassword}@${dbHost}/${dbName}?${dbOptions}`;
const ConnectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("Database connection Successful");
  } catch (error) {
    console.log("Database connection Failed");
    console.log(error);
    process.exit(0);
  }
};

export default ConnectDB;
