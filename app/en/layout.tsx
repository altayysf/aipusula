import Footer from "../../components/Footer";

export default function ENLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer lang="en" />
    </>
  );
}
