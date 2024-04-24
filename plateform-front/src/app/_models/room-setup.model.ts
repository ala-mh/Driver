import {RestaurantModel} from "./restaurant.model";

export class RoomSetupModel {
  public id!: number;
  public type!: string;
  public src!: string;
  public restaurant!: RestaurantModel;
}
