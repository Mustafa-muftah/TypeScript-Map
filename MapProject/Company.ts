import faker from 'faker'
import { mappable } from './CustomMap';


export class Company implements mappable {
  name:string ;
  color:'green'
  catchPrase:string;
  location : {
    lat:number;
    lng:number;
  }
  constructor () {
    this.name = faker.company.companyName();
    this.catchPrase = faker.company.catchPhrase();
    this.location = {
      lat:parseFloat( faker.address.latitude()),
      lng:parseFloat (faker.address.longitude())
    }
  }
  markerContent ():string {
    return `<div><h1>Name : ${this.name}</h1>
    <h3>catchPrase : ${this.catchPrase}</h3></div>`
      }
}