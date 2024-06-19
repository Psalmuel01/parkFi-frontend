import React from 'react'

const CheckIn = () => {
    return (
        <div className='pt-5'>
            <div>
                <h2 className='text-3xl font-bold text-center mb-5'>Check In</h2>
                <p className='text-xl text-gray-600 font-medium text-center'>Rent a convenient parking space for affordable prices</p>
            </div>
            <form className='my-5 p-10 text-lg border-[#ccc] border rounded-lg bg-[#f5f5f5] flex flex-wrap justify-around'>
                <div className='mb-5 mx-2 w-1/3'>
                    <label className='font-semibold' htmlFor="durationType">Duration Type:</label>
                    <select id="durationType" name="durationType" className='w-full px-4 py-2'>
                        <option value="hourly">Hourly</option>
                        <option value="daily">Daily</option>
                    </select>
                </div>
                <div className='mb-5 mx-2 w-1/3'>
                    <label className='font-semibold' htmlFor="duration">Duration:</label>
                    <input type="number" id="duration" name="duration" placeholder="Enter duration price" className='input w-full' />
                </div>
                <div className='mb-5 mx-2 w-1/3'>
                    <label className='font-semibold' htmlFor="park-id">Parking Space ID:</label>
                    <input type="number" id="park-id" name="park-id" placeholder="Enter parking space id" className='input w-full' />
                </div>
                <div className='w-full text-center'>
                    <input type="submit" value="Check in" className='mt-5 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded' />
                </div>
            </form>
        </div>
    )
}

export default CheckIn