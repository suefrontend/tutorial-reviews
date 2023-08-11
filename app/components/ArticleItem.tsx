interface ArticleItemProps {
  title: string;
  content: string;
}

function ArticleItem({ title, content }: ArticleItemProps) {
  return (
    <div className="bg-white mb-4">
      <h2>TITLE!: {title}</h2>
      <p>CONTENT!: {content}</p>
    </div>
  );
}

export default ArticleItem;
