import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.PhoneBlackLists.title,
    dataSource: SchemaK.PhoneBlackLists.dataSource,
    actionUrl: SchemaK.PhoneBlackLists.actionUrl,
    columns:SchemaK.PhoneBlackLists.columns,
    numberFields:SchemaK.PhoneBlackLists.numberFields,
    dateFields:SchemaK.PhoneBlackLists.dateFields,

}
function PhoneBlacklists(){
  return(
      <>
        <h1 className='pageTitle' >  PhoneBlacklists</h1>
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
export default PhoneBlacklists