import Invoice from "../Invoice";

test("Deve criar uma fatura", async () => {
  const transactions = [
    { amount: 100, currency: "BRL" },
    { amount: 1000, currency: "BRL" },
    { amount: 600, currency: "USD" },
  ];

  const currencies = {
    usd: 2,
  };

  const invoice = new Invoice(transactions, currencies);
  expect(invoice.getTotal()).toBe(2300);
});
