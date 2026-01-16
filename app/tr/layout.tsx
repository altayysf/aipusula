import Footer from "../../components/Footer";

export default function TRLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer lang="tr" />
    </>
  );
}
