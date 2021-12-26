import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.Devices.title,
    dataSource: SchemaK.Devices.dataSource,
    actionUrl: SchemaK.Devices.actionUrl,
    columns:SchemaK.Devices.columns,
    numberFields:SchemaK.Devices.numberFields,
    dateFields:SchemaK.Devices.dateFields,

}
function Devices(){
  return(
      <>
        <h1 className='pageTitle' >  Devices</h1>
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
export default Devices