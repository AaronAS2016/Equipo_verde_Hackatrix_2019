import { RestriccionModel } from './restriccion.model';

export class RecomendacionModel {
    id: number;
    titulo: string;
    descripcion: string;
    imagen: string;
    estrellas: number;
    reviews: number;
    restricciones: RestriccionModel[] = [];

    constructor(params) {
        if (params) {
            this.id = params.id;
            this.titulo = params.titulo;
            this.descripcion = params.descripcion;
            this.imagen = params.imagen;
            this.estrellas = params.estrellas;
            this.reviews = params.reviews;
            this.restricciones = params.restricciones;
        }
    }

    obtenerListaEstrellas() {
        let lista = [];
        for (let i = 0; i < 5; i++) {
            if (this.estrellas <= i) {
                lista.push("star_border");
            }
            else {
                lista.push("star")
            }
        }

        return lista;
    }
}