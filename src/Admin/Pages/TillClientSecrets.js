import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";
const params={
    title: SchemaK.TillClientSecrets.title,
    dataSource: SchemaK.TillClientSecrets.dataSource,
    actionUrl: SchemaK.TillClientSecrets.actionUrl,
    columns:SchemaK.TillClientSecrets.columns,
    numberFields:SchemaK.TillClientSecrets.numberFields,
    dateFields:SchemaK.TillClientSecrets.dateFields,

}
function TillClientSecrets(){
  return(
      <>
        <h1 className='pageTitle' >  TillClientSecrets</h1>
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
export default TillClientSecrets