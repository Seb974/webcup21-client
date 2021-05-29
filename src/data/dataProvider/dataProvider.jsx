import React, { useEffect, useState } from 'react';
// import ProductsContext from '../../contexts/ProductsContext';
import MercureHub from '../../components/Mercure/MercureHub';
import AuthContext from '../../contexts/AuthContext';
import FarmContext from '../../contexts/FarmContext';
import AuthActions from '../../services/AuthActions';
import FarmActions from '../../services/FarmActions';

const DataProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(AuthActions.isAuthenticated());
    const [currentUser, setCurrentUser] = useState(AuthActions.getCurrentUser());
    const [farms, setFarms] = useState([]);
    const [eventSource, setEventSource] = useState({});

    useEffect(() => {
        AuthActions.setErrorHandler(setCurrentUser, setIsAuthenticated);
        FarmActions
            .findAll()
            .then(response => setFarms(response));

    },[]);
    useEffect(() => setCurrentUser(AuthActions.getCurrentUser()), [isAuthenticated]);

    return (
        <AuthContext.Provider value={ {isAuthenticated, setIsAuthenticated, currentUser, setCurrentUser, eventSource, setEventSource} }>
        <FarmContext.Provider value={ {farms, setFarms} }>
            {/* <MercureHub> */}
                { children }
            {/* </MercureHub> */}
        </FarmContext.Provider>
        </AuthContext.Provider>
    );
}
 
export default DataProvider;