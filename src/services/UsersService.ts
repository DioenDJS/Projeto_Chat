import { getCustomRepository } from "typeorm";
import UsersRepository from "../repositories/UsersRepository";

interface IUsers{
    email: string;
}
export default class UsersService{
    async create({email}: IUsers){
        const usersRepository = getCustomRepository(UsersRepository);

        //Verificar se usuario existe
        const userExists = await usersRepository.findOne(email)

        // Se existir, retornar user
        if(userExists){
            return userExists;
        }
        
        // Se não existir, salvar no DB
        const user = usersRepository.create({email});

        await usersRepository.save(user);

        return user
    
    }
}