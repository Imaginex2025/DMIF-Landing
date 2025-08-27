
import { useParams } from "react-router-dom";

const features = [
  { id: 1, title: "Patents" },
  { id: 2, title: "Research" },
  { id: 3, title: "Global Exposure" },
  { id: 4, title: "Ivy League Readiness" },
  { id: 5, title: "Innovation Thinking" },
  { id: 6, title: "Brain Science" },
];

const FeatureDetail = () => {
  const { id } = useParams();
  const feature = features.find((f) => f.id === Number(id));

  if (!feature) {
    return <h2 className="text-center mt-20 text-2xl">Feature not found</h2>;
  }

  return (
    <div className="px-6 md:px-16 py-12">
      <h1 className="text-4xl font-bold text-[#003579]">{feature.title}</h1>
      <p className="mt-4 text-gray-600">Details about {feature.title}...</p>
    </div>
  );
};

export default FeatureDetail;
