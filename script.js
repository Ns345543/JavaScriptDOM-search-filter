const users = [
  {
    name: "Bruce Wayne",
    pic: "https://mrwallpaper.com/images/high/caption-dynamic-batman-illustration-for-phone-3z00f3brfnjvfirb.webp",
    bio: "Vengeance in the night 🦇 | Billionaire by day, crusader by night",
  },
  {
    name: "Clark Kent",
    pic: "https://mrwallpaper.com/images/high/superman-in-the-dark-with-his-cape-179570mn0pvoaidm.webp",
    bio: "Journalist | Hope 🕊️ is my superpower",
  },
  {
    name: "Peter Parker",
    pic: "https://mrwallpaper.com/images/high/miles-morales-spiderman-action-pose4-k-pfxlywfm1jtgaxir.webp",
    bio: "With great power comes great memes 🕸️ | NYC native",
  },
  {
    name: "Homelander",
    pic: "https://mrwallpaper.com/images/high/the-boys-the-homelander-character-ccktk6mjbu8w8bqv.webp",
    bio: "America's hero 🇺🇸 (or so they say) | Don't blink.",
  },
  {
    name: "Mark Grayson",
    pic: "https://mrwallpaper.com/images/high/invincible-in-the-city-lh5ka6kz2fskbo6q.webp",
    bio: "Trying to be better 💬 | Half-human, full heart",
  },
  {
    name: "Omni-Man",
    pic: "https://mrwallpaper.com/images/high/invincible-hero-omni-man-lp1ibdkrn867o0p9.webp",
    bio: "It was never about Earth 😤 | Viltrumite pride",
  },
  {
    name: "Diana Prince",
    pic: "https://mrwallpaper.com/images/high/wonder-woman-running-raised-arm-dmd0qa82n9816vlc.webp",
    bio: "Truth. Justice. Peace. ⚔️ | Amazonian heart",
  },
  {
    name: "Tony Stark",
    pic: "https://mrwallpaper.com/images/high/get-tony-stark-s-suit-with-the-iron-man-iphone-x-np1r33mzltu132r4.webp",
    bio: "Genius. Billionaire. Philanthropist. 🕶️ | Suit up.",
  },
  {
    name: "Wade Wilson",
    pic: "https://mrwallpaper.com/images/high/4k-deadpool-explosion-dnawqr8b4fn87gue.webp",
    bio: "Your friendly neighborhood psychopath 😜 | Breaking the fourth wall daily",
  },
  {
    name: "Stephen Strange",
    pic: "https://mrwallpaper.com/images/high/stephen-strange-returns-in-doctor-strange-2-bnokkoi802hi35ki.webp",
    bio: "Master of the mystic arts 🔮 | Reality is negotiable",
  },
];

const container = document.getElementById("cards-container");
const searchInput = document.getElementById("search-input");

function renderUsers(list) {
  if (list.length === 0) {
    container.innerHTML = `<div class="no-users">No users found</div>`;
    let noUsers = document.querySelector(".no-users");
    noUsers.style.color = "red";
    return;
  }
  container.innerHTML = list
    .map(
      (user) => `
      <div class="card">
        <img src="${user.pic}" class="bg-img" alt="${user.name}" />
        <div class="blurred-layer" style="background-image: url(${user.pic})"></div>
        <div class="content">
          <h3>${user.name}</h3>
          <p>${user.bio}</p>
        </div>
      </div>`
    )
    .join("");
}

renderUsers(users);

let UsersFound = searchInput.addEventListener("input", () => {
  const q = searchInput.value.toLowerCase().trim();
  const filtered = users.filter((u) => u.name.toLowerCase().includes(q));
  renderUsers(filtered);
});
