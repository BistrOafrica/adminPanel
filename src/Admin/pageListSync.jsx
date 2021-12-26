import ActivityList from './Pages/ActivityList';
import DashBoard from './Pages/DashBoard';
import Banks from './Pages/Banks';
import BankAccountNumbers from './Pages/BankAccountNumbers';
import BankAccountTransactions from './Pages/BankAccountTransactions';
import ChartOfAccounts from './Pages/ChartOfAccounts';
import ChartOfAccountGroups from './Pages/ChartOfAccountGroups';
import ChequeTypes from './Pages/ChequeTypes';
import CodeGenerators from './Pages/CodeGenerators';
import GeneralLedgers from './Pages/GeneralLedgers';
import PettyCashVouchers from './Pages/PettyCashVouchers';
import PettyCashVoucherItems from './Pages/PettyCashVoucherItems';
import Countries from './Pages/Countries';
import Currencies from './Pages/Currencies';
import MobileServiceProviders from './Pages/MobileServiceProviders';
import Organisations from './Pages/Organisations';
import OrganisationBranches from './Pages/OrganisationBranches';
import Regions from './Pages/Regions';
import SMSProviders from './Pages/SMSProviders';
import SMSTemplates from './Pages/SMSTemplates';
import SystemDefaults from './Pages/SystemDefaults';
import SystemTaskTypes from './Pages/SystemTaskTypes';
import Tariffs from './Pages/Tariffs';
import TransactionCharges from './Pages/TransactionCharges';
import TransactionCategories from './Pages/TransactionCategories';
import TransactionSetups from './Pages/TransactionSetups';
import PosDevices from './Pages/PosDevices';
import Tills from './Pages/Tills';
import TillAllowedHosts from './Pages/TillAllowedHosts';
import TillClientSecrets from './Pages/TillClientSecrets';
import TillServerIPs from './Pages/TillServerIPs';
import Notifications from './Pages/Notifications';
import Disputes from './Pages/Disputes';
import Addresses from './Pages/Addresses';
import AuditLogs from './Pages/AuditLogs';
import Devices from './Pages/Devices';
import EmailBlackLists from './Pages/EmailBlackLists';
import FileStorages from './Pages/FileStorages';
import LoginModels from './Pages/LoginModels';
import PaymentRequests from './Pages/PaymentRequests';
import PhoneBlackLists from './Pages/PhoneBlackLists';
import SMSBlacklists from './Pages/SMSBlacklists';
import SMSModels from './Pages/SMSModels';
import Transactions from './Pages/Transactions';
import StaffMembers from './Pages/StaffMembers';
import Users from './Pages/Users';
import Roles from './Pages/Roles';
import CashTransactions from "./Pages/CashTransactions";
import PaymentMethods from "./Pages/PaymentMethods";
import MerchantInvoices from "./Pages/MerchantInvoices";
import MerchantTransactions from "./Pages/MerchantTransactions";
import BankAccounts from "./Pages/BankAccounts";
import EscrowTransactions from "./Pages/EscrowTransactions";
import ForexData from "./Pages/ForexData";
import StandingOrders from "./Pages/StandingOrders";
import StandingOrder from "./Pages/StandingOrder";
import MobileMoneyAccounts from "./Pages/MobileMoneyAccounts";
import UserPaymentAccounts from "./Pages/UserPaymentAccounts";
import UserTransactions from "./Pages/UserTransactions";
import Languages from "./Pages/Languages";
import LoginRequests from "./Pages/LoginRequests";
import C2BRequests from "./Pages/C2BRequests";
import SignupRequest from "./Pages/SignupRequest";
import Emails from "./Pages/Emails";
import Profile from "./Pages/Profile";

