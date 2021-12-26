import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.banks.title,
    dataSource: SchemaK.banks.dataSource,
    actionUrl: SchemaK.banks.actionUrl,
    columns:SchemaK.banks.columns,
    numberFields:SchemaK.banks.numberFields,
    dateFields:SchemaK.banks.dateFields,

}
function Banks(){
  return(
      <>
        <h1 className='pageTitle' >Banks</h1>
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
export default Banks