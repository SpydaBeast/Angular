import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

constructor(private http:HttpClient) {}

getAllJokes(){
    return this.http.get('https://api.chucknorris.io/jokes/random');
 }
 getExplicitJokes(){
    return this.http.get('https://api.chucknorris.io/jokes/random?category=explicit');
 }
 getDevJokes(){
    return this.http.get('https://api.chucknorris.io/jokes/random?category=dev');
 }
 getMoiveJokes(){
    return this.http.get('https://api.chucknorris.io/jokes/random?category=moive');
 }
 getFoodJokes(){
    return this.http.get('https://api.chucknorris.io/jokes/random?category=food');
 }
 getCelebrityJokes(){
    return this.http.get('https://api.chucknorris.io/jokes/random?category=celebrity');
 }
 getScienceJokes(){
    return this.http.get('https://api.chucknorris.io/jokes/random?category=science');
 }
 getSportsJokes(){
    return this.http.get('https://api.chucknorris.io/jokes/random?category=sports');
 }
 getPoliticalJokes(){
    return this.http.get('https://api.chucknorris.io/jokes/random?category=political');
 }
 getReligionJokes(){
    return this.http.get('https://api.chucknorris.io/jokes/random?category=religion');
 }
 getAnimalJokes(){
    return this.http.get('https://api.chucknorris.io/jokes/random?category=animal');
 }
 getHistoryJokes(){
    return this.http.get('https://api.chucknorris.io/jokes/random?category=history');
 }
 getMusicJokes(){
    return this.http.get('https://api.chucknorris.io/jokes/random?category=music');
 }
 getTravelJokes(){
    return this.http.get('https://api.chucknorris.io/jokes/random?category=travel');
 }
 getCareerJokes(){
    return this.http.get('https://api.chucknorris.io/jokes/random?category=career');
 }
 getMoneyJokes(){
    return this.http.get('https://api.chucknorris.io/jokes/random?category=money');
 }
 getFashionJokes(){
    return this.http.get('https://api.chucknorris.io/jokes/random?category=fashion');
 }
}