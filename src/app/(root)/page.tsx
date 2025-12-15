import Header from "@/components/HeaderBox";

export default function Dashboard() {
  const loggedIn = {
    firstName: "John"
  }
  return (
    <section className="w-full">
      <div>
        <header className="border p-8 font-inter">
          <Header 
            type="greeting"
            tittle="Welcome"
            user=  {loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transaction"
          />
        </header>
      </div>
    </section>
  );
}