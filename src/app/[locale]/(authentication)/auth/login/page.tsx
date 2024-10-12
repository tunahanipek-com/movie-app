import LoginForm from "./form";

export default async function LoginPage() {
  return (
    <section className="bg-black h-screen flex items-center justify-center">
      <div className="w-[600px]">
        <LoginForm />
      </div>
    </section>
  );
}
