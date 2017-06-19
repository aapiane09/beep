import { Message } from '../../models/message/message.interface';
import { USER_LIST } from '../profiles/profiles';

const userList = USER_LIST;
const messageList: Message[] = [];

userList.forEach((user) => {
  messageList.push({user: user, date: new Date(), lastMessage: "Hello, world!"})
});

export const MESSAGE_LIST = messageList;
