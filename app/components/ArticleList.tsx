import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import ArticleItem from "./ArticleItem";

function ArticleList() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <p className="mb-3 text-lg">All Tutorials</p>
        <Select>
          <SelectTrigger className="w-[180px] rounded-none">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rating">Rating</SelectItem>
            <SelectItem value="year">Year</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <ArticleItem />
    </div>
  );
}

export default ArticleList;
