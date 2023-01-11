import { SidebarHeader, SidebarBody } from "../components/Sidebar";
export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 w-[20%] bg-primary h-full shadow-sm px-6">
      <SidebarHeader />
      <SidebarBody />
    </div>
  );
}
