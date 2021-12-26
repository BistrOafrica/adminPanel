import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.chartOfAccountsGroups.title,
    dataSource: SchemaK.chartOfAccountsGroups.dataSource,
    actionUrl: SchemaK.chartOfAccountsGroups.actionUrl,
    columns:SchemaK.chartOfAccountsGroups.columns,
    numberFields:SchemaK.chartOfAccountsGroups.numberFields,
    dateFields:SchemaK.chartOfAccountsGroups.dateFields,

}

function ChartOfAccountGroups(){
  return(
      <>
        <h1 className='pageTitle' >  ChartOfAccountGroups</h1>
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
export default ChartOfAccountGroups