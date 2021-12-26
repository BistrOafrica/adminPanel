import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.merchantInvoices.title,
    dataSource: SchemaK.merchantInvoices.dataSource,
    actionUrl: SchemaK.merchantInvoices.actionUrl,
    columns:SchemaK.merchantInvoices.columns,
    numberFields:SchemaK.merchantInvoices.numberFields,
    dateFields:SchemaK.merchantInvoices.dateFields,

}
function MerchantInvoices(){
  return(
      <>
        <h1 className='pageTitle' >  MerchantInvoices</h1>
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
export default MerchantInvoices