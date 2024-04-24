export class ReservationModel {
  public id!: number
  public date!: string;
  public time!: string;
  public adultNumber!: number;
  public childNumber!: number;
  public bebeNumber!: number;
  public carNumber!: number;
  public price!: number;
  public finalPrice!: number;
  public note!: string;
  public client: any;
  public room: any;
  public restaurant!: any;
  public coupon!: any;
  public state!: string;
  public canceled!: boolean;
  public canceledBy!: string;
  public source!: string;
  public createdAt!: string;
}
