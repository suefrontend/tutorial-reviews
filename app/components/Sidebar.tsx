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
          <div className="mb-4">Category</div>
          <ul className="flex flex-col gap-2">
            {categories.map((category) => (
              <li>
                <label className="flex">
                  <input type="checkbox" className="mr-2" />
                  <span className="font-light">{category.display}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-b">
        <div className="p-4">
          <div className="mb-2">Platform</div>
          <ul className="flex flex-col gap-2">
            {platforms.map((platform) => (
              <li>
                <label className="flex">
                  <input type="checkbox" className="mr-2" />
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
