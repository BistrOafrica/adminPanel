import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.AuditLogs.title,
    dataSource: SchemaK.AuditLogs.dataSource,
    actionUrl: SchemaK.AuditLogs.actionUrl,
    columns:SchemaK.AuditLogs.columns,
    numberFields:SchemaK.AuditLogs.numberFields,
    dateFields:SchemaK.AuditLogs.dateFields,

}
function AuditLogs(){
  return(
      <>
        <h1 className='pageTitle' >AuditLogs</h1>
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
export default AuditLogs