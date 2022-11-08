import React, { createContext, useEffect, useState } from 'react';
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import app from '../../firebase/firebase';

export const AuthContext = createContext();
export const auth = getAuth(app);

const Authprovider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	useEffect(() => {
		onAuthStateChanged(auth, (result) => {
			console.log(result);
		});
	}, []);

	const authInfo = {
		user,
		createUser,
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default Authprovider;
