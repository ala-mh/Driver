import {RestaurantModel} from "./restaurant.model";

export class GalleryModel {
  public id!: number;
  public image!: string;
  public imageFile!: File;
  public restaurant!: RestaurantModel;
}
