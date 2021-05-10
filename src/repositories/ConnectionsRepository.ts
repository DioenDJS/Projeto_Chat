import { EntityRepository, Repository } from "typeorm";
import Connection from "../models/Connection";

@EntityRepository(Connection)
export default class ConnectionsRepository extends Repository<Connection>{

}