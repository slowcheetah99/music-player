import { Sidebar, Player, Header } from "../containers";
export default function Layout({ children }) {
  return (
    <div className="relative">
      <Sidebar />
      <Player />
      <Header />
      {children}
    </div>
  );
}
