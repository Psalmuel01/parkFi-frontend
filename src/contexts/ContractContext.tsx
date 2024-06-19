import {createContext, FC, ReactNode, useContext} from "react";
import {useAccount, useReadContract} from "wagmi";
import MembershipNftAbi from "../generated/abi/MembershipNft.json";
import contractAddrs from "../generated/contracts.ts";


const ContractContext = createContext({
    memberShipBalance: 0n,
    activeAccount: (null as any)
})

const ContractProvider: FC<{children: ReactNode}> = ({children}) => {

    const activeAccount = useAccount();

    const {data: memberShipBalance} = useReadContract({
        abi: MembershipNftAbi,
        address: contractAddrs.MembershipNft,
        functionName: "balanceOf",
        args: [activeAccount.address]
    })

    return <ContractContext.Provider value={{
        memberShipBalance: (memberShipBalance as bigint),
        activeAccount
    }}>
        {children}
    </ContractContext.Provider>
}

const useContractContext = () => useContext(ContractContext);

export  {
    ContractProvider,
    useContractContext
}