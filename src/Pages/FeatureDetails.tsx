
import { useParams } from "react-router-dom";
import { features, FeatureContent } from "../Section/Home/KeyFeature";

const FeatureDetail = () => {
  const { id } = useParams();
  const feature = features.find((f) => f.id === Number(id));
  if (!feature) {
    return <h2 className="text-center mt-20 text-2xl">Feature not found</h2>;
  }
  return <FeatureContent feature={feature} />;
};

export default FeatureDetail;
