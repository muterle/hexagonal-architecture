import CalculateInvoice from "../CalculateInvoice";
import Clock from "../Clock";
import CurrencyGateway from "../CurrencyGateway";
import TransactionDAO from "../TransactionDao";

test("Deve calcular a fatura", async () => {
  const clock: Clock = {
    getToday(): Date {
      return new Date("2024-11-01T10:00:00");
    },
  };

  const transactionDao: TransactionDAO = {
    async getTransactions(cardNumber: string, month: number, year: number): Promise<any> {
      return [
        { amount: 100, currency: "BRL" },
        { amount: 1000, currency: "BRL" },
        { amount: 600, currency: "USD" },
      ];
    },
  };

  const currencyGateway: CurrencyGateway = {
    async getCurrencies(): Promise<any> {
      return {
        usd: 2,
      };
    },
  };

  const calculateInvoice = new CalculateInvoice(transactionDao, currencyGateway, clock);
  const { total } = await calculateInvoice.execute("1234");
  expect(total).toBe(2300);
});
