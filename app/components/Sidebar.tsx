import { Checkbox } from "@/components/ui/Checkbox";
import React from "react";

const Sidebar = () => {
  const categories = [
    { value: "css", display: "CSS" },
    { value: "tailwindcss", display: "Tailwind CSS" },
    { value: "javascript", display: "JavaScript" },
    { value: "react", display: "React" },
    { value: "nextjs", display: "Next.js" },
    { value: "vue", display: "Vue" },
    { value: "google-map-api", display: "Google Map API" },
    { value: "jest", display: "Jest" },
    { value: "astro", display: "Astro" },
    { value: "threejs", display: "Three.js" },
    { value: "react-native", display: "React Native" },
    { value: "contentful", display: "Contentful" },
    { value: "prisma", display: "Prisma" },
  ];

  const platforms = [
    { value: "udemy", display: "Udemy" },
    { value: "youtube", display: "YouTube" },
    { value: "others", display: "Others" },
  ];

  return (
    <div className="border w-1/5">
      <div className="border-b">
        <div className="p-6">
          <div className="mb-4 text-lg">Category</div>
          <ul className="flex flex-col gap-4">
            {categories.map((category) => (
              <li>
                <label className="flex items-center">
                  <Checkbox className="scale-125 rounded-none mr-3 border-gray-300 data-[state=checked]:bg-blue data-[state=checked]:border-none" />
                  <span className="font-light">{category.display}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="">
        <div className="p-4">
          <div className="mb-4 text-lg">Platform</div>
          <ul className="flex flex-col gap-4">
            {platforms.map((platform) => (
              <li>
                <label className="flex items-center">
                  <Checkbox className="scale-125 rounded-none mr-3 border-gray-300 data-[state=checked]:bg-blue data-[state=checked]:border-none" />
                  <span className="font-light">{platform.display}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
