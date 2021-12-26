import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.SMSTemplates.title,
    dataSource: SchemaK.SMSTemplates.dataSource,
    actionUrl: SchemaK.SMSTemplates.actionUrl,
    columns:SchemaK.SMSTemplates.columns,
    numberFields:SchemaK.SMSTemplates.numberFields,
    dateFields:SchemaK.SMSTemplates.dateFields,

}
function SMSTemplates(){
  return(
      <>
        <h1 className='pageTitle' >  SMSTemplates</h1>
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
export default SMSTemplates