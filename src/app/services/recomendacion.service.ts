import { Injectable } from '@angular/core';
import { RecomendacionModel } from '../components/models/recomendacion.model';

@Injectable({
  providedIn: 'root'
})
export class RecomendacionService {

  constructor() { }

  public GetRecomendaciones(): RecomendacionModel[] {
    return [
      new RecomendacionModel(
        {
          id: 1,
          titulo: "Teatros Clásicos",
          descripcion: "",
          reviews: 20,
          estrellas: 4,
          imagen: "http://fundaciontcolon.org.ar/documentos/15/230_1sala.def.jpg",
          restricciones: [
            {
              id: 1,
              descripcion: "Ver",
              icono: ""
            }
          ]
        }),
      new RecomendacionModel({
        id: 2,
        titulo: "Musica Urbana",
        descripcion: "",
        reviews: 16,
        estrellas: 4,
        imagen: "https://www.musicnotes.com/images2/promos/store/900x520_piano-min.jpg",
        restricciones: [
          {
            id: 1,
            descripcion: "Ver",
            icono: ""
          },
          { id: 2, descripcion: 'Escuchar', icono: '' },
          { id: 6, descripcion: 'Otros', icono: '' }
        ]
      }),
      new RecomendacionModel({
        id: 3,
        titulo: "Pizzerías de Antaño",
        descripcion: "",
        reviews: 35,
        estrellas: 4,
        imagen: "http://www.telam.com.ar/advf/imagenes/2017/09/59c8e08548cd1_645x362.jpg",
        restricciones: [
          {
            id: 1,
            descripcion: "Ver",
            icono: ""
          },
          { id: 5, descripcion: 'Moverme', icono: '' },
          { id: 4, descripcion: 'Moverme con facilidad', icono: '' },
        ]
      }),
      new RecomendacionModel({
        id: 4,
        titulo: "Estadios de Futbol",
        descripcion: "",
        reviews: 76,
        estrellas: 5,
        imagen: "https://gestion.pe/resizer/FtSatk9L8kY5_CqBLqTtUcpdUxU=/940x569/smart/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/DL7IHELIMRB3HGAFZZGNQLNY5A.jpg",
        restricciones: [
          {
            id: 1,
            descripcion: "Ver",
            icono: ""
          },
          { id: 5, descripcion: 'Moverme', icono: '' },
          { id: 6, descripcion: 'Otros', icono: '' }
        ]
      }),
      new RecomendacionModel({
        id: 5,
        titulo: "Tango en la ciudad",
        descripcion: "",
        reviews: 54,
        estrellas: 5,
        imagen: "https://s3-us-west-2.amazonaws.com/denomades/blog/wp-content/uploads/2016/01/05164549/tango-buenos-aires-mejores-boliches-ok-696x392.jpg",
        restricciones: [
          {
            id: 1,
            descripcion: "Ver",
            icono: ""
          },
          { id: 5, descripcion: 'Moverme', icono: '' },
          { id: 6, descripcion: 'Otros', icono: '' }
        ]
      }),

      new RecomendacionModel({
        id: 6,
        titulo: "Parques Historicos",
        descripcion: "",
        reviews: 33,
        estrellas: 3,
        imagen: "https://cdn.civitatis.com/argentina/buenos-aires/galeria/thumbs/parque-tres-febrero-rosaleda.jpg",
        restricciones: [
          {
            id: 1,
            descripcion: "Ver",
            icono: ""
          },
          { id: 2, descripcion: 'Escuchar', icono: '' },
          { id: 3, descripcion: 'Estar de pie', icono: '' },
        ]
      })
    ]
  }

  public GetRecomendacionPorId(id: number) {
    return this.GetRecomendaciones().find(recomendacion => recomendacion.id == id);
  }

}
