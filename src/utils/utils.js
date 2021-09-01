export const timeDelay = async (time)=> {
    return new Promise((res,rej)=> setTimeout(()=> res() ,time) );
}