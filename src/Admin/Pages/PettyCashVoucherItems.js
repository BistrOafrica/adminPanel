import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.pettyCashVoucherItems.title,
    dataSource: SchemaK.pettyCashVoucherItems.dataSource,
    actionUrl: SchemaK.pettyCashVoucherItems.actionUrl,
    columns:SchemaK.pettyCashVoucherItems.columns,
    numberFields:SchemaK.pettyCashVoucherItems.numberFields,
    dateFields:SchemaK.pettyCashVoucherItems.dateFields,

}
function PettyCashVoucherItems(){
  return(
      <>
        <h1 className='pageTitle' >  PettyCashVoucherItems</h1>
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
export default PettyCashVoucherItems