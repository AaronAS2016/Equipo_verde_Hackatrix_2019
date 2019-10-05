import { Component, OnInit, Input } from '@angular/core';
import { RecomendacionModel } from '../models/recomendacion.model';
import { RecomendacionService } from 'src/app/services/recomendacion.service';
import { Router } from '@angular/router';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
    selector: 'recomendaciones',
    templateUrl: './recomendaciones.component.html',
    styleUrls: ['./recomendaciones.component.css']
})
export class RecomendacionesComponent implements OnInit {

    constructor(
        public recomendacionService: RecomendacionService,
        private perfilService: PerfilService,
        public router: Router
    ) { }

    puntos: RecomendacionModel[] = [];
    perfil;
    recomendaciones: Array<RecomendacionModel> = new Array<RecomendacionModel>();
    ngOnInit() {
        this.puntos = this.obtenerRecomendaciones();
        console.log(this.puntos);
        this.perfil = this.perfilService.getPerfil();
        this.getRecomendados();
    }

    obtenerRecomendaciones() {
        return this.recomendacionService.GetRecomendaciones();
    }

    navegarRecomendacion(id: number) {
        if (!id) return;
        this.router.navigate(['/detalle-recomendacion/' + id]);
    }

    getRecomendados() {
        if (this.perfil["1"] != null && this.perfil["2"]) {
            for (let index = 0; index < this.puntos.length; index++) {
                const punto = this.puntos[index];
                var flag = true;
                console.log('perfil', this.perfil)
                for (let index = 0; index < this.perfil["1"].length && flag; index++) {
                    const restriccion = this.perfil["1"][index];
                    console.log('perfil1',this.perfil["1"]);
                    console.log(punto.restricciones.findIndex(pr => pr.id == restriccion.id) > -1);
                    if (punto.restricciones.findIndex(pr => pr.id == restriccion.id) > -1) {
                        flag = false;
                    }
                }
                if (flag) {
                    this.recomendaciones.push(punto);
                }
            }
        }
        else{
            this.recomendaciones = this.puntos;
        }

    console.log('recomendaciones', this.recomendaciones);
    }
}