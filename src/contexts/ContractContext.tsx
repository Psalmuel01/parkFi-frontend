import {createContext, FC, ReactNode, useContext} from "react";
import {useAccount, useReadContract} from "wagmi";
import MembershipNftAbi from "../generated/abi/MembershipNft.json";
import contractAddrs from "../generated/contracts.ts";
import  ParkFiAbi from "../generated/abi/ParkFi.json";
import {ParkSpaceMetadata} from "../types.ts";



const ContractContext = createContext({
    memberShipBalance: 0n,
    activeAccount: (null as any),
    availableParkingSpaces: [] as ParkSpaceMetadata[]
})

const ContractProvider: FC<{children: ReactNode}> = ({children}) => {

    const activeAccount = useAccount();

    const {data: memberShipBalance} = useReadContract({
        abi: MembershipNftAbi,
        address: contractAddrs.MembershipNft,
        functionName: "balanceOf",
        args: [activeAccount.address]
    })

    const {data: availableParkingSpaces} = useReadContract({
        abi: ParkFiAbi,
        address: contractAddrs.ParkFi,
        functionName: "getAvailableParkingSpaces",
    })

    return <ContractContext.Provider value={{
        memberShipBalance: (memberShipBalance as bigint),
        activeAccount,
        availableParkingSpaces: (availableParkingSpaces as ParkSpaceMetadata[])
    }}>
        {children}
    </ContractContext.Provider>
}

const useContractContext = () => useContext(ContractContext);

export  {
    ContractProvider,
    useContractContext
}