import { User } from "./User"
import { Company } from "./Company"

export interface mappable {
  location : {
    lat:number,
    lng:number
  }
  markerContent ():string ;
  color:string
}

export class CustomMap {
  private googleMap:google.maps.Map
  constructor(id:string) {
    this.googleMap = new google.maps.Map(document.getElementById(id),{
      zoom:1,
      center:{
        lat:0,
        lng:0
      }
    })
  }
  addMarker (mappable : mappable):void {
   const marker = new google.maps.Marker({
      map:this.googleMap,
      position :{
        lng:mappable.location.lng,
        lat:mappable.location.lat,
      }
    })
marker.addListener('click' ,() => {
  const infoWindow = new google.maps.InfoWindow({
    content:mappable.markerContent()
  })
  infoWindow.open(this.googleMap , marker)
})
  }
  


  
}