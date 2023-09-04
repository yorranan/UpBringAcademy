export default interface Service<Request, Response>{

    create(dto: Request);

    read(id: number): Response;

    update(id: number, dto: Request);

    delete(id: number);
}