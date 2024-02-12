"use client";

import { useMbWallet } from "@mintbase-js/react";
import { Button } from "@/components/ui/button";

export const NearWalletConnector = () => {
  const { connect, disconnect, activeAccountId, isConnected } = useMbWallet();

  if (!isConnected) {
    return <Button onClick={connect}> Connect To NEAR Wallet </Button>;
  }

  return (
    <div className="absolute top-0 right-0 mt-4 mr-4">
      <b className="truncate">{activeAccountId}</b>
      <div className="flex justify-center items-center mt-4">
        <Button onClick={disconnect}> Disconnect</Button>
      </div>
    </div>
  );
};
