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
	const [reviews, setReviews] = useState([]);

	const [loading, setLoading] = useState(true);

	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const LogOut = () => {
		return signOut(auth);
	};
	const logIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};
	useEffect(() => {
		fetch('http://localhost:5000/reviews')
			.then((res) => res.json())
			.then((data) => setReviews(data))
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		onAuthStateChanged(auth, (curUser) => {
			setUser(curUser);
		});
	}, []);

	const authInfo = {
		user,
		createUser,
		LogOut,
		logIn,
		reviews,
		setReviews,
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default Authprovider;
