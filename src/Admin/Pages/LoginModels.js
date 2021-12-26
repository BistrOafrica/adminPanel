import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.LoginModels.title,
    dataSource: SchemaK.LoginModels.dataSource,
    actionUrl: SchemaK.LoginModels.actionUrl,
    columns:SchemaK.LoginModels.columns,
    numberFields:SchemaK.LoginModels.numberFields,
    dateFields:SchemaK.LoginModels.dateFields,

}
function LoginModels(){
  return(
      <>
        <h1 className='pageTitle' >  LoginModels</h1>
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
export default LoginModels