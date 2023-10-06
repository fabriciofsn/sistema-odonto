export interface IQueryDB<T> {
  recByID(cuid: string): Promise<T | null>;
  recAll(): Promise<Array<T>>;
  exists(cuid: string): Promise<Boolean>;
}

export interface ICommand<T> {
  insert(entity: T): Promise<T>;
  update(cuid: string, entity: Partial<T>): Promise<Boolean>;
  delete(cuid: string): Promise<Boolean>;
}

export interface IRepositoryDB<T> extends IQueryDB<T>, ICommand<T> {}
