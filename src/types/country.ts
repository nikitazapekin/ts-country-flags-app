import { Region } from "./regions"
type Currency = {
    code: string,
    name: string,
    symbol: string, 
}
type Language ={
iso639_1: string,
iso639_2: string,
name: string, 
nativaName: string
}
export type Country ={
    name: string,
    nativeName: string, 
    flag: string,
    flags: 
        {
            png: string,
            svg: string
        },

    
    region:  Region,
    population: number,
    subregion:  string,
    capital: string,
    topLevelDomain: string[],
    borders: string[],
    currencies: Currency[],
    languages: Language[]
}
type Info ={
    title: string, 
    describtion: string
}
export type CountryInfo ={
    img: string,
    name: string, 
    info: Info[],

}