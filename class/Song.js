class Song {
    id;
    name;
    linkSong;
    lyrics;
    avatar;
    mp3;
    singer;
    idUser;


    constructor(id, name,linkSong, lyrics, avatar, mp3, singer, idUser) {
        this.id = id;
        this.name = name;
        this.linkSong = linkSong;
        this.lyrics = lyrics;
        this.avatar = avatar;
        this.mp3 = mp3;
        this.singer = singer;
        this.idUser = idUser;
    }
}