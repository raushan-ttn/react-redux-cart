import api from './api';
import { PRODUCT_LIST } from '../conf/config';

export class Product {

  getProduct() {
    return api.get(PRODUCT_LIST);
  }
}

const productService = new Product();
export default productService;
