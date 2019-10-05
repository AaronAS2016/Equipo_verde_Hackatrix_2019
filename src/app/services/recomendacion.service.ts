import { Injectable } from '@angular/core';
import { RecomendacionModel } from '../components/models/recomendacion.model';

@Injectable({
  providedIn: 'root'
})
export class RecomendacionService {

  constructor() { }

  public GetRecomendaciones(): RecomendacionModel[] {
    return [
      // new RecomendacionModel({ id: 1, titulo: 'Teatros Clásicos', descripcion: '', reviews: 20, estrellas: 4, imagen: 'http://fundaciontcolon.org.ar/documentos/15/230_1sala.def.jpg', restricciones: [{ id: 1, descripcion: 'Ver', icono: '' }] }),
      // new RecomendacionModel({ id: 2, titulo: 'Musica Urbana', descripcion: '', reviews: 15, estrellas: 5, imagen: 'https://fotos.perfil.com/2019/01/23/trim/728/500/dia-de-la-musica-01232019-03-599852.jpg', restricciones: [] }),
      // new RecomendacionModel({ id: 3, titulo: 'Pizzerias de antaño', descripcion: '', reviews: 6, estrellas: 4, imagen: 'https://buenosairesconnect.com/wp-content/uploads/2017/07/pizzaporte%C3%B1a.jpg', restricciones: [] }),

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
        imagen: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiLmLHE14XlAhX5HrkGHbd2CmMQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.musicnotes.com%2Fpiano%2F&psig=AOvVaw19DQqQxZVzwUoRDzGxPUzy&ust=1570384298537443",
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
        imagen: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwipx7WS2YXlAhXHHrkGHW7eDqgQjRx6BAgBEAQ&url=http%3A%2F%2Fwww.telam.com.ar%2Fnotas%2F201709%2F206930-la-pizzeria-imperio-chacarita-fue-elegida-como-la-mejor-de-la-avenida-corrientes-en-la-sexta-maraton-muza5k.html&psig=AOvVaw2-2cHJj2Ckr3zc49H_MHCj&ust=1570384729272914",
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
        imagen: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiM5fLe2YXlAhXYGrkGHXIWAzsQjRx6BAgBEAQ&url=https%3A%2F%2Fgestion.pe%2Ftendencias%2Fperu-vs-argentina-estadio-llama-bombonera-220202-noticia%2F&psig=AOvVaw1JAEC2I0nNUe0fM9rlFUop&ust=1570384881978298",
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
        imagen: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwji1pKQ2oXlAhV9G7kGHRyYDpEQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.tripadvisor.co.za%2FLocationPhotoDirectLink-g312741-d4405613-i233398753-Photo_Tours_Buenos_Aires-Buenos_Aires_Capital_Federal_District.html&psig=AOvVaw3dDJqpDveS2g7MaQqQrvX9&ust=1570384980267951",
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
        imagen: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjF_cq32oXlAhWbF7kGHS2RCWsQjRx6BAgBEAQ&url=https%3A%2F%2Fturismo.buenosaires.gob.ar%2Fen%2Fatractivo%2Fparque-de-los-ni%25C3%25B1os&psig=AOvVaw0icYIZEw8Ge1HIc30r7q8G&ust=1570385071910075",
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
