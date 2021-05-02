import { EntityRepository, Repository } from "typeorm";
import { Setting } from "../models/Setting";

@EntityRepository(Setting)
export default class SettingsRepository extends Repository<Setting>{

}