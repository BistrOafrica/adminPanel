
class city{

    constructor(name,lat,lng , online, ongoing, accepted, cancelled, arrived, commissions){
        this.lat=lat;
        this.lng=lng;
        this.name=name;
        this.online=online;
        this.ongoing=ongoing;
        this.accepted=accepted;
        this.cancelled=cancelled;
        this.arrived=arrived;
        this.commissions=commissions;
    }

    getCityDetails(){
        
        return(
            {
                lat:this.lat,
                lng:this.lng,
                online:this.online,
                ongoing:this.ongoing,
                accepted:this.accepted,
                cancelled:this.cancelled,
                arrived:this.arrived,
                commissions:this.commissions,
            }

            
        )
    }
}
export default city;