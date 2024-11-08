import CalculateInvoice from "./CalculateInvoice";
import TransactionDAODatabase from "./TransactionDAODatabase";
import CurrencyGatewayHttp from "./CurrencyGatewayHttp";
import AxiosAdapter from "./AxiosAdapter";
import PgPromiseAdapter from "./PgPromiseAdapter";
import InvoiceController from "./InvoiceController";
import ExpressAdapter from "./ExpressAdapter";
import RealClock from "./RealClock";

const clock = new RealClock();

const httpClient = new AxiosAdapter();
const baseUrl = "http://localhost:3001";
const currencyGateway = new CurrencyGatewayHttp(httpClient, baseUrl);

const connection = new PgPromiseAdapter();
const transactionDao = new TransactionDAODatabase(connection);

const calculateInvoice = new CalculateInvoice(transactionDao, currencyGateway, clock);
const httpServer = new ExpressAdapter();
new InvoiceController(httpServer, calculateInvoice);

httpServer.listen(3000);
