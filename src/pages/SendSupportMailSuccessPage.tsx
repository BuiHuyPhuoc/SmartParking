import React from "react";
import { CheckCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const SendSupportMailSuccessPage: React.FC = () => {
  return (
    <div className="container flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="flex flex-col items-center space-y-2 text-center">
          <CheckCircle className="h-16 w-16 text-success mb-2" />
          <CardTitle className="text-2xl text-primary font-bold">
            Message Sent Successfully!
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground text-primary">
            Thank you for contacting support. We have received your message and
            will get back to you as soon as possible.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link
            to="/"
            className="button bg-primary text-on-primary hover:bg-primary/80 focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-4 py-2"
          >
            Back to Home
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SendSupportMailSuccessPage;
