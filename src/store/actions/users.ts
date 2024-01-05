import {UserType} from '../../types';

export const plusUserCount = () => {
  return {
    type: 'PLUS_USER_COUNT'
  } as const
};

export const createUser = (user: UserType) =>{
    return {
  type: 'CREATE_USER',
  payload: user
} as const
};
