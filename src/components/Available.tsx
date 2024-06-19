import React from 'react'
import park from "../images/park.jpg"

const Available = () => {
    return (
        <div>
            <h2 className='text-3xl mb-20 font-bold text-center'>Parking Spaces</h2>
            <div className='flex flex-wrap justify-around gap-y-20'>
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
            </div>
        </div>
    )
}

export default Available