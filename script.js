
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let proggresBar = document.getElementById('proggresBar');



let songs = [
    {songName: "let me love you", filePath: "song/1.mp3", coverPath: "cover/1.png"},
    {songName: "Alan Walker On My", filePath: "song/2.mp3", coverPath: "cover/2.jpeg"},
    {songName: "Bad Liar", filePath: "song/3.mp3", coverPath: "cover/3.jpg"},
    {songName: "Love Me Like You Do", filePath: "song/4.mp3", coverPath: "cover/4.jpeg"},
    {songName: "Memories", filePath: "song/5.mp3", coverPath: "cover/5.jpg"},
    {songName: "Hymn For The Weekend", filePath: "song/6.mp3", coverPath: "cover/6.jpg"},
    {songName: "Bones", filePath: "song/7.mp3", coverPath: "cover/7.jpg"}
]

masterPlay.addEventListener('click',() =>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
})

audioElement.addEventListener('timeupdate', () =>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    proggresBar.value = progress;
})
proggresBar.addEventListener('change', ()=>{
    audioElement.currentTime = proggresBar.value*audioElement.duration/100;
})

let songItems = Array.from(document.getElementsByClassName('songitem'));

songItems.forEach((element,i) => {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

const makeAllPlay= ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlay();
        songIndex = parseInt(e.target.id); 
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `song/${songIndex+1}.mp3`;
        audioElement.currentTime = 0; 
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})  
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex > 6){
        songIndex = 0;
    }
    else{
        songIndex += 1; 
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    audioElement.currentTime = 0; 
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <= 0){
        songIndex = 0;
    }
    else{
        songIndex -= 1; 
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    audioElement.currentTime = 0; 
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})