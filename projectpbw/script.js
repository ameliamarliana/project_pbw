const data = {
  makanan: [
    [
      "Bakmi Ayam Jamur",
      32000,
      "Bakmi kenyal yang disajikan dengan potongan ayam berbumbu gurih dan jamur yang lezat, cocok untuk menu makan yang nikmat.",
      "asset/mam/Bakmie_AyamJamur.jpeg",
    ],
    [
      "Bakmi Chili Oil",
      25000,
      "Bakmi dengan cita rasa gurih, pedas, dan aroma chili oil yang khas, cocok untuk pecinta makanan pedas.",
      "asset/mam/Bakmie_ChiliOil.jpeg",
    ],
    [
      "Bakmi Keju",
      35000,
      "Bakmi kenyal dengan perpaduan bumbu gurih dan keju yang creamy, menghasilkan rasa lezat dan kaya keju.",
      "asset/mam/Bakmie_Keju.jpeg",
    ],
    [
      "Bakmi Spesial Kepiting",
      43000,
      "Bakmi lezat dengan topping kepiting yang gurih, dipadukan dengan bumbu spesial yang kaya rasa dan menggugah selera.",
      "asset/mam/Bakmie_Kepiting.jpeg",
    ],
    [
      "Bakmi Salted Egg",
      30000,
      "Bakmi dengan saus salted egg yang creamy, gurih, dan sedikit asin, memberikan cita rasa lezat yang cocok untuk pencinta mi dengan saus telur asin.",
      "asset/mam/Bakmie_SaltedEgg.jpeg",
    ],
    [
      "Bakmie Truffle",
      38000,
      "Bakmi dengan cita rasa gurih dan aroma truffle yang khas, dipadukan dengan bumbu spesial untuk menghasilkan rasa yang lezat dan elegan.",
      "asset/mam/Bakmie_Truffle.jpeg",
    ],
  ],
  minuman: [
    [
      "Lemon Tea",
      12000,
      "Lemon Tea adalah minuman olahan teh yang memadukan seduhan teh dengan perasan air jeruk lemon. Minuman ini memiliki perpaduan rasa manis, sepat khas teh, dan keasaman segar dari lemon, serta biasa disajikan hangat maupun dingin dengan es batu.",
      "asset/mim/LemonTea.jpeg",
    ],
    [
      "Es Teh Manis",
      10000,
      "Es Teh Manis adalah minuman segar khas Indonesia yang terbuat dari seduhan teh hitam hangat yang diberi gula, kemudian disajikan dingin dengan penambahan es batu. Minuman ini sangat populer karena rasanya yang manis, menyegarkan, dan cocok dinikmati kapan saja, terutama saat cuaca panas atau sebagai pendamping makanan.",
      "asset/mim/EsTehManis.jpg",
    ],
    [
      "Es Jeruk",
      12000,
      "Es Jeruk adalah minumaman segar dengan perpaduan rasa manis dan asam alami dari jeruk, disajikan dingin dengan tambahan es batu yang menyegarkan.",
      "asset/mim/Esjeruk.jpeg",
    ],
    [
      "Es Kuwut",
      14000,
      "Es kuwut adalah minuman khas Bali yang menawarkan cita rasa sangat segar, berkat perpaduan rasa manis, asam, dan gurih.",
      "asset/mim/EsKuwut.jpeg",
    ],
    [
      "Es Campur",
      15000,
      "Es Campur adalah minuman penutup khas Indonesia yang menyegarkan, terdiri dari aneka isian buah-buahan, jelly, dan pelengkap lainnya yang disajikan bersama serutan es batu, sirup manis, serta siraman susu kental manis..",
      "asset/mim/Escampur.jpeg",
    ],
    [
      "Jus Mangga",
      15000,
      "Jus mangga adalah minuman segar dengan rasa manis alami, tekstur lembut, dan aroma mangga yang khas. Cocok dinikmati saat cuaca panas.",
      "asset/mim/JusMangga.jpeg",
    ],
    [
      "Coffee Latte",
      20000,
      "Kopi susu dengan perpaduan espresso yang kuat dan susu creamy, menghasilkan rasa lembut dan nikmat.",
      "asset/mim/CoffeeLattee.jpeg",
    ],
    [
      "Air Mineral Dingin",
      8000,
      "Air mineral dingin yang menyegarkan, cocok untuk melepas dahaga dan menemani aktivitas sehari-hari.",
      "asset/mim/AirPutihDingin.jpeg",
    ],
  ],
  addon: [
    [
      "Udang Keju",
      16000,
      "Camilan gorengan berbentuk lonjong yang dibuat dari campuran daging ayam, udang cincang , tpung dan bumbu, dengan isian keju lumer dibagia dalamnya.",
      "asset/addon/UdangKeju.jpeg",
    ],
    [
      "Cumi Krispi",
      15000,
      "Hidangan kuliner yang memadukan potongan cumi-cumi segar dengan balutan tepung berbumbu yang digoreng hingga kuning keemasan.",
      "asset/addon/CumiKrispi.jpeg",
    ],
    [
      "Dimsum Ayam",
      15000,
      "Dimsum ayam dengan isian ayam yang juicy, tekstur lembut, dan rasa gurih yang bikin nagih di setiap gigitan!.",
      "asset/addon/DimsumAyam.jpeg",
    ],
    [
      "Dubai Chocolate Strawberi",
      18000,
      "Strawberi segar yang dipadukan dengan cokelat premium yang lumer, renyahnya kunafa, dan sentuhan pistachio yang creamy. Perpaduan rasa manis, gurih, dan tekstur crunchy dalam setiap gigitan!.",
      "asset/addon/DubaiChocolateStrawberi.jpeg",
    ],
    [
      "Brownies Coklat",
      18000,
      "Brownies cokelat adalah kue lembut dengan rasa cokelat yang kaya, tekstur moist, dan aroma cokelat yang menggugah selera. Cocok dinikmati sebagai camilan atau hidangan penutup.",
      "asset/addon/BrowniesChocolate.jpeg",
    ],
    [
      "Creamy Caramel",
      15000,
      "Perpaduan rasa karamel yang manis dengan tekstur creamy lembut, menciptakan sensasi rasa yang lezat di setiap tegukan.",
      "asset/addon/CreamyCaramel.jpeg",
    ],
    [
      "Jamur Enoki Krispy",
      9000,
      "Jamur Enoki krispi adalah camilan berbahan dasar jamur enoki yang diselimuti adonan tepung berbumbu, lalu digoreng hingga kering, garing, dan berwarna kuning keemasan.",
      "asset/addon/JamurKrispy.jpeg",
    ],
    [
      "Kerupuk",
      5000,
      "Camilan khas indonesia yang bertekstur renyah, ringan, dan gurih sebagai pelengkap",
      "asset/Kerupuk.jpeg",
    ],
  ],
};

