
# AJAS-Product-Card

Este es un paquete de pruebas de despliegue de NPM

### Alexis Arancibia
```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'ajas-product-card'
```

```
<ProductCard
        product={product}
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