import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarTimes, faClipboardCheck, faMapMarkedAlt, faTaxi, faWifi } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import CityMenu from "./CityMenu";

const cards=[
    {
        name:'OnlineDrivers',
        class:'online',
        icon:faWifi,
        title:'online Drivers',
        type:'col-md-3',
        color:'#30a800',
        content:'367',
        path:'LiveMap/onlineDrivers',

    },
    {
        name:'ongoingTrips',
        class:'ongoing',
        icon:faTaxi,
        title:'ongoing trips',
        type:'col-md-3',
        color:'#007fe7',
        content:'54',
        path:'LiveMap/ongoingTrips',
        

    },
    {
        name:'acceptedTrips',
        class:'accepted',
        icon:faClipboardCheck,
        title:'Accepted NotFound',
        type:'col-md-3',
        color:'#008b62',
        content:'27',
        path:'LiveMap/acceptedTrips',
    },
    {
        name:'driverArrived',
        class:'arrived',
        icon:faMapMarkedAlt,
        title:'Driver Arrived',
        type:'col-md-3',
        color:'#ff8800',
        content:'13',
        path:'LiveMap/driverArrived',
        
    },
    {
        name:'cancelledTrips',
        class:'cancelled',
        icon:faCalendarTimes,
        title:'Cancelled NotFound',
        type:'col-md-3',
        color:'#DF0424',
        content:'46',
        path:'LiveMap/cancelledTrips',


    },
]

export const Overlay=()=>{
    return(

        <div className='MapStats'>
            {cards.map((card,index)=>(
                <Link key={index} to={card.path}>
                    <div className={card.type +' '+ card.class} style={{color:card.color,  borderLeft:'9px solid'+card.color,}}>
                    <div style={{paddingRight:'20px', borderRight:'1px solid #f0f0f0'}} className="faw"><FontAwesomeIcon className='cardIcon' icon={card.icon}/></div>

                    <div className='contentBox'>
                        <p className='cardContent'>{card.content}</p>
                        <p className='title'>{card.title}</p>
                    </div>
                </div>
                </Link>
            ))}
            <CityMenu />
        </div>
    );
}