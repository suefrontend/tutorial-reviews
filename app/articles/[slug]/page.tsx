/* src/app/articles/[slug]/page.tsx */ 
type BlogPageProps = {
    params: {
      slug: string;
    };
  };
  
  export default async function BlogPage(props: BlogPageProps) {
    const { params } = props;
    const { slug } = params;
    return (
      <main className="min-h-screen p-24 flex justify-center">
        <div className="max-w-2xl">
          <h1>you are in {slug}</h1>
        </div>
      </main>
    );
  }