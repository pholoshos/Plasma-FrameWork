import { createContext } from "react";
import { IUser } from "../../modal";

const initialUser:IUser = {username:'none',userId:''}
export const user = createContext(initialUser);

