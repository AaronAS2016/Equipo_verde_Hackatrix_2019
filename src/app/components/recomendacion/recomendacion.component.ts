import { Component, OnInit, Input } from '@angular/core';
import { RecomendacionModel } from '../models/recomendacion.model';

@Component({
    selector: 'recomendacion',
    templateUrl: './recomendacion.component.html',
    styleUrls: ['./recomendacion.component.css']
})
export class RecomendacionComponent implements OnInit {

    constructor(
    ) { }

    @Input() recomendacion: RecomendacionModel;

    ngOnInit() {

    }

}
