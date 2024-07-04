import { getServerSession } from "next-auth";
import SessionProvider from "@/components/SessionProvider";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <>
      <SessionProvider session={session}>
        <main>{children}</main>
      </SessionProvider>
    </>
  );
}
