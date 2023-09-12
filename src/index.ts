import { Server } from "./controllers/server/server";
require("dotenv").config();

const port: any = process.env.PORT;

new Server().server.listen(port | 4000, () => {
  console.log(`Server is running on PORT ${port}!`);
});
