import { Imagen } from "./imagen";

export interface SeccionInformacion extends Imagen {
    posisionX?: boolean,
    subtitulo?: string,
    subdescripcion?: Array<string>,
    children?: any
}