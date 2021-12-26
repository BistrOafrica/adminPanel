import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.cashTransactions.title,
    dataSource: SchemaK.cashTransactions.dataSource,
    actionUrl: SchemaK.cashTransactions.actionUrl,
    columns:SchemaK.cashTransactions.columns,
    numberFields:SchemaK.cashTransactions.numberFields,
    dateFields:SchemaK.cashTransactions.dateFields,

}
function CashTransactions(){
  return(
      <>
        <h1 className='pageTitle' >  CashTransactions</h1>
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
export default CashTransactions