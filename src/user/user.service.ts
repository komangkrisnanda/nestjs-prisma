import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private dbService: PrismaService){}

    /**
     * get all user
     * @returns 
     * 
     */
    async findAll(){
        return await this.dbService.user.findMany();
    }

    /**
     * Store user
     * @param data 
     */
    async storeData(data: any){
        return await this.dbService.user.create({
            data: data
        });
    }
}
