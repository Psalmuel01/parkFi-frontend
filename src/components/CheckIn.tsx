import {FC, useState} from 'react'
import {DurationType, ParkSpaceMetadata} from "../types.ts";
import {useContractContext} from "../contexts/ContractContext.tsx";
import contractAddrs from "../generated/contracts.ts";
import { toast } from 'react-hot-toast';
import {maxUint256} from "viem";

const CheckIn: FC<{space: ParkSpaceMetadata, clearCurrentSpace: () => void}> = ({space, clearCurrentSpace}) => {
    const [durationType, setDurationType] = useState<DurationType>(DurationType.HOURLY);
    const [duration, setDuration] = useState("");
    const {writeToParkFi, writeToParkToken, allowance} = useContractContext();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        toast.loading("Waiting...", {duration: 5000})
        if (!allowance || allowance == 0n) await writeToParkToken("approve", [contractAddrs.ParkFi, maxUint256]);
        await writeToParkFi("checkIn", [space.psId, durationType, BigInt(duration)]);

        toast.success("Successfully checked in!")
        clearSpace();
    }

    const clearSpace = () => {
        setDuration("");
        setDurationType(DurationType.HOURLY);
        clearCurrentSpace();
        // @ts-ignore
        document.getElementById("my_modal_4")?.close();
    }

    return (
        <div className='pt-5'>
            <div>
                <h2 className='text-3xl font-bold text-center mb-5'>Check In</h2>
                <p className='text-xl text-gray-600 font-medium text-center'>Rent a convenient parking space for
                    affordable prices</p>
            </div>
            <form
                className='my-5 p-10 text-lg border-[#ccc] border rounded-lg bg-[#f5f5f5] flex flex-wrap justify-around' onSubmit={handleSubmit}>
                <div className='mb-5 mx-2 w-1/3'>
                    <label className='font-semibold' htmlFor="durationType">Duration Type:</label>
                    <select id="durationType" name="durationType" className='w-full px-4 py-2' value={durationType}
                            onChange={e => setDurationType(Number(e.target.value))}>
                        <option value={DurationType.HOURLY}>Hourly</option>
                        <option value={DurationType.DAILY}>Daily</option>
                    </select>
                </div>
                <div className='mb-5 mx-2 w-1/3'>
                    <label className='font-semibold' htmlFor="duration">Duration:
                        ({durationType === DurationType.HOURLY ? "hours" : "days"})</label>
                    <input type="number" id="duration" name="duration" placeholder={`0`} className='input w-full'
                           value={duration} onChange={e => setDuration(e.target.value)}/>
                </div>
                <div className='mb-5 mx-2 w-full text-center'>
                    <p className='font-semibold'>Parking ID: {Number(space.psId)}</p>
                </div>
                <div className='w-full text-center'>
                    <input type="submit" value="Check in"
                           disabled={Number(duration) === 0}
                           className='mt-5 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded disabled:cursor-not-allowed disabled:bg-opacity-70'/>
                </div>
            </form>
            <div className="modal-action">
                <form method="dialog" onClick={clearSpace}>
                    <button className="btn">Close</button>
                </form>
            </div>
        </div>
    )
}

export default CheckIn