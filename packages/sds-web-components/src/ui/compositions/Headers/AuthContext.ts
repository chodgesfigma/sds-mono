export type User = {
  /**
   * The full name of the user
   */
  name: string;
  /**
   * A url to a user avatar image
   */
  avatar?: string;
  /**
   * A username
   */
  username?: string;
};

export const login = (user: User) => {
  return user;
};
