import axios from "axios";

const BACKEND_URL =
  "https://react-native-course-8e8d0-default-rtdb.firebaseio.com/";

export async function storeExpense(expenseData) {
  try {
    const response = await axios.post(
      BACKEND_URL + "expenses.json",
      expenseData
    );

    const id = response.data.name;
    return id;
  } catch (error) {
    console.error("Failed to store expense:", error);
    throw error;
  }
}

export async function fetchExpenses() {
  try {
    const response = await axios.get(BACKEND_URL + "expenses.json");

    const expenses = [];

    for (const key in response.data) {
      const expenseObj = {
        id: key,
        amount: response.data[key].amount,
        date: new Date(response.data[key].date),
        description: response.data[key].description,
      };
      expenses.push(expenseObj);
    }

    return expenses;
  } catch (error) {
    console.error("Failed to fetch expenses:", error);
    throw error;
  }
}

export async function updateExpense(id, expenseData) {
  try {
    const response = await axios.put(
      BACKEND_URL + `/expenses/${id}.json`,
      expenseData
    );
    return response.data;
  } catch (error) {
    console.error("Failed to update expense:", error);
    throw error;
  }
}

export async function deleteExpense(id) {
  try {
    await axios.delete(BACKEND_URL + `/expenses/${id}.json`);
  } catch (error) {
    console.error("Failed to delete expense:", error);
    throw error;
  }
}
