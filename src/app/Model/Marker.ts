// export class Marcador {

//     constructor(public lat: number, public lng: number ) {

//     }
// }

export class Marker {

    public lat: number;
    public lng: number;

    public title = 'Title';
    public desc = 'Description';

    constructor(lat: number, lng: number ) {
        this.lat = lat;
        this.lng = lng;
    }
}