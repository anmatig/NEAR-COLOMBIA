"use client";

import { useMbWallet } from "@mintbase-js/react";
import { Button } from "@/components/ui/button";

export const NearWalletConnector = () => {
  const { connect, disconnect, activeAccountId, isConnected } = useMbWallet();

  if (!isConnected) {
    return <Button onClick={connect}> Connect To NEAR Wallet </Button>;
  }

  return (
    <div className="fixed flex flex-wrap w-[350] h-[200] justify-center items-center top-5 right-5">
      <b className="truncate">{activeAccountId}</b>
      <div className="flex justify-center items-center mt-4">
        <Button onClick={disconnect}> Disconnect</Button>
      </div>
    </div>
  );
};
