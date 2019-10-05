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

}
