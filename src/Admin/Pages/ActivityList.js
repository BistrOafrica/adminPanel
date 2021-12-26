import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.activitiesList.title,
    dataSource: SchemaK.activitiesList.dataSource,
    actionUrl: SchemaK.activitiesList.actionUrl,
    columns:SchemaK.activitiesList.columns,
    numberFields:SchemaK.activitiesList.numberFields,
    dateFields:SchemaK.activitiesList.dateFields,

}
function ActivityList(){
  return(
      <>
        <h1 className='pageTitle' >Activity List</h1>
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
export default ActivityList