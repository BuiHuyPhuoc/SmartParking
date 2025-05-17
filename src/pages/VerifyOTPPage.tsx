import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useLocation } from 'react-router-dom';
import { useCheckOTP } from '@/services/hook/useAuth';

export default function VerifyPage() {
    const location = useLocation();
    const email = location.state?.email || 'buihuyphuoc123@gmail.com';
    const checkOTPMutation = useCheckOTP();

    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);

    const handleChange = (index: number, value: string) => {
        if (value && !/^\d+$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value.slice(-1);
        setOtp(newOtp);

        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }

        if (e.key === 'ArrowLeft' && index > 0) {
            e.preventDefault();
            inputRefs.current[index - 1]?.focus();
        }

        if (e.key === 'ArrowRight' && index < 5) {
            e.preventDefault();
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text/plain').trim();

        if (/^\d+$/.test(pastedData)) {
            const digits = pastedData.split('').slice(0, 6);
            const newOtp = [...otp];

            digits.forEach((digit, index) => {
                if (index < 6) {
                    newOtp[index] = digit;
                }
            });

            setOtp(newOtp);

            const focusIndex = Math.min(digits.length, 5);
            inputRefs.current[focusIndex]?.focus();
        }
    };

    const handleSubmit = async () => {
        const otpValue = otp.join('');
        await checkOTPMutation.mutateAsync({ email, otp: otpValue });
    };

    const isCompleted = otp.every(digit => digit !== '');

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <Card className="w-full max-w-md mx-4 shadow-lg">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-semibold text-gray-800">Verification Code</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-600 text-center mb-6">
                        Please enter the 6-digit code sent to your {email}
                    </p>

                    <div className="flex gap-2 justify-center mb-8" onPaste={handlePaste}>
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                ref={el => { inputRefs.current[index] = el; }}
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                className="w-12 h-14 text-center text-xl font-semibold border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        ))}
                    </div>

                    <p className="text-gray-500 text-sm text-center">
                        Didn't receive a code? <button className="text-blue-600 hover:underline font-medium">Resend</button>
                    </p>
                </CardContent>
                <CardFooter>
                    <Button
                        className="w-full py-6 text-lg font-medium"
                        disabled={!isCompleted}
                        onClick={handleSubmit}
                    >
                        Verify
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}