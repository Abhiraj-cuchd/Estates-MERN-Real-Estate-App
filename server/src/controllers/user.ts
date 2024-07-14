import User from "../models/user";
import log from "../utils/logger";

export const createUser = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  profileImg: string
) => {
  try {
    const user = await User.create(firstName, lastName, email, password);
    return user
  } catch (error: any) {
    log.error(error.message);
    throw Error;
  }
};
