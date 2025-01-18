import { AlbumController, ArtistController, SearchController, SongController } from './modules/index.js';
import { PlaylistController } from './modules/playlists/controllers/index.js';
import { App } from './app.js';
const app = new App([
    new SearchController(),
    new SongController(),
    new AlbumController(),
    new ArtistController(),
    new PlaylistController()
]).getApp();
export default app;
