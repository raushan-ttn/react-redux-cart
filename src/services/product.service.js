import api from './api';
import { PRODUCT_LIST } from '../conf/config';

export class Product {

  getProduct({pageNum, limit, searchText}) {
    return api.get(`${PRODUCT_LIST}?query=${searchText}&page=${pageNum}&limit=${limit}`);
  }
  
}

const productService = new Product();
export default productService;