const $ = (s) => document.querySelector(s);
const money = (n) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  })
    .format(n)
    .replace("IDR", "Rp");

const all = Object.values(data).flat();
const find = (n) => all.find((p) => p[0] === n);

let cart = {};
let chosen = null;
let dq = 1;

function render(cat = "makanan") {
  const catKey = cat.toLowerCase();
  const menuList = data[catKey] || data.makanan;
  
  const grid = $("#grid");
  if (!grid) return;

  grid.innerHTML = menuList
    .map(
      (p) =>
        `<article class="menu-card">
          <div class="food-photo"><img src="${p[3]}" alt="${p[0]}"></div>
          <div class="menu-info">
            <h3>${p[0]}</h3>
            <span class="price">${money(p[1])}</span>
            <p>${p[2]}</p>
            <div class="actions">
              <button class="details" data-name="${p[0]}">Selengkapnya</button>
              <button class="add" data-name="${p[0]}">
              <img src="asset/Cart.png" alt="Add" width="14" height="14">
              </button>
              </button>
            </div>
          </div>
        </article>`
    )
    .join("");

  document
    .querySelectorAll(".add")
    .forEach((b) => (b.onclick = () => add(b.dataset.name, 1)));
  document
    .querySelectorAll(".details")
    .forEach((b) => (b.onclick = () => detail(b.dataset.name)));
}

function add(n, q) {
  cart[n] = (cart[n] || 0) + q;
  if (cart[n] <= 0) delete cart[n];
  update();
}

function update() {
  let items = Object.entries(cart);
  let count = items.reduce((s, [, q]) => s + q, 0);
  let sub = items.reduce((s, [n, q]) => s + find(n)[1] * q, 0);

  if ($("#cartCount")) $("#cartCount").textContent = count;
  if ($("#cartLabel")) $("#cartLabel").textContent = count + " item" + (count == 1 ? "" : "s");
  if ($("#sub")) $("#sub").textContent = money(sub);
  if ($("#tax")) $("#tax").textContent = money(Math.round(sub * 0.07));
  if ($("#total")) $("#total").textContent = money(sub + Math.round(sub * 0.07));

  const cartItems = $("#cartItems");
  if (cartItems) {
    cartItems.innerHTML = items.length
      ? items
          .map(([n, q]) => {
            let p = find(n);
            return `<div class="cart-item">
                      <img src="${p[3]}">
                      <div>
                        <h3>${n}</h3>
                        <span>${money(p[1])}</span>
                        <div class="qty-control">
                          <button data-q="-1" data-n="${n}">−</button>
                          <span>${q}</span>
                          <button data-q="1" data-n="${n}">+</button>
                        </div>
                      </div>
                      <strong>${money(p[1] * q)}</strong>
                      <button class="remove" data-remove="${n}">hapus</button>
                    </div>`;
          })
          .join("")
      : `<div style="padding:60px;text-align:center">
          <h3>Keranjang masih kosong</h3>
          <p>Pilih menu favoritmu untuk mulai memesan.</p>
        </div>`;
  }

  document
    .querySelectorAll("[data-q]")
    .forEach((b) => (b.onclick = () => add(b.dataset.n, +b.dataset.q)));
  document.querySelectorAll("[data-remove]").forEach(
    (b) =>
      (b.onclick = () => {
        delete cart[b.dataset.remove];
        update();
      })
  );
}

