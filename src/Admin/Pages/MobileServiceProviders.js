import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.mobileServiceProviders.title,
    dataSource: SchemaK.mobileServiceProviders.dataSource,
    actionUrl: SchemaK.mobileServiceProviders.actionUrl,
    columns:SchemaK.mobileServiceProviders.columns,
    numberFields:SchemaK.mobileServiceProviders.numberFields,
    dateFields:SchemaK.mobileServiceProviders.dateFields,

}
function MobileServiceProviders(){
  return(
      <>
        <h1 className='pageTitle' >  MobileServiceProviders</h1>
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
export default MobileServiceProviders