import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.standingOrdersLogs.title,
    dataSource: SchemaK.standingOrdersLogs.dataSource,
    actionUrl: SchemaK.standingOrdersLogs.actionUrl,
    columns:SchemaK.standingOrdersLogs.columns,
    numberFields:SchemaK.standingOrdersLogs.numberFields,
    dateFields:SchemaK.standingOrdersLogs.dateFields,

}
function StandingOrders(){
  return(
      <>
        <h1 className='pageTitle' >  StandingOrders</h1>

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
export default StandingOrders