import { z } from 'zod';
export declare const SongSuggestionAPIResponseModel: z.ZodIntersection<z.ZodObject<{
    stationid: z.ZodString;
}, "strip", z.ZodTypeAny, {
    stationid: string;
}, {
    stationid: string;
}>, z.ZodRecord<z.ZodString, z.ZodObject<{
    song: z.ZodObject<{
        id: z.ZodString;
        title: z.ZodString;
        subtitle: z.ZodString;
        header_desc: z.ZodString;
        type: z.ZodString;
        perma_url: z.ZodString;
        image: z.ZodString;
        language: z.ZodString;
        year: z.ZodString;
        play_count: z.ZodString;
        explicit_content: z.ZodString;
        list_count: z.ZodString;
        list_type: z.ZodString;
        list: z.ZodString;
        more_info: z.ZodObject<{
            music: z.ZodString;
            album_id: z.ZodString;
            album: z.ZodString;
            label: z.ZodString;
            origin: z.ZodString;
            is_dolby_content: z.ZodBoolean;
            '320kbps': z.ZodString;
            encrypted_media_url: z.ZodString;
            encrypted_cache_url: z.ZodString;
            album_url: z.ZodString;
            duration: z.ZodString;
            rights: z.ZodObject<{
                code: z.ZodString;
                cacheable: z.ZodString;
                delete_cached_object: z.ZodString;
                reason: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                code: string;
                cacheable: string;
                delete_cached_object: string;
                reason: string;
            }, {
                code: string;
                cacheable: string;
                delete_cached_object: string;
                reason: string;
            }>;
            cache_state: z.ZodString;
            has_lyrics: z.ZodString;
            lyrics_snippet: z.ZodString;
            starred: z.ZodString;
            copyright_text: z.ZodString;
            artistMap: z.ZodObject<{
                primary_artists: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    name: z.ZodString;
                    role: z.ZodString;
                    type: z.ZodString;
                    image: z.ZodString;
                    perma_url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    type: string;
                    id: string;
                    name: string;
                    role: string;
                    image: string;
                    perma_url: string;
                }, {
                    type: string;
                    id: string;
                    name: string;
                    role: string;
                    image: string;
                    perma_url: string;
                }>, "many">;
                featured_artists: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    name: z.ZodString;
                    role: z.ZodString;
                    type: z.ZodString;
                    image: z.ZodString;
                    perma_url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    type: string;
                    id: string;
                    name: string;
                    role: string;
                    image: string;
                    perma_url: string;
                }, {
                    type: string;
                    id: string;
                    name: string;
                    role: string;
                    image: string;
                    perma_url: string;
                }>, "many">;
                artists: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    name: z.ZodString;
                    role: z.ZodString;
                    type: z.ZodString;
                    image: z.ZodString;
                    perma_url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    type: string;
                    id: string;
                    name: string;
                    role: string;
                    image: string;
                    perma_url: string;
                }, {
                    type: string;
                    id: string;
                    name: string;
                    role: string;
                    image: string;
                    perma_url: string;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                primary_artists: {
                    type: string;
                    id: string;
                    name: string;
                    role: string;
                    image: string;
                    perma_url: string;
                }[];
                featured_artists: {
                    type: string;
                    id: string;
                    name: string;
                    role: string;
                    image: string;
                    perma_url: string;
                }[];
                artists: {
                    type: string;
                    id: string;
                    name: string;
                    role: string;
                    image: string;
                    perma_url: string;
                }[];
            }, {
                primary_artists: {
                    type: string;
                    id: string;
                    name: string;
                    role: string;
                    image: string;
                    perma_url: string;
                }[];
                featured_artists: {
                    type: string;
                    id: string;
                    name: string;
                    role: string;
                    image: string;
                    perma_url: string;
                }[];
                artists: {
                    type: string;
                    id: string;
                    name: string;
                    role: string;
                    image: string;
                    perma_url: string;
                }[];
            }>;
            release_date: z.ZodString;
            label_url: z.ZodString;
            vcode: z.ZodString;
            vlink: z.ZodString;
            triller_available: z.ZodBoolean;
            request_jiotune_flag: z.ZodBoolean;
            webp: z.ZodString;
            lyrics_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            webp: string;
            music: string;
            album_id: string;
            album: string;
            label: string;
            origin: string;
            is_dolby_content: boolean;
            '320kbps': string;
            encrypted_media_url: string;
            encrypted_cache_url: string;
            album_url: string;
            duration: string;
            rights: {
                code: string;
                cacheable: string;
                delete_cached_object: string;
                reason: string;
            };
            cache_state: string;
            has_lyrics: string;
            lyrics_snippet: string;
            starred: string;
            copyright_text: string;
            artistMap: {
                primary_artists: {
                    type: string;
                    id: string;
                    name: string;
                    role: string;
                    image: string;
                    perma_url: string;
                }[];
                featured_artists: {
                    type: string;
                    id: string;
                    name: string;
                    role: string;
                    image: string;
                    perma_url: string;
                }[];
                artists: {
                    type: string;
                    id: string;
                    name: string;
                    role: string;
                    image: string;
                    perma_url: string;
                }[];
            };
            release_date: string;
            label_url: string;
            vcode: string;
            vlink: string;
            triller_available: boolean;
            request_jiotune_flag: boolean;
            lyrics_id: string;
        }, {
            webp: string;
            music: string;
            album_id: string;
            album: string;
            label: string;
            origin: string;
            is_dolby_content: boolean;
            '320kbps': string;
            encrypted_media_url: string;
            encrypted_cache_url: string;
            album_url: string;
            duration: string;
            rights: {
                code: string;
                cacheable: string;
                delete_cached_object: string;
                reason: string;
            };
            cache_state: string;
            has_lyrics: string;
            lyrics_snippet: string;
            starred: string;
            copyright_text: string;
            artistMap: {
                primary_artists: {
                    type: string;
                    id: string;
                    name: string;
                    role: string;
                    image: string;
                    perma_url: string;
                }[];
                featured_artists: {
                    type: string;
                    id: string;
                    name: string;
                    role: string;
                    image: string;
                    perma_url: string;
                }[];
                artists: {
                    type: string;
                    id: string;
                    name: string;
                    role: string;
                    image: string;
                    perma_url: string;
                }[];
            };
            release_date: string;
            label_url: string;
            vcode: string;
            vlink: string;
            triller_available: boolean;
            request_jiotune_flag: boolean;
            lyrics_id: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        type: string;
        id: string;
        image: string;
        perma_url: string;
        subtitle: string;
        header_desc: string;
        language: string;
        year: string;
        play_count: string;
        explicit_content: string;
        list_count: string;
        list_type: string;
        list: string;
        more_info: {
            webp: string;
            music: string;
            album_id: string;
            album: string;
            label: string;
            origin: string;
            is_dolby_content: boolean;
            '320kbps': string;
            encrypted_media_url: string;
            encrypted_cache_url: string;
            album_url: string;
            duration: string;
            rights: {
                code: string;
                cacheable: string;
                delete_cached_object: string;
                reason: string;
            };
            cache_state: string;
            has_lyrics: string;
            lyrics_snippet: string;
            starred: string;
            copyright_text: string;
            artistMap: {
                primary_artists: {
                    type: string;
                    id: string;
                    name: string;
                    role: string;
                    image: string;
                    perma_url: string;
                }[];
                featured_artists: {
                    type: string;
                    id: string;
                    name: string;
                    role: string;
                    image: string;
                    perma_url: string;
                }[];
                artists: {
                    type: string;
                    id: string;
                    name: string;
                    role: string;
                    image: string;
                    perma_url: string;
                }[];
            };
            release_date: string;
            label_url: string;
            vcode: string;
            vlink: string;
            triller_available: boolean;
            request_jiotune_flag: boolean;
            lyrics_id: string;
        };
    }, {
        title: string;
        type: string;
        id: string;
        image: string;
        perma_url: string;
        subtitle: string;
        header_desc: string;
        language: string;
        year: string;
        play_count: string;
        explicit_content: string;
        list_count: string;
        list_type: string;
        list: string;
        more_info: {
            webp: string;
            music: string;
            album_id: string;
            album: string;
            label: string;
            origin: string;
            is_dolby_content: boolean;
            '320kbps': string;
            encrypted_media_url: string;
            encrypted_cache_url: string;
            album_url: string;
            duration: string;
            rights: {
                code: string;
                cacheable: string;
                delete_cached_object: string;
                reason: string;
            };
            cache_state: string;
            has_lyrics: string;
            lyrics_snippet: string;
            starred: string;
            copyright_text: string;
            artistMap: {
                primary_artists: {
                    type: string;
                    id: string;
                    name: string;
                    role: string;
                    image: string;
                    perma_url: string;
                }[];
                featured_artists: {
                    type: string;
                    id: string;
                    name: string;
                    role: string;
                    image: string;
                    perma_url: string;
                }[];
                artists: {
                    type: string;
                    id: string;
                    name: string;
                    role: string;
                    image: string;
                    perma_url: string;
                }[];
            };
            release_date: string;
            label_url: string;
            vcode: string;
            vlink: string;
            triller_available: boolean;
            request_jiotune_flag: boolean;
            lyrics_id: string;
        };
    }>;
}, "strip", z.ZodTypeAny, {
    song: {
        title: string;
        type: string;
        id: string;
        image: string;
        perma_url: string;
        subtitle: string;
        header_desc: string;
        language: string;
        year: string;
        play_count: string;
        explicit_content: string;
        list_count: string;
        list_type: string;
        list: string;
        more_info: {
            webp: string;
            music: string;
            album_id: string;
            album: string;
            label: string;
            origin: string;
            is_dolby_content: boolean;
            '320kbps': string;
            encrypted_media_url: string;
            encrypted_cache_url: string;
            album_url: string;
            duration: string;
            rights: {
                code: string;
                cacheable: string;
                delete_cached_object: string;
                reason: string;
            };
            cache_state: string;
            has_lyrics: string;
            lyrics_snippet: string;
            starred: string;
            copyright_text: string;
            artistMap: {
                primary_artists: {
                    type: string;
                    id: string;
                    name: string;
                    role: string;
                    image: string;
                    perma_url: string;
                }[];
                featured_artists: {
                    type: string;
                    id: string;
                    name: string;
                    role: string;
                    image: string;
                    perma_url: string;
                }[];
                artists: {
                    type: string;
                    id: string;
                    name: string;
                    role: string;
                    image: string;
                    perma_url: string;
                }[];
            };
            release_date: string;
            label_url: string;
            vcode: string;
            vlink: string;
            triller_available: boolean;
            request_jiotune_flag: boolean;
            lyrics_id: string;
        };
    };
}, {
    song: {
        title: string;
        type: string;
        id: string;
        image: string;
        perma_url: string;
        subtitle: string;
        header_desc: string;
        language: string;
        year: string;
        play_count: string;
        explicit_content: string;
        list_count: string;
        list_type: string;
        list: string;
        more_info: {
            webp: string;
            music: string;
            album_id: string;
            album: string;
            label: string;
            origin: string;
            is_dolby_content: boolean;
            '320kbps': string;
            encrypted_media_url: string;
            encrypted_cache_url: string;
            album_url: string;
            duration: string;
            rights: {
                code: string;
                cacheable: string;
                delete_cached_object: string;
                reason: string;
            };
            cache_state: string;
            has_lyrics: string;
            lyrics_snippet: string;
            starred: string;
            copyright_text: string;
            artistMap: {
                primary_artists: {
                    type: string;
                    id: string;
                    name: string;
                    role: string;
                    image: string;
                    perma_url: string;
                }[];
                featured_artists: {
                    type: string;
                    id: string;
                    name: string;
                    role: string;
                    image: string;
                    perma_url: string;
                }[];
                artists: {
                    type: string;
                    id: string;
                    name: string;
                    role: string;
                    image: string;
                    perma_url: string;
                }[];
            };
            release_date: string;
            label_url: string;
            vcode: string;
            vlink: string;
            triller_available: boolean;
            request_jiotune_flag: boolean;
            lyrics_id: string;
        };
    };
}>>>;
