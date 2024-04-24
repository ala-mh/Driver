import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../config/env";
import {RestaurantModel} from "../_models/restaurant.model";

const API_URL = environment.apiUrl + 'restaurant/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<RestaurantModel[]> {
    return this.http.get<RestaurantModel[]>(API_URL + 'restaurants', {responseType: 'json'});
  }

  getAllRestaurantsByUser(userId: any): Observable<RestaurantModel[]> {
    return this.http.get<RestaurantModel[]>(API_URL + 'restaurantsByUser/' + userId, {responseType: 'json'});
  }

  getRestaurantsById(id: any): Observable<RestaurantModel> {
    return this.http.get<RestaurantModel>(API_URL + 'restaurant/' + id, {responseType: 'json'});
  }

  create(model: RestaurantModel): Observable<any> {
    const formData: FormData = new FormData();

    formData.append('name', model.name);
    formData.append('description', model.description);
    formData.append('descriptionHTML', model.descriptionHTML);
    formData.append('email', model.email);
    formData.append('phone', model.phone.toString());
    formData.append('webSite', model.webSite);
    formData.append('manager', model.manager);
    formData.append('smsMessage', model.smsMessage);
    formData.append('type', model.type);
    formData.append('parking', model.parking);
    formData.append('latitude', model.latitude);
    formData.append('longitude', model.longitude);
    formData.append('image', model.image);
    formData.append('file', model.imageFile);

    const state_Json = JSON.stringify(model.state);
    const state_Blob = new Blob([state_Json], {type: 'application/json'});
    formData.append('state_blob', state_Blob, 'state.json');

    const planning_Json = JSON.stringify(model.planning);
    const planning_Blob = new Blob([planning_Json], {type: 'application/json'});
    formData.append('planning_blob', planning_Blob, 'planning.json');

    if (model.menus.length > 0) {
      const menu_Json = JSON.stringify(model.menus);
      const menu_Blob = new Blob([menu_Json], {type: 'application/json'});
      formData.append('menu_blob', menu_Blob, 'menu.json');
    }

    if (model.rooms.length > 0) {
      const room_Json = JSON.stringify(model.rooms);
      const room_Blob = new Blob([room_Json], {type: 'application/json'});
      formData.append('room_blob', room_Blob, 'room.json');
    }

    if (model.roomsSetup.length > 0) {
      const room_Setup_Json = JSON.stringify(model.roomsSetup);
      const room_Setup_Blob = new Blob([room_Setup_Json], {type: 'application/json'});
      formData.append('roomSetup_blob', room_Setup_Blob, 'roomSetup.json');
    }

    if (model.galleries) {
      if (model.galleries.length > 0) {
        const gallery_Json = JSON.stringify(model.galleries);
        const gallery_Blob = new Blob([gallery_Json], {type: 'application/json'});
        formData.append('gallery_blob', gallery_Blob, 'gallery.json');

        if (model.galleries.length > 0) {
          model.galleries.forEach((item, index) => {
            if (item.imageFile !== null) formData.append('files', item.imageFile)
          });
        }
      }
    }


    return this.http.post(
      API_URL + 'restaurant',
      formData,
      {
        responseType: 'json',
      }
    );
  }

  updateInformation(model: RestaurantModel): Observable<any> {
    const formData1: FormData = new FormData();
    formData1.append('id', model.id.toString());
    formData1.append('name', model.name);
    formData1.append('description', model.description);
    formData1.append('descriptionHTML', model.descriptionHTML);
    formData1.append('email', model.email);
    formData1.append('phone', model.phone.toString());
    formData1.append('webSite', model.webSite);
    formData1.append('manager', model.manager);
    formData1.append('smsMessage', model.smsMessage);
    formData1.append('type', model.type);
    formData1.append('parking', model.parking);
    formData1.append('image', model.image);
    formData1.append('file', model.imageFile);

    const state_Json = JSON.stringify(model.state);
    const state_Blob = new Blob([state_Json], {type: 'application/json'});
    formData1.append('state_blob', state_Blob, 'state.json');

    return this.http.put(
      API_URL + 'restaurant/information',
      formData1,
      {
        responseType: 'json',
      }
    );
  }

  updateLocation(model: RestaurantModel): Observable<any> {
    const formData1: FormData = new FormData();
    formData1.append('id', model.id.toString());
    formData1.append('latitude', model.latitude);
    formData1.append('longitude', model.longitude);

    return this.http.put(
      API_URL + 'restaurant/location',
      formData1,
      {
        responseType: 'json',
      }
    );
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(API_URL + 'restaurant/' + id, {responseType: 'json'});
  }

  changeStatus(id: number): Observable<any> {
    return this.http.put(
      API_URL + 'status/' + id,
      httpOptions
    );
  }
}
