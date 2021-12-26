import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.userTransactions.title,
    dataSource: SchemaK.userTransactions.dataSource,
    actionUrl: SchemaK.userTransactions.actionUrl,
    columns:SchemaK.userTransactions.columns,
    numberFields:SchemaK.userTransactions.numberFields,
    dateFields:SchemaK.userTransactions.dateFields,

}
function UserTransactions(){
  return(
      <>
        <h1 className='pageTitle' >UserTransactions</h1>
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
export default UserTransactions