import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from '../components';
import { products } from '../data/products';

const product = products[0];

const ShoopingPage = () => {
  return (
    <div>
      <h1>Shooping store</h1>
      <hr />
      <ProductCard
        product={product}
        key={product.id}
        initialValues={{
          count: 4,
        }}
      >
        {({
          reset,
          increaseBy,
          count,
          isMaxCountReached,
        }) => (
          <>
            <ProductImage></ProductImage>
            <ProductTitle></ProductTitle>
            <ProductButtons></ProductButtons>
          </>
        )}
      </ProductCard>
    </div>
  );
};

export default ShoopingPage;
