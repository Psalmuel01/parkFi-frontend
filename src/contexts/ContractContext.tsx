import { createContext, FC, ReactNode, useContext } from "react";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import MembershipNftAbi from "../generated/abi/MembershipNft.json";
import contractAddrs from "../generated/contracts.ts";
import ParkFiAbi from "../generated/abi/ParkFi.json";
import ParkTokenAbi from "../generated/abi/ParkToken.json";
import { ParkSpaceMetadata } from "../types.ts";
import { parseEther } from "viem";
import { waitForTransactionReceipt } from "viem/actions";
import { config } from "../App.tsx";
import toast from "react-hot-toast";

const ContractContext = createContext({
  memberShipBalance: 0n,
  activeAccount: null as any,
  availableParkingSpaces: [] as ParkSpaceMetadata[],
  myParkingSpaces: [] as ParkSpaceMetadata[],
  // @ts-ignore
  writeToParkFi: async (functionName: string, args?: any[]) => {},
  // @ts-ignore
  writeToParkToken: async (functionName: string, args?: any[]) => {},
  mintParkToken: () => {},
  allowance: 0n,
});

const ContractProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const activeAccount = useAccount();

  const { data: memberShipBalance } = useReadContract({
    abi: MembershipNftAbi,
    address: contractAddrs.MembershipNft,
    functionName: "balanceOf",
    args: [activeAccount.address],
  });

  const { data: allowance } = useReadContract({
    abi: ParkTokenAbi,
    address: contractAddrs.ParkToken,
    functionName: "allowance",
    args: [activeAccount.address, contractAddrs.ParkFi],
  });

  const { data: availableParkingSpaces } = useReadContract({
    abi: ParkFiAbi,
    address: contractAddrs.ParkFi,
    functionName: "getAvailableParkingSpaces",
  });

  const { data: myParkingSpaces } = useReadContract({
    abi: ParkFiAbi,
    address: contractAddrs.ParkFi,
    functionName: "getMyParkingSpaces",
    account: activeAccount.address,
  });

  const { writeContractAsync } = useWriteContract();

  const writeToParkFi = async (functionName: string, args?: any[]) => {
    try {
      // Loading
      toast.loading("Executing...", { duration: 5000 });
      const tx = await writeContractAsync({
        abi: ParkFiAbi,
        address: contractAddrs.ParkFi,
        functionName,
        args,
      });

      // @ts-ignore
      const suc = await waitForTransactionReceipt(config, {
        hash: tx,
      });

      console.log({ suc });

      // Success
      toast.success("Transaction successful!");
    } catch (error) {
      // Error
      toast.error("Transaction failed!");
      console.log({ error });
      console.error(error);
    }
  };

  const writeToParkToken = async (
    functionName: string,
    args?: any[],
    other?: any
  ) => {
    try {
      // Loading
      toast.loading("Executing...", { duration: 5000 });
      const tx = await writeContractAsync({
        abi: ParkTokenAbi,
        address: contractAddrs.ParkToken,
        functionName,
        args,
        ...other,
      });

      // @ts-ignore
      const suc = await waitForTransactionReceipt(config, {
        hash: tx,
      });

      console.log({ suc });
      toast.success("Transaction successful!");

      // Success
    } catch (error) {
      // Error

      toast.error("Transaction failed!");

      console.error(error);
    }
  };

  const mintParkToken = async () =>
    await writeToParkToken("mint", undefined, {
      value: parseEther("0.00001"),
    });

  return (
    <ContractContext.Provider
      value={{
        memberShipBalance: memberShipBalance as bigint,
        activeAccount,
        availableParkingSpaces:
          (availableParkingSpaces as ParkSpaceMetadata[]) || [],
        myParkingSpaces: (myParkingSpaces as ParkSpaceMetadata[]) || [],
        writeToParkFi,
        writeToParkToken,
        mintParkToken,
        allowance: (allowance as bigint) || 0n,
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};

const useContractContext = () => useContext(ContractContext);

export { ContractProvider, useContractContext };
