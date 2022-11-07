import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const Authprovider = ({ children }) => {
	const [user, setUser] = useState(null);

	const authInfo = {
		user,
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default Authprovider;
