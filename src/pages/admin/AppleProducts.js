import { useLoaderData } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
import axios from 'axios';
import { useNavigation } from 'react-router-dom';

const AppleProducts = () => {
  const navigation = useNavigation();
  const products = useLoaderData();
  return (
    <>
      <section style={{ backgroundColor: '#eee' }}>
        <div className="container py-5">
          <h2> Our products</h2>
          {navigation.state === 'loading' && <p> loading...</p>}
          <div className="row">
            {products.map((product, index) => (
              <ProductCard key={index} data={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AppleProducts;

export const loader = async () => {
  return await axios
    .get('http://localhost:8080/api/v1/public/randomproducts')
    .then((response) => {
      //   console.log(response.data.data.data);
      return response.data.data.data;
    })
    .catch((error) => {
      console.log(`Apple Product List Fetch Error: ${error}`);
    });
};
