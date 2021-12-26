import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.TransactionCharges.title,
    dataSource: SchemaK.TransactionCharges.dataSource,
    actionUrl: SchemaK.TransactionCharges.actionUrl,
    columns:SchemaK.TransactionCharges.columns,
    numberFields:SchemaK.TransactionCharges.numberFields,
    dateFields:SchemaK.TransactionCharges.dateFields,

}
function TransactionCharges(){
  return(
      <>
        <h1 className='pageTitle' >  TransactionCharges</h1>
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
export default TransactionCharges