import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.FileStorages.title,
    dataSource: SchemaK.FileStorages.dataSource,
    actionUrl: SchemaK.FileStorages.actionUrl,
    columns:SchemaK.FileStorages.columns,
    numberFields:SchemaK.FileStorages.numberFields,
    dateFields:SchemaK.FileStorages.dateFields,

}
function FileStorage(){
  return(
      <>
        <h1 className='pageTitle' >  FileStorage</h1>
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
export default FileStorage