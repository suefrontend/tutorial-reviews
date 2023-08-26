import { Input } from "@/components/ui/Input";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-4 border-b">
      <div className="container flex justify-between items-center">
        <Link href="/" className="text-blue font-semibold">
          Tutorial Paradise
        </Link>
        <Input
          placeholder="Search tutorial"
          className="w-[280px] bg-gray-100 border-0"
        />
      </div>
    </header>
  );
};

export default Header;
