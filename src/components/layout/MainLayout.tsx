import Sidebar from "./Sidebar";
import Header from "./Header";

export default function MainLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <div className="flex min-h-screen bg-[#F9FAFB] w-full">
        <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="px-4 sm:px-6 border-b border-gray-300">
          <Header title={title} />
        </div>
        <main className="flex-1 px-4 sm:px-6 pb-6">{children}</main>
      </div>
    </div>
  );
}