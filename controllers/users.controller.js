const express = require("express");

const getUser = (request, response) => {
  response.status(200).send("Single Users");
};

const getUsers = (request, response) => {
  response.status(200).send("All users");
};
const updateUser = (request, response) => {
  response.status(200).send("User Updated");
};

const createUser = (request, response) => {
  response.status(200).send("User Created");
};

const deleteUser = (request, response) => {
  response.status(200).send("User deleted");
};

module.exports = { getUser, createUser, deleteUser, getUsers, updateUser };
