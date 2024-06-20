import { createContext, FC, ReactNode, useContext } from "react";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import MembershipNftAbi from "../generated/abi/MembershipNft.json";
import contractAddrs from "../generated/contracts.ts";
import ParkFiAbi from "../generated/abi/ParkFi.json";
import ParkTokenAbi from "../generated/abi/ParkToken.json";
import { ParkSpaceMetadata } from "../types.ts";


const ContractContext = createContext({
    memberShipBalance: 0n,
    activeAccount: (null as any),
    availableParkingSpaces: [] as ParkSpaceMetadata[],
    myParkingSpaces: [] as ParkSpaceMetadata[],
    writeToParkFi: async (functionName: string, args?: any[]) => functionName && args ? "Ox" : "Ox",
    writeToParkToken: async (functionName: string, args?: any[]) => functionName && args ? "Ox" : "Ox"
})

const ContractProvider: FC<{ children: ReactNode }> = ({ children }) => {

    const activeAccount = useAccount();

    const { data: memberShipBalance } = useReadContract({
        abi: MembershipNftAbi,
        address: contractAddrs.MembershipNft,
        functionName: "balanceOf",
        args: [activeAccount.address]
    })

    const { data: availableParkingSpaces } = useReadContract({
        abi: ParkFiAbi,
        address: contractAddrs.ParkFi,
        functionName: "getAvailableParkingSpaces",
    })

    const { data: myParkingSpaces } = useReadContract({
        abi: ParkFiAbi,
        address: contractAddrs.ParkFi,
        functionName: "getMyParkingSpaces",
    })

    console.log(myParkingSpaces);

    const { writeContractAsync } = useWriteContract();

    const writeToParkFi = async (functionName: string, args?: any[]) => await writeContractAsync({
        abi: ParkFiAbi,
        address: contractAddrs.ParkFi,
        functionName,
        args,

    })

    const writeToParkToken = async (functionName: string, args?: any[]) => await writeContractAsync({
        abi: ParkTokenAbi,
        address: contractAddrs.ParkToken,
        functionName,
        args
    })


    return <ContractContext.Provider value={{
        memberShipBalance: (memberShipBalance as bigint),
        activeAccount,
        availableParkingSpaces: (availableParkingSpaces as ParkSpaceMetadata[]) || [],
        myParkingSpaces: (myParkingSpaces as ParkSpaceMetadata[]) || [],
        writeToParkFi,
        writeToParkToken
    }}>
        {children}
    </ContractContext.Provider>
}

const useContractContext = () => useContext(ContractContext);

export {
    ContractProvider,
    useContractContext
}