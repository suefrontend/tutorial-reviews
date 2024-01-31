import { createClient } from "contentful";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

type BlogPageProps = {
  params: {
    slug: string;
  };
};

const client = createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN,
});

const fetchBlogPost = async (slug: string): Promise<BlogItem> => {
  const queryOptions = {
    content_type: "tutorial",
    "fields.slug[match]": slug,
  };
  const queryResult = await client.getEntries(queryOptions);
  return queryResult.items[0];
};

export default async function BlogPage(props: BlogPageProps) {
  const { params } = props;
  const { slug } = params;


  const article = await fetchBlogPost(slug);

const { title, date, content } = article.fields;
  return (
    <main className="min-h-screen p-24 flex justify-center">
      <div className="max-w-2xl">
        <h1>you are in {slug}</h1>
        { documentToReactComponents(content) }


      </div>
    </main>
  );
}