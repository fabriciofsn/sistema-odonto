import bodyParser from "body-parser";
import Express from "express";
import { router } from "../router/router";
import { connection } from "../../database/database.connection";

export class Server {
  public server: Express.Application;

  constructor() {
    this.server = Express();
    this.middlewares();
    this.routes();
    this.databaseConnection();
  }

  private middlewares(): void {
    this.server.use(Express.json());
    this.server.use(bodyParser.json());
    this.server.use(bodyParser.urlencoded({ extended: true }));
  }

  private routes(): void {
    this.server.use(router);
  }

  private databaseConnection(): void {
    (async () => {
      try {
        connection.authenticate().then(() => {
          console.log("Connected to database");
        });
      } catch (e) {
        console.log(`There was an error ${e}`);
      }
    })();
  }
}
