import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.Users.title,
    dataSource: SchemaK.Users.dataSource,
    actionUrl: SchemaK.Users.actionUrl,
    columns:SchemaK.Users.columns,
    numberFields:SchemaK.Users.numberFields,
    dateFields:SchemaK.Users.dateFields,

}
function Users(){
  return(
      <>
        <h1 className='pageTitle' >  Users</h1>
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
export default Users