// TODO : Put it in models folder ?

import { SplitInterpolation } from "@angular/compiler";

export class Car {
    id?:             number;
    title?:          string;
    address?:        string;
    brand?:          string;
    model?:          string;
    model_year?:     number;
    // maybe issuance set a date ?
    issuance?:       string;
    mileage?:        number;
    // as enum ?
    fuel?:           string;
    // as enum ?
    color?:          string;
    number_doors?:   number;
    horse_power?:    number;
    price?:          number;
    pictures?:       string[];
    sold?:           boolean;
    shown?:          boolean = false;

    constructor() {
        this.id = 1;
        this.title = "";
        this.issuance = "01-02-1123";
        this.price = 1000;
        this.shown = false;
    }

    static fullConstructor(title: string, address: string, brand:string, model:string, model_year:number,
        issuance: string, mileage: number, fuel:string, color:string, number_doors:number,
        horse_power:number, price: number, pictures: string[], sold: boolean) {
            let c = new Car();
            c.title = title;
            c.address = address;
            c.brand = brand;
            c.model = model;
            c.model_year = model_year;
            c.issuance = issuance;
            c.mileage = mileage;
            c.fuel = fuel;
            c.color = color;
            c.number_doors = number_doors;
            c.horse_power = horse_power;
            c.price = price;
            c.pictures = pictures;
            c.sold = sold;
            return c;
    }
    /*
    {
        "id": 1,
        "title": "BMW 330eA Touring M Sport + Garantie BMW 24 Mois",
        "address": "Strasbourg",
        "brand": "BMW",
        "model": "Other",
        "model_year": 2021,
        "issuance": "01/06/2021",
        "mileage": 17604,
        "fuel": "electric",
        "color": "white",
        "numbers_doors": 5,
        "horse_power": 292,
        "price": 55139,
        "pictures": [
            "https://img.leboncoin.fr/api/v1/lbcpb1/images/62/b6/10/62b610296a666b7fb3d249e29c11f96699b4440b.jpg?rule=classified-1200x800-jpg",
            "https://img.leboncoin.fr/api/v1/lbcpb1/images/c0/09/33/c009333271ecd0e4dd4dc235a77b4efb8fc893d2.jpg?rule=ad-large"
        ],
        "sold": "false"
    },*/
}
