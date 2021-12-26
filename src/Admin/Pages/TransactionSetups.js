import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.TransactionSetups.title,
    dataSource: SchemaK.TransactionSetups.dataSource,
    actionUrl: SchemaK.TransactionSetups.actionUrl,
    columns:SchemaK.TransactionSetups.columns,
    numberFields:SchemaK.TransactionSetups.numberFields,
    dateFields:SchemaK.TransactionSetups.dateFields,

}
function TransactionSetups(){
  return(
      <>
        <h1 className='pageTitle' >  TransactionSetups</h1>
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
export default TransactionSetups