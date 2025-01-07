import React from "react";
import {
  IconBriefcase,
  IconBulb,
  IconSchool,
  IconWriting,
  IconMoodSmile,
  IconHeart,
  IconHeartFilled,
} from "@tabler/icons-react";

const categories = [
  { icon: IconBriefcase, label: "Business" },
  { icon: IconBulb, label: "Ideas" },
  { icon: IconSchool, label: "Education" },
  { icon: IconWriting, label: "Writing" },
  { icon: IconMoodSmile, label: "Happiness" },
];

function CategoryLinks() {
  return (
    <div className="mt-10 sm:mt-20 px-4 flex flex-col items-center gap-5">
      <div className="flex flex-wrap gap-4 justify-center">
        {categories.map((category) => {
          return (
      
            <div
              key={category.label}
              className="hidden sm:flex items-center justify-center gap-2 p-4 w-32 sm:w-36 md:w-40 border border-gray-200 bg-white text-gray-800 rounded-lg shadow-sm hover:bg-gray-100 hover:shadow-md transition-all duration-300 ease-in-out"
              >
              <category.icon size={30} className="mb-2 text-blue-500" />
              <p className="text-sm sm:text-base font-medium text-center ">{category.label}</p>
            </div>
            
          );
        })}
      </div>
        <p className="text-center">Developed with <IconHeartFilled color="red" className="inline"/> By Basat Maqsood</p>
    </div>
  );
}

export default CategoryLinks;
