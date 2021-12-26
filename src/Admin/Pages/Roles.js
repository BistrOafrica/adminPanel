import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.Roles.title,
    dataSource: SchemaK.Roles.dataSource,
    actionUrl: SchemaK.Roles.actionUrl,
    columns:SchemaK.Roles.columns,
    numberFields:SchemaK.Roles.numberFields,
    dateFields:SchemaK.Roles.dateFields,

}
function Roles(){
  return(
      <>
        <h1 className='pageTitle' >  Roles</h1>
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
export default Roles