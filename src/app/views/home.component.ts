import { Component } from '@angular/core';
import { RecomendacionModel } from '../components/models/recomendacion.model';

@Component({
    selector: 'home',
    templateUrl: './home.template.html',
    styleUrls: ['./home.css']
})
export class HomeComponent {

    recomendaciones: RecomendacionModel[] = [
        new RecomendacionModel({ id: 1, titulo: 'Teatros Clásicos', descripcion: '', reviews: 20, estrellas: 4, imagen: 'http://fundaciontcolon.org.ar/documentos/15/230_1sala.def.jpg', restricciones: [] }),
        new RecomendacionModel({ id: 2, titulo: 'Musica Urbana', descripcion: '', reviews: 15, estrellas: 5, imagen: 'https://fotos.perfil.com/2019/01/23/trim/728/500/dia-de-la-musica-01232019-03-599852.jpg', restricciones: [] }),
        new RecomendacionModel({ id: 3, titulo: 'Pizzerias de antaño', descripcion: '', reviews: 6, estrellas: 4, imagen: 'https://buenosairesconnect.com/wp-content/uploads/2017/07/pizzaporte%C3%B1a.jpg', restricciones: [] }),
    ]

}
