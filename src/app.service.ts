import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  usernames: string[];
  constructor(){
    this.usernames = ['a', 'b'];
  }
  getHello(): string {
    return 'Hello World!';
  }

  getUsernameByIndex(index: number) {
    if(index < 0 || index >= this.usernames.length) throw new Error('Invalid index');
    return this.usernames[index];
  }

  addUser(username: string) {
    this.usernames.push(username);
  }

  deleteUser(index: number) {
    if(index < 0 || index >= this.usernames.length) throw new Error('Invalid index');
    this.usernames.splice(index, 1)
  }

}
