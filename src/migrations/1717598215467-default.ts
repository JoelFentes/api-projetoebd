import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1717598215467 implements MigrationInterface {
    name = 'Default1717598215467'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "avaliacoes" ("id" SERIAL NOT NULL, "nome" character varying(50) NOT NULL, "descricao" character varying(150) NOT NULL, "data_criacao" TIMESTAMP NOT NULL, "data_envio" TIMESTAMP NOT NULL, "enviado" boolean NOT NULL, "finalizado" boolean NOT NULL, "usuario_id" integer, CONSTRAINT "PK_84647fe39434d93a8b0ced69d7a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "usuarios" ("id" SERIAL NOT NULL, "nome" character varying(50) NOT NULL, "email" character varying(50) NOT NULL, "senha" character varying(25) NOT NULL, CONSTRAINT "PK_d7281c63c176e152e4c531594a8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "avaliacoes" ADD CONSTRAINT "FK_66413181eb487cda3046f9c93b4" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "avaliacoes" DROP CONSTRAINT "FK_66413181eb487cda3046f9c93b4"`);
        await queryRunner.query(`DROP TABLE "usuarios"`);
        await queryRunner.query(`DROP TABLE "avaliacoes"`);
    }

}
