

console.log("Lets start the javaScript")


async function getsongs() {
    let a = await fetch("http://127.0.0.1:3000/songs/")
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split(/songs/)[1])
        }
    }
    return songs
}

const playMusic = (track)=> {
    let audio = new Audio ("/songs/", track)
    audio.play()
}


async function main() {

    let currentsong;

    // Get the list of all the songs

    let songs = await getsongs()


    // show all the songs in the playlist

    let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0]
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li><img  class="invert music-icon" src="svg/music.svg" alt="">
                            <div class="info">
                                <div>${song.replaceAll("%20", " ")}</div>
                                <div>Aamir</div>
                            </div>
                            <div class="playnow">
                                <span>Play Now</span>
                                <img class="invert play-icon" src="svg/play.svg" alt="">
                            </div>  </li>`;

    }


// Attach an event listener to each song

Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e=>{
    e.addEventListener("click", element=>{

        console.log(e.querySelector(".info").firstElementChild.innerHTML)
        playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
    })
})

}


main()







