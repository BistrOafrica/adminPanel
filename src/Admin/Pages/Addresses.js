import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.Addresses.title,
    dataSource: SchemaK.Addresses.dataSource,
    actionUrl: SchemaK.Addresses.actionUrl,
    columns:SchemaK.Addresses.columns,
    numberFields:SchemaK.Addresses.numberFields,
    dateFields:SchemaK.Addresses.dateFields,

}
function Adresses(){
  return(
      <>
        <h1 className='pageTitle' >Addresses </h1>
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
export default Adresses