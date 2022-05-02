import Welcome from './Welcome';
import React, {useState} from 'react';
import PhoneNumber from './PhoneNumber';
import User from './User';

export default function RightSide() {
    const [welcomeToDistancify, setWelcomeToDistancify] = useState(false);
    
    return (
        <div className="rightSide">
            <Welcome welcomeToDistancify={welcomeToDistancify} />
            <PhoneNumber />
            <User setWelcomeToDistancify={setWelcomeToDistancify} />  
        </div>
    )
}