import React, {useCallback, useEffect, useState} from 'react';
import ItemsList from "../../Components/Items-List/Items-List";
import {Quote, QuotesList} from "../../type";
import axiosApi from "../../axiosApi";
import {useLocation} from "react-router-dom";
import Spinner from "../../Components/Spinner/Spinner";

interface Props{
  quotesList:Quote[];
  loading:boolean;
}
const Home:React.FC<Props> = ({quotesList,loading}) => {
  const location = useLocation();
  let link = location.pathname.replace("/quotes/", '');
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const fetchQuotes = useCallback(async () => {
  try {
      const quotesResponse = await axiosApi.get<QuotesList>(`/quotes.json?orderBy="category"&equalTo="${link}"`);
      const quotes = Object.keys(quotesResponse.data).map(key =>{
        const quote = quotesResponse.data[key];
        quote.id = key;
        return quote;
      });
      setQuotes(quotes);
  } finally {
  }
},[]);


useEffect(()=> {
    if(location.pathname === '/quotes/star-wars' || location.pathname ==='/quotes/motivational' || location.pathname === '/quotes/humor' || location.pathname === '/quotes/saying' || location.pathname === '/quotes/famous-people' ) {
      void fetchQuotes();
    }
}, [fetchQuotes, location]);



  if(location.pathname === '/quotes/star-wars' || location.pathname ==='/quotes/motivational' || location.pathname === '/quotes/humor' || location.pathname === '/quotes/saying' || location.pathname === '/quotes/famous-people' ) {
    return (
      <div className='w-75'>
        <h1>{link}</h1>
        {loading ? <Spinner/>: (
          <ItemsList quotes={quotes}/>
        )}
      </div>
    );
  } else {
    return (
      <div className='w-75'>
        <h1>All</h1>
        {loading ? <Spinner/>: (
          <ItemsList quotes={quotesList}/>
        )}
      </div>
    )
  }

};

export default Home;


