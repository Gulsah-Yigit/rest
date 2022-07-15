import { v4 as uuidV4 } from "uuid";

let users = [];

export const createUser = (req, res) => {
  const user = req.body;
  const userId = uuidV4();

  const userWithId = { ...user, id: userId };
  users.push(userWithId);

  res.status(200).send(users);
};

export const getAllUsers = (req, res) => {
  res.status(200).send(users);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.status(200).send(users);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const user = users.find((user) => user.id === id);

  if (firstName) {
    user.firstName = firstName;
  }

  if (lastName) {
    user.lastName = lastName;
  }

  if (age) {
    user.age = age;
  }

  res.status(200).send(users);
};

export const getUserWithID = (req, res) => {
  const user = users.find((user) => user.id === req.params.id);
  res.status(200).send(user);
};
