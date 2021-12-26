import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.SystemTaskTypes.title,
    dataSource: SchemaK.SystemTaskTypes.dataSource,
    actionUrl: SchemaK.SystemTaskTypes.actionUrl,
    columns:SchemaK.SystemTaskTypes.columns,
    numberFields:SchemaK.SystemTaskTypes.numberFields,
    dateFields:SchemaK.SystemTaskTypes.dateFields,

}
function SystemTaskTypes(){
  return(
      <>
        <h1 className='pageTitle' >  SystemTaskTypes</h1>
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
export default SystemTaskTypes