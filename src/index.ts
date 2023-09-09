import { Server } from "./controllers/server/server";

new Server().server.listen(3000, () => {
  console.log("Server is running!");
});
