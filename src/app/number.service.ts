import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  chkprime(a : number)
  {
    for (let i = 2; i <= Math.sqrt(a); i++) {

    }
    if(a % 2 ==0){
      return "Number is not prime";
    }
    else
    {
      return "Number is prime";
    }
  }
  }

