export default class Song {
    constructor(song) {
        this.title = song.trackName
        //Change 250x250 if you want a larger image
        this.albumArt = song.artworkUrl60.replace(/60x60/g, "250x250")
        this.artist = song.artistName
        this.collection = song.collectionName
        this.price = song.collectionPrice
        this.preview = song.previewUrl
    }
    get Template() {
        return `
            <div class= "row p-5"
                <div class="col-4">
                    <img src="${this.albumArt}" alt="Album art">
                    <h3>Artist: ${this.artist}</h3>
                    <h3>Song Title: ${this.title}</h3>
                    <h3>Collection: ${this.collection}</h3>
                    <h4>Price: ${this.price}</h4>
                    <audio controls src="${this.preview}">Preview</audio>
                </div>
            </div> 
                `
    }
}