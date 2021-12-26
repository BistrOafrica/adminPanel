import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.Tariffs.title,
    dataSource: SchemaK.Tariffs.dataSource,
    actionUrl: SchemaK.Tariffs.actionUrl,
    columns:SchemaK.Tariffs.columns,
    numberFields:SchemaK.Tariffs.numberFields,
    dateFields:SchemaK.Tariffs.dateFields,

}
function Tariffs(){
  return(
      <>
        <h1 className='pageTitle' >  Tariffs</h1>
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
export default Tariffs