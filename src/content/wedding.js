const weddingContent = [
  {
    component: "wedding-grid",
    title: "Lista de presentes",
    intro:
      "Esta é a nossa lista de Presentes. Temos alguns items que desejamos para nossa casa, Mas ",
    description: "This is the description",
    items: [
      {
        title: "Jogo de Panelas",
        description: "Batedeira muito boa para todas as situações",
        link: "https://now.westwing.com.br/jogo-de-panelas-fika-flamingo-pink-73647.html",
        imgUrl:
          "https://static-images-now.westwing.com.br/s/73647-9567-97439-1-product2.jpg",
        price: "R$ 1.870,55",
      },
      {
        title: "Jogo de talheres",
        description: "desc",
        link: "https://now.westwing.com.br/faqueiro-em-inox-viena-wolff-champanhe-fosco-06-pessoas-53073.html?simple=DEQ22WOL95180-69772&gclid=Cj0KCQjwpompBhDZARIsAFD_Fp91cZd7yFUT6loc51M5lgEs66LhiAfHKiB2XGdU__xPZkg5ZOlrCyoaAh7KEALw_wcB",
        imgUrl:
          "https://static-images-now.westwing.com.br/s/53073-3705-27796-1-product2.jpg",
        price: "R$ 291,56",
      },
      {
        title: "Jogo de xícaras",
        description: "desc",
        link: "https://now.westwing.com.br/jogo-de-xicaras-para-cha-em-ceramica-ross-verde-34222.html",
        imgUrl:
          "https://static-images-now.westwing.com.br/s/34222-0463-95844-1-product2.jpg",
        price: "R$ 313,41",
      },
      {
        title: "Kit Bartender",
        description: "",
        link: "https://loja.bartenderstore.com.br/kits-de-bar/kit-bartender-intermediario-com-bolsa",
        imgUrl: "/wedding/kitBartender.webp",
        price: "R$ 198,90",
      },
      {
        title: "Batedeira Kitchen Aid",
        description: "desc",
        link: "https://www.kitchenaid.com.br/batedeira-stand-mixer-kitchenaid-artisan-dried-rose-kea33co/p",
        imgUrl:
          "https://kitchenaid2.vtexassets.com/arquivos/ids/170134-1600-1600?v=638488884367830000&width=1600&height=1600&aspect=true",
        price: "R$ 1.999,09",
      },
      {
        title: "kit Moedor para Kitchen Aid",
        description: "desc",
        link: "https://www.kitchenaid.com.br/moedor-de-alimentos-para-stand-mixer-kio02dx/p",
        imgUrl:
          "https://kitchenaid2.vtexassets.com/arquivos/ids/166881-1600-1600?v=637939271320100000&width=1600&height=1600&aspect=true",
        price: "R$ 399,01",
      },
      {
        title: "Jogo de Lençol",
        description: "desc",
        link: "https://mmartan.com.br/pr/jogo-de-lencol-percal-cording-one-for-all/MM18CJDCA6150",
        imgUrl:
          "https://images-prod.mmartan.com.br/1536x1536/png/products/photos/still/mm18cjdqa6150-1536px-1677609896042.png",
        price: "R$ 459,90",
      },
      {
        title: "Toalha de Banho Karsten",
        description: "desc",
        link: "https://www.karsten.com.br/toalha-de-banho-karsten-100-algodao-imperial-rose-3931499/p",
        imgUrl:
          "https://karsten.vtexassets.com/arquivos/ids/189735-600-600/3931499_01.jpg?v=638288474029500000",
        price: "R$ 74,90",
      },
      {
        title: "Aspirador de pó",
        description: "desc",
        link: "https://www.amazon.com.br/dp/B004PS7O7K/ref=cm_sw_r_as_gl_api_gl_i_PA7W9345BZXAYKN60B9E?linkCode=ml1&tag=talitadonaper-20&th=1",
        imgUrl:
          "https://m.media-amazon.com/images/I/51FC18V43fL._AC_SX569_.jpg",
        price: "R$ 224,94",
      },
      {
        title: "Máquina nespresso",
        description: "desc",
        link: "https://www.amazon.com.br/Nespresso-Lattissima-One-Branca-Cafeteira/dp/B09WYZPBR7/ref=asc_df_B09WYZPBR7/?tag=googleshopp00-20&linkCode=df0&hvadid=557926986208&hvpos=&hvnetw=g&hvrand=8358881787408621118&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001773&hvtargid=pla-1663253407868&mcid=47abd53c207e314b93549cedc17c54a7&th=1",
        imgUrl:
          "https://m.media-amazon.com/images/I/418TAsElfhL._AC_SX569_.jpg",
        price: "R$ 1.169,90",
      },
      {
        title: "Cafeteira Espresso",
        description: "desc",
        link: "https://www.amazon.com.br/Cafeteira-Coffee-Express-Philco-220V/dp/B076HSPQFD/ref=asc_df_B076HQ1K5H/?tag=googleshopp00-20&linkCode=df0&hvadid=379727342281&hvpos=&hvnetw=g&hvrand=6925208241661432087&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001773&hvtargid=pla-814286448223&mcid=506cc42d6cb33577969ca02108880c74&th=1",
        imgUrl:
          "https://m.media-amazon.com/images/I/616uVOen6fL._AC_SX569_.jpg",
        price: "R$ 451,60",
      },
      {
        title: "Choperia elétrica",
        description: "desc",
        link: "https://www.perfectdraft.com.br/kit-experiencia-stella-artois-perfectdraft-5/p",
        imgUrl:
          "https://perfectdraft.vtexassets.com/arquivos/ids/155602-458-458",
        price: "R$ 2.299,99",
      },
      {
        title: "Televisão",
        description: "desc",
        link: "https://www.fastshop.com.br/web/p/d/SGUN55CU8000_PRD/smart-tv-samsung-crystal-uhd-4k-55quot-polegadas-55cu8000-com-painel-dynamic-crystal-color-design-airslim-e-alexa-built-in?utm_source=google&utm_medium=cpc&utm_term=pmax_1p&utm_campaign=18074513501&gad_source=1&gclid=CjwKCAjwoPOwBhAeEiwAJuXRh5FB4UkAB0uDd1pJ9184kg_IFDFhKUKSYgDXFmPgzucl3C9yfsFV7xoCea4QAvD_BwE",
        imgUrl:
          "https://www.fastshop.com.br//wcsstore/FastShopCAS/images/catalog/SGUN55CU8000_PRD/SGUN55CU8000_PRD_447_1.jpeg",
        price: "R$ 2.599,00",
      },
      {
        title: "Futon Especial (Azul/ Grosso)",
        description: "desc",
        link: "https://tsuruya.com.br/futon2",
        imgUrl:
          "https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=600,h=600,fit=scale-down/cdn-ecommerce/store_01HHYH76RWKZA3XAVG669PA57Y%2Fassets%2F1702910747136-1d9c3761-1180-47bd-bb9d-1b6419b9e6f1.JPG",
        price: "aprox. R$ 1.380,00",
      },
      {
        title: "Viagem ao japão",
        description: "desc",
        imgUrl: "/wedding/japan.jpg",
        price: "R$ 30.000,00",
      },
      {
        title: "titulo",
        description: "desc",
        link: "link",
        imgUrl: "img",
        price: "R$ ",
      },
      {
        title: "titulo",
        description: "desc",
        link: "link",
        imgUrl: "img",
        price: "R$ ",
      },
      {
        title: "titulo",
        description: "desc",
        link: "link",
        imgUrl: "img",
        price: "R$ ",
      },
      {
        title: "titulo",
        description: "desc",
        link: "link",
        imgUrl: "img",
        price: "R$ ",
      },
    ],
  },
];

export default weddingContent;
