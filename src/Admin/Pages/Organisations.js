import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.Organisations.title,
    dataSource: SchemaK.Organisations.dataSource,
    actionUrl: SchemaK.Organisations.actionUrl,
    columns:SchemaK.Organisations.columns,
    numberFields:SchemaK.Organisations.numberFields,
    dateFields:SchemaK.Organisations.dateFields,

}
function Organisations(){
  return(
      <>
        <h1 className='pageTitle' >  Organisations</h1>
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
export default Organisations