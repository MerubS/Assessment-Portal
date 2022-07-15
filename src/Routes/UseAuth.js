import { resolve } from "path-browserify";
import { createContext , useState , useContext } from "react";
const authContext = createContext();

export function useAuth({ children }) {
  const [authed, setAuthed] = useState(false);
  const login = () => {
    setAuthed(true);
  };
  const logout = () => {
    setAuthed(false);
  };
  return <authContext.Provider value={authed}>{children}</authContext.Provider>;
}