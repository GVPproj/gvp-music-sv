import releasesJson from './releases.json';

export interface Track {
	title: string;
	duration: number;
	track_num: number;
}

export interface Release {
	title: string;
	artist: string;
	release_date: string;
	url: string;
	album_id: number;
	art_id: number;
	tracks: Track[];
	about: string | null;
	display_title?: string;
	display_date?: string;
	streaming?: {
		spotify?: string;
		apple?: string;
		tidal?: string;
	};
	player_height?: number;
	youtube_video_id?: string;
}

// Sort by release_date descending (newest first)
export const releases: Release[] = (releasesJson as Release[]).sort(
	(a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
);
