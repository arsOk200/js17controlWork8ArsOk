import React, {useCallback, useEffect, useState} from 'react';
import Form from "../../Components/Form/Form";
import {useNavigate, useParams} from "react-router-dom";
import {QuoteApi} from "../../type";
import axiosApi from "../../axiosApi";

const Edit = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [quote, setQuote] = useState<QuoteApi | null>(null);

  const fetchOneQuote = useCallback(async()=> {
    try {
      const quoteResponse = await axiosApi.get<QuoteApi>('/quotes/'+id+'.json');
      setQuote(quoteResponse.data);
    } finally {

    }
  },[id] )

      useEffect(()=>{
      if(id) {
        fetchOneQuote().catch(console.error);
      }
      },[fetchOneQuote]);

  const updateQuote = async (quote:QuoteApi)=> {
    try {
      await axiosApi.put('/quotes/'+id+'.json', quote);
      navigate('/')
    }  finally {

    }
  };

  return (
    <>
      {quote && (
        <Form onSubmit={updateQuote} editQuote={quote}/>
      )}
    </>
  );
};

export default Edit;