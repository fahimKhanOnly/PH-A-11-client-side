import visitor1 from '../../assets/visitor1.jpg';
import visitor2 from '../../assets/visitor2.jpg';
import visitor3 from '../../assets/visitor3.jpg';
import { FaStar } from "react-icons/fa";


const Testimonial = () => {
  return (
    <div className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-3">Testimonials</h2>
        <p className="text-center font-medium text-md mb-8">Our Visitors Says</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-none transition-all">
            <div className="flex items-center mb-4">
              <img src={visitor1} className="w-12 h-12 rounded-full" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Prince Jewels</h3>
                <p className="text-gray-500">Location</p>
              </div>
            </div>
            <p className="text-gray-600">"This website has helped me learn so much about history!"</p>
            <div className="mt-4 flex gap-1 text-orange-400"><FaStar /><FaStar /><FaStar /><FaStar/><FaStar/></div>
          </div>
          <div className="bg-white rounded-lg shadow-lg hover:shadow-none transition-all p-6">
            <div className="flex items-center mb-4">
              <img src={visitor2} className="w-12 h-12 rounded-full" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Loucine Walker</h3>
                <p className="text-gray-500">Architect</p>
              </div>
            </div>
            <p className="text-gray-600">"The collection of artifacts is amazing and inspiring."</p>
            <div className="mt-4 flex gap-1 text-orange-400"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
          </div>

          <div className="bg-white rounded-lg shadow-lg hover:shadow-none transition-all p-6">
            <div className="flex items-center mb-4">
              <img src={visitor3} className="w-12 h-12 rounded-full" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Sarah Boyd</h3>
                <p className="text-gray-500">Engineer</p>
              </div>
            </div>
            <p className="text-gray-600">
              "The collection of artifacts is amazing and inspiring."
            </p>
            <div className="mt-4 flex gap-1 text-orange-400"><FaStar /><FaStar /><FaStar /><FaStar /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;