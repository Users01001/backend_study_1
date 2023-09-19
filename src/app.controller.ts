import { Controller, Delete, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/user/:id')
  getUsernameByIndex(@Param('id') id : number, @Res() res: Response){
    try {
      const username = this.appService.getUsernameByIndex(id);
      res.send(username);
      console.log('해당 유저의 이름은' + username);
    } catch(error) {
      res.status(400).send(error.message);
    }
  }

  @Delete('/user/:id')
  deleteUser(@Param('id') id : number, @Res() res : Response){
    try {
      this.appService.deleteUser(id);
      console.log('Delete Success!');
    } catch(error) {
      res.status(400).send(error.message)
    }
  }
  
  @Get('/add-user/:user')
  addUser(@Param('user') user : string, @Res() res : Response) {
    try {
      this.appService.addUser(user);
      console.log('Add Success!');
    } catch(error) {
      res.status(400).send(error.message)
    }
  }


}
