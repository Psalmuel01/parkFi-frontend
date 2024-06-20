import {createContext, FC, ReactNode, useContext} from "react";
import {useAccount, useReadContract, useWriteContract} from "wagmi";
import MembershipNftAbi from "../generated/abi/MembershipNft.json";
import contractAddrs from "../generated/contracts.ts";
import ParkFiAbi from "../generated/abi/ParkFi.json";
import ParkTokenAbi from "../generated/abi/ParkToken.json";
import { ParkSpaceMetadata } from "../types.ts";
import {parseEther} from "viem";


const ContractContext = createContext({
    memberShipBalance: 0n,
    activeAccount: (null as any),
    availableParkingSpaces: [] as ParkSpaceMetadata[],
    myParkingSpaces: [] as ParkSpaceMetadata[],
    // @ts-ignore
    writeToParkFi: async (functionName: string, args?: any[]) => {},
    // @ts-ignore
    writeToParkToken: async (functionName: string, args?: any[]) => {},
    mintParkToken: () => {}
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

    const writeToParkFi = async (functionName: string, args?: any[]) => {
        try {
            // Loading
           const tx = await writeContractAsync({
                abi: ParkFiAbi,
                address: contractAddrs.ParkFi,
                functionName,
                args,
            })

            if (!tx) {
                throw new Error();
                return;
            }

            // Success

        } catch (error) {
            // Error
                console.error(error)
        }

    }

    const writeToParkToken = async (functionName: string, args?: any[], other?: any) =>{
        try {
            // Loading
            const tx = await writeContractAsync({
                abi: ParkTokenAbi,
                address: contractAddrs.ParkToken,
                functionName,
                args,
                ...other
            })

            if (!tx) {
                throw new Error();
                return;
            }

            // Success

        } catch (error) {
            // Error
            console.error(error)
        }

    }

    const mintParkToken = async () => await writeToParkToken("mint", undefined, {
        value: parseEther("0.00001")
    })


    return <ContractContext.Provider value={{
        memberShipBalance: (memberShipBalance as bigint),
        activeAccount,
        availableParkingSpaces: (availableParkingSpaces as ParkSpaceMetadata[]) || [],
        myParkingSpaces: (myParkingSpaces as ParkSpaceMetadata[]) || [],
        writeToParkFi,
        writeToParkToken,
        mintParkToken
    }}>
        {children}
    </ContractContext.Provider>
}

const useContractContext = () => useContext(ContractContext);

export {
    ContractProvider,
    useContractContext
}