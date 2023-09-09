"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const homepage_1 = require("./routers/homepage");
exports.router = (0, express_1.Router)();
exports.router.use(homepage_1.homePage.home);
