import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.Transactions.title,
    dataSource: SchemaK.Transactions.dataSource,
    actionUrl: SchemaK.Transactions.actionUrl,
    columns:SchemaK.Transactions.columns,
    numberFields:SchemaK.Transactions.numberFields,
    dateFields:SchemaK.Transactions.dateFields,

}
function Transactions(){
  return(
      <>
        <h1 className='pageTitle' >  Transactions</h1>
          <FooTable
              title={params.title}
              dataSource={params.dataSource}
              actionUrl={params.actionUrl}
              fields={params.columns}
              numberFields={params.numberFields}
              dateFields={params.dateFields}

          />
      </>
  );
}
export default Transactions