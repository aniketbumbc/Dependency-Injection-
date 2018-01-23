//import {PriceServiceService} from './price-service.service';
//implementation of price service interface to get PriceService
    import{PriceService} from './price-service';
export class Product{
service:PriceService;
basePrice:number;
constructor(basePrice:number,service:PriceService){
//this.service=new PriceServiceService();
this.service=service;
this.basePrice=basePrice;
}
totalPrice(state:string)
{
    return this.service.calculateTotalPrice(this.basePrice,state);
}
}