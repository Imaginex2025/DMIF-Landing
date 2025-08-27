
import { CheckCircle } from 'lucide-react';

const CreativityInAI = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
      {/* Left Side - Content */}
      <div className="flex-1 p-6 md:p-8 space-y-6">
        <div>
          <h2 className="heading mb-2">Creativity in the AI Era</h2>
          <p className="para">
            We combine technical expertise with business insight to deliver solutions
          </p>
        </div>

        <div className="space-y-4">
          {/* Feature 1 */}
          <div className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <div className="flex-shrink-0 mt-1">
              <CheckCircle className="w-5 h-5 text-blue-600" />
            </div>
<p className="para">
  In the AI era, creativity is no longer limited to human imagination alone, empowering everyone.
</p>

          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <div className="flex-shrink-0 mt-1">
              <CheckCircle className="w-5 h-5 text-blue-600" />
            </div>
            <p className="para">
              AI tools lower barriers to entry in creative fields, enabling individuals without formal training to compose music, create art, and write stories.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <div className="flex-shrink-0 mt-1">
              <CheckCircle className="w-5 h-5 text-blue-600" />
            </div>
            <p className="para">
              As AI generates content based on vast datasets of human-created works, the notions of originality and authorship are evolving.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 relative">
        <img
          src="/whyitMatters.png"
          alt="Why it Matters"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default CreativityInAI;