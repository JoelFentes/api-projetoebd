import { Request, Response } from "express";
import { UsuarioRepository } from "../repositories/UsuarioRepository";

export class UsuarioController {
    async create(req: Request , res: Response) {
        const {nome, email, senha} = req.body

        if(!nome || !email || !senha === undefined) {
            return res.status(400).json({message: 'Todos os campos são obrigatórios'})
        }

        try{
            const newUsuario = UsuarioRepository.create({
                nome, email, senha
            })

            await UsuarioRepository.save(newUsuario)
            return res.status(201).json(newUsuario)

        }catch (error) {
            console.log(error);
            return res.status(500).json({message: 'Internal Server Error'})
        }

        

    }

    async deleteUsuario(req: Request, res: Response){
        const {usuarioId} = req.params

        try{
            const usuarioIdNumber = parseInt(usuarioId, 10)
            console.log("ID do Usuário a ser excluído:", usuarioId)

            if (isNaN(usuarioIdNumber)) {
                console.log("ID do Usuário inválido.");
                return res.status(400).json({ message: "ID do Usuário inválido." });
            }

            const usuarioParaExcluir = await UsuarioRepository.findOneBy({id: usuarioIdNumber})

            if(!usuarioParaExcluir){
                console.log("Usuário não encontrado.")
                return res.status(404).json({message: "Usuário não encontrado."})
            }
            await UsuarioRepository.remove(usuarioParaExcluir)
            console.log("Usuário excluído com sucesso:", usuarioParaExcluir)
            return res.status(200).json({message: "Usuário excluido com sucesso"})
        }catch(error){
            console.log(error)
            console.error("Erro ao excluir usuário:", error)
            return res.status(500).json({message: "Internal Server Error"})
        }


    }

}    

    