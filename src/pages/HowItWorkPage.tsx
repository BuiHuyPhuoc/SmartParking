
export default function HowItWorkPage() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Chúng tôi hoạt động như thế nào?
                    </h2>
                    <p className="text-xl text-gray-600">
                        Bắt đầu chỉ với ba bước đơn giản
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="bg-primary text-on-primary w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                            1
                        </div>
                        <h3 className="text-xl font-semibold text-primary mb-4"> Tìm kiếm và đặt trước</h3>
                        <p className="text-primary/80">
                            Tìm kiếm các chỗ đậu xe có sẵn gần điểm đến của bạn và đặt chỗ đậu xe ưa thích của bạn chỉ trong vài giây.
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="bg-primary text-on-primary w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                            2
                        </div>
                        <h3 className="text-xl font-semibold text-primary mb-4">Đỗ xe</h3>
                        <p className="text-primary/80">
                            Theo dõi hướng dẫn đến chỗ đậu xe đã đặt và đậu xe với sự tự tin biết rằng chỗ của bạn được đảm bảo.
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="bg-primary text-on-primary w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                            3
                        </div>
                        <h3 className="text-xl font-semibold text-primary mb-4">Pay & Go</h3>
                        <p className="text-primary/80">
                            thanh toán tự động khi bạn rời đi. Không có vé, không có đồng hồ, không phiền phức - chỉ cần đậu xe và đi *
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}