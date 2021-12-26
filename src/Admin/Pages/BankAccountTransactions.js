import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.bankAccountTransactions.title,
    dataSource: SchemaK.bankAccountTransactions.dataSource,
    actionUrl: SchemaK.bankAccountTransactions.actionUrl,
    columns:SchemaK.bankAccountTransactions.columns,
    numberFields:SchemaK.bankAccountTransactions.numberFields,
    dateFields:SchemaK.bankAccountTransactions.dateFields,

}
function BankAccountTransactions(){
  return(
      <>
        <h1 className='pageTitle' >BankAccountTransactions</h1>
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
export default BankAccountTransactions