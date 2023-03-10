import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center">{children}</div>
    </>
  );
}
