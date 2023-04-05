import { app } from "./app.js";

import { connectToDatabase } from "./data/database.js";

// separate function to connect with DB
connectToDatabase();

app.listen(process.env.PORT, () => {
  console.log("server is working");
});
