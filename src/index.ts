import { Server } from "./controllers/server";

new Server().server.listen(3000, () => {
  console.log("Server is running!");
});
