/**
 * Write a function that calculates the pending balance on your account.
 *
 * Pending payments are payments that you have made but which have not
 * yet cleared. So they will soon be deducted from your current account
 * balance, but they haven't done so yet.
 *
 * This function should return your account balance once all of the
 * pending payments have been deducted.
 *
 * @param {Array} pendingPayments Array of pending payments
 * @param {Number} currentBalance How much money is currently in the account
 * @return {Number}
 */
function getPendingBalance(pendingPayments, currentBalance) {
  return 0.00;
}

/**
 * Write a function that calculates the total expenditures for this month.
 *
 * This function should return the total value of all payments that you
 * have made, including those that have cleared and those that are still
 * pending.
 *
 * @param {Array} clearedPayments Array of payments that have cleared
 * @param {Array} pendingPayments Array of payments that have not yet cleared
 * @return {Number}
 */
function getTotalExpenditures(clearedPayments, pendingPayments) {
  return 0.00;
}

/**
 * Write a function that calculates the remaining budget after setting aside
 * some money for savings.
 *
 * For example, if you are saving £25 each month, you will need to deduct
 * that from your remaining budget. Your remaining budget should also take
 * into account payments that have not yet cleared.
 *
 * @param {Number} amountToSave How much money you will save each month
 * @param {Number} currentBalance How much money is currently in the account
 * @param {Array} pendingPayments Array of payments that have not yet cleared
 * @return {Number}
 */
function getRemainingBudget(amountToSave, currentBalance, pendingPayments) {
  return 0.00;
}

/**
 * Write a function that finds the largest expense this month.
 *
 * The largest expense can come from any payment that you have made.
 *
 * @param {Array} clearedPayments Array of payments that have cleared
 * @param {Array} pendingPayments Array of payments that have not yet cleared
 * @return {Number}
 */
function getLargestExpense(clearedPayments, pendingPayments) {
  return 0.00
}

/**
 * Write a function that calculates the account balance at the start
 * of the month.
 *
 * The account balance at the start of this month will be whatever the
 * balance was before the cleared payments were deducted.
 *
 * @param {Array} clearedPayments Array of payments that have cleared
 * @param {Number} currentBalance How much money is currently in the account
 * @return {Number}
 */
function getStartingBalance(clearedPayments, currentBalance) {
  return 0.00;
}

/**
 * Do not edit below this line
 */
const exampleClearedPayments = [21.23, 19.01, 12.21, 56.92, 72, 2.23];
const examplePendingPayments = [72.2, 41.21];
const exampleCurrentBalance = 292.12;
console.log('This month you started with £' + getStartingBalance(exampleClearedPayments, exampleCurrentBalance).toFixed(2) + '.');
console.log('You have ' + exampleClearedPayments.length + ' payments that have cleared that total £' + exampleClearedPayments.reduce((sum, a) => sum + a).toFixed(2) + '.');
console.log('You have ' + examplePendingPayments.length + ' payments that are still pending that total £' + examplePendingPayments.reduce((sum, a) => sum + a).toFixed(2) + '.');
console.log('You have spent a total of £' + getTotalExpenditures(exampleClearedPayments, examplePendingPayments).toFixed(2) + '.');
console.log('Your balance, including pending payments, is £' + getPendingBalance(examplePendingPayments, exampleCurrentBalance).toFixed(2) + '.');
console.log('If you put £50 into savings, your remaining budget for this month is £' + getRemainingBudget(50, exampleCurrentBalance, examplePendingPayments).toFixed(2) + '.');
console.log('Your largest expense this month was £' + getLargestExpense(exampleClearedPayments, examplePendingPayments).toFixed(2) + '.');