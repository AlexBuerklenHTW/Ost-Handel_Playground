let langs = document.querySelector(".navbar"),
  more = document.querySelector(".more"),
  link = document.querySelectorAll("a"),
  descr = document.querySelector(".description"),
  products = document.querySelector(".products"),
  product1 = document.querySelector(".product1"),
  product2 = document.querySelector(".product2"),
  product3 = document.querySelector(".product3"),
  product4 = document.querySelector(".product4"),
  product5 = document.querySelector(".product5"),
  product6 = document.querySelector(".product6"),
  product7 = document.querySelector(".product7"),
  product8 = document.querySelector(".product8"),
  product9 = document.querySelector(".product9"),
  product10 = document.querySelector(".product10"),
  product11 = document.querySelector(".product11"),
  impressum = document.querySelector(".impressum"),
  geschaeftsfuehrer = document.querySelector(".geschaeftsfuehrer"),
  rechtsform = document.querySelector(".rechtsform"),
  contactFormButton = document.querySelector(".contactFormButton");
  
link.forEach((el) => {
  el.addEventListener("click", () => {
    langs.querySelector(".active").classList.remove("active");
    el.classList.add("active");

    let attr = el.getAttribute("language");
    more.textContent = data[attr].more;
    descr.textContent = data[attr].description;
    products.textContent = data[attr].products;
    product1.textContent = data[attr].product1;
    product2.textContent = data[attr].product2;
    product3.textContent = data[attr].product3;
    product4.textContent = data[attr].product4;
    product5.textContent = data[attr].product5;
    product6.textContent = data[attr].product6;
    product7.textContent = data[attr].product7;
    product8.textContent = data[attr].product8;
    product9.textContent = data[attr].product9;
    product10.textContent = data[attr].product10;
    product11.textContent = data[attr].product11;
    geschaeftsfuehrer.textContent = data[attr].geschaeftsfuehrer;
    impressum.textContent = data[attr].impressum;
    rechtsform.textContent = data[attr].rechtsform;
    contactFormButton.textContent = data[attr].contactFormButton;
  });
});
let data = {
  german: {
    rechtsform: "Rechtsform: Einzelunternehmen",
    emailImpressum: "E-Mail",
    geschaeftsfuehrer: "Geschäftsführer",
    impressum: "Impressum",
    product1: "Multimeter",
    product2: "Leistungsmesszangen",
    product3: "Erdungsmesser",
    product4: "Oszilloskope",
    product5: "Industriekabel- und Leitungen",
    product6: "Spiralkabel",
    product7: "Messgeräte",
    product8: "Presswerkezeuge",
    product9: "Kabelschutzschläuche",
    product10: "Kabelzubehör",
    product11: "Flextape Heizbänder",
    description:
      "Wir sind Ost-Handel, ein aufstrebendes Team, welches sich spezialisiert hat, diverse Kabel, Kabelzubehör, Werkzeuge und vieles mehr zu verkaufen. Durch unsere jahrelange Zusammenarbeit mit führenden Firmen Deutschlands sind wir in der Lage, ein umfassendes Angebot anzubieten und unseren Kunden das bestmögliche Ergebnis zu präsentieren. Wenn Sie Interesse haben, zu bestimmten Produkten mehr Informationen zu erhalten, dann kontakieren Sie uns gerne über das Kontaktformular oder per E-Mail: hermann.buerklen@gmx.de. Wir arbeiten grundsätzlich nur auf Anfrage.",
    products: "Produkte",
    more: "und vieles mehr",
    contactFormButton: "Kontaktformular"
  },
  english: {
    rechtsform: "Legal form: sole proprietorship",
    emailImpressum: "E-Mail",
    geschaeftsfuehrer: "CEO",
    impressum: "Imprint",
    product1: "Circuit analyzer",
    product2: "Power clamps",
    product3: "Ground meter",
    product4: "Oscilloscopes",
    product5: "Industrial cables & wires",
    product6: "Spiral cable",
    product7: "Measuring device",
    product8: "Pressing tools",
    product9: "Cable protection hoses",
    product10: "Cable accessories",
    product11: "Flextape heating tapes",
    description:
      "We are Ost-Handel, an up-and-coming team that specializes in selling various cables, cable accessories, tools and much more. Thanks to our many years of cooperation with leading companies in Germany, we are able to offer a comprehensive range and present our customers with the best possible result. If you are interested in receiving more information about certain products, then please contact us via the contact form or by email: hermann.buerklen@gmx.de. In principle, we only work on request.",
    products: "Products",
    more: "And much more",
    contactFormButton: "Contact Form"
  },
  russian: {
    rechtsform: "Организационно-правовая форма: индивидуальный предприниматель",
    emailImpressum: "Электронная почта",
    geschaeftsfuehrer: "Управляющий",
    impressum: "Импрессум",
    product1: "Мультиметр",
    product2: "Силовые зажимы",
    product3: "Заземляющий провод",
    product4: "Осциллограф",
    product5: "Промышленный кабель",
    product6: "Спиральный кабель",
    product7: "Измерительные приборы",
    product8: "Обжимной инструмент",
    product9: "Кабельный шланг",
    product10: "Кабельные аксессуары",
    product11: "Нагревательные ленты",
    description:
      "Мы Ost-Handel, многообещающая команда, которая специализируется на продаже различных кабелей, кабельных аксессуаров, инструментов и многого другого. Благодаря нашему многолетнему сотрудничеству с ведущими компаниями Германии, мы можем предложить широкий ассортимент и представить нашим клиентам наилучший результат. Если вы заинтересованы в получении дополнительной информации об определенных продуктах, то не стесняйтесь обращаться к нам через контактную форму или по электронной почте: hermann.buerklen@gmx.de. Мы работаем только по запросу.",
    products: "Продукты",
    more: "И многое другое",
    contactFormButton: "Форма обратной связи"
  },
};
