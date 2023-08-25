import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

export default async function Home() {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="flex gap-6">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}
