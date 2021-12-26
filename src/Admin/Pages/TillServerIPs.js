import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.TillServerIPs.title,
    dataSource: SchemaK.TillServerIPs.dataSource,
    actionUrl: SchemaK.TillServerIPs.actionUrl,
    columns:SchemaK.TillServerIPs.columns,
    numberFields:SchemaK.TillServerIPs.numberFields,
    dateFields:SchemaK.TillServerIPs.dateFields,

}
function TillServerIPs(){
  return(
      <>
        <h1 className='pageTitle' >  TillServerIPs</h1>
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
export default TillServerIPs