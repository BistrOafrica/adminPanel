import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.codeGenerators.title,
    dataSource: SchemaK.codeGenerators.dataSource,
    actionUrl: SchemaK.codeGenerators.actionUrl,
    columns:SchemaK.codeGenerators.columns,
    numberFields:SchemaK.codeGenerators.numberFields,
    dateFields:SchemaK.codeGenerators.dateFields,

}
function CodeGenerators(){
  return(
      <>
        <h1 className='pageTitle' >  CodeGenerators</h1>
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
export default CodeGenerators