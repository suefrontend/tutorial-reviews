import Image from "next/image";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function ArticleItem(props) {
  const { blog } = props;

  console.log("blog", blog);

  return blog.items.map((item) => {
    const { title, content, slug } = item.fields;

    return (
      <article className="border p-6">
        <div className="border-b">
          <Link href={`/articles/${slug}`}>
            <h3 className="text-blue text-lg font-medium -mb-1">{title}</h3>
          </Link>
          <div className="flex items-center py-4">
            <ul className="flex mr-2 gap-2">
              <li className="flex items-center text-[12px] text-lightgray font-light py-[2px] px-2 bg-bggray">
                CSS
              </li>
              <li className="flex items-center text-[12px] text-lightgray font-light py-[2px] px-2 bg-bggray">
                Tailwind CSS
              </li>
            </ul>
            <p className="font-light text-sm text-lightgray">
              Advanced · Paid · 2018 · 70:25:39
            </p>
          </div>
        </div>

        <div className="flex gap-6 pt-4">
          {/* <div className="border w-1/3"> */}
          <div
            className="relative w-1/5 h-auto"
            style={{ aspectRatio: "16/9" }}
          >
            <Image
              src="/images/css-jonas.jpeg"
              alt="image"
              fill
              className="object-cover"
            />
          </div>
          {/* </div> */}
          <div className="font-light w-4/5 leading-relaxed -mt-1">
            {/* Lorem ipsum dolor sit amet consectetur. Bibendum enim ornare
            sagittis molestie. Curabitur iaculis fermentum volutpat ut turpis
            feugiat sit pellentesque. At aliquam adipiscing. */}
            {documentToReactComponents(content)}
          </div>
        </div>
      </article>
    );
  });
}

export default ArticleItem;
