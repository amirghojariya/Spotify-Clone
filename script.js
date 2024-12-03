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
            songs.push(element.href)
        }
    }
    return songs
}

async function main() {

    // Get the list of all the songs
    let songs = await getsongs()
    console.log(songs)

    // play the first song
    var audio = new Audio(songs[0]);
    audio.play();

    audio.addEventListener("loadeddata", () => {
        console.log = (audio.duration, audio.currentSrc, audio.currentTime)
    
        // The duration variable now holds the duration (in seconds) of the audio clip
    });

}


main() 




