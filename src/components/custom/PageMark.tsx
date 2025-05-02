import { LucideIcon } from "lucide-react";

interface PageMarkProps {
  title: string;
  icon: LucideIcon;
  size?: number;
}

const PageMark = (props: PageMarkProps) => {
  return (
    <div className="flex items-center">
      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-2">
        <props.icon className="text-on-primary bg-primary" size={16} />
      </div>
      <h2 className="font-medium">{props.title}</h2>
    </div>
  );
};

export default PageMark;
