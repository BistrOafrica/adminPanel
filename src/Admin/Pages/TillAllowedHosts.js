import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.TillAllowedHosts.title,
    dataSource: SchemaK.TillAllowedHosts.dataSource,
    actionUrl: SchemaK.TillAllowedHosts.actionUrl,
    columns:SchemaK.TillAllowedHosts.columns,
    numberFields:SchemaK.TillAllowedHosts.numberFields,
    dateFields:SchemaK.TillAllowedHosts.dateFields,

}
function TillAllowedHosts(){
  return(
      <>
        <h1 className='pageTitle' >  TillAllowedHosts</h1>
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
export default TillAllowedHosts