import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.pettyCashVoucher.title,
    dataSource: SchemaK.pettyCashVoucher.dataSource,
    actionUrl: SchemaK.pettyCashVoucher.actionUrl,
    columns:SchemaK.pettyCashVoucher.columns,
    numberFields:SchemaK.pettyCashVoucher.numberFields,
    dateFields:SchemaK.pettyCashVoucher.dateFields,

}
function PettyCashVouchers(){
  return(
      <>
        <h1 className='pageTitle' >  PettyCashVouchers</h1>
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
export default PettyCashVouchers