import park from "../images/park.jpg";
import { useContractContext } from "../contexts/ContractContext.tsx";
import { formatEther } from "viem";
import { formatDate } from "../utils.ts";
import CheckIn from "./CheckIn.tsx";


const Available = () => {
    const { availableParkingSpaces } = useContractContext();

    // const availableParkingSpaces: ParkSpaceMetadata[] = [
    //     {
    //     id: 0n,
    //     hourlyPrice: 100n,
    //     dailyPrice: 500n,
    //     validTill: 10n,
    //     isBeingUsed: false,
    //     currentUser: "0x1",
    //     spaceOwner: "0x1",
    //     durationType: DurationType.HOURLY
    // },
    //     {
    //     id: 0n,
    //     hourlyPrice: 100n,
    //     dailyPrice: 500n,
    //     validTill: 10n,
    //     isBeingUsed: false,
    //     currentUser: "0x1",
    //     spaceOwner: "0x1",
    //     durationType: DurationType.HOURLY
    //     },
    //     {
    //     id: 0n,
    //     hourlyPrice: 100n,
    //     dailyPrice: 500n,
    //     validTill: 10n,
    //     isBeingUsed: false,
    //     currentUser: "0x1",
    //     spaceOwner: "0x1",
    //     durationType: DurationType.HOURLY
    //     }
    // ]

    const rent = () => {
        document.getElementById("my_modal_4")?.showModal();
    }

    return (
        <div>
            <h2 className='text-3xl my-16 font-bold text-center'>Parking Spaces</h2>
            <div className='flex flex-wrap justify-around gap-y-20'>
                {availableParkingSpaces.map((space) => (
                    <div className="card card-compact w-96 shadow-xl" key={space.id}>
                        <figure><img src={park} alt="park" /></figure>
                        <div className="card-body">
                            <h2 className="card-title"><div className="badge badge-secondary">Available</div></h2>
                            <p>Hourly Rate: {formatEther(space.hourlyPrice)} PARK </p>
                            <p>Daily Rate: {formatEther(space.dailyPrice)} PARK </p>
                            <p className="text-wrap break-all">Owner: {space.spaceOwner}</p>

                            {/*<p>Duration: {space.durationType}</p>*/}
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary" onClick={rent}>Rent now</button>
                                <dialog id="my_modal_4" className="modal">
                                    <div className="bg-white modal-box w-11/12 max-w-5xl">
                                        <CheckIn />
                                        <div className="modal-action">
                                            <form method="dialog">
                                                <button className="btn">Close</button>
                                                {/* <button className="btn">Close</button> */}
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Available