function detail(n) {
  chosen = find(n);
  dq = 1;
  if ($("#dImg")) $("#dImg").src = chosen[3];
  if ($("#dName")) $("#dName").textContent = chosen[0];
  if ($("#dPrice")) $("#dPrice").textContent = money(chosen[1]);
  if ($("#dDesc")) $("#dDesc").textContent = chosen[2];
  if ($("#dIng")) $("#dIng").innerHTML = chosen[4].map((x) => `<li>${x}</li>`).join("");
  if ($("#dQty")) $("#dQty").textContent = 1;
  if ($("#dCat")) {
    $("#dCat").textContent = Object.keys(data)
      .find((k) => data[k].includes(chosen))
      .toUpperCase();
  }
  if ($("#detail")) $("#detail").classList.add("show");
}

document.querySelectorAll(".tab").forEach(
  (b) =>
    (b.onclick = () => {
      document
        .querySelectorAll(".tab")
        .forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      render(b.dataset.cat);
    })
);

if ($("#openCart")) {
  $("#openCart").onclick = () => {
    if ($("#cart")) $("#cart").classList.add("show");
    update();
  };
}

if ($("#closeCart")) $("#closeCart").onclick = () => $("#cart").classList.remove("show");
if ($("#closeDetail")) $("#closeDetail").onclick = () => $("#detail").classList.remove("show");

if ($("#dMinus")) {
  $("#dMinus").onclick = () => {
    dq = Math.max(1, dq - 1);
    if ($("#dQty")) $("#dQty").textContent = dq;
  };
}

if ($("#dPlus")) {
  $("#dPlus").onclick = () => {
    dq++;
    if ($("#dQty")) $("#dQty").textContent = dq;
  };
}

if ($("#dAdd")) {
  $("#dAdd").onclick = () => {
    add(chosen[0], dq);
    if ($("#detail")) $("#detail").classList.remove("show");
    if ($("#cart")) $("#cart").classList.add("show");
  };
}

document.querySelectorAll(".method").forEach(
  (b) =>
    (b.onclick = () => {
      document
        .querySelectorAll(".method")
        .forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
    })
);

if ($("#checkout")) {
  $("#checkout").onclick = () => {
    if (!Object.keys(cart).length) return alert("Keranjang masih kosong.");
    if ($("#code")) $("#code").textContent = "BM-" + Math.floor(100000 + Math.random() * 900000);
    if ($("#cart")) $("#cart").classList.remove("show");
    if ($("#success")) $("#success").classList.add("show");
    cart = {};
    update();
  };
}

if ($("#finish")) $("#finish").onclick = () => $("#success").classList.remove("show");
if ($("#toggle") && $("#nav")) $("#toggle").onclick = () => $("#nav").classList.toggle("open");

document.addEventListener("DOMContentLoaded", () => {
  render("makanan");
  update();
});

let spiceLevel = 1; 
function detail(n) {
  chosen = find(n);
  dq = 1;
  spiceLevel = 0; 
  
  if ($("#dImg")) $("#dImg").src = chosen[3];
  if ($("#dName")) $("#dName").textContent = chosen[0];
  if ($("#dPrice")) $("#dPrice").textContent = money(chosen[1]);
  if ($("#dDesc")) $("#dDesc").textContent = chosen[2];
  
  if ($("#dQty")) $("#dQty").textContent = dq;
  if ($("#spiceQty")) $("#spiceQty").textContent = spiceLevel;
  
  if ($("#detail")) $("#detail").classList.add("show");
}

document.querySelectorAll(".menu-card").forEach((card) => {
  card.onclick = (e) => {
    if (e.target.closest('.add') || e.target.closest('.details')) return;
    detail(card.querySelector("h3").textContent);
  };
}); 
