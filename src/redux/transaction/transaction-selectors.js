export const getCurrentDate = ({ transactions }) => transactions.currentDate;
export const getBalance = ({ transactions }) => transactions.user?.balance;

export const transactionsByMonth = ({ transactions }) => transactions.user?.transitions;
export const transactionsExpenses = ({ transactions }) => transactions.user?.transitions;
export const transactionsIncome = ({ transactions }) => transactions.user?.transitions;

export const summaryBalaceByMonth = ({ transactions }) => transactions.user?.monthlySum;
