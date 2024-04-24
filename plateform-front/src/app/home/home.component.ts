import {Component, OnInit} from '@angular/core';
import * as Leaflet from 'leaflet';
import 'leaflet.locatecontrol';
import 'leaflet-routing-machine';
import 'leaflet-control-geocoder';
import axios from 'axios';

Leaflet.Icon.Default.imagePath = 'assets/leaflet/';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form: any = {
    startingAddress: null,
    arrivalAddress: null,
    date: null,
    time: null,
    vehicle: null,
    passengers: null,
    baggage: null
  };

  submitted = false;

  isStartingAddressInputValid = false;
  isArrivalAddressInputValid = false;
  isDateInputValid = false;
  isTimeInputValid = false;
  isVehicleInputValid = false;
  isPassengersInputValid = false;
  isBaggageInputValid = false;

  currentPosition = false;
  searchResults: any[] = [];
  coordinatesMyPositionAddress!: any;
  coordinatesStartingAddress = [];
  coordinatesArrivalAddress = [];

  map!: Leaflet.Map;
  markers: Leaflet.Marker[] = [];
  routingControl!: any;
  options = {
    layers: [
      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      })
    ],
    zoom: 12,
    center: {lat: 36.57142382346277, lng: 10.195312500000002}
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  onMapReady($event: Leaflet.Map) {
    this.map = $event;
    //Leaflet.control.locate().addTo(this.map);
  }

  mapClicked($event: any) {
    console.log($event.latlng.lat, $event.latlng.lng);
  }

  markerClicked($event: any, index: number) {
    console.log($event.latlng.lat, $event.latlng.lng);
  }

  markerDragEnd($event: any, index: number) {
    console.log($event.target.getLatLng());
  }


  checkValidity(id: any, event: any) {
    switch (id) {
      case 1 :
        this.isStartingAddressInputValid = event.target.value.trim() !== '';
        if (!this.isStartingAddressInputValid) this.currentPosition = false;
        break;

      case 2 :
        this.isArrivalAddressInputValid = event.target.value.trim() !== '';
        break;

      case 3 :
        this.isDateInputValid = event.target.value.trim() !== '';
        break;

      case 4 :
        this.isTimeInputValid = event.target.value.trim() !== '';
        break;

      case 5 :
        this.isVehicleInputValid = event.target.value.trim() !== '';
        break;

      case 6 :
        this.isPassengersInputValid = event.target.value.trim() !== '';
        break;
      case 7 :
        this.isBaggageInputValid = event.target.value.trim() !== '';
        break;
    }
  }

  getMyCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.initMarkers.bind(this));
      this.currentPosition = true;
    }
  }

  initMarkers(position: { coords: { latitude: any; longitude: any } }) {

    this.coordinatesMyPositionAddress = position.coords;

    const initialMarkers = [
      {
        position: {lat: this.coordinatesMyPositionAddress.latitude, lng: this.coordinatesMyPositionAddress.longitude},
        draggable: false
      },
    ];

    const data = initialMarkers[0];
    const marker = this.generateMarker(data, 0);
    marker.addTo(this.map).bindPopup(`<b>${data.position.lat},  ${data.position.lng}</b>`);
    this.map.panTo(data.position);
    this.markers.push(marker)

    getCountryName(this.coordinatesMyPositionAddress.latitude, this.coordinatesMyPositionAddress.longitude)
      .then(countryName => {
        this.form.startingAddress = countryName;
      })
      .catch(error => {
        console.error('Error:', error);
      });

    if (this.coordinatesArrivalAddress.length > 0) {
      if (this.routingControl) {
        this.routingControl.setWaypoints(null); // Clear all waypoints
      }
      this.routingControl = Leaflet.Routing.control({
        waypoints: [
          Leaflet.latLng(this.coordinatesMyPositionAddress.latitude, this.coordinatesMyPositionAddress.longitude),
          Leaflet.latLng(this.coordinatesArrivalAddress[1], this.coordinatesArrivalAddress[0])
        ],
        show: false
      }).addTo(this.map);
    }
  }

  generateMarker(data: any, index: number) {
    // Remove all layers from the map
    this.map.eachLayer((layer: any) => {
      if (!!layer.toGeoJSON) {
        this.map.removeLayer(layer);
      }
    });
    return Leaflet.marker(data.position, {draggable: data.draggable})
      .on('click', (event) => this.markerClicked(event, index))
    //.on('dragend', (event) => this.markerDragEnd(event, index));
  }

  searchAddress(event: any) {
    const currentValue = event.query.trim();
    const api = `https://nominatim.openstreetmap.org/search?format=geojson&limit=5&city=${encodeURI(currentValue)}`;

    axios.get(api)
      .then(response => {
        this.searchResults = response.data.features;
      })
      .catch(error => {
      });
  }

  onSelectStartingAddress(object: any, test: boolean) {

    if (!test) this.currentPosition = false;

    // Remove all layers from the map
    this.map.eachLayer((layer: any) => {
      if (!!layer.toGeoJSON) {
        this.map.removeLayer(layer);
      }
    });

    const {display_name} = object.properties;
    this.coordinatesStartingAddress = object.geometry.coordinates;

    const marker = Leaflet.marker([this.coordinatesStartingAddress[1], this.coordinatesStartingAddress[0]], {
      title: display_name
    });

    marker.addTo(this.map).bindPopup(display_name);

    this.map.setView([this.coordinatesStartingAddress[1], this.coordinatesStartingAddress[0]], 6);

    if (this.coordinatesArrivalAddress.length > 0) {
      if (this.routingControl) {
        this.routingControl.setWaypoints(null); // Clear all waypoints
      }
      this.routingControl = Leaflet.Routing.control({
        waypoints: [
          Leaflet.latLng(this.coordinatesStartingAddress[1], this.coordinatesStartingAddress[0]),
          Leaflet.latLng(this.coordinatesArrivalAddress[1], this.coordinatesArrivalAddress[0])
        ],
        show: false
      }).addTo(this.map);
    }

  }

  onSelectArrivalAddress(object: any) {
    const {display_name} = object.properties;
    this.coordinatesArrivalAddress = object.geometry.coordinates;

    const marker = Leaflet.marker([this.coordinatesArrivalAddress[1], this.coordinatesArrivalAddress[0]], {
      title: display_name
    });

    marker.addTo(this.map).bindPopup(display_name);

    this.map.setView([this.coordinatesArrivalAddress[1], this.coordinatesArrivalAddress[0]], 6);

    this.map.eachLayer((layer: any) => {
      if (!!layer.toGeoJSON) {
        this.map.removeLayer(layer);
      }
    });

    this.routingControl = Leaflet.Routing.control({
      waypoints: [
        Leaflet.latLng(this.currentPosition ? this.coordinatesMyPositionAddress.latitude : this.coordinatesStartingAddress[1],
          this.currentPosition ? this.coordinatesMyPositionAddress.longitude : this.coordinatesStartingAddress[0]),
        Leaflet.latLng(this.coordinatesArrivalAddress[1], this.coordinatesArrivalAddress[0])
      ],
      show: false
    }).addTo(this.map);
  }

  onSubmit(): void {
  }

}

async function getCountryName(lat: number, lng: number): Promise<string> {
  const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
  const data = await response.json();
  return data.display_name;
}
