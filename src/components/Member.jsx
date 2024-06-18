import React from 'react'

const Member = () => {
  return (
    <div className='text-center mt-12'>
        <p className='text-xl text-gray-600 font-medium'>
        Members get access to exclusive benefits and discounted parking rates
        </p>
        <div className='my-10 p-10 text-lg border-[#ccc] border rounded-lg bg-[#f5f5f5] flex flex-wrap justify-around'>
            <div>
                <h2 className='font-semibold text-2xl mb-8'>Verify KYC using zkPass to become a ParkFi Member</h2>
                <div className='flex items-center justify-around'>
                    <div className='border p-4 cursor-pointer hover:bg-white'>OKX KYC</div>
                    <div className='border p-4 cursor-pointer hover:bg-white'>Bybit KYC</div>
                    <div className='border p-4 cursor-pointer hover:bg-white'>Binance KYC</div>
                </div>
            </div>
            <div className='w-full text-center mt-5 flex flex-col'>
                <button type="submit" disabled className='my-5 bg-blue-500 text-white px-5 py-3 rounded w-fit mx-auto'>Mint membership NFT</button>
                <small>Can only mink after KYC is verified. You will receive a membership NFT</small>
            </div>
        </div>
    </div>
  )
}

export default Member
