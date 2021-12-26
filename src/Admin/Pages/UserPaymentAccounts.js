import React from 'react-dom';
import FooTable from "./FooTable";
import SchemaK from "../../SchemaK";

const params={
    title: SchemaK.userPaymentAccounts.title,
    dataSource: SchemaK.userPaymentAccounts.dataSource,
    actionUrl: SchemaK.userPaymentAccounts.actionUrl,
    columns:SchemaK.userPaymentAccounts.columns,
    numberFields:SchemaK.userPaymentAccounts.numberFields,
    dateFields:SchemaK.userPaymentAccounts.dateFields,

}
function UserPaymentAccounts(){
    return(
        <>
            <h1 className='pageTitle' >  UserPaymentAccounts</h1>
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
export default UserPaymentAccounts