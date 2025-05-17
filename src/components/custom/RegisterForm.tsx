import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRegister } from "@/services/hook/useAuth";
import { Eye, EyeOff, Lock, Mail, User, UserPlus } from "lucide-react";
import { useState } from "react";
import { customToast } from "./Toast";

function RegisterForm() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [emailRegister, setEmailRegister] = useState("");
    const [passwordRegister, setPasswordRegister] = useState("");
    const [passwordRegisterRetry, setPasswordRegisterRetry] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const registerMutation = useRegister();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleRegisterSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (passwordRegister !== passwordRegisterRetry) {
            customToast.warning("Warning!", "Mật khẩu không khớp!");
            return;
        }

        await registerMutation.mutateAsync({
            name: name, email: emailRegister, phone, password: passwordRegister,
        });
    }

    return (
        <form onSubmit={(e) => handleRegisterSubmit(e)}>
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="register-name">Full Name</Label>
                    <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-primary" />
                        <Input
                            id="register-name"
                            type="text"
                            placeholder="John Doe"
                            className="pl-10"
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-primary" />
                        <Input
                            id="register-email"
                            type="email"
                            placeholder="name@example.com"
                            className="pl-10 text-primary selection:text-on-primary"
                            required
                            onChange={(e) => setEmailRegister(e.target.value)}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="register-phone">Số điện thoại</Label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-primary" />
                        <Input
                            id="register-phone"
                            type="text"
                            placeholder="0123456789"
                            className="pl-10 text-primary selection:text-on-primary"
                            required
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="register-password">Password</Label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-primary" />
                        <Input
                            id="register-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="pl-10 pr-10"
                            required
                            onChange={(e) => setPasswordRegister(e.target.value)}
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
                    <Label htmlFor="register-confirm-password">
                        Confirm Password
                    </Label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-primary" />
                        <Input
                            id="register-confirm-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="pl-10 pr-10"
                            onChange={(e) => setPasswordRegisterRetry(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <Button
                    type="submit"
                    className="w-full bg-primary text-on-primary"
                >
                    <UserPlus className="mr-2 h-4 w-4" /> Register
                </Button>
            </div>
        </form>
    )
}

export default RegisterForm