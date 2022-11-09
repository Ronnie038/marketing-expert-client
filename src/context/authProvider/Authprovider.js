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
	const [userReviews, setUserReviews] = useState([]);
	const [reviewUpdate, setReviewUpdate] = useState(false);

	const [loading, setLoading] = useState(true);

	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const LogOut = () => {
		localStorage.removeItem('auth-token');
		return signOut(auth);
	};
	const logIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (curUser) => {
			setUser(curUser);
			setLoading(false);
		});

		return () => {
			return unsubscribe();
		};
	}, []);

	const authInfo = {
		user,
		createUser,
		LogOut,
		logIn,
		reviews,
		setReviews,
		userReviews,
		setUserReviews,
		setReviewUpdate,
		loading,
		setLoading,
		reviewUpdate,
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default Authprovider;
