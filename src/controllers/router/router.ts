import { Router } from "express";
import { homePage } from "./routers/homepage/homepage";
import { cadastrarCliente } from "./routers/clientes/cadastrar_cliente";

export const router: Router = Router();

router.get("/", homePage.home);
router.post("/cadastrar/cliente", cadastrarCliente.cadastro);
