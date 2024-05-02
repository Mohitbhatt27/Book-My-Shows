import Navbar from "../components/Navbar";
import ReactNode from "../types/ReactNode";

function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default HomeLayout;
