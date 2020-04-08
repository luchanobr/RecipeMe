export class BadRequestError extends Error {

    message : string
    data: any
    code: number
    constructor(msg: string, data : any ) {
        super(msg)
        this.message = msg
        this.data = data
        this.name = 'Bad Request'
        this.code = 400
    }
}