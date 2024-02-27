import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchAsyncProductSingle, getProductSingle, getSingProductStatus } from '../../store/ProductSlice'
import Loader from '../../components/Loader/Loader'
import { STATUS } from '../../utils/status'
import { formatPrice } from '../../utils/helpers'
import { useDispatch, useSelector } from 'react-redux'
function ProductSinglePage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(getProductSingle);
  const productSingleStatus = useSelector(getSingProductStatus);

  // getting single product
  useEffect(() => {
    dispatch(fetchAsyncProductSingle(id));
  }, []);

  // Log product and status for debugging
  console.log("Product:", product);
  console.log("Status:", productSingleStatus);

  if (productSingleStatus === STATUS.LOADING) {
    return <Loader />;
  }

  // Check if product.images is defined and not an empty array
  const imageUrl = product && product.images && product.images.length > 0
    ? product.images[0]
    : null;

  // Log image URL for debugging
  console.log("Image URL:", imageUrl);

  return (
    <div>
      {imageUrl && <img src={imageUrl} alt="img" />}
    </div>
  );
}

export default ProductSinglePage