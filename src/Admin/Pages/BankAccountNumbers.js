import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.bankAccountNumbers.title,
    dataSource: SchemaK.bankAccountNumbers.dataSource,
    actionUrl: SchemaK.bankAccountNumbers.actionUrl,
    columns:SchemaK.bankAccountNumbers.columns,
    numberFields:SchemaK.bankAccountNumbers.numberFields,
    dateFields:SchemaK.bankAccountNumbers.dateFields,

}
function BankAccountNumbers(){
  return(
      <>
        <h1 className='pageTitle' >BankAccountNumbers</h1>
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
export default BankAccountNumbers