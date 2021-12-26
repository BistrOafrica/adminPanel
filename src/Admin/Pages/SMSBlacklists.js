import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.SMSBlacklists.title,
    dataSource: SchemaK.SMSBlacklists.dataSource,
    actionUrl: SchemaK.SMSBlacklists.actionUrl,
    columns:SchemaK.SMSBlacklists.columns,
    numberFields:SchemaK.SMSBlacklists.numberFields,
    dateFields:SchemaK.SMSBlacklists.dateFields,

}
function SMSBlacklists(){
  return(
      <>
        <h1 className='pageTitle' >  SMSBlacklists</h1>
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
export default SMSBlacklists