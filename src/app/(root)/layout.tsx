import Sidebar from "./sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <main className="flex gap-20 flex-1 ">
      <Sidebar/>
      {children}
    </main>
  );
}
