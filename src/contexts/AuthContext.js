import React from 'react';

export default React.createContext({
    isAuthenticated: false,
    setIsAuthenticated: (value) => {},
    currentUser: {},
    setCurrentUser: (value) => {},
    eventSource: {},
    setEventSource: (value) => {}
});