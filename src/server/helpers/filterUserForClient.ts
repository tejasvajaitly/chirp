import type { User } from "@clerk/nextjs/dist/api";

export const filterUserForClient = (user: User) => {
  return {
    id: user.id,
    username: user.username
      ? user.username
      : user.firstName
      ? user.firstName
      : "ghost user",
    profileImageUrl: user.profileImageUrl,
  };
};
