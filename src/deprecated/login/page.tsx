import { LoginForm } from "@/deprecated/LoginForm";

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <main className='w-full min-h-screen flex justify-center items-center'>
      <LoginForm />
    </main>
  );
}
