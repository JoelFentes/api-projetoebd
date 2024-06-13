import express from 'express';
import { AppDataSource } from './data-source';
import cors from 'cors';
import  usuarioRouter  from './routes/ProfessorRoutes'; 

async function startServer() {
    await AppDataSource.initialize(); // Inicialize o DataSource

    const app = express();

    app.use(cors());
    app.use(express.json());

    app.use(
        usuarioRouter, 
       
    )

    
    return app.listen(process.env.PORT)
}

startServer().catch(error => {
    console.error('Error starting server:', error);
});
