import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.StaffMembers.title,
    dataSource: SchemaK.StaffMembers.dataSource,
    actionUrl: SchemaK.StaffMembers.actionUrl,
    columns:SchemaK.StaffMembers.columns,
    numberFields:SchemaK.StaffMembers.numberFields,
    dateFields:SchemaK.StaffMembers.dateFields,

}
function StaffMembers(){
  return(
      <>
        <h1 className='pageTitle' >  StaffMembers</h1>
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
export default StaffMembers