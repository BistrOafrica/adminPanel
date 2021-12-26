import React,{useState,useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {GridOverlay,GridToolbar,useGridApiContext,useGridState} from "@mui/x-data-grid";
import {LinearProgress} from "@mui/material";
import notfound from '../../Assets/none.svg';
import {Pagination} from "@mui/material";
import axios from "axios";


function CustomLoadingOverlay() {
    return (
        <GridOverlay>
            <div style={{ position: 'absolute', top: 0, width: '100%' }}>
                <LinearProgress />
            </div>
        </GridOverlay>
    );
}
function NoRows(){
    return(
        <GridOverlay>
            <div style={{ textAlign:'center',position: 'absolute', top: 20,bottom:0, width: '100%' }}>
                <img alt='No Rows' src={notfound} style={{width:'250px',filter: 'grayscale(100%)',margin:'30px'}}/>
                <h4>OPPS!... NO DATA FOUND</h4>
                <p>rows will Appear here when available.</p>
            </div>
        </GridOverlay>
    )
}
function CustomPagination() {
    const apiRef = useGridApiContext();
    const [state] = useGridState(apiRef);

    return (
        <Pagination
            color="primary"
            count={state.pagination.pageCount}
            page={state.pagination.page + 1}
            onChange={(event, value) => apiRef.current.setPage(value - 1)}
        />
    );
}




const FooTable =({title,dataSource,actionUrl,fields,numberFields,dateFields})=>{

    const BASE_URL='https://api.soofapay.com/qubeans/';
    const CONFIG={
        Authorization: `Bearer ${localStorage.getItem('AuthToken')}`,
        'Access-Control-Allow-Origin': '*',
        'X-AT': 'Q'
    }
    const params={
        title:title,
        dataSource:dataSource,
        actionUrl:actionUrl,
        columns:fields,
        numberFields:numberFields,
        dateFields:dateFields,
        limit: 30,
        page: 0,
        count: 0,
        sortKey: '',
        sortValue: 0,
        search: ' ',
        filterKey: '',
        filterValue: '',
        filterList: [],
        filterObj: [],
        data: [],
        responseData: []

    }
    const data={
        "limit": params.limit,
            "page": params.page,
            "sort": {
            "key": params.sortKey,
                "value": params.sortValue
        },
        "search": params.search,
            "filter": params.filterObj,
    }
    const year= new Date().getFullYear();




    const [columns, setColumns]=useState([])
    const [tableData,setTableData]=useState([]);

    useEffect(() => {
        (async ()=>{
            await axios.post(`${BASE_URL}${params.dataSource}`, data)
                .then(response=>{
                    setTableData(response.data.data)
                }).catch(err=>{
                   console.log(err)
                })

        })();
        setColumns(params.columns)
    },[]);

    const rows = tableData.reduce((acc, index) => {
        return [
            ...acc,
            ...tableData.map((row, id) => ({ 'id': `${acc.length + id}`, ...row })),
        ];
    }, []);







    return(
        <div className='dataTable' >
            <DataGrid
                columns={columns}

                rows={rows}

                pageSize={20}
                checkboxSelection
                components={{
                    LoadingOverlay: CustomLoadingOverlay,
                    NoRowsOverlay: NoRows,
                    Toolbar: GridToolbar,
                    Pagination: CustomPagination,
                }}
                sx={{
                    borderRadius:'10px',
                    fontFamily:"'Poppins', sans-serif",
                    fontSize:'1rem',
                    fontWeight:'500',
                    color:'#404040',
                    '& .MuiDataGrid-toolbarContainer':{
                        backgroundColor:'#e7e7e7',
                        justifyContent:'flex-end',
                        borderRadius:'10px 10px 0px 0px',
                    },

                    '& .MuiButton-text':{
                        padding:'10px 0',
                        color:'#0054d1',
                        fontFamily:"'Poppins', sans-serif",
                        fontWeight:'600',
                        visibility:'hidden',
                        '& .MuiButton-startIcon':{
                          marginRight:'-50px',
                        },
                        '& svg':{
                            display:"inline-block",
                            visibility:'visible',
                            margin:'auto',
                        },
                    },
                    '& .MuiDataGrid-columnHeaders':{
                        backgroundColor:'#eeeeee',
                        display:'flex',
                    },
                    '& .MuiButton-root':{
                        backgroundColor:'#0054d118',
                        margin:'10px 0',
                        '&:hover':{
                            backgroundColor:'#0054d12f'
                        }
                    },

                    '& .MuiDataGrid-columnHeaderTitle':{
                        fontWeight:'600',
                        fontSize:'1.0rem',
                        margin:'auto',
                        color:'#404040',
                        textAlign:'left',
                        textTransform:'uppercase'

                    }
                }}

            />
            <p style={{fontWeight:'600',color:'#aaaaaa',textAlign:'center',}}>Soofa QuBeans &copy; {year}</p>
        </div>
    )
}
export default FooTable