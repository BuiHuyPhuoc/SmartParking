import { Button } from "@/components/ui/button";
import { Car, Clock, MapPin, Shield, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import HowItWorkPage from "./HowItWorkPage";
import FadedContainer from "@/components/animation/FadedInContainer";


export default function HomePage() {

  return (
    <div className="bg-container font-sans mx-auto">

      <FadedContainer>
        <div className="relative h-80">
          <img
            src="/images/parkinglot.png"
            alt="Beautiful Vietnamese beach"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0"></div>

          {/* Main Heading */}
          <div className="absolute inset-0 flex justify-center items-center flex-col text-center">
            <h1 className="text-white text-2xl md:text-3xl font-bold text-center">
              GIẢI PHÁP ĐỖ XE THÔNG MINH - SMART PARKING
            </h1>
            <Button asChild className="btn mt-4 bg-on-primary hover:bg-on-primary-hover  py-2 px-8 rounded-2xl h-12 w-36">
              <Link to="/search" className="text-primary font-bold text-xl">
                <p>Đặt ngay</p>
              </Link>
            </Button>
          </div>
        </div>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                TẠI SAO NÊN CHỌN CHÚNG TÔI?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Công nghệ tiên tiến của chúng tôi biến đổi trải nghiệm đỗ xe bằng các giải pháp thông minh
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-Time Availability</h3>
                <p className="text-gray-600">
                  Xem các chỗ đậu xe có sẵn theo thời gian thực. Không cần phải lái xe vòng quanh để tìm chỗ đậu xe nữa.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Clock className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Reservations</h3>
                <p className="text-gray-600">
                  Đặt chỗ đậu xe trước và đảm bảo có chỗ khi bạn đến nơi.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Smartphone className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile Payment</h3>
                <p className="text-gray-600">
                  Thanh toán dễ dàng thông qua ứng dụng di động của chúng tôi với các tùy chọn thanh toán an toàn, không tiếp xúc và biên lai kỹ thuật số.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure & Safe</h3>
                <p className="text-gray-600">
                  Tất cả các vị trí đỗ xe đều được giám sát bằng camera an ninh 24/7 và môi trường đủ ánh sáng để đảm bảo an toàn cho bạn.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Car className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Analytics</h3>
                <p className="text-gray-600">
                  Theo dõi lịch sử đỗ xe, chi phí và tìm hiểu thông tin chi tiết về thói quen đỗ xe của bạn để tiết kiệm tiền.
                </p>
              </div>
            </div>
          </div>
        </section>

        <HowItWorkPage />
      </FadedContainer>

      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "Smart Parking has revolutionized how I handle parking in the city. No more stress about finding spots!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold">SM</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Miller</div>
                  <div className="text-gray-500 text-sm">Business Executive</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "The reservation feature is amazing! I never worry about parking when going to important meetings."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-semibold">JD</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">John Davis</div>
                  <div className="text-gray-500 text-sm">Software Developer</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "Simple, efficient, and saves me so much time. The mobile payment feature is incredibly convenient."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-semibold">ER</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Emily Rodriguez</div>
                  <div className="text-gray-500 text-sm">Marketing Manager</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div >
  );
}
