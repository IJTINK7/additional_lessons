import { RootStateOrAny } from '../index';


export const selectUsersCount = (state: RootStateOrAny): number => state.usersCount.count;
