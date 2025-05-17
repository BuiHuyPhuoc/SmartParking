import { CircleUserRound } from "lucide-react";
import { Link } from "react-router-dom";

function LoginLabel({ name }: { name: string }) {
  return (
    <Link
      to="/profile"
      className="text-primary text-xl cursor-pointer hover:text-line flex items-center space-x-2 transition-colors"
    >
      <CircleUserRound className="mr-1"></CircleUserRound> 
      <p className="text-primary text-lg">Hello, {name}</p>
    </Link>
  );
}

export default LoginLabel;
