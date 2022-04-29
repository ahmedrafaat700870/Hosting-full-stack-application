import * as dotenv from "dotenv";
dotenv.config();

// ENV variables 
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
  PORT: process.env.PORT,
  username: `${process.env.POSTGRES_USERNAME}`,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  DBport: Number(process.env.DBPORT),
  host: process.env.POSTGRES_HOST,
  dialect: "postgres",
  // awsRegion: process.env.AWS_REGION,
  // awsProfile: process.env.AWS_PROFILE,
  // awsMediaBucket: process.env.AWS_BUCKET,
  url: process.env.URL,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};

