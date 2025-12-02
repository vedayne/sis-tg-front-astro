import { signInAction } from "./auth";
import { getDefensesAction } from "./defense";

export const server = {
  // auth
  signInAction,
  // defense
  getDefensesAction,
}