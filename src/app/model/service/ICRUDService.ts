export default interface ICRUDService<Entity>{

    create(entity: Entity);

    read(id: string);

    update(id: string, entity: Entity);

    delete(id: string, entity?: Entity);
}