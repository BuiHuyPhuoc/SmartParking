import LoginForm from "@/components/custom/Loginform";
import RegisterForm from "@/components/custom/RegisterForm";
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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function AuthForm() {
  const { state } = useParams<{ state: string }>();
  const [activeTab, setActiveTab] = useState(
    state === "register" ? "register" : "login"
  );

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
                  <LoginForm emailSample="" />
                </motion.div>
              ) : (
                <motion.div
                  key="register-form"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={tabContentVariants}
                >
                  <RegisterForm />
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
    </div >
  );
}
