import { Component, OnInit } from '@angular/core';
import { Marker } from 'src/app/Model/Marker';
import { MapUpdateComponent } from './map-update.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-mapa',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  markers: Marker[] = [];

  geo = navigator.geolocation;

  lat = 51.678418;
  lng = 7.809007;

  constructor(public snackBar: MatSnackBar,
              public dialog: MatDialog) {
    this.geo.getCurrentPosition(position => {
      console.log(position);
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
    });
    if (localStorage.getItem('markers')){
      this.markers = JSON.parse(localStorage.getItem('markers'));
    }
   }

  ngOnInit(): void {
  }

  addMarker(event: google.maps.Map): void{

    // tslint:disable-next-line: no-string-literal
    const coords: {lat: number, lng: number} = event['coords'];
    // tslint:disable-next-line: no-string-literal
    console.log(event['coords'].lat);

    const newMarker = new Marker(coords.lat, coords.lng);
    this.markers.push(newMarker);

    this.saveStorage();

    this.snackBar.open('Marker Add', 'Close', {
      duration: 1000
    });
  }

  saveStorage(): void{
    localStorage.setItem('markers', JSON.stringify(this.markers));
  }

  updateMarker(marker: Marker): void{
    const dialogRef = this.dialog.open(MapUpdateComponent, {
      width: '250px',
      data: {title: marker.title, desc: marker.desc}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (!result){
        return;
      }
      marker.title = result.title;
      marker.desc = result.desc;

      this.saveStorage();
      this.snackBar.open('Marker update', 'Close', {
        duration: 1000
      });
    });
  }

  deleteMarker(i: number): void{
    this.markers.splice(i, 1);
    this.saveStorage();
    this.snackBar.open('Marker Delete', 'Close', {
      duration: 1000
    });
  }

}
