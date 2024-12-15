let islem= Number(prompt("Yapmak istediğiniz işlemi seçiniz.(1-Toplama/2-Çıkarma/3-Çarpma/4-Bölme"));

if(islem===1){
    let toplanacakSayi=Number(prompt("Toplamak istediğiniz 1. sayıyı giriniz"));
    let digertoplanacakSayi = Number(prompt("Toplanacak ikinci sayıyı giriniz"));
    let toplam= toplanacakSayi+digertoplanacakSayi;
    console.log("Toplam =" +toplam);
    

}
else if(islem===2){
    let cikarilkSayi = Number(prompt("İlk sayıyı giriniz"));
    let cikarilacakikinci = Number(prompt("İlk sayıdan çıkarmak istediğiniz sayıyı giriniz"));
    let cikarma = cikarilkSayi - cikarilacakikinci;
    console.log("Sonuç = " + cikarma); 

}

else if(islem===3){
    let carpmailk = Number(prompt("İlk sayıyı giriniz"));
    let carpmaikinci = Number(prompt("İkinci sayıyı giriniz"));
    let carpma = carpmailk*carpmaikinci;
    console.log("Sonuç= " + carpma);
}
else if(islem===4){
    let bolmeilk= Number(prompt("İlk sayıyı giriniz"));
    let bölmeikinci = Number(prompt("İkinci sayıyı giriniz"));
    let bolme = bolmeilk/bölmeikinci;
    console.log("Sonuç=" + bolme);

}
else{
    alert("Geçersiz işlem");
}