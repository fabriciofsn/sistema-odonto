import bodyParser from "body-parser";
import Express from "express";
import { router } from "../router/router";

export class Server {
  public server: Express.Application;

  constructor() {
    this.server = Express();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.server.use(Express.json());
    this.server.use(bodyParser.json());
    this.server.use(bodyParser.urlencoded({ extended: true }));
  }

  private routes(): void {
    this.server.use(router);
  }
}
