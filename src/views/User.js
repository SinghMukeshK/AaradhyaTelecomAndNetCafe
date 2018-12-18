import React from 'react';
import AuthContext from '../context/AuthContext';

const User = () => (
    <div>
        <AuthContext.Consumer>
            {
                (context) => <div>
                    <button onClick={() => context.handleUserChange('New User')}>{context.user}</button>
                </div>
            }
        </AuthContext.Consumer>
    </div>
)

export default User;