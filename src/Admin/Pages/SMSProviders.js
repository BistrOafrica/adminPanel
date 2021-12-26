import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.SMSProviders.title,
    dataSource: SchemaK.SMSProviders.dataSource,
    actionUrl: SchemaK.SMSProviders.actionUrl,
    columns:SchemaK.SMSProviders.columns,
    numberFields:SchemaK.SMSProviders.numberFields,
    dateFields:SchemaK.SMSProviders.dateFields,

}
function SMSProviders(){
  return(
      <>
        <h1 className='pageTitle' >  SMSProviders</h1>
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
export default SMSProviders