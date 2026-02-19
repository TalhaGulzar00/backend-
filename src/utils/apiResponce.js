class ApiResponce{
    constructor (statusCode ,data,messange="success")

    {
        this.statusCode=statusCode
        this.data=data
        this.messange=messange
        this.success=statusCode<400 
    }
}
export {ApiResponce}