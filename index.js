
 const quotes = [
    {
        img: './img/img-2.jpg',
        text: "Mutluluk paylaştıkça çoğalan tek şeydir.",
        name1: "–Albert Schweitzer"
    },
    {
        img: './img/img-1.jpg',
        text: "Her zaman pozitif olmak zorunda değilsiniz. Üzgün, kızgın, sinirli, sinirli, korkmuş ve endişeli hissetmek tamamen normaldir. Duygulara sahip olmak sizi olumsuz bir insan yapmaz. Seni insan yapar.",
        name1: "— Lori Deschene"
    },
    {
        img: './img/img-3.jpg',
        text: "Uçamıyorsan, koş. Koşamıyorsan, yürü. Yürüyemiyorsan emekle ama ne olursa olsun hareket etmeye devam et.",
        name1: "– Martin Luther King, "
    },
    {
        img: './img/img-4.jpg',
        text: "Bireyin kendisine dönmesi, onun gücünü ve kapasitesini ortaya çıkarmak için en önemli adımdır.",
        name1: "– Carl Jung "
    },
    {
        img: './img/img-5.jpg',
        text: "Kötü ya da iyi hissetmenizin nedeni düşündüğünüz şeylerdir. Çünkü hissetmek düşünmekle başlar.",
        name1: "–Farabi"
    },
    {
        img:'./img/img-6.jpg',
        text: "Bir ebeveynin çocuğuna verebileceği en büyük hediye, ona her koşulda ayağa kalkabilecek gücü kendinde bulabilme yetisini kazandırmaktır.",
        name1: "–Doğan Cüceloğlu"
    },
    {
        img: './img/img-7.jpg',
        text: "Korkutmaya meraklı kişinin en büyük korkusu nedir biliyor musunuz? kendi yetersizliği ile yüzleşmek. Bir gün gelir de ondan korkmazlarsa ne halt edeceğini bilemez çünkü.",
        name1: "–Doğan Cüceloğlu"
    },
    {
        img: './img/img-8.jpg',
        text: "Dünü toprağa gömmezseniz, yarınlarınız çiçek açmaz.",
        name1: "–La Edri"
    },
    {
        img: './img/img-9.jpg',
        text: "Denizi seviyorsan dalgaları da seveceksin. korkarak yaşarsan yalnızca hayatı seyredersin.",
        name1: "Friedrich Nietzsche"
    },
    {
        img: './img/img-10.jpg',
        text: "Büyük sıçrayışı gerçekleştirmek isteyen, birkaç adım geriye gitmek zorundadır. Bugün yarına dünle beslenerek yol alır.",
        name1: "Bertolt Brecht"
    }
];

 let picture=document.querySelector(".resim");
 let text1=document.querySelector(".text");
 let surname=document.querySelector(".name");
 let button=document.querySelector(".button");
 let result=0;

 let isStart;
let isKontrol=true;

function container(){
    const {img,text,name1 }=quotes[result];
    picture.src=img;
    text1.innerText=text;
    surname.innerText=name1;

    // result++;
 result =Math.floor(Math.random()*quotes.length);
    
    // setTimeout(() => {
    //     contanier();
    //   }, 800);

}

function startContainer(){
    isStart=setInterval(container,800); // 8 saniyede bir çalışır
};

function stopContainer(){
    clearInterval(isStart)
};





button.addEventListener('click', ()=>{
    if(isKontrol){
        stopContainer();
        button.value="BAŞLAT";

    }else {
        startContainer();
        button.value="DUR"
    }

isKontrol=!isKontrol;// Durumu tersine çevir
});

container(); // Sayfa yüklendiğinde ilk resim göster
startContainer(); // Sayfa yüklendiğinde otomatik olarak çalıştır


