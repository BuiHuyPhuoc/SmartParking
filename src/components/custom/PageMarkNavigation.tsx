import { PageMarkNavigationItem, PageMarkNavigationProps } from "@/lib/models";
import { Info } from "lucide-react";
import { useState } from "react";
import { Card } from "../ui/card";

const PageMarkNavigation = (prop: PageMarkNavigationProps) => {
  const [items, setItems] = useState(prop.item);

  const handleChange = (selection: PageMarkNavigationItem) => {
    const updatedItems = items.map((item) => ({
      ...item,
      isPicked: item.value === selection.value,
    }));

    setItems(updatedItems);
  };

  const handleClick = (selection: PageMarkNavigationItem) => {
    handleChange(selection);
    if (prop.onClick) {
      prop.onClick(selection);
    }
  };

  return (
    <Card className={`bg-container ${prop.className}`}>
      <h2 className="font-medium text-lg text-primary">{prop.header}</h2>
      <ul className="mt-0">
        {items.map((selection) => (
          <li
            key={selection.value}
            className={`
                px-2 border-l-4
                ${selection.isPicked
                ? "border-primary font-medium"
                : "border-transparent"
              }
              `}
            onClick={() => handleClick(selection)}
          >
            <div className="hover:bg-gray-50 flex w-full px-2 py-2 rounded-2xl cursor-pointer text-primary">
              {selection.icon ? (
                <selection.icon className="mr-2" />
              ) : (
                <Info className="mr-2" />
              )}{" "}
              {selection.title}
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default PageMarkNavigation;
