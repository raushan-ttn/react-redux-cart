import api from './api';
import { PRODUCT_LIST } from '../conf/config';

export class Product {

  getProduct({pageNum, limit}) {
    return api.get(`${PRODUCT_LIST}?page=${pageNum}&limit=${limit}`);
  }
  
}

const productService = new Product();
export default productService;
