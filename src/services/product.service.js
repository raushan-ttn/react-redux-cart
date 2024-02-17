import api from './api';
import { PRODUCT_LIST } from '../conf/config';

export class Product {
  getProductList({ pageNum, limit, searchText }) {
    return api.get(
      `${PRODUCT_LIST}?query=${searchText}&page=${pageNum}&limit=${limit}`
    );
  }

  getProduct({ id }) {
    return api.get(`${PRODUCT_LIST}/${id}`);
  }
}

const productService = new Product();
export default productService;
