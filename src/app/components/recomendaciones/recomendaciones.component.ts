import { Component, OnInit, Input } from '@angular/core';
import { RecomendacionModel } from '../models/recomendacion.model';
import { RecomendacionService } from 'src/app/services/recomendacion.service';
import { Router } from '@angular/router';

@Component({
    selector: 'recomendaciones',
    templateUrl: './recomendaciones.component.html',
    styleUrls: ['./recomendaciones.component.css']
})
export class RecomendacionesComponent implements OnInit {

    constructor(
        public recomendacionService: RecomendacionService,
        public router: Router
    ) { }

    recomendaciones: RecomendacionModel[] = [];

    ngOnInit() {
        this.recomendaciones = this.obtenerRecomendaciones();
    }

    obtenerRecomendaciones() {
        return this.recomendacionService.GetRecomendaciones();
    }

    navegarRecomendacion(id: number) {
        if (!id) return;
        this.router.navigate(['/detalle-recomendacion/' + id]);
    }

    restricciones = [{
        id: 1,
        descripcion: "Ver",
        icono: ""
    },
    { id: 5, descripcion: 'Moverme', icono: '' }]

    filtrar() {
        this.recomendaciones.filter(recomendacion => recomendacion.restricciones.find(restriccion => this.restricciones.map(res => res.id).includes(restriccion.id)))
    }

}
