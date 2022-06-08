import React from "react";

import { client, urlFor } from "../../lib/client";

const ProductDetails = () => {
  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src="" />
          </div>
        </div>
      </div>
    </div>
  );
};

// the data inside this function is ready to go ahead of user's request
// stored data will be populated instantly when user navigates to certain page
export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { product, products },
  };
};

export default ProductDetails;
