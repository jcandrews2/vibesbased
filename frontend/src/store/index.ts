import { create } from "zustand";
import { User, SpotifyPlayer, Store } from "../types";

const useStore = create<Store>((set) => ({
  user: {
    userId: "",
    profilePicture: null,
    likedSongs: [],
    dislikedSongs: [],
    recommendedSongs: [],
    previousRequests: [],
    topArtists: [],
  },

  setUser: (updatedUser) =>
    set((state) => {
      return {
        user: { ...state.user, ...updatedUser },
      };
    }),

  spotifyPlayer: {
    player: null,
    deviceID: null,
    currentTrack: null,
    nextTrack: null,
    isActive: false,
    isPaused: true,
    isDraggingSlider: false,
    position: 0,
    progress: 0,
    dominantColor: "",
    animationKey: 0,
  },

  setSpotifyPlayer: (updatedSpotifyPlayer) =>
    set((state) => ({
      spotifyPlayer: { ...state.spotifyPlayer, ...updatedSpotifyPlayer },
    })),
}));

export default useStore;
