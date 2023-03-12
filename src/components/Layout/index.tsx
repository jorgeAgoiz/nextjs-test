import Footer from "../footer";
import Header from "../header";

interface Props {
  children: JSX.Element | React.ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
