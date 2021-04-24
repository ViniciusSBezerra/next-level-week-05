import { getCustomRepository, Repository } from "typeorm"
import { Connection } from "../entities/Connetion"
import { ConnectionRepository } from "../repositories/ConnectionRepository"

interface IConnectionsCreate{
    socket_id: string;
    user_id: string;
    admin_id ?: string;
    id ?: string;
}

class ConnetionsService  {
    private connectionsRepository: Repository<Connection>

    constructor(){
        this.connectionsRepository = getCustomRepository(ConnectionRepository)
    }

    async create({ socket_id, user_id, admin_id, id  }: IConnectionsCreate){
        const connection = this.connectionsRepository.create({
            socket_id,
            user_id,
            admin_id,
            id,
        })

        await this.connectionsRepository.save(connection)

        return connection
    }

    async findByUserId(user_id: string){
        const connetion = await this.connectionsRepository.findOne({
            user_id
        })
        return connetion
    }
}

export {ConnetionsService}
