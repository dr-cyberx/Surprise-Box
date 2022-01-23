import { participantUser, predefinedList } from './db';

export enum surpriseBoxReturn {
    'WINNER' = 'WINNER',
    'LOOSER' = 'LOOSER',
    'ALREADY_EXISTS' = 'ALREADY_EXISTS',
}

const surpriseBox = (user: string): surpriseBoxReturn => {
    const isUserExist = participantUser.find((item: string) => item === user);
    if (isUserExist !== undefined) {
        return surpriseBoxReturn.ALREADY_EXISTS;
    }
    participantUser.push(user.trim());
    const indexofUser = participantUser.findIndex((item) => item === user);
    if (predefinedList.find((item: number) => item === indexofUser + 1)) {
        return surpriseBoxReturn.WINNER;
    }
    return surpriseBoxReturn.LOOSER;
};

export default surpriseBox;
