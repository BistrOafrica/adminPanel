import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.Disputes.title,
    dataSource: SchemaK.Disputes.dataSource,
    actionUrl: SchemaK.Disputes.actionUrl,
    columns:SchemaK.Disputes.columns,
    numberFields:SchemaK.Disputes.numberFields,
    dateFields:SchemaK.Disputes.dateFields,

}
function Disputes(){
  return(
      <>
        <h1 className='pageTitle' >  Disputes</h1>
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
export default Disputes