const music = document.querySelector("audio")
const img = document.querySelector("img")
const play = document.getElementById('play')
const back = document.getElementById('back')
const next = document.getElementById('next')
const title = document.getElementById('title')
const musicBar = document.getElementById('music-bar')
const gif = document.getElementById('gif')
const imgs = document.getElementById('imgs')



const songs = [{

title: "My Hero Academia",
name: '1',
imgs:'https://t3.ftcdn.net/jpg/04/20/12/04/240_F_420120491_D0HSRucbWUcez7BwOUESXWnj45ZGDV8H.jpg',
gif:'https://media.giphy.com/media/AHuZAGwWcCUyoN2BiC/giphy.gif'



},
{

    title: "Itachi uchiha",
    name: '2',
    imgs:'https://t3.ftcdn.net/jpg/05/00/85/04/240_F_500850425_KGzvN3zMn2Uif4Xa1eQDbV3bqgTNzA4H.jpg',
    gif:'https://media.giphy.com/media/VFGsPXfFeIcGdtwAIC/giphy.gif'

},


{


    title: "Ultra Instinct (DBZ) ",
name: '3',
imgs:'https://t4.ftcdn.net/jpg/04/56/13/47/240_F_456134731_D0IzeXfZLFPO850dfAPmpTRrUAedKmFp.jpg',
gif:'https://media.giphy.com/media/frAXyMFGTj1wUxjRIH/giphy.gif'


},

{
    title: "One Piece",
    name: '4',
    imgs:'https://t4.ftcdn.net/jpg/04/66/96/07/240_F_466960799_UjSYk2XvePE9HEt1R1LO54xOHoJRfSx7.jpg',
    gif:'https://media.giphy.com/media/KDyoY2v2MlDHy/giphy.gif'


},

{
    title: "Madara Ringtone",
    name: '5',
    imgs:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK_db6rLv536w4zcGxiUh_-PDgyuAemRdhyA&usqp=CAU',
    gif:'https://media.giphy.com/media/l1JJ7hRzqWBQ7dKys7/giphy.gif'


},


{

    title: "Naurto",
    name: '6',
    imgs:'https://t3.ftcdn.net/jpg/05/19/85/24/240_F_519852457_9qZzSbCBsAaAM2KTHrbnTjt6LXcG6S9T.jpg',
    gif:'https://media.giphy.com/media/cJMcSJ5EIEFjtlqQpd/giphy.gif'

}]












let isPlaying = false;


const Playmusic =()=>{

    isPlaying = true;
 music.play();

 play.classList.replace('fa-play','fa-pause')

}


const Pausemusic =()=>{


    isPlaying = false;
 music.pause();

 play.classList.replace('fa-pause','fa-play')

}





play.addEventListener ("click", ()=>{


    // if(isPlaying==true){
    //     Pausemusic()
      
    // }else{
    //     Playmusic()
       
    // }

isPlaying ? Pausemusic() : Playmusic()

})



const musicData = ( songs ) =>{

title.textContent = songs.title

music.src = `music/${songs.name}.mp3`

img.src = songs.imgs

gif.src = songs.gif


}


// musicData(songs[songIndex])


let songIndex = 0


const nextSong =()=>{

    songIndex = (songIndex +1 ) % songs.length

    musicData(songs[songIndex])
Playmusic()
}


const backSong =()=>{

    songIndex = (songIndex - 1 + songs.length) % songs.length

    musicData(songs[songIndex])
    Playmusic()
}


next.addEventListener('click', nextSong)
back.addEventListener('click', backSong)






music.addEventListener('timeupdate', () => {

    progress = parseInt((music.currentTime / music.duration) * 100);

    musicBar.value = progress

})


musicBar.addEventListener('change', () => {

    music.currentTime = musicBar.value * music.duration / 100;




})