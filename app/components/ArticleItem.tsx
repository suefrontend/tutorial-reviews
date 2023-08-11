interface ArticleItemProps {
  title: string;
  content: string;
}

function ArticleItem({ title, content }: ArticleItemProps) {
  return (
    <div className="bg-white">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default ArticleItem;
