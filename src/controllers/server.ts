import bodyParser from "body-parser";
import Express from "express";

export class Server {
  public server: Express.Application;

  constructor() {
    this.server = Express();
    this.middlewares();
  }

  private middlewares() {
    this.server.use(Express.json());
    this.server.use(bodyParser.json());
    this.server.use(bodyParser.urlencoded({ extended: true }));
  }
}
