import { RestriccionModel } from './restriccion.model';

export class RecomendacionModel {
    id:number;
    titulo: string;
    descripcion: string;
    imagen: string;
    estrellas: number;
    restricciones: RestriccionModel[] = [];
}