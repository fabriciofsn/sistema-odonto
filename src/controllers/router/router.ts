import { Request, Response, Router } from "express";
import { homePage } from "./routers/homepage";

export const router: Router = Router();

router.use(homePage.home);
