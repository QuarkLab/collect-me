import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  MarkerOptions,
  Marker
 } from '@ionic-native/google-maps';

 import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 declare var google: any;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  @ViewChild('map') mapRef: ElementRef;

  map: any;
  location: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    this.showMap();
  }

  showMap(){
    this.location = new google.maps.LatLng(51.507351, -0.127758);

    //  let watch = this.geolocation.watchPosition();
    //  watch.subscribe((data) => {
    //   // data can be a set of coordinates, or an error (if an error occurred).
    //   // data.coords.latitude
    //   // data.coords.longitude
    //  });

    var options = {
      center: this.location,
      zoom: 16,
      streetViewControl: false,
      mapTypeId: 'roadmap'
    }

    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  }

  addMarker(position, map){
    return new google.maps.Marker({
      position,
      icon: { url : '../../assets/sume_verysmall.png' },
      map
    });
  }

  isNumeric(n: any) : n is number | string {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  setHome(){
    this.geolocation.getCurrentPosition().then((resp) => {
      if(this.isNumeric(resp.coords.latitude) && this.isNumeric(resp.coords.longitude)){
        this.location = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);

        var options = {
          center: this.location,
          zoom: 16,
          streetViewControl: false,
          mapTypeId: 'roadmap'
        }
    
        this.map = new google.maps.Map(this.mapRef.nativeElement, options);

        this.addMarker(this.location, this.map);

      }
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }
}
