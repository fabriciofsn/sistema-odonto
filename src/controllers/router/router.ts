import { Router } from "express";
import { homePage } from "./routers/homepage/homepage";

export const router: Router = Router();

router.get("/", homePage.home);
