import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.emails.title,
    dataSource: SchemaK.emails.dataSource,
    actionUrl: SchemaK.emails.actionUrl,
    columns:SchemaK.emails.columns,
    numberFields:SchemaK.emails.numberFields,
    dateFields:SchemaK.emails.dateFields,

}
function Emails(){
  return(
      <>
        <h1 className='pageTitle' >  Emails</h1>
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
export default Emails