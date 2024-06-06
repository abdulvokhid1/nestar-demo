import { useRouter } from "next/router";

const PropertyDetail = () => {
  const router = useRouter();

  const { productId } = router.query;
  return <div>PropertyDetail</div>;
};
export default PropertyDetail;
