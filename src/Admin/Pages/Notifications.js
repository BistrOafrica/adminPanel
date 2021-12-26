import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.Notifications.title,
    dataSource: SchemaK.Notifications.dataSource,
    actionUrl: SchemaK.Notifications.actionUrl,
    columns:SchemaK.Notifications.columns,
    numberFields:SchemaK.Notifications.numberFields,
    dateFields:SchemaK.Notifications.dateFields,

}
function Notifications(){
  return(
      <>
        <h1 className='pageTitle' >  Notifications</h1>
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
export default Notifications