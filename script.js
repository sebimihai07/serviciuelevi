
$('.navbar a').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body')
      .animate({
        scrollTop: $(hash).offset().top
      },800);
  }
});


const firstNames = [
  "Fratescu Cristian",
  "Marius Dubasari",
  "Pinzari Paul",
  "Baciu Dragos",
  "Baciu Ana Maria",
  "Boariu Iulian Andrei",
  "Buga Matei",
  "Carabus Bianca",
  "Ciornovalic Ana Teodora",
  "Ciuciuc Alexandru",
  "Condurache Anastasia",
  "Cosovanu Silviu",
  "Craciun Bianca",
  "Dîscă Alina Cristina",
  "Dumitrasc Andrei",
  "Dumitru George Matei",
  "Grecu Teofana",
  "Huma Robert",
  "Mihaita Eusebiu",
  "Moraru Denys-George",
  "Muntean Claudio",
  "Petroi Ionut Lucian",
  "Romaniuc Robert",
  "Simionescu Denisa",
  "Sîrghe Adrian",
  "Stogrinca Gabriela",
  "Strat Marian Vasile",
  "Tabol Iulian",
  "Tataru Andreea Livia",
  "Vieriu Narcis",
  "Zuzuleac Alexandra",
];
