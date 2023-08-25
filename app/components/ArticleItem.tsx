import Image from "next/image";

function ArticleItem() {
  return (
    <article className="border p-5">
      <div className="border-b">
        <h3 className="text-primary text-lg font-medium -mb-1">
          Advanced CSS and Sass: Flexbox, Grid, Animations and More!
        </h3>
        <div className="flex items-center py-4">
          <ul className="flex mr-2 gap-2">
            <li className="flex items-center text-sm text-light font-light py-[2px] px-2 bg-bggray rounded-sm">
              CSS
            </li>
            <li className="flex items-center text-sm text-light font-light py-[2px] px-2 bg-bggray rounded-sm">
              Tailwind CSS
            </li>
          </ul>
          <p className="text-light text-sm font-light">
            Advanced · Paid · 2018 · 70:25:39
          </p>
        </div>
      </div>

      <div className="flex gap-6 pt-4">
        {/* <div className="border w-1/3"> */}
        <div className="relative w-1/5 h-auto" style={{ aspectRatio: "16/9" }}>
          <Image
            src="/images/css-jonas.jpeg"
            alt="image"
            fill
            className="object-cover"
          />
        </div>
        {/* </div> */}
        <p className="font-light w-4/5">
          Lorem ipsum dolor sit amet consectetur. Bibendum enim ornare sagittis
          molestie. Curabitur iaculis fermentum volutpat ut turpis feugiat sit
          pellentesque. At aliquam adipiscing.
        </p>
      </div>
    </article>
  );
}

export default ArticleItem;
