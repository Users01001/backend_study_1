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

  @Get('/:id')
  getUsernameByIndex(@Param('id') id : number, @Res() res: Response){
    try {
      const username = this.appService.getUsernameByIndex(id);
      res.send(username)
    } catch(error) {
      res.status(400).send(error.message);
    }
  }

  @Delete('/:id')
  deleteUser(@Param('id') id : number, @Res() res : Response){
    try {
      this.appService.deleteUser(id);
    } catch(error) {
      res.status(400).send(error.message)
    }
  }
  
  @Get('/adduser/id')
  addUser(@Param('user') user : string, @Res() res : Response) {
    try {
      this.appService.addUser(user);
    } catch(error) {
      res.status(400).send(error.message)
    }
  }


}
