import { ErrorPage } from "./ErrorPage";
import React  from 'react';

interface IErrorType{
    title:string
    header:string,
    desc:string
}
const Not_found : IErrorType = {
    title:'404 Not-Found',
    header:'Page Not Found',
    desc:'The Request Resource does not exist.'
}

const Not_authorized : IErrorType = {
    title:'401 Not-Authorized',
    header:'Access Denied',
    desc:'You do not have access to the url.'
}

const errors={
    404 : Not_found,
    401 : Not_authorized
}
export function Error(code:number){

    let error : IErrorType|undefined= undefined;
    switch(code){
        case 404: error=errors[404];break;
        case 401: error=errors[401];break;
    }
    if (error)
        return <ErrorPage
                    title={error.title}
                    header={error.header}
                    desc={error.desc}
                >
                </ErrorPage>
    else
        return <></>
}