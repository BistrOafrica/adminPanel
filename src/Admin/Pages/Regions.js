import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.Regions.title,
    dataSource: SchemaK.Regions.dataSource,
    actionUrl: SchemaK.Regions.actionUrl,
    columns:SchemaK.Regions.columns,
    numberFields:SchemaK.Regions.numberFields,
    dateFields:SchemaK.Regions.dateFields,

}
function Regions(){
  return(
      <>
        <h1 className='pageTitle' >  Regions</h1>
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
export default Regions