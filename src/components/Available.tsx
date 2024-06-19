import React from 'react'
import park from "../images/park.jpg"

export type TAddress = `0x${string}`;

enum DurationType {
    HOURLY,
    DAILY
}

interface ParkSpaceMetadata {
    id: bigint;
    hourlyPrice: bigint;
    dailyPrice: bigint;
    validTill: bigint;
    isBeingUsed: boolean;
    currentUser: TAddress;
    spaceOwner: TAddress;
    durationType: DurationType;
}

const Available = () => {
    const availableParkingSpace: ParkSpaceMetadata[] = [{
        id: 0n,
        hourlyPrice: 100n,
        dailyPrice: 500n,
        validTill: 10n,
        isBeingUsed: false,
        currentUser: "0x1",
        spaceOwner: "0x1",
        durationType: DurationType.HOURLY
    },
    {
        id: 0n,
        hourlyPrice: 100n,
        dailyPrice: 500n,
        validTill: 10n,
        isBeingUsed: false,
        currentUser: "0x1",
        spaceOwner: "0x1",
        durationType: DurationType.HOURLY
    },
    {
        id: 0n,
        hourlyPrice: 100n,
        dailyPrice: 500n,
        validTill: 10n,
        isBeingUsed: false,
        currentUser: "0x1",
        spaceOwner: "0x1",
        durationType: DurationType.HOURLY
    }]

    return (
        <div>
            <h2 className='text-3xl my-16 font-bold text-center'>Parking Spaces</h2>
            <div className='flex flex-wrap justify-around gap-y-20'>
                {availableParkingSpace.map((space) => (
                    <div className="card card-compact w-96 shadow-xl">
                        <figure><img src={park} alt="park" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Estate Parking Space<div className="badge badge-secondary">Available</div></h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Rent Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Available