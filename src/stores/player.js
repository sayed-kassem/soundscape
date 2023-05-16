import { defineStore } from "pinia";
import { Howl } from "howler";
import helper from "@/includes/helper"
export default defineStore("player", {
    state: () => ({
        current_song: {},
        sound: {},
        seek: "00:00", //current position of audio
        duration: "00:00",
        playerProgress: "0%",
        //playlist: [],
    }),
    actions: {
        async newSong(song) {
            if (this.sound instanceof Howl) {
                this.sound.unload();
            }
            this.current_song = song;
            this.sound = new Howl({
                src: [song.url],
                html5: true,
            });
            this.sound.play();

            this.sound.on("play", () => {
                requestAnimationFrame(this.progress)
            })

        },
        async toggleAudio() {
            if (!this.sound.playing) {
                return;
            }
            if (this.sound.playing()) {
                this.sound.pause();
            } else {
                this.sound.play();
            }
        },
        progress() {
            this.seek = helper.formatTime(this.sound.seek());
            this.duration = helper.formatTime(this.sound.duration());

            this.playerProgress = `${(this.sound.seek()/this.sound.duration())*100}%`

            if (this.sound.playing()) {
                requestAnimationFrame(this.progress)
            }
        },
        updateSeek(event) {
            if (!this.sound.playing) {
                return;
            }
            const { x, width } = event.currentTarget.getBoundingClientRect(); //currentTarget, eventlistener where is added, returns element
            // x is the coordinate difference between the left side of entire document and left side of element with eventlistener
            // x coordinate of the click relative to the entire document not the player
            const clickX = event.clientX - x;
            const percentage = clickX / width;
            const seconds = this.sound.duration() * percentage
            this.sound.seek(seconds);
            this.sound.once("seek", this.progress);

        },
        // addToPlaylist(song) {
        //     if (this.current_song == song) {
        //         return;
        //     }
        //     this.playlist.push(song);
        //     // if (!this.current_song && !(this.sound instanceof Howl)) {
        //     //     const playlist_urls = []
        //     //     this.playlist.forEach(s => {
        //     //         playlist_urls.push(s.url);
        //     //     })
        //     //     this.sound = new Howl({
        //     //         src: playlist_urls,
        //     //         html5: true,
        //     //     })
        //     //     this.sound.play();
        //     // }
        // }
    },
    getters: {
        playing: (state) => {
            if (state.sound.playing) {
                return state.sound.playing()
            }
            return false;
        }
    }
})