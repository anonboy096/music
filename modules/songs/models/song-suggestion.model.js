import { z } from 'zod';
import { SongAPIResponseModel } from './song.model.js';
const SongStationAPIResponseModel = z.record(z.string(), z.object({
    song: SongAPIResponseModel
}));
export const SongSuggestionAPIResponseModel = z
    .object({
    stationid: z.string()
})
    .and(SongStationAPIResponseModel);
