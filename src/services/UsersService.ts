import { getCustomRepository, Repository } from "typeorm";
import { User } from "../models/User";
import UsersRepository from "../repositories/UsersRepository";

interface IUsers{
    email: string;
}


export default class UsersService{
    private usersRepository: Repository<User>

    constructor(){
        this.usersRepository = getCustomRepository(UsersRepository);
    }
    
    async create({email}: IUsers){

        //Verificar se usuario existe
        const userExists = await this.usersRepository.findOne(email)

        // Se existir, retornar user
        if(userExists){
            return userExists;
        }
        
        // Se não existir, salvar no DB
        const user = this.usersRepository.create({email});

        await this.usersRepository.save(user);

        return user
    
    }//end method create

    async findByEmail({email}: IUsers){
        const userExistsEmail = await this.usersRepository.findOne({email})

            return userExistsEmail;
    }

}
