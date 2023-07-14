import { Server } from "http";
import mongoose from "mongoose";
import config from "./config";
import app from "./app";

process.on("uncaughtException", (error) => {
  console.log(error);

  process.exit(1);
});

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log(`🆗 Database are connected`);

    server = app.listen(config.port, () => {
      console.log(`University app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(`❌ Failed to connect database: ${error}`);
  }

  process.on("unhandledRejection", (error) => {
    if (server) {
      server.close(() => {
        console.log(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

main();

process.on("SIGTERM", () => {
  console.log("SIGTERM is received");
  if (server) {
    server.close();
  }
});
