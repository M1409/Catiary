export interface Cat{
    url: string
    breeds:[{
        id:string,
        name: string,
        temperament: string,
        origin:string,
        description: string,
        adaptability: number,
        affection_level: number,
        child_friendly: number,
        cat_friendly: number,
        dog_friendly: number,
        energy_level: number,
        health_issues: number,
        intelligence: number,
        social_needs: number,
        stranger_friendly: number
    }]
}