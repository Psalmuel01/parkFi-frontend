import { useState } from 'react'
import Available from './Available';
import MySpace from './MySpace';

const Member = () => {
    const [clickedButton, setClickedButton] = useState('available');

    const handleClick = (button: SetStateAction<string>) => {
        setClickedButton(button);
    };

    return (
        <div>
            <div className='mt-10 text-center text-2xl flex justify-center gap-60 font-medium'>
                <button
                    className={clickedButton === 'available' ? 'bg-primary px-4 py-2 rounded-lg text-white' : ''}
                    onClick={() => handleClick('available')}
                >
                    Available Spaces
                </button>
                <button
                    className={clickedButton === 'myspace' ? 'bg-primary px-4 py-2 rounded-lg text-white' : ''}
                    onClick={() => handleClick('myspace')}
                >
                    My Space(s)
                </button>
            </div>
            <div className='my-8'>
                {clickedButton === 'available' ? <Available /> : <MySpace />}
            </div>
        </div>
    )
}

export default Member