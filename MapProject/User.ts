import faker from 'faker'
import { mappable } from './CustomMap';


export class User implements mappable {
 
  name:string ;
  color:'red'
  location:{
    lat:number;
    lng:number;
  }
  constructor() {
    this.name = faker.name.firstName(),
    this.location ={
      lat:parseFloat( faker.address.latitude()),
      lng:parseFloat( faker.address.longitude()),
    }
  }
  markerContent ():string {
return `<h1>Name : ${this.name}</h1>`
  }
}