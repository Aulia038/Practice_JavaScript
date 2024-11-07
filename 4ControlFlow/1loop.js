// JavaScript code untuk mencetak lirik "Da ba dee da ba daa" sebanyak 6 kali
const lyricsDiv = document.getElementById("lyrics");
const lyricLine = "Da ba dee da ba daa";

for (let i = 0; i < 6; i++) {
  // Membuat elemen paragraf baru untuk setiap baris lirik
  const paragraph = document.createElement("p");
  paragraph.textContent = lyricLine;
  lyricsDiv.appendChild(paragraph); // Menambahkan paragraf ke div #lyrics
}
