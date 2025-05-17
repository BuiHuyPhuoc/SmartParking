import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useGetOTP, useLogin } from "@/services/hook/useAuth";
import { Eye, EyeOff, Lock, LogIn, Mail } from "lucide-react";
import { useState } from "react";

function LoginForm({ emailSample }: { emailSample: string }) {
    const loginMutation = useLogin();
    const otpMutation = useGetOTP();

    const [email, setEmail] = useState(emailSample || "");
    const [password, setPassword] = useState("");
    const [otp, setOTP] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleGetOTP = () => {
        otpMutation.mutate(email);
    }

    const handleLoginSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        loginMutation.mutate({ email, password, otp });
    };
    return (
        <form onSubmit={(e) => handleLoginSubmit(e)}>
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-primary" />
                        <Input
                            id="login-email"
                            type="email"
                            placeholder="name@example.com"
                            className="pl-10 text-primary selection:text-on-primary"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="login-password">Password</Label>
                        <a
                            href="#"
                            className="text-sm text-blue-600 hover:underline"
                        >
                            Forgot password?
                        </a>
                    </div>
                    <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-primary" />
                        <Input
                            id="login-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="pl-10 pr-10 text-primary selection:text-on-primary"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                        >
                            {showPassword ? (
                                <EyeOff className="h-4 w-4" />
                            ) : (
                                <Eye className="h-4 w-4" />
                            )}
                        </button>
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="login-otp">OTP</Label>
                    <div className="relative flex items-center">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-primary" />
                        <Input
                            id="login-otp"
                            type="text"
                            placeholder="123456"
                            className="pl-10 text-primary selection:text-on-primary "
                            required
                            onChange={(e) => setOTP(e.target.value)}
                        />
                        <Button className="right-3 top-3 text-on-primary ml-1" onClick={handleGetOTP}>
                            Lấy mã
                        </Button>
                    </div>
                </div>

                <Button
                    type="submit"
                    className="w-full bg-primary text-on-primary"
                >
                    <LogIn className="mr-2 h-4 w-4" /> Login
                </Button>
            </div>
        </form>
    )
}

export default LoginForm