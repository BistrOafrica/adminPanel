import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.forexData.title,
    dataSource: SchemaK.forexData.dataSource,
    actionUrl: SchemaK.forexData.actionUrl,
    columns:SchemaK.forexData.columns,
    numberFields:SchemaK.forexData.numberFields,
    dateFields:SchemaK.forexData.dateFields,

}
function ForexData(){
  return(
      <>
        <h1 className='pageTitle' >  ForexData</h1>
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
export default ForexData