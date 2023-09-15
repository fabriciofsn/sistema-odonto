"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./controllers/server/server");
require("dotenv").config();
const port = process.env.PORT ? process.env.PORT : 4000;
new server_1.Server().server.listen(port, () => {
    console.log(`Server is running on PORT ${port}!`);
});
//# sourceMappingURL=index.js.map