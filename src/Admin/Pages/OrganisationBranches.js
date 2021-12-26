import React from 'react-dom';
import SchemaK from "../../SchemaK";
import FooTable from "./FooTable";

const params={
    title: SchemaK.OrganisationBranches.title,
    dataSource: SchemaK.OrganisationBranches.dataSource,
    actionUrl: SchemaK.OrganisationBranches.actionUrl,
    columns:SchemaK.OrganisationBranches.columns,
    numberFields:SchemaK.OrganisationBranches.numberFields,
    dateFields:SchemaK.OrganisationBranches.dateFields,

}
function OrganizationBranches(){
  return(
      <>
        <h1 className='pageTitle' >  OrganizationBranches</h1>
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
export default OrganizationBranches