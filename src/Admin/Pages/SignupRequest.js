import React from 'react-dom';
import FooTable from "./FooTable";
import SchemaK from "../../SchemaK";
const params={
    title: SchemaK.signupRequest.title,
    dataSource: SchemaK.signupRequest.dataSource,
    actionUrl: SchemaK.signupRequest.actionUrl,
    columns:SchemaK.signupRequest.columns,
    numberFields:SchemaK.signupRequest.numberFields,
    dateFields:SchemaK.signupRequest.dateFields,

}

function SignupRequest(){
  return(
      <>
        <h1 className='pageTitle' >  SignupRequest</h1>
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
export default SignupRequest