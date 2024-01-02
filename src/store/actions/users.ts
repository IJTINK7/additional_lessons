import {UserType} from '../../types/UserType';

export const plusUserCount = () => ({
  type: 'PLUS_USER_COUNT',
}) as const;

export const createUser = (user: UserType) => ({
  type: 'СREATE_USER',
  payload: user
});
