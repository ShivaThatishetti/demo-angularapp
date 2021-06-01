export interface user
{
  uname:string
  dob:string
  cont:string
  mail:string
}

export interface bikeProducts
{
  cost:string,
  ProductTitle:string,
  KerbWeight:string,
  EngineCapacity:string,
  Mileage:string,
  Image:string
}
export interface Products1
{
  Brand:string,
  Model:string,
  Image:string
}

export interface Products2
{
  productTitle:string,
  productImage:string
}

export interface Post
{
  userId:number,
  id:number,
  title:string,
  body:string
}
export class mobiles
{
  constructor(public Brand:string,public Image:string,public Model){}
}
 