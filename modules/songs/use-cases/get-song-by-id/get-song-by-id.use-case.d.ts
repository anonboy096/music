import type { IUseCase } from '../../../../common/types/index.js';
import type { SongModel } from '../../../songs/models/index.js';
import type { z } from 'zod';
export interface GetSongByIdArgs {
    songIds: string;
    includeLyrics?: boolean;
}
export declare class GetSongByIdUseCase implements IUseCase<GetSongByIdArgs, z.infer<typeof SongModel>[]> {
    private readonly getSongLyricsUseCase;
    constructor();
    execute({ songIds, includeLyrics }: GetSongByIdArgs): Promise<{
        url: string;
        type: string;
        id: string;
        name: string;
        image: {
            url: string;
            quality: string;
        }[];
        copyright: string | null;
        language: string;
        year: string | null;
        album: {
            url: string | null;
            id: string | null;
            name: string | null;
        };
        label: string | null;
        duration: number | null;
        artists: {
            all: {
                url: string;
                type: string;
                id: string;
                name: string;
                role: string;
                image: {
                    url: string;
                    quality: string;
                }[];
            }[];
            primary: {
                url: string;
                type: string;
                id: string;
                name: string;
                role: string;
                image: {
                    url: string;
                    quality: string;
                }[];
            }[];
            featured: {
                url: string;
                type: string;
                id: string;
                name: string;
                role: string;
                image: {
                    url: string;
                    quality: string;
                }[];
            }[];
        };
        releaseDate: string | null;
        explicitContent: boolean;
        playCount: number | null;
        hasLyrics: boolean;
        lyricsId: string | null;
        downloadUrl: {
            url: string;
            quality: string;
        }[];
        lyrics?: {
            lyrics: string;
            copyright: string;
            snippet: string;
        } | undefined;
    }[]>;
}
