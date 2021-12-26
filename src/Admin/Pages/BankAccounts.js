import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.bankAccounts.title,
    dataSource: SchemaK.bankAccounts.dataSource,
    actionUrl: SchemaK.bankAccounts.actionUrl,
    columns:SchemaK.bankAccounts.columns,
    numberFields:SchemaK.bankAccounts.numberFields,
    dateFields:SchemaK.bankAccounts.dateFields,

}
function BankAccounts(){
  return(
      <>
        <h1 className='pageTitle' >BankAccounts</h1>
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
export default BankAccounts