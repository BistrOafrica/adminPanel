import React, {useState} from "react";
import axios from "axios";
import {loginStatus} from "../K";
import swal from 'sweetalert';
import Modali, { useModali } from 'modali';



export const activate=(x)=>{
    x.forEach(y=>{
        y.addEventListener('click', function(){
            x.forEach(z=>z.classList.remove('active'));
            this.classList.add('active');
            console.log('done')
        });
    });
}

export const Modal=(animated,title,message)=>{
    const [completeModal, toggleCompleteModal] = useModali({
        animated: animated,
        title: title,
        message: message,
        buttons: [
            <Modali.Button
                label="Cancel"
                isStyleCancel
                onClick={() => toggleCompleteModal()}
            />,
            <Modali.Button
                label="Delete"
                isStyleDestructive
                onClick={'() => deleteUserWithId(123)'}
            />,
        ],
    });
}


const sweetAlert = function(title, message, status, timer = 5000, dangerMode, isReload = false){
    swal({
        title   : title,
        text    : message,
        type    : status,
        html    : true,
        timer   : timer,
        dangerMode: dangerMode,
        allowEscapeKey  : false
    }, function () {
        swal.close();
        if(isReload)
            window.location.reload(true);
    });
    let e = (".sweet-alert").find(".swal-timer-count");
    let n = +e.text();
    setInterval(function(){
        n > 1 && e.text (--n);
    }, 1000);
};


export const Login=(x,y,payload)=>{

    (async ()=>{
        await axios.post(`${x}${y}`, payload)
            .then(response=>{
                let status=response.data.status;
                let message=response.data.message;
                if(status===loginStatus.SUCCESS){
                    localStorage.setItem('AuthToken', response.data.token);
                    localStorage.setItem('phone', response.data.phone);
                    localStorage.setItem('userName', response.data.name);
                    localStorage.setItem('email', response.data.email);
                    localStorage.setItem('userId', response.data.id);
                    localStorage.setItem('initialTime', Date.now().toString());
                    window.location.href = '/dashboard';
                    swal(`Welcome! ${message}`);
                }
                else if(status===loginStatus.FAILED){

                    swal({
                        title: "Oops!",
                        text: `Sorry,  ${message}`,
                        icon: "warning",
                        timer:10000,
                        dangerMode: true,
                    });
                    Modal(true,`Ooops!`,`Sorry,  ${message}`,);
                    window.location.href = '/login';
                    localStorage.clear();

                }
                console.log(response.data.status)
            }).catch(err=>{
                console.log(err)
            })
    })();

}