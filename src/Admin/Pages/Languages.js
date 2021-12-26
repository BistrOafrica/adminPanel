import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.listLanguages.title,
    dataSource: SchemaK.listLanguages.dataSource,
    actionUrl: SchemaK.listLanguages.actionUrl,
    columns:SchemaK.listLanguages.columns,
    numberFields:SchemaK.listLanguages.numberFields,
    dateFields:SchemaK.listLanguages.dateFields,

}
function Languages(){
  return(
      <>
        <h1 className='pageTitle' >  Languages</h1>
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
export default Languages