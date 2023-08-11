interface ArticleItemProps {
  id: string;
  title: string;
  content: string;
}

function ArticleItem({ id, title, content }: ArticleItemProps) {
  return (
    <div className="bg-white mb-4">
      <h2>TITLE!: {title}</h2>
      <p>CONTENT!: {content}</p>
    </div>
  );
}

export default ArticleItem;
