import { ArtistSongModel } from '../../../artists/models/index.js';
import { GetArtistSongsUseCase } from '../../../artists/use-cases/index.js';
import { beforeAll, describe, expect, it } from 'vitest';
describe('GetArtistSongs', () => {
    let getArtistSongsUseCase;
    beforeAll(() => {
        getArtistSongsUseCase = new GetArtistSongsUseCase();
    });
    it('should get artist songs by artist id and return a list of songs', async () => {
        const songs = await getArtistSongsUseCase.execute({
            artistId: '1274170',
            page: 1,
            sortBy: 'popularity',
            sortOrder: 'asc'
        });
        expect(() => ArtistSongModel.parse(songs)).not.toThrow();
    });
});
