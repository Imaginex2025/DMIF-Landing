import { useNavigate } from "react-router-dom";
import IconButton from "../Components/Common/Button";
import { APPROUTES } from "../Routes/appRoutes";


const Error = () => {
    const navigate = useNavigate(); 
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="flex w-full max-w-6xl overflow-hidden rounded-lg   ">
        {/* Left side - Text Content */}
        <div className="flex w-1/2 flex-col justify-center  p-12 md:p-16">
          <div className="mb-4 text-8xl font-light text-gray-300 opacity-70">Error 404</div>
          <h1 className="mb-6 text-4xl font-bold text-gray-800 md:text-5xl">Oops! page not found</h1>
          <p className="mb-8 text-lg text-gray-600">
            Something went wrong. It's look that your requested could not be found. 
            It's look like the link is broken or the page is removed.
          </p>
        <IconButton
        label="Go Back"
        onClick={() => navigate(APPROUTES.HOME)}
        />
        </div>

        {/* Right side - Illustration */}
        <div className="flex w-1/2 items-center justify-center bg-blue-50 p-8">
          <div className="relative">
            <img 
              src="/errorPage.png" 
              alt="404 Error" 
              className="h-auto w-full max-w-md object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;