import GithubLogo from "@/components/icon/GithubLogo";
import GoogleLogo from "@/components/icon/GoogleLogo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLogin } from "@/services/hook/useLogin";
import { AnimatePresence, motion } from "framer-motion";
import { Eye, EyeOff, Lock, LogIn, Mail, User, UserPlus } from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state } = useParams<{ state: string }>();
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState(
    state === "register" ? "register" : "login"
  );

  const loginMutation = useLogin();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate({ email, password });
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     const loginRequest: Loginrequest = {
  //       email: email,
  //       password: password,
  //     };

  //     const response = await http.post<LoginResponse | undefined>(
  //       "/login",
  //       loginRequest
  //     );

  //     if (!response) {
  //       customToast.warning("Warning!", "Login failed!");
  //       return;
  //     }

  //     localStorage.setItem("token", response.value?.token || "");
  //     localStorage.setItem("loginResponse", JSON.stringify(response.value));

  //     customToast.success("Success!", "Login success!");
  //     navigate("/");
  //   } catch {
  //     customToast.warning("Warning!", "Login failed!");
  //   }
  // };

  // Animation variants
  const tabContentVariants = {
    hidden: { opacity: 0, x: activeTab === "login" ? -20 : 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      x: activeTab === "login" ? 20 : -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-container p-4">
      <Card className="w-full max-w-md shadow-lg">
        <Tabs
          defaultValue={state === "register" ? "register" : "login"}
          className="w-full"
          onValueChange={(value) => setActiveTab(value)}
        >
          <CardHeader className="space-y-1">
            <TabsList className="grid w-full grid-cols-2 mb-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>

            <AnimatePresence mode="wait">
              {activeTab === "login" ? (
                <motion.div
                  key="login-header"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={tabContentVariants}
                >
                  <CardTitle className="text-3xl font-bold text-center mb-2">
                    Welcome back
                  </CardTitle>
                  <CardDescription className="text-center">
                    Enter your credentials to access your account
                  </CardDescription>
                </motion.div>
              ) : (
                <motion.div
                  key="register-header"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={tabContentVariants}
                >
                  <CardTitle className="text-2xl font-bold text-center">
                    Create an account
                  </CardTitle>
                  <CardDescription className="text-center">
                    Enter your details to create a new account
                  </CardDescription>
                </motion.div>
              )}
            </AnimatePresence>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* Login Form */}
            <AnimatePresence mode="wait">
              {activeTab === "login" ? (
                <motion.div
                  key="login-form"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={tabContentVariants}
                >
                  <form onSubmit={(e) => handleSubmit(e)}>
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

                      <Button
                        type="submit"
                        className="w-full bg-primary text-on-primary"
                      >
                        <LogIn className="mr-2 h-4 w-4" /> Login
                      </Button>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="register-form"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={tabContentVariants}
                >
                  <form onSubmit={(e) => handleSubmit(e)}>
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
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4 pt-0">
            <AnimatePresence mode="wait">
              {activeTab === "login" ? (
                <motion.div
                  key="login-footer"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={tabContentVariants}
                  className="w-full space-y-4"
                >
                  <div className="relative mt-3">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t"></span>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-container px-2 text-primary">
                        Or continue with
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="w-full">
                      <GoogleLogo />
                      Gmail
                    </Button>
                    <Button variant="outline" className="w-full">
                      <GithubLogo />
                      GitHub
                    </Button>
                  </div>

                  <p className="text-center text-sm text-gray-500">
                    <Link
                      to="/"
                      className="text-primary/60 text-center text-sm"
                    >
                      Về trang chủ
                    </Link>
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="register-footer"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={tabContentVariants}
                  className="w-full space-y-4"
                >
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t"></span>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-container px-2 text-primary">
                        Or continue with
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="w-full">
                      <GoogleLogo />
                      Google
                    </Button>
                    <Button variant="outline" className="w-full">
                      <GithubLogo />
                      GitHub
                    </Button>
                  </div>

                  <p className="text-center text-sm text-gray-500">
                    Already have an account?{" "}
                    <Link to="/auth/login" className="text-blue-600" />
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </CardFooter>
        </Tabs>
      </Card>
    </div>
  );
}
