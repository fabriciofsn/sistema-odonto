"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./controllers/server/server");
new server_1.Server().server.listen(3000, () => {
    console.log("Server is running!");
});
//# sourceMappingURL=index.js.map