export interface Breeds{
    id: string
    name: string
    temperament: string
    origin:string
    country_code:string
    description: string
    adaptability: number
    affection_level: number
    child_friendly: number
    dog_friendly: number
    energy_level: number
    health_issues: number
    intelligence: number
    social_needs: number
    stranger_friendly: number
    image:{
        id:string
        url:string
    }
}

export interface postFavorites{
    image_id: string
    sub_id:string
}