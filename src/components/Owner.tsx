import React from 'react'

const Owner = () => {
  return (
    <div className='text-center mt-12'>
        <p className='text-xl text-gray-600 font-medium'>Own a parking lot or space? Join our network and start earning today</p>
        <form className='my-10 p-10 text-lg border-[#ccc] border rounded-lg bg-[#f5f5f5] flex flex-wrap justify-around'>
            <div className='mb-5 mx-2 w-1/3 block'>
                <label className='font-semibold' htmlFor="availableSpace">Available Space:</label>
                <select id="additionType" name="additionType" className='w-full px-4 py-2'>
                    <option value="single-space">Single Space</option>
                    <option value="parking-lot">Parking Lot</option>
                </select>
            </div>
            {/* <div className='mb-5 mx-2 w-1/3'>
                <label className='font-semibold' htmlFor="paymentType">Payment Type:</label>
                <select id="paymentType" name="paymentType" className='w-full px-4 py-2'>
                    <option value="hourly">Hourly</option>
                    <option value="daily">Daily</option>
                </select>
            </div> */}
            {/* <div className='mb-5 mx-2 w-1/3'>
                <label className='font-semibold' htmlFor="ownerName">Owner's Name:</label>
                <input type="text" id="ownerName" name="ownerName" placeholder="Enter owner's name" className='w-full'/>
            </div> */}
            <div className='mb-5 mx-2 w-1/3'>
                <label className='font-semibold' htmlFor="parkingLotName">Parking Lot Name:</label>
                <input type="text" id="parkingLotName" name="parkingLotName" placeholder="Enter parking lot name" className='w-full'/>
            </div>
            <div className='mb-5 mx-2 w-1/3'>
                <label className='font-semibold' htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" placeholder="Enter address" className='w-full'/>
            </div>
            <div className='mb-5 mx-2 w-1/3'>
                <label className='font-semibold' htmlFor="city">City/State:</label>
                <input type="text" id="city" name="city" placeholder="Enter city" className='w-full'/>
            </div>
            <div className='mb-5 mx-2 w-1/3'>
                <label className='font-semibold' htmlFor="hourly">Hourly Price:</label>
                <input type="number" id="hourly" name="hourly" placeholder="Enter hourly price" className='w-full'/>
            </div>
            <div className='mb-5 mx-2 w-1/3'>
                <label className='font-semibold' htmlFor="daily">Daily Price:</label>
                <input type="number" id="daily" name="daily" placeholder="Enter daily price" className='w-full'/>
            </div>
            <div className='mb-5 mx-2 w-full'>
                <input type="checkbox" id="terms" name="terms" required className='mr-2'/>
                <label className='font-semibold' htmlFor="terms">I have read and agree to the terms of service</label>
            </div>
            <div className='w-full text-center'>
                <input type="submit" value="Add Parking Space" className='mt-5 bg-blue-500 text-white px-5 py-2 rounded'/>
            </div>
        </form>
    </div>
  )
}

export default Owner