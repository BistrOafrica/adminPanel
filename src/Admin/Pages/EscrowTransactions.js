import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.escrowTransactions.title,
    dataSource: SchemaK.escrowTransactions.dataSource,
    actionUrl: SchemaK.escrowTransactions.actionUrl,
    columns:SchemaK.escrowTransactions.columns,
    numberFields:SchemaK.escrowTransactions.numberFields,
    dateFields:SchemaK.escrowTransactions.dateFields,

}
function EscrowTransactions(){
  return(
      <>
        <h1 className='pageTitle' >  EscrowTransactions</h1>
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
export default EscrowTransactions