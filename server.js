import { AlbumController, ArtistController, SearchController, SongController } from './modules/index.js';
import { PlaylistController } from './modules/playlists/controllers/index.js';
import { App } from './app.js';

// Define the port number
const PORT = process.env.PORT || 3000; // Use environment variable or default to 3000

// Create an instance of the App with controllers
const app = new App([
    new SearchController(),
    new SongController(),
    new AlbumController(),
    new ArtistController(),
    new PlaylistController()
]).getApp();

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
