export default class Invoice {
  constructor(readonly transactions: any, readonly currencies: any) {}

  getTotal(): number {
    const total = this.transactions.reduce(
      (total: number, transaction: any) =>
        total +
        parseFloat(
          transaction.currency === "USD"
            ? transaction.amount * this.currencies.usd
            : transaction.amount
        ),
      0
    );

    return total;
  }
}
