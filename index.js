let picture=document.querySelector(".resim");
 let text1=document.querySelector(".text");
 let surname=document.querySelector(".name");
 let button=document.querySelector(".button");
 
 const quotes = [
    {
        img: "https://www.istockphoto.com/photo/portrait-happy-beautiful-woman-with-stylish-hair-wearing-sunglass-isolated-on-yellow-gm1893516614-554002220?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fde%2Fimages%2Fsearch%2Fhapyy%2F&utm_term=happy",
        text: "Mutluluk paylaştıkça çoğalan tek şeydir.",
        name1: "–Albert Schweitzer"
    },
    {
        img: "https://www.istockphoto.com/de/foto/rafting-auf-einem-gro%C3%9Fen-raftingboot-auf-dem-fluss-im-antalya-koprulu-canyon-gm1818199831-549816813",
        text: "Her zaman pozitif olmak zorunda değilsiniz. Üzgün, kızgın, sinirli, sinirli, korkmuş ve endişeli hissetmek tamamen normaldir. Duygulara sahip olmak sizi olumsuz bir insan yapmaz. Seni insan yapar.",
        name1: "— Lori Deschene"
    },
    {
        img: "https://pixabay.com/de/photos/strand-menschen-laufen-paar-wellen-1850248/",
        text: "Uçamıyorsan, koş. Koşamıyorsan, yürü. Yürüyemiyorsan emekle ama ne olursa olsun hareket etmeye devam et.",
        name1: "– Martin Luther King, "
    },
    {
        img: "https://pixabay.com/de/photos/frau-hund-laufen-h%C3%BCndchen-7308033/",
        text: "Bireyin kendisine dönmesi, onun gücünü ve kapasitesini ortaya çıkarmak için en önemli adımdır.",
        name1: "– Carl Jung "
    },
    {
        img: "https://pixabay.com/de/illustrations/rucksacktourist-stra%C3%9Fe-laufen-anime-7628303/",
        text: "Kötü ya da iyi hissetmenizin nedeni düşündüğünüz şeylerdir. Çünkü hissetmek düşünmekle başlar.",
        name1: "–Farabi"
    },
    {
        img: "https://pixabay.com/de/illustrations/ai-generiert-kleinkind-baby-kind-8891142/",
        text: "Bir ebeveynin çocuğuna verebileceği en büyük hediye, ona her koşulda ayağa kalkabilecek gücü kendinde bulabilme yetisini kazandırmaktır.",
        name1: "–Doğan Cüceloğlu"
    },
    {
        img: "https://pixabay.com/de/photos/meer-korfu-griechenland-sommer-4189543/",
        text: "Korkutmaya meraklı kişinin en büyük korkusu nedir biliyor musunuz? kendi yetersizliği ile yüzleşmek. Bir gün gelir de ondan korkmazlarsa ne halt edeceğini bilemez çünkü.",
        name1: "–Doğan Cüceloğlu"
    },
    {
        img: "https://pixabay.com/de/photos/seljalandsfoss-wasserfall-island-1207958/",
        text: "Dünü toprağa gömmezseniz, yarınlarınız çiçek açmaz.",
        name1: "–La Edri"
    },
    {
        img: "https://pixabay.com/de/photos/sunset-evening-sky-sea-baltic-sea-7600585/",
        text: "Denizi seviyorsan dalgaları da seveceksin. korkarak yaşarsan yalnızca hayatı seyredersin.",
        name1: "Friedrich Nietzsche"
    },
    {
        img: "https://pixabay.com/de/photos/bedeckt-winter-bew%C3%B6lkter-tag-wolken-7743510/",
        text: "Büyük sıçrayışı gerçekleştirmek isteyen, birkaç adım geriye gitmek zorundadır. Bugün yarına dünle beslenerek yol alır.",
        name1: "Bertolt Brecht"
    }
];

const randomText = () => {
   
    console.log(text1.innerText);

    setInterval(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        picture.src = randomQuote.img;
        text1.innerText = randomQuote.text;
        surname.innerText = randomQuote.name1;
    }, 3000);
};

randomText();



    

