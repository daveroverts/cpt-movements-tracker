import { Button } from "@mantine/core";
import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthenticationButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <Button onClick={() => signOut({ redirect: false })}>Sign out</Button>
    );
  }

  return <Button onClick={() => signIn("vatsim")}>Login with Vatsim</Button>;
}
