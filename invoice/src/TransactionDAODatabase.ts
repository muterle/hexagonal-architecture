import pgPromise from "pg-promise";
import TransactionDAO from "./TransactionDao";
import Connection from "./Connection";

export default class TransactionDAODatabase implements TransactionDAO {
  constructor(readonly connection: Connection) {}

  async getTransactions(cardNumber: string, month: number, year: number): Promise<any> {
    const transactions = await this.connection.query(
      "SELECT * FROM card_transaction WHERE card_number = $1 AND EXTRACT(MONTH FROM date) = $2 AND EXTRACT(YEAR FROM date) = $3",
      [cardNumber, month, year]
    );

    return transactions;
  }
}
