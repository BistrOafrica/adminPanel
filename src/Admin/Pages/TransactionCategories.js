import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.TransactionCategories.title,
    dataSource: SchemaK.TransactionCategories.dataSource,
    actionUrl: SchemaK.TransactionCategories.actionUrl,
    columns:SchemaK.TransactionCategories.columns,
    numberFields:SchemaK.TransactionCategories.numberFields,
    dateFields:SchemaK.TransactionCategories.dateFields,

}
function TransactionCategories(){
  return(
      <>
        <h1 className='pageTitle' >  TransactionCategories</h1>
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
export default TransactionCategories