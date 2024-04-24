import {environment} from "../../config/env";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {GalleryModel} from "../_models/gallery.model";

const API_URL = environment.apiUrl + 'gallery/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<GalleryModel[]> {
    return this.http.get<GalleryModel[]>(API_URL + 'galleries', {responseType: 'json'});
  }

  create(model: GalleryModel[]): Observable<any> {
    const formData: FormData = new FormData();
    let imagesFile: any = [];

    if (model.length > 0) {
      const galleries_Json = JSON.stringify(model);
      const galleries_Blob = new Blob([galleries_Json], {type: 'application/json'});
      formData.append('galleries_blob', galleries_Blob, 'galleries.json');

      model.forEach((item, index) => {
        if (item.imageFile !== null) formData.append('files', item.imageFile)
      });
    }

    return this.http.post(
      API_URL + 'gallery',
      formData,
      {
        responseType: 'json',
      }
    );
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(API_URL + 'gallery/' + id, {responseType: 'json'});
  }

}
