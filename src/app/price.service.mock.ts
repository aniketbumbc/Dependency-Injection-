//mock price service for test use interface in it for test 

import { PriceService } from './price-service';
export class MockPriceService implements PriceService {

    calculateTotalPrice(basePrice: number, state: string) {
        if (state == 'FL') {
            return basePrice + 0.66;
        }

        return basePrice;
    }
}