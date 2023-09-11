import { Router } from "express";
import { homePage } from "./routers/homepage/homepage";
import { cadastrarCliente } from "./routers/clientes/cadastrar_cliente";
import { cadastrarDentista } from "./routers/dentistas/cadastrar.dentista";

export const router: Router = Router();

router.get("/", homePage.home);
router.post("/cadastrar/cliente", cadastrarCliente.cadastro);
router.post("/cadastrar/dentista", cadastrarDentista.cadastrarDentista);
