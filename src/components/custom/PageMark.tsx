import { PageMarkProps } from "@/lib/models";


const PageMark = (props: PageMarkProps) => {
  return (
    <div className="flex items-center">
      <props.icon className="bg-primary text-on-primary rounded-full p-1 mr-2" size={props.size} />
      <h2 className="text-xl font-bold">{props.title}</h2>
    </div>
  );
};

export default PageMark;
