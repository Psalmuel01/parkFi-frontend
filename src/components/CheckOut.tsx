import { FC } from "react";
import { ParkSpaceMetadata } from "../types";
import { useContractContext } from "../contexts/ContractContext";

const CheckOut: FC<{
  space: ParkSpaceMetadata;
  clearCurrentSpace: () => void;
}> = ({ space, clearCurrentSpace }) => {
  console.log(clearCurrentSpace);
  const { writeToParkFi } = useContractContext();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const checkOutTx = await writeToParkFi("checkOut", [space.psId]);
    console.log({ checkOutTx });
  };
  return (
    <div className="pt-20">
      <div>
        <h2 className="text-3xl font-bold text-center mb-5">Check Out</h2>
        <p className="text-xl text-gray-600 font-medium text-center">
          Thank you and hope you come again
        </p>
      </div>
      <form
        className="my-10 p-10 text-lg border-[#ccc] border rounded-lg bg-[#f5f5f5] flex flex-wrap justify-around"
        onSubmit={handleSubmit}
      >
        <div className="mb-5 mx-2 w-1/3">
          <label className="font-semibold" htmlFor="park-id">
            Parking Space ID:
          </label>
          <p>{Number(space.psId)}</p>
        </div>
        <div className="w-full text-center">
          <input
            type="submit"
            value="Check out"
            className="mt-5 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded"
          />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
