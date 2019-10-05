import { Component, OnInit, Input } from '@angular/core';
import { RecomendacionModel } from 'src/app/components/models/recomendacion.model';
import { ActivatedRoute } from '@angular/router';
import { RecomendacionService } from 'src/app/services/recomendacion.service';

@Component({
    selector: 'detalle-recomendacion',
    templateUrl: './detalle-recomendacion.component.html',
    styleUrls: ['./detalle-recomendacion.component.css']
})
export class DetalleRecomendacionComponent implements OnInit {

    constructor(
        public route: ActivatedRoute,
        public recomendacionService: RecomendacionService
    ) { }

    @Input() recomendacion: RecomendacionModel;

    private sub: any;

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            if (params['id']) {
                this.recomendacion = this.recomendacionService.GetRecomendacionPorId(params['id']);
            }
        })
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
