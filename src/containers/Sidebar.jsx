import { SidebarHeader, SidebarBody } from "../components/Sidebar";
export default function Sidebar() {
  return (
    <div className="sticky top-0 left-0 w-[25%] bg-primary h-fit shadow-sm px-6">
      <SidebarHeader />
      <SidebarBody />
    </div>
  );
}
