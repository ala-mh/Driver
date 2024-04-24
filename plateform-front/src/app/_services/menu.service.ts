import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../config/env";
import {MenuModel} from "../_models/menu.model";

const API_URL = environment.apiUrl + 'menu/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<MenuModel[]> {
    return this.http.get<MenuModel[]>(API_URL + 'menus', {responseType: 'json'});
  }

  create(model: MenuModel): Observable<any> {
    const menu: FormData = new FormData();

    if (model.id) menu.append('id', model.id.toString());
    menu.append('name', model.name);
    menu.append('description', model.description);
    menu.append('descriptionHTML', model.descriptionHTML);
    menu.append('image', model.image);
    if (model.imageFile) menu.append('imageFile', model.imageFile);

    if (model.restaurant) {
      const restaurant_Json = JSON.stringify(model.restaurant);
      const restaurant_Blob = new Blob([restaurant_Json], {type: 'application/json'});
      menu.append('restaurant_blob', restaurant_Blob, 'restaurant.json');
    }

    return this.http.post(
      API_URL + 'menu',
      menu,
      {
        responseType: 'json',
      }
    );
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(API_URL + 'menu/' + id, {responseType: 'json'});
  }

}
