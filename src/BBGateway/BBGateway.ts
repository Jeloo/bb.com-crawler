import {BBGatewayInterface} from './BBGatewayInterface';
import {Product} from './Product';

export class BBGateway implements BBGatewayInterface {
    listProducts(): Array<Product> {
        return [
            {name: 'Whey', rating: 9.2},
            {name: 'Casein', rating: 9.1}
        ];
    }
}