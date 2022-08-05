export interface Breeds{
    id: string
    name: string
    origin:string
    country_code:string
    description: string
    image:{
        id:string
        url:string
    }
}

export interface postFavorites{
    image_id: string
    sub_id:string
}