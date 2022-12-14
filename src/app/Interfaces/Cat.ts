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

export interface catInfo{
    id: string
    name: string
    temperament: string
    origin: string
    country_code: string
    description: string
    adaptability: number
    affection_level: number
    child_friendly: number
    social_needs:number
    health_issues: number
    intelligence: number
    stranger_friendly: number
}

export interface catImage{
    url:string
}