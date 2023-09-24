import { Router } from "express";
import { homePage } from "./routers/homepage/homepage";
import { cadastrarCliente } from "./routers/clientes/cadastrar_cliente";
import { cadastrarDentista } from "./routers/dentistas/cadastrar.dentista";
import { listarDentistas } from "./routers/dentistas/lista.dentistas";

export const router: Router = Router();

router.get("/", homePage.home);
router.post("/cadastrar/cliente", cadastrarCliente.cadastro);
router.post("/cadastrar/dentista", cadastrarDentista.cadastrarDentista);
router.get("/dentistas", listarDentistas.listarDentistas);
