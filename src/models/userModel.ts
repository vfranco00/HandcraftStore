import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces';

export default class UserModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async addUser(user: IUser) {
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [user.username, user.classe, user.level, user.password],
    );

    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...user } as IUser;
  }
}