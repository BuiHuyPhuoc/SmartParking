import { MoneyConvert } from '@/services/utils/convert';
import { CheckCircle, Home } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

export default function PaymentPage() {
    const [searchParams] = useSearchParams();

    const amount = searchParams.get("vnp_Amount");
    const bankCode = searchParams.get("vnp_BankCode");
    const transactionNo = searchParams.get("vnp_TransactionNo");
    const responseCode = searchParams.get("vnp_ResponseCode");
    const transactionStatus = searchParams.get("vnp_TransactionStatus");

    


    const isSuccess = responseCode === "00" && transactionStatus === "00";



    return (
        <>
            <div className='flex flex-col items-center justify-center h-screen'>
                <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
                    {
                        isSuccess ? (
                            <div className="bg-success p-6 flex flex-col items-center">
                                <CheckCircle className="text-white w-16 h-16 mb-3" />
                                <h1 className="text-white text-2xl font-bold">Thanh Toán Thành Công!</h1>
                            </div>
                        ) : (
                            <div className="bg-red-100 p-6">
                                <CheckCircle className="w-16 h-16 text-red-600 mx-auto mb-4" />
                                <h2 className="text-xl font-bold text-center text-red-800">Thanh toán thất bại</h2>
                            </div>
                        )
                    }


                    <div className="p-6">
                        <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-6">
                            <p className="text-green-800 text-center">
                                {
                                    isSuccess ? (
                                        <span className="font-bold">Cảm ơn bạn đã thanh toán!</span>
                                    ) : (
                                        <span className="font-bold">Giao dịch không thành công</span>
                                    )
                                }
                            </p>
                        </div>

                        <div className="mb-6">
                            <p className="text-gray-600 mb-2">Mã giao dịch:</p>
                            <p className="text-lg font-bold">{transactionNo}</p>
                        </div>

                        <div className="mb-6">
                            <p className="text-gray-600 mb-1">Thông tin đơn hàng</p>
                            <div className="border-t border-b border-gray-200 py-4 my-2">
                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-700">Số tiền</span>
                                    <span className="font-medium">{MoneyConvert.From(amount ? parseInt(amount) / 100 : 0, "VNĐ")}</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-700">Ngân hàng:</span>
                                    <span className="font-medium">{bankCode}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            {/* <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded flex items-center justify-center">
                            <Download className="w-4 h-4 mr-2" />
                            Tải hóa đơn
                        </button> */}

                            <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-medium py-2 px-4 rounded flex items-center justify-center">
                                <Home className="w-4 h-4 mr-2" />
                                Quay lại trang chủ
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center text-gray-500 text-sm">
                    <p>Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ hỗ trợ khách hàng.</p>
                    <p className="mt-1">Hotline: 1900 1234</p>
                </div>
            </div>
        </>
    );
}