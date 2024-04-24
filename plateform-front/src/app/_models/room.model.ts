import {RestaurantModel} from "./restaurant.model";

export class RoomModel {
  public id!: number;
  public name!: string;
  public description!: string;
  public descriptionHTML!: string;
  public type!: string;
  public quantity!: number;
  public quantityAvailable!: number;
  public maxPlaces!: number;
  public minPlaces!: number;
  public priceAdult!: number;
  public priceChild!: number;
  public image!: string;
  public imageFile!: File;
  public restaurant!: RestaurantModel;
}
