import { DocumentData } from "firebase/firestore"

export interface CharactersInterface {
    name: string,
    org: string,
    img: string,
    description: string,
    alias: string,
    status: string
}

export interface DataInterface {
    data: DocumentData,
    id:string
}

export interface RealmsUrl {
    url: string
}