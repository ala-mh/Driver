import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../config/env";
import {RoomModel} from "../_models/room.model";

const API_URL = environment.apiUrl + 'room/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<RoomModel[]> {
    return this.http.get<RoomModel[]>(API_URL + 'rooms', {responseType: 'json'});
  }

  create(model: RoomModel): Observable<any> {
    const room: FormData = new FormData();

    if (model.id) room.append('id', model.id.toString());
    room.append('name', model.name);
    room.append('description', model.description);
    room.append('descriptionHTML', model.descriptionHTML);
    room.append('type', model.type);
    room.append('quantity', model.quantity.toString());
    room.append('quantityAvailable', model.quantityAvailable.toString());
    room.append('maxPlaces', model.maxPlaces.toString());
    room.append('minPlaces', model.minPlaces.toString());
    room.append('priceAdult', model.priceAdult.toString());
    room.append('priceChild', model.priceChild.toString());
    room.append('image', model.image);
    if (model.imageFile) room.append('imageFile', model.imageFile);

    if (model.restaurant) {
      const restaurant_Json = JSON.stringify(model.restaurant);
      const restaurant_Blob = new Blob([restaurant_Json], {type: 'application/json'});
      room.append('restaurant_blob', restaurant_Blob, 'restaurant.json');
    }
    return this.http.post(
      API_URL + 'room',
      room,
      {
        responseType: 'json',
      }
    );
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(API_URL + 'room/' + id, {responseType: 'json'});
  }
}
