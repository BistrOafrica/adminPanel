import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.merchantTransactions.title,
    dataSource: SchemaK.merchantTransactions.dataSource,
    actionUrl: SchemaK.merchantTransactions.actionUrl,
    columns:SchemaK.merchantTransactions.columns,
    numberFields:SchemaK.merchantTransactions.numberFields,
    dateFields:SchemaK.merchantTransactions.dateFields,

}
function MerchantTransactions(){
  return(
      <>
        <h1 className='pageTitle' >  MerchantTransactions</h1>
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
export default MerchantTransactions