export const routes = [

  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/payment-methods",
    component: PaymentMethods
  },
  {
    path: "/merchant-transaction",
    component: MerchantTransactions
  },
  {
    path: "/merchant-invoice",
    component: MerchantInvoices
  },
  {
    path: "/bank-account",
    component: BankAccounts
  },
  {
    path: "/escrow-transaction",
    component: EscrowTransactions
  },
  {
    path: "/forex-data",
    component: ForexData
  },
  {
    path: "/standing-order-log",
    component: StandingOrders
  },
  {
    path: "/standing-orders",
    component: StandingOrder
  },
  {
    path: "/emails-list",
    component: Emails
  },

  {
    path: "/mobile-money-account",
    component: MobileMoneyAccounts
  },
  {
    path: "/user-payment-account",
    component: UserPaymentAccounts
  },
  {
    path: "/user-transaction",
    component: UserTransactions
  },
  {
    path: "/list-languages",
    component: Languages
  },
  {
    path: "/login-request",
    component: LoginRequests
  },
  {
    path: "/c2b-request",
    component: C2BRequests
  },
  {
    path: "/signup-request",
    component: SignupRequest
  },
  {
    path: "/cash-transactions",
    component: CashTransactions
  },

  {
    path: "/activities",
    component: ActivityList
  },
  {
    path: '/banks',
    component: Banks
  },
  {
    path: '/bank-account-numbers',
    component: BankAccountNumbers
  },
  {
    path: '/bank-account-transactions',
    component: BankAccountTransactions
  },
  {
    path: '/chart-of-accounts',
    component: ChartOfAccounts
  },
  {
    path: '/chart-of-accounts-groups',
    component: ChartOfAccountGroups
  },
  {
    path: '/cheque-types',
    component: ChequeTypes
  },
  {
    path: '/code-generators',
    component: CodeGenerators
  },
  {
    path: '/general-ledgers',
    component: GeneralLedgers
  },
  {
    path: '/petty-cash-vouchers',
    component: PettyCashVouchers
  },
  {
    path: '/petty-cash-voucher-items',
    component: PettyCashVoucherItems
  },
  {
    path: '/countries',
    component: Countries
  },
  {
    path: '/currencies',
    component: Currencies
  },
  {
    path: '/mobile-service-providers',
    component: MobileServiceProviders
  },
  {
    path: '/organisations',
    component: Organisations
  },
  {
    path: '/organisation-branches',
    component: OrganisationBranches
  },
  {
    path: '/regions',
    component: Regions
  },
  {
    path: '/sms-providers',
    component: SMSProviders
  },
  {
    path: '/sms-templates',
    component: SMSTemplates
  },
  {
    path: '/system-defaults',
    component: SystemDefaults
  },
  {
    path: '/system-task-types',
    component: SystemTaskTypes
  },
  {
    path: '/tariffs',
    component: Tariffs
  },
  {
    path: '/transaction-categories',
    component: TransactionCategories
  },
  {
    path: '/transaction-charges',
    component: TransactionCharges
  },
  {
    path: '/transaction-setups',
    component: TransactionSetups
    ,
  },
  {
    path: '/pos-devices',
    component: PosDevices
  },
  {
    path: '/tills',
    component: Tills
  },
  {
    path: '/till-allowed-hosts',
    component: TillAllowedHosts
  },
  {
    path: '/till-client-secrets',
    component: TillClientSecrets
  },
  {
    path: '/till-server-ips',
    component: TillServerIPs
  },
  {
    path: '/notifications',
    component: Notifications
  },
  {
    path: '/disputes',
    component: Disputes
  },
  {
    path: '/addresses',
    component: Addresses
  },
  {
    path: '/audit-logs',
    component: AuditLogs
  },
  {
    path: '/devices',
    component: Devices
  },
  {
    path: '/email-blacklists',
    component: EmailBlackLists
  },
  {
    path: '/file-storages',
    component: FileStorages
  },
  {
    path: '/login-models',
    component: LoginModels
  },
  {
    path: '/payment-requests',
    component: PaymentRequests
  },
  {
    path: '/phone-blacklists',
    component: PhoneBlackLists
  },
  {
    path: '/sms-blacklists',
    component: SMSBlacklists
  },
  {
    path: '/sms-model',
    component: SMSModels
  },
  {
    path: '/transactions',
    component: Transactions
  },
  {
    path: '/staff',
    component: StaffMembers
  },
  {
    path: '/users',
    component: Users
  },
  {
    path: '/roles',
    component: Roles
  },
  {
    path: "/",
    component: DashBoard
  },

]
