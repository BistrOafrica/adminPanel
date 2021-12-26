import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.EmailBlackLists.title,
    dataSource: SchemaK.EmailBlackLists.dataSource,
    actionUrl: SchemaK.EmailBlackLists.actionUrl,
    columns:SchemaK.EmailBlackLists.columns,
    numberFields:SchemaK.EmailBlackLists.numberFields,
    dateFields:SchemaK.EmailBlackLists.dateFields,

}
function EmailBlacklists(){
  return(
      <>
        <h1 className='pageTitle' >  EmailBlacklists</h1>
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
export default EmailBlacklists