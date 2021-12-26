import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.SystemDefaults.title,
    dataSource: SchemaK.SystemDefaults.dataSource,
    actionUrl: SchemaK.SystemDefaults.actionUrl,
    columns:SchemaK.SystemDefaults.columns,
    numberFields:SchemaK.SystemDefaults.numberFields,
    dateFields:SchemaK.SystemDefaults.dateFields,

}
function SystemDefaults(){
  return(
      <>
        <h1 className='pageTitle' >  SystemDefaults</h1>
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
export default SystemDefaults