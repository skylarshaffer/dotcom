import Navbar from "src/components/Navbar";

type HomeLayoutProps = {
  children?: React.ReactNode;
};

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      {children}
    </>
  );
};

export default HomeLayout;
