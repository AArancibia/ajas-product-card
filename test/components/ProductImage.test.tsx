import React from "react";
import { ProductImage, ProductCard } from "../../src/components";
import renderer from "react-test-renderer";
import { product2 } from "../data/products";

describe('ProductImage', () => {

    test('should show the component with a correct title', () => {
        const wrapper = renderer.create(
            <ProductImage img="http://alexis.com"></ProductImage>
        );
        expect(wrapper.toJSON()).toMatchSnapshot();
      });

      
    
    test('show show the right image for product', () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                () => (<ProductImage></ProductImage>)
                }
            </ProductCard>
        );
        expect(wrapper.toJSON()).toMatchSnapshot();
    })
})