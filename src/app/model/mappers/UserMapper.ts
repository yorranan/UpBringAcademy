import { Action } from "@angular/fire/compat/database";
import User from "../entities/User";
import IMapper from "./IMapper";

export default class UserMapper implements IMapper<User>{

    mapEntity(entity: User) {
        return {
            id: entity.id,
            name: entity.name,
            email: entity.name,
            password: entity.password,
            age: entity.age,
            registerDate: entity.registerDate,
            inactivateDate: entity.inactivateDate
        }
    }
}