// types.ts - Centralized type definitions for the application
export interface Request {
  id: string;
  userId: string;
  text: string;
  timestamp: string;
}

export interface Artist {
  spotifyId: string;
  name: string;
}

export interface Song {
  id: string;
  name: string;
  artist: string;
  duration: string;
  albumArt?: string;
  previewUrl?: string;
  spotifyUri?: string;
  spotifyId: string;
  artistSpotifyId: string;
}

export interface User {
  userId: string;
  profilePicture?: string | null;
  likedSongs: Song[];
  dislikedSongs: Song[];
  recommendedSongs: Song[];
  previousRequests: Request[];
  topArtists: Artist[];
  token?: {
    value: string;
    expiresAt: number;
  };
  spotifyAccessToken?: string;
}

export interface SpotifyPlayer {
  player?: any;
  deviceID?: any;
  currentTrack?: any;
  nextTrack?: any;
  isPaused?: boolean;
  position?: number;
  isActive?: boolean;
  areRecommendationsLoading?: boolean;
  areRecommendationsInitialized?: boolean;
  progress?: number;
  isDraggingSlider?: boolean;
  dominantColor?: string;
  animationKey?: number;
}

export interface Track {
  id: string;
  name: string;
  artists: { name: string }[];
  album: {
    images: { url: string }[];
  };
  dominantColor?: string;
}

export interface Store {
  user: User;
  setUser: (updatedUser: Partial<User>) => void;
  spotifyPlayer: SpotifyPlayer;
  setSpotifyPlayer: (updatedSpotifyPlayer: Partial<SpotifyPlayer>) => void;
}

export interface RGB {
  r: number;
  g: number;
  b: number;
}

export type SetUser = (user: Partial<User>) => void;
export type SetSpotifyPlayer = (player: Partial<SpotifyPlayer>) => void;

declare global {
  interface Window {
    Spotify: {
      Player: any;
    };
    onSpotifyWebPlaybackSDKReady: () => void;
  }
}
