import {PriceServiceService} from './price-service.service';
export class Product{
service:PriceServiceService;
basePrice:number;
constructor(basePrice:number){
this.service=new PriceServiceService();
this.basePrice=basePrice;
}
totalPrice(state:string)
{
    return this.service.calculateTotalPrice(this.basePrice,state);
}
}