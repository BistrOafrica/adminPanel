import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.SMSModels.title,
    dataSource: SchemaK.SMSModels.dataSource,
    actionUrl: SchemaK.SMSModels.actionUrl,
    columns:SchemaK.SMSModels.columns,
    numberFields:SchemaK.SMSModels.numberFields,
    dateFields:SchemaK.SMSModels.dateFields,

}
function SMSModels(){
  return(
      <>
        <h1 className='pageTitle' >  SMSModels</h1>
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
export default SMSModels