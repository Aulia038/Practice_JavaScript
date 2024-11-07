// let x = "Celerates";
// let y = 2024;

// alert(x + y);
//  console.log(x + y);

// let x = ["Dog", "Cat"];
// x[3] = "Bird";
// alert(x);

// let x = {firstname:'Siti', lastname:'Aulia'};
// console.log(x);

// //STRING
// let name = prompt("Siapakah nama Anda?", "");
// if (name) {
//   console.log("Nama Anda adalah: " + name); // Menampilkan nama ke konsol
//   alert("Selamat datang, " + name + "!"); // Menampilkan nama dalam alert
// } else {
//   console.log("Nama tidak dimasukkan."); // Jika pengguna tidak memasukkan nama
//   alert("Anda tidak memasukkan nama."); // Memberi tahu pengguna
// }

// Daftar destinasi menggunakan berbagai tipe data
const destinations = [
  { id: 1, name: "Pantai Kuta", category: "pantai", description: "Pantai terkenal di Bali.", visitors: 1000, isOpen: true },
  { id: 2, name: "Gunung Bromo", category: "gunung", description: "Gunung yang indah di Jawa Timur.", visitors: 800, isOpen: true },
  { id: 3, name: "Pantai Ancol", category: "pantai", description: "Destinasi pantai di Jakarta.", visitors: 1200, isOpen: false },
  { id: 4, name: "Kota Yogyakarta", category: "kota", description: "Kota budaya dengan banyak sejarah.", visitors: 1500, isOpen: true },
  { id: 5, name: "Candi Borobudur", category: "budaya", description: "Candi terbesar di Indonesia.", visitors: 900, isOpen: true },
  { id: 6, name: "Gunung Rinjani", category: "gunung", description: "Gunung tertinggi di Nusa Tenggara.", visitors: 300, isOpen: true },
];

// Fungsi untuk menampilkan destinasi
function displayDestinations(filteredDestinations) {
  const destinationList = document.getElementById("destination-list");
  destinationList.innerHTML = ""; // Clear existing list
  filteredDestinations.forEach((destination) => {
    const destinationDiv = document.createElement("div");
    destinationDiv.classList.add("destination");
    destinationDiv.innerHTML = `
              <h3>${destination.name}</h3>
              <p>${destination.description}</p>
              <p>Kategori: ${destination.category}</p>
              <p>Pengunjung: ${destination.visitors}</p>
              <p>Status: ${destination.isOpen ? "Buka" : "Tutup"}</p>
          `;
    destinationList.appendChild(destinationDiv);
  });
}

// Fungsi untuk memfilter destinasi
function filterDestinations() {
  const category = document.getElementById("category").value;
  let filteredDestinations;

  if (category === "all") {
    filteredDestinations = destinations;
  } else {
    filteredDestinations = destinations.filter((destination) => destination.category === category);
  }

  // Tampilkan hasil filter
  if (filteredDestinations.length > 0) {
    alert(`Destinasi ditemukan: ${filteredDestinations.length}`);
  } else {
    alert("Tidak ada destinasi ditemukan.");
  }

  console.log("Filtered Destinations:", filteredDestinations);
  displayDestinations(filteredDestinations);
}

// Initialize display with all destinations
displayDestinations(destinations);

// Add event listener to the filter button
document.getElementById("filterButton").addEventListener("click", filterDestinations);
