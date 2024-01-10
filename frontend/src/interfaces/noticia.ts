import { CardInfo } from "./cardInfo";

export interface Noticia extends CardInfo {
    titulo: string,
    enlace: string,
    categoria: string
}