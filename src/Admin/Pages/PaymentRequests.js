import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.PaymentRequests.title,
    dataSource: SchemaK.PaymentRequests.dataSource,
    actionUrl: SchemaK.PaymentRequests.actionUrl,
    columns:SchemaK.PaymentRequests.columns,
    numberFields:SchemaK.PaymentRequests.numberFields,
    dateFields:SchemaK.PaymentRequests.dateFields,

}
function PaymentRequests(){
  return(
      <>
        <h1 className='pageTitle' >  PaymentRequests</h1>
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
export default PaymentRequests