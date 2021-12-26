import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.chartOfAccounts.title,
    dataSource: SchemaK.chartOfAccounts.dataSource,
    actionUrl: SchemaK.chartOfAccounts.actionUrl,
    columns:SchemaK.chartOfAccounts.columns,
    numberFields:SchemaK.chartOfAccounts.numberFields,
    dateFields:SchemaK.chartOfAccounts.dateFields,

}
function ChartOfAccounts(){
  return(
      <>
        <h1 className='pageTitle' >  ChartOfAccounts</h1>
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
export default ChartOfAccounts