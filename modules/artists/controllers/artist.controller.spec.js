import { ArtistModel } from '../../artists/models/index.js';
import { ArtistController } from '../../index.js';
import { beforeAll, describe, expect, it } from 'vitest';
describe('ArtistController', () => {
    let artistController;
    beforeAll(() => {
        artistController = new ArtistController();
        artistController.initRoutes();
    });
    it('retrieve artist by link', async () => {
        const response = await artistController.controller.request('/artists?link=https://www.jiosaavn.com/artist/dua-lipa-songs/r-OWIKgpX2I_');
        const { data } = (await response.json());
        expect(() => ArtistModel.parse(data)).not.toThrow();
    });
    // it('retrieve artist by ID', async () => {
    //   const response = await artistController.controller.request('/artists/1274170')
    //   const { data } = (await response.json()) as { data: z.infer<typeof ArtistModel> }
    //   expect(() => ArtistModel.parse(data)).not.toThrow()
    // })
    // it(`retrieve artist's songs`, async () => {
    //   const response = await artistController.controller.request(`/artists/1274170/songs`)
    //   const { data } = (await response.json()) as { data: z.infer<typeof ArtistSongModel> }
    //   expect(() => ArtistSongModel.parse(data)).not.toThrow()
    // })
    // it(`retrieve artist's albums`, async () => {
    //   const response = await artistController.controller.request(`/artists/1274170/albums`)
    //   const { data } = (await response.json()) as { data: z.infer<typeof ArtistAlbumModel> }
    //   expect(() => ArtistAlbumModel.parse(data)).not.toThrow()
    // })
});
