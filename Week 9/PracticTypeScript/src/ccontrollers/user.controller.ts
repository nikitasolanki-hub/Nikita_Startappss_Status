import { Request, Response } from "express";
import { ApiResponse, CreateUserBody, User } from "../types/user.types";
import { asyncHandler } from "../utils/asyncHandler";

let users: User[] = [
  {
    id: 1,
    name: "Jayesh",
    email: "jayesh@example.com",
    role: "admin",
  },
];

type UserParams = {
  id: string;
};

export const getUsers = asyncHandler(async (
  req: Request,
  res: Response<ApiResponse<User[]>>
): Promise<void> => {
  res.status(200).json({
    success: true,
    message: "Users fetched successfully",
    data: users,
  });
});

export const getUserById = asyncHandler(async (
  req: Request<UserParams>,
  res: Response<ApiResponse<User>>
): Promise<void> => {
  const userId = Number(req.params.id);

  const user = users.find((item) => item.id === userId);

  if (!user) {
    res.status(404).json({
      success: false,
      message: "User not found",
    });
    return;
  }

  res.status(200).json({
    success: true,
    message: "User fetched successfully",
    data: user,
  });
});

export const createUser = asyncHandler(async (
  req: Request<{}, {}, CreateUserBody>,
  res: Response<ApiResponse<User>>
): Promise<void> => {
  const { name, email, role = "user" } = req.body;

  if (!name || !email) {
    res.status(400).json({
      success: false,
      message: "Name and email are required",
    });
    return;
  }

  const newUser: User = {
    id: users.length + 1,
    name,
    email,
    role,
  };

  users.push(newUser);

  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: newUser,
  });
});