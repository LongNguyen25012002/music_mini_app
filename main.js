

let musicData = [
    {
        id: Date.now(),
        song : "./assets/audio/2AM-JustaTee-BigDaddy.mp3",
        single: "JustaTee BigDaddy",
        nameSong: "2AM",
    },
    {
        id: Date.now(),
        song : "./assets/audio/Call-Girl-Lofi-Version-Trung-Tu-GAOTHOM.mp3",
        single: "Trung-Tu",
        nameSong: "Call Girl Lofi Version",

    },
    {
        id: Date.now(),
        song : "./assets/audio/Co-Bong-May-Bolero-Trap-Mix.mp3",
        single: "Bolero-Trap",
        nameSong: "Co Bong May Bolero",

    },
    {
        id: Date.now(),
        song : "./assets/audio/Mong-Manh-Tinh-Ve-Thanh-Ha.mp3",
        single: "Lân Nhã",
        nameSong: "Mong Manh Tinh Ve",

    },
    {
        id: Date.now(),
        song : "./assets/audio/Nguoi-ve-noi-dau-Uyen-Linh-Lan-Nha.mp3",
        single: "Lân Nhã",
        nameSong: "Nguoi ve noi dau",

    },
    {
        id: Date.now(),
        song : "./assets/audio/Nhu-Mot-Giac-Mo-Lan-Nha-Lan-Nha.mp3",
        single: "Lân Nhã",
        nameSong: "Nhu Mot Giac Mo",

    },
    {
        id: Date.now(),
        song : "./assets/audio/PC-10-Ngan-Nam-Prod-Duckie-Official-Audio-mp3-PC.mp3",
        single: "PC",
        nameSong: "PC 10 Ngan Nam",

    },
    {
        id: Date.now(),
        song : "./assets/audio/Thu-Cuoi-Yanbi-Mr-T-Hang-BingBoong.mp3",
        single: "Yanbi-Mr-T-Hang-BingBoong",
        nameSong: "Thu Cuoi",

    },
    {
        id: Date.now(),
        song : "./assets/audio/Tuoi-Da-Buon-Ngo-Lan-Huong.mp3",
        single: "Ngo-Lan-Huong",
        nameSong: "Tuoi Da Buon",
    },
]


let listMusic = document.querySelector(".list-music");
let btnPalay = document.querySelector("#btnPlay");
let btnPrev = document.querySelector("#btnPrev");
let btnNext = document.querySelector("#btnNext");
let btnRepeat = document.querySelector("#btnRepeat");
let btnShuffle = document.querySelector("#btnShuffle");
let iconHeaderRotate = document.querySelector(".song-play svg");
let nameSongTitle = document.querySelector(".song-play span");
let song_range = document.querySelector("#song_range");
let audio = document.querySelector("#audio");
let indexSongPlay = 0;
audio.volume = 0.8
let _repeat = true


let app = {
    UiList_Musci_Render(){

        let itemSong = musicData.map((itemSong,index) => {
            return ` <div class="item-song">
            <h3 class="song_name">${itemSong.nameSong}</h3>
            <span class="item-song__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 13.535V3h8v2h-6v12a4 4 0 1 1-2-3.465zM10 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
            </span>
        </div>`
        })
        listMusic.innerHTML = itemSong.join(" ")
        audio.src = musicData[indexSongPlay].song
        nameSongTitle.innerHTML = musicData[indexSongPlay].nameSong;
    },
    handleControll(){
        btnPalay.addEventListener("click", e => {
            e.stopImmediatePropagation()
            if(e.target.id === "playSong"){
                audio.play()
                btnPalay.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" id="stopSong" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M6 5h2v14H6V5zm10 0h2v14h-2V5z" /></svg>`;
                this.handleDataChange()
            } else {
                btnPalay.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" id="playSong" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M16.394 12L10 7.737v8.526L16.394 12zm2.982.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z"/></svg>`;
                audio.pause()
                this.handleDataChange()
            }
        });
        
        btnPrev.addEventListener("click",e => {
            indexSongPlay--

            if(e.target.id === "btnPrevSetTarget"){
                e.stopImmediatePropagation()
                console.log(indexSongPlay)
                if(audio.paused === true){
                    audio.pause()
                } else {
                    btnPalay.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" id="stopSong" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M6 5h2v14H6V5zm10 0h2v14h-2V5z" /></svg>`;
                }
                
                if(indexSongPlay < 0){
                    indexSongPlay = 0
                    audio.src = musicData[indexSongPlay].song
                } else {
                    audio.src = musicData[indexSongPlay].song
                }
                
                this.handleDataChange()
            }
        });

        btnNext.addEventListener("click",e => {
            indexSongPlay++

            if(e.target.id === "btnNextSetTarget"){
                e.stopImmediatePropagation()
                if(indexSongPlay > musicData.length - 1){
                    indexSongPlay = 0
                    audio.src = musicData[indexSongPlay].song
                    audio.play()
                } else {
                    audio.src = musicData[indexSongPlay].song
                    audio.play()
                }
                
            btnPalay.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" id="stopSong" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M6 5h2v14H6V5zm10 0h2v14h-2V5z" /></svg>`;
                this.handleDataChange()
            }
        });

        btnRepeat.addEventListener("click",e => {
            if(e.target.id === "btnRepeatSetTarget" && _repeat){
                audio.src = musicData[indexSongPlay].song;
                audio.loop = true
                audio.play()
                btnPalay.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" id="stopSong" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M6 5h2v14H6V5zm10 0h2v14h-2V5z" /></svg>`;
                _repeat = !_repeat
                this.handleDataChange()
            } else {
                audio.loop = false
            }
        }),

        btnShuffle.addEventListener("click",e => {
            if(e.target.id === "btnShuffleSetTarget"){
                indexSongPlay = Math.floor(Math.random() * musicData.length)
                audio.src = musicData[indexSongPlay].song
                audio.play()
                btnPalay.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" id="stopSong" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M6 5h2v14H6V5zm10 0h2v14h-2V5z" /></svg>`;
                this.handleDataChange()
            }
        })

    },
    handleRangerSong(){
        // song play
        audio.ontimeupdate = function () {
            if (audio.duration) {
                const progressPercent = audio.currentTime / audio.duration * 100;
                song_range.value = progressPercent
            }
        }
        // skeep
        song_range.addEventListener("change",e => {
            audio.currentTime = song_range.value * audio.duration / 100;
        console.log(audio.paused)
        })

        // end point
        audio.addEventListener("ended",e => {
            indexSongPlay++
            if(indexSongPlay > musicData.length){
                 indexSongPlay = 0
            }
        })
    },
    handleDataChange(){
        console.log(audio.paused)

        if(audio.paused === false){
            iconHeaderRotate.style.animation = "rotate 1.5s linear infinite"
        } else {
            iconHeaderRotate.style.animation = ""
        }
        nameSongTitle.innerHTML = musicData[indexSongPlay].nameSong;
    },
    start(){
        this.UiList_Musci_Render()
        this.handleControll()
        this.handleRangerSong()
    }
}

app.start()



