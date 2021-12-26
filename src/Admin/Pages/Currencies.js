import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.currencies.title,
    dataSource: SchemaK.currencies.dataSource,
    actionUrl: SchemaK.currencies.actionUrl,
    columns:SchemaK.currencies.columns,
    numberFields:SchemaK.currencies.numberFields,
    dateFields:SchemaK.currencies.dateFields,

}
function Currencies(){
  return(
      <>
        <h1 className='pageTitle' >  Currencies</h1>
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
export default Currencies