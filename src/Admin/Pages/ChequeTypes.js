import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.chequeTypes.title,
    dataSource: SchemaK.chequeTypes.dataSource,
    actionUrl: SchemaK.chequeTypes.actionUrl,
    columns:SchemaK.chequeTypes.columns,
    numberFields:SchemaK.chequeTypes.numberFields,
    dateFields:SchemaK.chequeTypes.dateFields,

}
function ChequeTypes(){
  return(
      <>
        <h1 className='pageTitle' >  ChequeTypes</h1>
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
export default ChequeTypes