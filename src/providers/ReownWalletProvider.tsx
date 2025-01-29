"use client";
import { solana, solanaDevnet, solanaTestnet } from "@reown/appkit/networks";

import { solanaWeb3JsAdapter } from "@/reown-config";
import { createAppKit } from "@reown/appkit";
import { ReactNode } from "react";

export const projectId = process.env.NEXT_PUBLIC_REOWN_API_KEY;

if (!projectId) {
  throw new Error("Project Id is not defined.");
}

const metadata = {
  name: "appkit-example",
  description: "AppKit Example - Solana",
  url: "https://exampleapp.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const modal = createAppKit({
  adapters: [solanaWeb3JsAdapter],
  projectId,
  networks: [solana, solanaTestnet, solanaDevnet],
  features: {
    analytics: true,
    email: true,
    socials: ["google", "x", "github", "discord", "farcaster"],
    emailShowWallets: true,
  },
  themeMode: "light",
});

export default function ReownConnectionProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
