import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { identity } from 'rxjs';
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

    /**
     * Store user
     * @param body 
     * @returns 
     */

    @Post()
    async storeUser(@Body() body){
        return await this.userService.storeData(body);
    }

    /**
     * Update user
     * @param id 
     * @param body 
     * @returns 
     */

    @UsePipes(ValidationPipe)
    @Patch('/:id')
    async updateUser(@Param(`id`, ParseIntPipe) id, @Body() body){
        return await this.userService.updateData(id, body);        
    }
}
