import { Injectable } from '@nestjs/common';

const users: string[] = [
  'a', 'b', 'c', 'd'
]

@Injectable()
export class AppService {
  // usernames: string[];
  // constructor(){
  //   this.usernames = ['a', 'b', 'c', 'd'];
  // }
  getHello(): string {
    return 'Hello World!';
  }

  getUsernameByIndex(index: number) {
    if(index < 0 || index >= users.length) throw new Error('Invalid index');
    return users[index];
  }

  addUser(username: string) {
    users.push(username);
  }

  deleteUser(index: number) {
    if(index < 0 || index >= users.length) throw new Error('Invalid index');
    users.splice(index, 1)
  }

}
