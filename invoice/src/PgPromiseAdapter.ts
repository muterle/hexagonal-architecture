import pgPromise from "pg-promise";
import Connection from "./Connection";

export default class PgPromiseAdapter implements Connection {
  connection: any;

  constructor() {
    this.connection = pgPromise()("postgres://postgres:mig1210@localhost:5432/postgres");
  }

  async query(statement: string, params: any): Promise<any> {
    return this.connection.query(statement, params);
  }
  async close(): Promise<void> {
    return this.connection.$pool.end();
  }
}
