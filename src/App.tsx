import React, {useCallback, useEffect, useState} from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import NavBar from "./Components/Nav-Bar/Nav-Bar";
import Links from "./Components/Links/Links";
import Home from "./Containers/Home/Home";
import {Quote, QuotesList} from "./type";
import axiosApi from "./axiosApi";

import Edit from "./Containers/Edit/Edit";
import AddQuote from "./Containers/Add-Quote/Add-Quote";



function App() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const fetchQuotes = useCallback(async () => {
    try {
      setLoading(true)
      const quotesResponse = await axiosApi.get<QuotesList>(`/quotes.json`);
      const quotes = Object.keys(quotesResponse.data).map(key =>{
        const quote = quotesResponse.data[key];
        quote.id = key;
        return quote;
      });
      setQuotes(quotes);
    } finally {
      setLoading(false)
    }
  },[]);
  useEffect(()=> {
    if (location.pathname === '/'){
      void fetchQuotes();
    }
  }, [fetchQuotes, location]);

  return (
    <>
     <header>
          <NavBar/>
     </header>
      <main className='container d-flex'>
        <Links/>
        <Routes>
            <Route path={'/'} element={(
              <Home  quotesList={quotes} loading={loading}/>
            )}/>
          <Route path={'/quotes/star-wars'} element={(
            <Home quotesList={quotes} loading={loading}/>
          )}/>
          <Route path='/quotes/famous-people' element={(
            <Home  quotesList={quotes} loading={loading}/>
          )}/>
          <Route path='/quotes/humor' element={(
            <Home quotesList={quotes} loading={loading}/>
          )}/>
          <Route path='/quotes/saying' element={(
            <Home quotesList={quotes} loading={loading}/>
          )}/>
          <Route path='/quotes/motivational' element={(
            <Home  quotesList={quotes} loading={loading}/>
          )}/>
          <Route path='/add-quote' element={(
            <AddQuote/>
          )}/>
          <Route path='/edit-quote/:id' element={(
            <Edit/>
          )}/>
        </Routes>
      </main>

    </>
  );
}

export default App;
