// music.service.ts
import { Injectable } from '@angular/core';
import {Songs} from "./models";
import {AppComponent} from "./app.component";
import {DataService} from "./data.service";
import {map, Observable, of} from "rxjs";


@Injectable({
    providedIn: 'root',
})
export class MusicService   {

    constructor(private musicService: DataService) {
    }
    private musicArray: Observable<Songs[]> = this.musicService.getAlbums();


    getAllMusic(): Observable<Songs[]> {
        return this.musicService.getAlbums();
    }

    searchMusicByName(query: string): Observable<Songs[]> {
        return this.getAllMusic().pipe(
            map((musicList) =>
                musicList.filter((music) =>
                    music.name.toLowerCase().includes(query.toLowerCase())
                )
            )
        );
    }

    searchMusicByAuthor(query: string): Observable<Songs[]> {
        return this.getAllMusic().pipe(
            map((musicList) =>
                musicList.filter((music) =>
                    music.author.toLowerCase().includes(query.toLowerCase())
                )
            )
        );
    }

}
