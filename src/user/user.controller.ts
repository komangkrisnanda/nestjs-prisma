import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    /**
     * Get users
     * @returns 
     */
    @Get()
    async users(){
        return await this.userService.findAll();
    }

    @Post()
    async storeUser(@Body() body){
        return await this.userService.storeData(body);
    }
}
