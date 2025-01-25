import { useAppKitAccount, useAppKitProvider } from "@reown/appkit/react";
import type { Provider } from "@reown/appkit-adapter-solana";

function SignMessage({ title }: { title: string }) {
  // 0. Get account and provider
  const { address } = useAppKitAccount();
  const { walletProvider } = useAppKitProvider<Provider>("solana");

  // 1. Create a function to sign a message
  async function onSignMessage() {
    try {
      if (!walletProvider || !address) {
        throw Error("user is disconnected");
      }

      // 2. Encode message and sign it
      const encodedMessage = new TextEncoder().encode("Hello from AppKit");
      const signature = await walletProvider.signMessage(encodedMessage);

      console.log(signature);
    } catch (err) {
      // Handle Error Here
    }
  }

  // 3. Create a button to trigger the function
  return <button onClick={onSignMessage}>{title}</button>;
}
