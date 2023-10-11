import React, {ReactComponentElement} from 'react';
import {Navigate} from "react-router-dom";

type PropsType = {
	children: ReactComponentElement<any>
}
export const ProtectedRoute: React.FC<PropsType> = ({children}) => {
	const loggedIn = false
	return loggedIn ? children : <Navigate to="/page/:error"/> 
};