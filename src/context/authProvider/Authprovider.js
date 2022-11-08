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
	const LogOut = () => {
		return signOut(auth);
	};

	useEffect(() => {
		onAuthStateChanged(auth, (curUser) => {
			setUser(curUser);
		});
	}, []);

	const authInfo = {
		user,
		createUser,
		LogOut,
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default Authprovider;
