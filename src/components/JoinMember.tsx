import Web3 from "web3";
import TransgateConnect from "@zkpass/transgate-js-sdk";
import { useContractContext } from "../contexts/ContractContext.tsx";
import { useState } from "react";
import { useSignMessage } from "wagmi";
import { toast } from "react-hot-toast";
import contractAddrs from "../generated/contracts.ts";
import { maxUint256 } from "viem";

const Member = () => {
  const web3 = new Web3();
  const [valid, setValid] = useState(false);
  const { signMessage } = useSignMessage();
  const {
    memberShipBalance,
    activeAccount,
    writeToParkFi,
    allowance,
    writeToParkToken,
  } = useContractContext();

  const mintMembership = async () => {
    await writeToParkFi("verifyAndMintMembership");
    if (!allowance || allowance == 0n)
      await writeToParkToken("approve", [contractAddrs.ParkFi, maxUint256]);
  };

  const ids = [
    "5108cbedcb3b457cb3fd3e898fa22816",
    "8a2942d108a14d75a2e4f9a62a615252",
    "b936394c1bc2400b928df5b3422fb3fd",
  ];
  //  const ids = [
  //   "9617db4336a04bfb9e2e74f9d05a59f1",
  //   "fdc4a02243a24741908e564d924eb248",
  //   "42a7c85ec5c349178928c142124c2fe6",
  // ];

  const verify = async (exchange: string) => {
    const schemaId =
      exchange === "binance"
        ? ids[0]
        : exchange === "bybit"
        ? ids[1]
        : exchange === "okx"
        ? ids[2]
        : undefined;
    console.log(exchange, schemaId);

    try {
      toast.loading("Waiting...", {
        duration: 5000,
      });
      // The appid of the project created in dev center
      const appid = "1ce74716-51e2-4313-b14d-e3e0995a8d3b";
      // const appid = "0fe97aed-8038-44a9-98ef-44783bf262f2";

      // Create the connector instance
      const connector = new TransgateConnect(appid);

      // Check if the TransGate extension is installed
      // If it returns false, please prompt to install it from chrome web store
      const isAvailable = await connector.isTransgateAvailable();

      if (isAvailable) {
        // Launch the process of verification
        // add a second parameter address to verify onchain
        const res: any = await connector.launch(
          schemaId!,
          activeAccount?.address
        );

        // verify allocator signature

        const {
          taskId,
          validatorAddress,
          allocatorSignature,
          validatorSignature,
          uHash,
          publicFieldsHash,
          recipient,
        } = res; //return by Transgate

        const taskIdHex = Web3.utils.stringToHex(taskId);
        console.log("taskIdHex", taskIdHex);

        const schemaIdHex = Web3.utils.stringToHex(schemaId!);
        console.log("schemaIdHex", schemaIdHex);

        const allocatorEncodeParams = web3.eth.abi.encodeParameters(
          ["bytes32", "bytes32", "address"],
          [taskIdHex, schemaIdHex, validatorAddress]
        );
        const allocatorParamsHash = Web3.utils.soliditySha3(
          allocatorEncodeParams
        );

        // recover allocator address

        const signedAllocatorAddress = web3.eth.accounts.recover(
          allocatorParamsHash!,
          allocatorSignature
        );

        //check if the signed allocator address is registered
        const allocatorProof =
          signedAllocatorAddress ===
          "0x19a567b3b212a5b35bA0E3B600FbEd5c2eE9083d";
        console.log(allocatorProof);

        // verify validator signature

        const types = ["bytes32", "bytes32", "bytes32", "bytes32"];
        const values = [taskIdHex, schemaIdHex, uHash, publicFieldsHash];

        //If you add the wallet address as the second parameter when launch the Transgate
        if (recipient) {
          types.push("address");
          values.push(recipient);
        }

        const validatorEncodeParams = web3.eth.abi.encodeParameters(
          types,
          values
        );

        const validatorParamsHash = Web3.utils.soliditySha3(
          validatorEncodeParams
        );

        // recover validator address
        const signedValidatorAddress = web3.eth.accounts.recover(
          validatorParamsHash!,
          validatorSignature
        );

        const validatorProof = signedValidatorAddress === validatorAddress;
        console.log(validatorProof);

        // sign transaction onchain

        if (allocatorProof && validatorProof) {
          setValid(true);
          await signMessage({
            message: `Validating: ${validatorParamsHash}`,
          });
          toast.success("Verified successfully. Now mint membership", {
            duration: 12000,
          });
        }

        console.log(memberShipBalance);
      } else {
        console.log("Please install TransGate");
      }
    } catch (error) {
      console.log("transgate error", error);
    }
  };

  return (
    <div className="text-center mt-12">
      <p className="text-xl text-gray-600 font-medium">
        Members get access to exclusive benefits and discounted parking rates
      </p>
      <div className="my-10 p-10 text-lg border-[#ccc] border rounded-lg bg-[#f5f5f5] flex flex-wrap justify-around">
        <div>
          <h2 className="font-semibold text-2xl mb-8">
            Verify KYC using zkPass to become a ParkFi Member
          </h2>
          {activeAccount?.address ? (
            <div className="flex items-center justify-around">
              <div
                className="border p-4 cursor-pointer hover:bg-white"
                onClick={() => verify("okx")}
              >
                OKX KYC
              </div>
              <div
                className="border p-4 cursor-pointer hover:bg-white"
                onClick={() => verify("bybit")}
              >
                Bybit KYC
              </div>
              <div
                className="border p-4 cursor-pointer hover:bg-white"
                onClick={() => verify("binance")}
              >
                Binance KYC
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center h-60 text-2xl font-bold">
              Connect Wallet to Start
            </div>
          )}
        </div>
        <div className="w-full text-center mt-5 flex flex-col">
          <button
            type="submit"
            disabled={memberShipBalance > 0n || !valid}
            className="my-5 bg-blue-500 text-white px-5 py-3 rounded w-fit mx-auto"
            onClick={mintMembership}
          >
            Mint membership NFT
          </button>
          <small>
            Can only mint after KYC is verified. You will receive a membership
            NFT
          </small>
        </div>
      </div>
    </div>
  );
};

export default Member;
