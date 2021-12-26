import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.generalLedgers.title,
    dataSource: SchemaK.generalLedgers.dataSource,
    actionUrl: SchemaK.generalLedgers.actionUrl,
    columns:SchemaK.generalLedgers.columns,
    numberFields:SchemaK.generalLedgers.numberFields,
    dateFields:SchemaK.generalLedgers.dateFields,

}
function GeneralLedgers(){
  return(
      <>
        <h1 className='pageTitle' >  GeneralLedgers</h1>
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
export default GeneralLedgers