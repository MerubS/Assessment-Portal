
import { createContext , useState , useContext  } from "react";
export const authContext = createContext();
export const ContextProvider = ({ children }) => {
  const [auth, setauth] = useState(false)
  // console.log("The context value is", auth)

  // const store = {
  //   authentication: [auth, setauth]
  // }

  return <authContext.Provider value={{auth,setauth}}>{children}</authContext.Provider>
}
const Useauth = () => {
  const context = useContext(authContext);
  // console.log("Value of context",context)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default Useauth;
