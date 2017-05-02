import { Album } from "app/models/Album";

export class Artist {
    id: number;
    name: string;
    genres: any;
    albums: Album[];
}