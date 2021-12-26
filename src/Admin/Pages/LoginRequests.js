import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.loginRequests.title,
    dataSource: SchemaK.loginRequests.dataSource,
    actionUrl: SchemaK.loginRequests.actionUrl,
    columns:SchemaK.loginRequests.columns,
    numberFields:SchemaK.loginRequests.numberFields,
    dateFields:SchemaK.loginRequests.dateFields,

}
function LoginRequests(){
  return(
      <>
        <h1 className='pageTitle' >  LoginRequests</h1>
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
export default LoginRequests