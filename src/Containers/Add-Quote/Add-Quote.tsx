import React from 'react';
import Form from "../../Components/Form/Form";
import {useNavigate} from "react-router-dom";
import {QuoteApi} from "../../type";
import axiosApi from "../../axiosApi";

const AddQuote = () => {
  const navigate = useNavigate();

  const createQuote = async (quote:QuoteApi)=> {
    try {
      await axiosApi.post('/quotes.json', quote);
      navigate('/');

    } finally {

    }
  }
  return (
    <>
      <Form onSubmit={createQuote}/>
    </>
  );
};

export default AddQuote;