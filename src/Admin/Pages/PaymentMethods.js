import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.paymentMethods.title,
    dataSource: SchemaK.paymentMethods.dataSource,
    actionUrl: SchemaK.paymentMethods.actionUrl,
    columns:SchemaK.paymentMethods.columns,
    numberFields:SchemaK.paymentMethods.numberFields,
    dateFields:SchemaK.paymentMethods.dateFields,

}
function PaymentMethods(){
  return(
      <>
        <h1 className='pageTitle' >  PaymentMethods</h1>
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
export default PaymentMethods