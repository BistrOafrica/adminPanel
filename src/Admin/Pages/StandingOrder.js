import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.standingOrders.title,
    dataSource: SchemaK.standingOrders.dataSource,
    actionUrl: SchemaK.standingOrders.actionUrl,
    columns:SchemaK.standingOrders.columns,
    numberFields:SchemaK.standingOrders.numberFields,
    dateFields:SchemaK.standingOrders.dateFields,

}
function StandingOrder(){
  return(
      <>
        <h1 className='pageTitle' >  StandingOrder</h1>

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
export default StandingOrder