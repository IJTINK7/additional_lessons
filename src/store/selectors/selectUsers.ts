import {UserType} from '../../types/UserType';
import {RootStateOrAny} from "../index";


export const selectUsers = (state: RootStateOrAny): UserType[] => state.userData.users;
