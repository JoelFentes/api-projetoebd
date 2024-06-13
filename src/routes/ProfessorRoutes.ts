import { Router } from "express";
import { UsuarioController } from "../controllers/ProfessorController";



const usuarioRoutes = Router()

usuarioRoutes.post('/usuario', new UsuarioController().create)
usuarioRoutes.delete('/usuario/:usuarioId', new UsuarioController().deleteUsuario)




export default usuarioRoutes