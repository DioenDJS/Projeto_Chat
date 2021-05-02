import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import {v4 as uuid} from "uuid";
@Entity("settings")
export class Setting{
    
    @PrimaryColumn()
    id: string;

    @Column()
    username: string;

    @Column()
    chat: boolean;

    @UpdateDateColumn()
    updated_at: Date;

    @CreateDateColumn()
    created_at: Date;

    constructor(){// verifica se ja existe um um id preenchido ,no caso de atualização esta opção vira preenchida
        if(!this.id){
            this.id = uuid();
        }
    }
}