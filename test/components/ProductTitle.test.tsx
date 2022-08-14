import React from 'react';
import renderer from "react-test-renderer";
import { ProductTitle, ProductCard } from "../../src/components";
import { product1 } from '../data/products';

describe('ProductTitle', () => {
  test('should show the component with a correct title', () => {
    const wrapper = renderer.create(
        <ProductTitle title="Custom prop" className='custom'></ProductTitle>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should show the product with a name', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {
          () => (<ProductTitle></ProductTitle>)
        }
      </ProductCard>
  );
  expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
