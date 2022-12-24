import { getData } from "../utils";
import { BaseUrl } from "./Constraint";

export const getLogin = async (email, password) => {
  const auth = getData("user").auth_token;
  try {
    const responses = await fetch(`${BaseUrl}/auth/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${auth}`,
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    return responses.json();
  } catch (error) {}
};
export const getTodos = async () => {
  const auth = getData("user").auth_token;
  try {
    const responses = await fetch(`${BaseUrl}/todos`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${auth}`,
      },
    });
    return responses.json();
  } catch (error) {}
};
export const createTodos = async (title, description) => {
  const auth = getData("user").auth_token;
  const responses = await fetch(`${BaseUrl}/todos`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${auth}`,
    },
    body: JSON.stringify({
      title: title,
      description: description,
    }),
  });
  return responses.json();
};

export const getItems = async (id) => {
  const auth = getData("user").auth_token;
  const responses = await fetch(`${BaseUrl}/todos/${id}/items`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${auth}`,
    },
  });
  return responses.json();
};

export const createItems = async (id, task, progress) => {
  const auth = getData("user").auth_token;
  // console.log(id, task, progress);
  const responses = await fetch(`${BaseUrl}/todos/${id}/items`, {
    method: "POSt",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${auth}`,
    },
    body: JSON.stringify({
      name: task,
      progress_percentage: progress,
    }),
  });

  return responses.json();
};
export const editItems = async (id, task, progress, idTodo) => {
  const auth = getData("user").auth_token;
  const responses = await fetch(`${BaseUrl}/todos/${idTodo}/items/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${auth}`,
    },
    body: JSON.stringify({
      target_todo_id: idTodo,
      name: task,
      progress_percentage: progress,
    }),
  });
  return responses.json();
};
export const deleteItems = async (id, idTodo) => {
  const auth = getData("user").auth_token;
  const responses = await fetch(`${BaseUrl}/todos/${idTodo}/items/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${auth}`,
    },
  });
  return responses;
};
export const editItemsMoved = async (id, task, progress, idTodo, newIdTodo) => {
  const auth = getData("user").auth_token;
  const responses = await fetch(`${BaseUrl}/todos/${idTodo}/items/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${auth}`,
    },
    body: JSON.stringify({
      target_todo_id: newIdTodo,
      name: task,
      progress_percentage: progress,
    }),
  });
  return responses.json();
};
