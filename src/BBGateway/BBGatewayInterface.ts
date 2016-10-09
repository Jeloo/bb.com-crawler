import {Product} from './Product';

export interface BBGatewayInterface {
    listProducts(): Array<Product>;
}