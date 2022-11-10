import React, { createContext, useEffect, useState } from 'react';
import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
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
	const [reviewText, setReviewtext] = useState('');
	const [allServices, setAllServices] = useState([]);

	const [loading, setLoading] = useState(true);

	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const LogOut = () => {
		setLoading(true);
		localStorage.removeItem('auth-token');
		return signOut(auth);
	};
	const logIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const googleSignIn = () => {
		return signInWithPopup(auth, new GoogleAuthProvider());
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
		googleSignIn,
		reviews,
		setReviews,
		userReviews,
		setUserReviews,
		setReviewUpdate,
		loading,
		setLoading,
		reviewUpdate,
		reviewText,
		setReviewtext,
		allServices,
		setAllServices,
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default Authprovider;
