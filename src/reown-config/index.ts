import { SolanaAdapter } from "@reown/appkit-adapter-solana/react";
import type { AppKitNetwork } from "@reown/appkit/networks";
import { solana, solanaDevnet, solanaTestnet } from "@reown/appkit/networks";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";

// Get projectId from https://cloud.reown.com
export const projectId = "3c4caba112912cc8eceea870da22c4f0";

if (!projectId) {
  throw new Error("Project ID is not defined");
}

export const networks = [solana, solanaTestnet, solanaDevnet] as [
  AppKitNetwork,
  ...AppKitNetwork[]
];

// Set up Solana Adapter
export const solanaWeb3JsAdapter = new SolanaAdapter({
  wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
});
