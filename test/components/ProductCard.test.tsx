import React from "react";
import { ProductCard } from "../../src/components";
import renderer, { act } from "react-test-renderer";
import { product1 } from "../data/products";

describe('ProductImage', () => {

    test('should show the component with a correct title', () => {
        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {
                    () => (
                        <h1>Hola</h1>
                    )
                }
            </ProductCard>
        );
        expect(wrapper.toJSON()).toMatchSnapshot();
      });

      test('should show the component with a correct title', () => {
        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {
                    ({count, increaseBy}) => (
                        <>
                            <h1>Hola</h1>
                            <span>{count}</span>
                            <button onClick={() => increaseBy(1)}></button>
                        </>
                    )
                }
            </ProductCard>
        );

        let tree = wrapper.toJSON();
        expect(tree).toMatchSnapshot();
        
        act(() => {
            (tree as any).children[2].props.onClick();
        })

        tree = wrapper.toJSON();
        
        expect((tree as any).children[1].children[0]).toMatchSnapshot();
      });

      
})