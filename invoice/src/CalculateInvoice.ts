import TransactionDAO from "./TransactionDao";
import CurrencyGateway from "./CurrencyGateway";
import Invoice from "./Invoice";

export default class CalculateInvoice {
  constructor(readonly transactionDao: TransactionDAO, readonly currencyGateway: CurrencyGateway) {}

  async execute(cardNumber: string) {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    const currencies = await this.currencyGateway.getCurrencies();

    const transactions = await this.transactionDao.getTransactions(cardNumber, month, year);

    const invoice = new Invoice(transactions, currencies);

    const total = invoice.getTotal();

    return {
      total: total,
    };
  }
}
