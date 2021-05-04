import { EntityRepository, Repository } from "typeorm";
import Message from "../models/Message";

@EntityRepository(Message)
export default class MessagesRepository extends Repository<Message>{
     
}