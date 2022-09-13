import Header from "./Header.tsx";
import DarkMod from "../islands/DarkMod.tsx";
import Footer from "../islands/Footer.tsx";

export interface LayoutProps {
  children: any;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <DarkMod />
      <Header />
      <main class={"pt-[92px] pb-16"}>{children}</main> <Footer />
    </>
  );
}
