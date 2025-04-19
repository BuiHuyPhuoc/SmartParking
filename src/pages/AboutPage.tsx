import { MapPin, Clock, CreditCard } from "lucide-react";
import "tailwindcss";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="h-screen bg-background-color text-textColor py-16 content-center">
        <div className="flex container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className=" text-4xl md:text-5xl font-bold mb-6 text-primary">
              Find and Reserve Parking Spots in Real-Time 
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary">
              Say goodbye to parking headaches with SmartPark's intelligent
              parking solution
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Why Choose SmartPark?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-md shadow-shadow">
              <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-on-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">
                Real-Time Availability
              </h3>
              <p className="text-primary opacity-80">
                View available parking spots in real-time with our smart sensors
                and IoT technology.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-md shadow-shadow">
              <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <CreditCard className="text-on-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">
                Contactless Payment
              </h3>
              <p className="text-primary opacity-80">
                Pay for parking seamlessly through our app with multiple payment
                options.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-md shadow-shadow">
              <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Clock className="text-on-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">
                Advance Reservations
              </h3>
              <p className="text-primary opacity-80">
                Reserve parking spots ahead of time to ensure availability when
                you arrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-secondary-container">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            How SmartPark Works
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center mb-12">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <div className="bg-primary text-on-primary w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">Download the App</h3>
                <p className="text-gray-600">
                  Get our free mobile app from the App Store or Google Play
                  Store.
                </p>
              </div>
              <div className="md:w-1/2 bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <img
                  src="/api/placeholder/280/200"
                  alt="Download app"
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center mb-12">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pl-8">
                <div className="bg-primary text-on-primary w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Find a Parking Spot
                </h3>
                <p className="text-gray-600">
                  Search for available parking spots near your destination in
                  real-time.
                </p>
              </div>
              <div className="md:w-1/2 bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <img
                  src="/api/placeholder/280/200"
                  alt="Find parking"
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <div className="bg-primary text-on-primary w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Park and Pay</h3>
                <p className="text-gray-600">
                  Follow navigation to your spot and pay securely through the
                  app.
                </p>
              </div>
              <div className="md:w-1/2 bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <img
                  src="/api/placeholder/280/200"
                  alt="Park and pay"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {/* <section id="pricing" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pricing Plans
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-container p-8 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold mb-4">Basic</h3>
              <p className="text-4xl font-bold mb-6">Free</p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Real-time parking availability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Pay-as-you-go payment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Basic navigation</span>
                </li>
              </ul>
              <button className="w-full py-3 border border-blue-600 text-primary rounded-md font-medium hover:bg-blue-50 transition-colors">
                Sign Up
              </button>
            </div>

            <div className="bg-blue-600 text-white p-8 rounded-lg shadow-md transform md:scale-105">
              <div className="bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                POPULAR
              </div>
              <h3 className="text-xl font-bold mb-4">Premium</h3>
              <p className="text-4xl font-bold mb-6">
                $9.99<span className="text-base font-normal">/month</span>
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>All Basic features</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Advance reservations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Discounted parking rates</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Premium navigation</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-white text-primary rounded-md font-medium hover:bg-gray-100 transition-colors">
                Sign Up
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold mb-4">Business</h3>
              <p className="text-4xl font-bold mb-6">
                $24.99<span className="text-base font-normal">/month</span>
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>All Premium features</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Team management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Business reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Dedicated support</span>
                </li>
              </ul>
              <button className="w-full py-3 border border-blue-600 text-primary rounded-md font-medium hover:bg-blue-50 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Testimonial Section */}
      {/* <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Users Say
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <p className="mb-4">
                  "SmartPark has completely changed how I park downtown. No more
                  driving around in circles looking for spots!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-full mr-3"></div>
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-gray-400 text-sm">Daily Commuter</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <p className="mb-4">
                  "The ability to reserve parking ahead of time has been a
                  game-changer for our business meetings in the city."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-full mr-3"></div>
                  <div>
                    <h4 className="font-semibold">David Chen</h4>
                    <p className="text-gray-400 text-sm">Business Owner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Smart Parking?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of happy drivers who have simplified their parking
            experience with SmartPark.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Download App
            </button>
            <button className="border border-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Contact Us
          </h2>

          <div className="max-w-3xl mx-auto bg-background p-8 rounded-lg shadow-md">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-primary mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="text-primary w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-shadow focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-primary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="text-primary w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-shadow focus:border-transparent"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-primary mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="text-primary w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-shadow focus:border-transparent"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-primary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="text-primary w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-shadow focus:border-transparent"
                ></textarea>
              </div>
              <button className="bg-primary text-on-primary px-6 py-3 rounded-md font-medium hover:bg-on-primary hover:text-primary transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
