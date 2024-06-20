// @ts-ignore
import park from "../images/park.jpg";
import { useContractContext } from "../contexts/ContractContext.tsx";
import { formatEther } from "viem";
import CheckIn from "./CheckIn.tsx";
import {useState} from "react";
import {ParkSpaceMetadata} from "../types.ts";


const Available = () => {
    const { availableParkingSpaces } = useContractContext();
    const [currentSpace, setCurrentSpace] = useState<ParkSpaceMetadata>();

    const rent = (space: ParkSpaceMetadata) => {
        setCurrentSpace(space);
        // @ts-ignore
        document.getElementById("my_modal_4")?.showModal();
    }

    return (
        <div>
            <h2 className='text-3xl my-16 font-bold text-center'>Parking Spaces</h2>
            <div className='flex flex-wrap justify-around gap-y-20'>
                {availableParkingSpaces.map((space) => (
                    <div className="card card-compact w-96 shadow-xl" key={space.psId}>
                        <figure><img src={park} alt="park"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                <div className="badge badge-secondary">Available</div>
                            </h2>
                            <p>Hourly Rate: {formatEther(space.hourlyPrice)} PARK </p>
                            <p>Daily Rate: {formatEther(space.dailyPrice)} PARK </p>
                            <p className="text-wrap break-all">Owner: {space.spaceOwner}</p>

                            {/*<p>Duration: {space.durationType}</p>*/}
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary" onClick={() => rent(space)}>Rent now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <dialog id="my_modal_4" className="modal">
                <div className="bg-white modal-box w-11/12 max-w-5xl">
                    {currentSpace && <CheckIn space={currentSpace} clearCurrentSpace={() => setCurrentSpace(undefined)}/>}

                </div>
            </dialog>
        </div>
    )
}

export default Available