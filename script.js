const contentCardsPastaDente = [
  {
    imagem: "assets/pastadente.png",
    titulo: "Hortelã",
    valor: "R$70,00",
    valorAntigo: null,
    desconto: null
  },
  {
    imagem: "assets/pastadente.png",
    titulo: "Morango",
    valor: "R$50,00",
    valorAntigo: true,
    desconto: true
  },
  {
    imagem: "assets/pastadente.png",
    titulo: "Uva",
    valor: "R$50,00",
    valorAntigo: true,
    desconto: true
  },
  {
    imagem: "assets/pastadente.png",
    titulo: "Café",
    valor: "R$50,00",
    valorAntigo: true,
    desconto: true
  },
];

const contentCardsEscovaDente = [
  {
    imagem: "assets/toothbrush.png",
    titulo: "Bamboo",
    valor: "R$50,90",
  },
  {
    imagem: "assets/toothbrush.png",
    titulo: "Mógno",
    valor: "R$50,90",
  },
  {
    imagem: "assets/toothbrush.png",
    titulo: "Carvalho",
    valor: "R$50,90",
  },
];

const contentCardsFioDental = [
  {
    imagem: "assets/others.png",
    titulo: "Fio dental",
    valor: "R$50,90",
  },
  {
    imagem: "assets/others.png",
    titulo: "Fio dental",
    valor: "R$50,90",
  },
];

const carouselPastaDente = document.getElementById("carouselPastaDente");
const carouselEscovaDente = document.getElementById("carouselEscovaDente");
const carouselFioDental = document.getElementById("carouselFioDental");

contentCardsPastaDente.forEach((item, i) => {
  const li = document.createElement("li");
  li.className = "product-category--card";
  li.innerHTML = `
      <div class="product-image-wrapper">
        <img src= ${item.imagem} alt="pasta de dente" />
      </div>
      <div class="product-card-wrapper">
      <span>
        <img src="/assets/star-full.svg" alt="Estrela completa" />
        <img src="/assets/star-full.svg" alt="Estrela completa" />
        <img src="/assets/star-full.svg" alt="Estrela completa" />
        <img src="/assets/star-full.svg" alt="Estrela completa" />
        <img src="/assets/starhalf.svg" alt="Estrela metade" /> (24)
      </span>
       ${item.titulo}
      </div>
      <div class="product-price-wrapper">
      ${item.valorAntigo ? `<span>R$70,90</span>` : ``}
        ${item.valor}
      </div>
      <button class="button-buy">Adicionar ao carrinho</button>
      ${item.desconto ? `<span class="promo">30% off</span>` : ``}
      `;
  carouselPastaDente.appendChild(li);
});

contentCardsEscovaDente.forEach((item) => {
  const li = document.createElement('li')
  li.className = "product-category--card";
  li.innerHTML = `
      <div class="product-image-wrapper">
        <img src= ${item.imagem} alt="escova de dente" />
      </div>
      <div class="product-card-wrapper">
        <span>
          <img src="/assets/star-full.svg" alt="Estrela completa" />
          <img src="/assets/star-full.svg" alt="Estrela completa" />
          <img src="/assets/star-full.svg" alt="Estrela completa" />
          <img src="/assets/star-full.svg" alt="Estrela completa" />
          <img src="/assets/starhalf.svg" alt="Estrela metade" /> (24)
        </span>
       ${item.titulo}
      </div>
      <div class="product-price-wrapper">
        <span>R$70,90</span>
        ${item.valor}
      </div>
      <button class="button-buy">Adicionar ao carrinho</button>
      <span class="promo">30% off</span>
      `;
  carouselEscovaDente.appendChild(li);
});

contentCardsFioDental.forEach((item) => {
  const li = document.createElement('li')
  li.className = "product-category--card";
  li.innerHTML = `
        <div class="product-image-wrapper">
          <img src=${item.imagem} alt="fio dental"/>
        </div>
        <div class="product-card-wrapper">
          <span>
            <img src="/assets/star-full.svg" alt="Estrela completa" />
            <img src="/assets/star-full.svg" alt="Estrela completa" />
            <img src="/assets/star-full.svg" alt="Estrela completa" />
            <img src="/assets/star-full.svg" alt="Estrela completa" />
            <img src="/assets/starhalf.svg" alt="Estrela metade" /> (24)
          </span>
          ${item.titulo}
        </div>
        <div class="product-price-wrapper">
          <span>R$70,90</span>
          ${item.valor}
        </div>
        <button class="button-buy">Adicionar ao carrinho</button>
        <span class="promo">30% off</span>
      `;
  carouselFioDental.appendChild(li);
});
