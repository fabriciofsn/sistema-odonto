import { Server } from "./controllers/server/server";
require("dotenv").config();

const port: string | number = process.env.PORT ? process.env.PORT : 4000;

new Server().server.listen(port, () => {
  console.log(`Server is running on PORT ${port}!`);
});
