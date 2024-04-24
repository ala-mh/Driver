import {RestaurantModel} from "./restaurant.model";

export class MenuModel {
  public id!: number;
  public name!: string;
  public description!: string;
  public descriptionHTML!: string;
  public image!: string;
  public imageFile!: File;
  public restaurant!: RestaurantModel;
}
