import axios from "axios";

test("Deve testar a API", async () => {
  const response = await axios.get("http://localhost:3000/cards/1234/invoice");
  const output = response.data;

  expect(output.total).toBe(1050);
});
