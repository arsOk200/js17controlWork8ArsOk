import React from 'react';
import Item from "./Item/Item";
import {Quote} from "../../type";

interface Props {
  quotes:Quote[];
}

const ItemsList:React.FC<Props> = ({quotes}) => {
  return (
    <>
      {quotes.map((quote) => (
        <Item
        key={quote.id}
        quotes={quote}/>
      ))}
    </>
  );
};

export default ItemsList;