export const getBalance = ({ transactions }) => transactions.balance;
export const getMonthlySum = ({ transactions }) => transactions.monthlySum;
export const getTransactions = ({ transactions }) => transactions.transactions;
export const getCurrentDate = ({ transactions }) => transactions.currentDate;
export const getCalendarDate = ({ transactions }) => transactions.calendarDate;
export const getCategoryData = ({ transactions }) => transactions.chartData;

export const isMessage = ({ transactions }) => transactions.message;
export const isLoading = ({ transactions }) => transactions.loading;
