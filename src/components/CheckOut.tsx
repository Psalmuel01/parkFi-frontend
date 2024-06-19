import React from 'react'

const CheckOut = () => {
    return (
        <div className='mt-20'>
            <div className='mb-20'>
                <h2 className='text-3xl font-bold text-center mb-5'>Check Out</h2>
                <p className='text-xl text-gray-600 font-medium text-center'>Thank you and hope you come again</p>
            </div>
            <form className='my-10 p-10 text-lg border-[#ccc] border rounded-lg bg-[#f5f5f5] flex flex-wrap justify-around'>
                <div className='mb-5 mx-2 w-1/3'>
                    <label className='font-semibold' htmlFor="park-id">Parking Space ID:</label>
                    <input type="number" id="park-id" name="park-id" placeholder="Enter parking space id" className='input w-full' />
                </div>
                <div className='w-full text-center'>
                    <input type="submit" value="Check out" className='mt-5 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded' />
                </div>
            </form>
        </div>
    )
}

export default CheckOut