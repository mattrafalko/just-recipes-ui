import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';

function Recipes(){
    const { userId, setUserId } = useContext(UserContext);
    return (
        <div>
            <h3>Hi {userId} These are you're saved recipes</h3>
        </div>
    )
}

export default Recipes;