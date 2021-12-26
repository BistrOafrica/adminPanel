import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.mobileMoneyAccounts.title,
    dataSource: SchemaK.mobileMoneyAccounts.dataSource,
    actionUrl: SchemaK.mobileMoneyAccounts.actionUrl,
    columns:SchemaK.mobileMoneyAccounts.columns,
    numberFields:SchemaK.mobileMoneyAccounts.numberFields,
    dateFields:SchemaK.mobileMoneyAccounts.dateFields,

}
function MobileMoneyAccounts(){
  return(
      <>
        <h1 className='pageTitle' >  MobileMoneyAccounts</h1>
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
export default MobileMoneyAccounts