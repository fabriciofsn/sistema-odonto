"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homePage = void 0;
class HomePage {
    home(Req, res) {
        return res.json({
            message: "Páginal inicial",
        });
    }
}
exports.homePage = new HomePage();
