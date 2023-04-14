import dynamic from "next/dynamic";
const Header = dynamic(() => import("./header"));
const Footer = dynamic(() => import("./footer"));
const Navbar = dynamic(() => import("./navbar"));

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: DashboardLayoutProps) {
  return (
    <>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
