import { AppDataSource } from "../data-source";
import { Usuario } from "../entities/Professor";

export const UsuarioRepository = AppDataSource.getRepository(Usuario)