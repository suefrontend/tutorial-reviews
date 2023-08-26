import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

export default async function Home() {
  return (
    <div>
      <Header />
      <div className="container">
        <Hero />
        <div className="flex gap-10">
          <Sidebar />
          <Main />
        </div>
      </div>
    </div>
  );
}
