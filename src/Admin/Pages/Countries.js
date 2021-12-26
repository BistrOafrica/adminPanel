import React from 'react-dom';
import FooTable from "./FooTable";
import SchemaK from "../../SchemaK";

const params={
    title: SchemaK.list_countries.title,
    dataSource: SchemaK.list_countries.dataSource,
    actionUrl: SchemaK.list_countries.actionUrl,
    columns:SchemaK.list_countries.columns,
    numberFields:SchemaK.list_countries.numberFields,
    dateFields:SchemaK.list_countries.dateFields,
    
}

function list_countries(){
    return(

        <>
            <h1 className='pageTitle' >  Countries</h1>
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
export default list_countries