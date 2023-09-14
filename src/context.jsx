import React, {useState, useContext, useEffect} from 'react';
import { useCallback } from 'react';

const URL = "https://openlibrary.org/search.json?title=the+lord+of+the+rings";
const Appcontext = React.createContext();

const AppProvider = ({children})=>{
   const [searchBook, setSearchBook] = useState("the shiva triology");
   const [books, setBooks] = useState([]);
   const [loading, setLoading]= useState(true);
   const [result, setResult] = useState("");


   const fetchBooks = useCallback(async()=>{
      setLoading(true);
      try {
         const response = await fetch(`${URL}${searchBook}`);
         const data = await response.json();
         console.log(data);
         const{docs} =data;
         console.log(docs);
      } catch (error) {
         console.log(error);
         setLoading(false)
      }
   },[searchBook])
   useEffect(()=>{
      fetchBooks();
   },[searchBook, fetchBooks])
   return (
      <Appcontext.Provider value = {{
         loading, books, setSearchBook, result, setResult,
      }}>
         {children}
      </Appcontext.Provider>
   )
   }
   export const useGlobalContext = () =>{
      return useContext(Appcontext)
   }
   
}








