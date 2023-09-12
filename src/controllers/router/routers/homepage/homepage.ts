import { Request, Response } from "express";

class HomePage {
  public home(req: Request, res: Response) {
    return res.json({
      message: "Páginal inicial",
    });
  }
}

export const homePage = new HomePage();
