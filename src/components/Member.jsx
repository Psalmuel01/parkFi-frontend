import Web3 from "web3";
import TransgateConnect from "@zkpass/transgate-js-sdk";
import { useActiveAccount } from "thirdweb/react";

const Member = () => {
  const web3 = new Web3();

  const { activeAccount: address } = useActiveAccount();

  // fetched automatically from thirdweb

  const ids = [
    "e82fa24e66af4da2a5b0f666c356d274",
    "71bf5b59dd0440a48f1a4bb312ca40ad",
    "31238e909e174c5f9c1f90ee8f0d1673",
  ];

  const verify = async (exchange) => {
    event.preventDefault();
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
      // The appid of the project created in dev center
      const appid = "1ce74716-51e2-4313-b14d-e3e0995a8d3b";

      // Create the connector instance
      const connector = new TransgateConnect(appid);

      // Check if the TransGate extension is installed
      // If it returns false, please prompt to install it from chrome web store
      const isAvailable = await connector.isTransgateAvailable();

      if (isAvailable) {
        // Launch the process of verification
        // add a second parameter address to verify onchain
        const res = await connector.launch(schemaId, address);

        console.log("res", res);

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

        const schemaIdHex = Web3.utils.stringToHex(schemaId);
        console.log("schemaIdHex", schemaIdHex);

        const encodeParams = web3.eth.abi.encodeParameters(
          ["bytes32", "bytes32", "address"],
          [taskIdHex, schemaIdHex, validatorAddress]
        );
        const paramsHash = Web3.utils.soliditySha3(encodeParams);

        // recover allocator address

        const signedAllocatorAddress = web3.eth.accounts.recover(
          paramsHash,
          allocatorSignature
        );

        //check if the signed allocator address is registered

        console.log(
          signedAllocatorAddress ===
            "0x19a567b3b212a5b35bA0E3B600FbEd5c2eE9083d"
        );
        // return signedAllocatorAddress === "0x19a567b3b212a5b35bA0E3B600FbEd5c2eE9083d"

        // verify validator signature

        const types = ["bytes32", "bytes32", "bytes32", "bytes32"];
        const values = [taskIdHex, schemaIdHex, uHash, publicFieldsHash];

        //If you add the wallet address as the second parameter when launch the Transgate
        if (recipient) {
          types.push("address");
          values.push(recipient);
        }

        const encodeParams2 = web3.eth.abi.encodeParameters(types, values);

        const paramsHash2 = Web3.utils.soliditySha3(encodeParams2);

        // recover validator address
        const signedValidatorAddress = web3.eth.accounts.recover(
          paramsHash2,
          validatorSignature
        );

        console.log(signedValidatorAddress === validatorAddress);
        // return signedValidatorAddress === validatorAddress

        // sign transaction onchain

        // here we sign the transaction using the signer of the recipient from thirdweb
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
        </div>
        <div className="w-full text-center mt-5 flex flex-col">
          <button
            type="submit"
            disabled
            className="my-5 bg-blue-500 text-white px-5 py-3 rounded w-fit mx-auto"
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
