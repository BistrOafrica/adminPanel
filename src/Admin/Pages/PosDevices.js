import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.PosDevices.title,
    dataSource: SchemaK.PosDevices.dataSource,
    actionUrl: SchemaK.PosDevices.actionUrl,
    columns:SchemaK.PosDevices.columns,
    numberFields:SchemaK.PosDevices.numberFields,
    dateFields:SchemaK.PosDevices.dateFields,

}
function PosDevices(){
  return(
      <>
        <h1 className='pageTitle' >  PosDevices</h1>
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
export default PosDevices