import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  //Monza
  tempMonza: number = 0;
  locateMonza: string = '';
  //Monaco
  tempMonaco: number = 0;
  locateMonaco: string = '';
  //Spa
  tempSpa: number = 0;
  locateSpa: string = '';
  //Nurburgring
  tempNurburgring: number = 0;
  locateNurburgring: string = '';
  //le mans
  tempLeMans: number = 0;
  locateLeMans: string = '';
  constructor() {
    this.getMonzaWeather();
    this.getMonacoWeather();
    this.getNurburgringWeather();
    this.getLeMansWeather();
    this.getSpaWeather();
  }
  ngOnInit(): void {}

  getMonzaWeather() {
    fetch(
      'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/monza?unitGroup=metric&include=days%2Ccurrent&key=LRV3D7J7XNURRT6KWNLYMNH9D&contentType=json'
    )
      .then((response) => response.json())
      .then((data) => {
        this.tempMonza = data.days[0].temp;
        this.locateMonza = data.resolvedAddress;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  getMonacoWeather() {
    fetch(
      'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/monaco?unitGroup=metric&include=days%2Ccurrent&key=LRV3D7J7XNURRT6KWNLYMNH9D&contentType=json'
    )
      .then((response) => response.json())
      .then((data) => {
        this.tempMonaco = data.days[0].temp;
        this.locateMonaco = data.resolvedAddress;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  getSpaWeather() {
    fetch(
      'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/spa?unitGroup=metric&include=days%2Ccurrent&key=LRV3D7J7XNURRT6KWNLYMNH9D&contentType=json'
    )
      .then((response) => response.json())
      .then((data) => {
        this.tempSpa = data.days[0].temp;
        this.locateSpa = data.resolvedAddress;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getNurburgringWeather() {
    fetch(
      'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/N%C3%BCrburg?unitGroup=metric&include=days%2Ccurrent&key=LRV3D7J7XNURRT6KWNLYMNH9D&contentType=json'
    )
      .then((response) => response.json())
      .then((data) => {
        this.tempNurburgring = data.days[0].temp;
        this.locateNurburgring = data.resolvedAddress;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  getLeMansWeather() {
    fetch(
      'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/le%20mans?unitGroup=metric&include=days%2Ccurrent&key=LRV3D7J7XNURRT6KWNLYMNH9D&contentType=json'
    )
      .then((response) => response.json())
      .then((data) => {
        this.tempLeMans = data.days[0].temp;
        this.locateLeMans = data.resolvedAddress;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
