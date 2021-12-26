import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.c2bRequests.title,
    dataSource: SchemaK.c2bRequests.dataSource,
    actionUrl: SchemaK.c2bRequests.actionUrl,
    columns:SchemaK.c2bRequests.columns,
    numberFields:SchemaK.c2bRequests.numberFields,
    dateFields:SchemaK.c2bRequests.dateFields,

}
function C2BRequests(){
  return(
      <>
        <h1 className='pageTitle' >C2BRequests</h1>
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
export default C2BRequests