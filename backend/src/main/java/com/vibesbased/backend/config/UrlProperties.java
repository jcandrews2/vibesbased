package com.vibesbased.backend.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(prefix = "app.urls")
public class UrlProperties {
    private String frontendBase;
    private String spotifyAuthBase;
    private String spotifyAuthRedirect;
    private String spotifyApiBase;
    private String lastfmApiBase;

    public String getFrontendBase() {
        return frontendBase;
    }

    public void setFrontendBase(String frontendBase) {
        this.frontendBase = frontendBase;
    }

    public String getSpotifyAuthBase() {
        return spotifyAuthBase;
    }

    public void setSpotifyAuthBase(String spotifyAuthBase) {
        this.spotifyAuthBase = spotifyAuthBase;
    }

    public String getSpotifyAuthRedirect() {
        return spotifyAuthRedirect;
    }

    public void setSpotifyAuthRedirect(String spotifyAuthRedirect) {
        this.spotifyAuthRedirect = spotifyAuthRedirect;
    }

    public String getSpotifyApiBase() {
        return spotifyApiBase;
    }

    public void setSpotifyApiBase(String spotifyApiBase) {
        this.spotifyApiBase = spotifyApiBase;
    }

    public String getLastfmApiBase() {
        return lastfmApiBase;
    }

    public void setLastfmApiBase(String lastfmApiBase) {
        this.lastfmApiBase = lastfmApiBase;
    }
} 