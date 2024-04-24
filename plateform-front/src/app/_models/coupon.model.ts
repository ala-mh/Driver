export class CouponModel {
  public id!: number
  public code!: string;
  public limitCount!: number;
  public discount!: number;
  public dateExpiration!: string;
  public general!: boolean;
  public restaurant!: any;
}
