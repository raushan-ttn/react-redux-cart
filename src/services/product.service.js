import api from './api';
import { PRODUCT_LIST } from '../conf/config';

export class Product {

  getProduct({offset, limit}) {
    return api.get(`${PRODUCT_LIST}?page=${offset}&limit=${limit}`);
  }
  
}

const productService = new Product();
export default productService;
