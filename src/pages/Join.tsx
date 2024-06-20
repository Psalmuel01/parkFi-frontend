import {SetStateAction, useState} from 'react';
import Member from '../components/Member';
import JoinMember from '../components/JoinMember';
import Owner from '../components/Owner';
import {useContractContext} from "../contexts/ContractContext.tsx";

const Join = () => {
    const [clickedButton, setClickedButton] = useState('member');

    const {memberShipBalance} = useContractContext();

    const handleClick = (button: SetStateAction<string>) => {
        setClickedButton(button);
    };

    console.log(memberShipBalance);

    if (memberShipBalance > 0n) return <Member />

        return (
        <div>
            <h1 className='my-16 text-center text-4xl font-bold'>Join ParkFi Network</h1>
            <div className='mt-10 text-center text-2xl flex justify-center gap-60 font-medium'>
                <button 
                    className={clickedButton === 'member' ? 'bg-primary px-4 py-2 rounded-lg text-white' : ''} 
                    onClick={() => handleClick('member')}
                >
                    Parking Membership
                </button>
                <button 
                    className={clickedButton === 'owner' ? 'bg-primary px-4 py-2 rounded-lg text-white' : ''} 
                    onClick={() => handleClick('owner')}
                >
                    Property Owners
                </button>
            </div>
            <div className='my-8'>
                {clickedButton === 'member' ? <JoinMember /> : <Owner />}
            </div>
        </div>
    );
};

export default Join;
