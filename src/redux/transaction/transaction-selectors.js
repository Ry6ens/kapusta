export const getTransactionsAllByDate = ({ transactions }) => transactions.daySummary;
export const getCurrentDate = ({ transactions }) => transactions.currentDate;
export const transactionsByMonth = ({ transactions }) => transactions.user?.transitions;
