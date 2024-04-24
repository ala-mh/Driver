import {PlanningModel} from "./planning.model";
import {MenuModel} from "./menu.model";
import {RoomModel} from "./room.model";
import {GalleryModel} from "./gallery.model";
import {StateModel} from "./state.model";
import {RoomSetupModel} from "./room-setup.model";

export class RestaurantModel {
  public id!: number;
  public name!: string;
  public description!: string;
  public descriptionHTML!: string;
  public email!: string;
  public phone!: number;
  public webSite!: string;
  public manager!: string;
  public smsMessage!: string;
  public state!: StateModel;
  public type!: string;
  public parking!: string;
  public latitude!: string;
  public longitude!: string;
  public image!: string;
  public imageFile!: File;
  public planning!: PlanningModel;
  public menus!: MenuModel[];
  public rooms!: RoomModel[];
  public roomsSetup!: RoomSetupModel[];
  public galleries!: GalleryModel[];
  public active!: boolean;

}
