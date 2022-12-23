export const getTransactionsAllByDate = ({ transactions }) => transactions.daySummary;
export const getCurrentDate = ({ transactions }) => transactions.currentDate;
export const getTransactions = ({ transactions }) => transactions.user?.transitions;
