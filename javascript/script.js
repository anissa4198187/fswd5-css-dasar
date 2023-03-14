var tanya = true;
while (tanya) {

    //menangkap pilihan player
    alert('hi! welcome to this game ');
    alert('want to play? make your choice');
    var suit = prompt('PILIHAN : BATU , GUNTING , KERTAS');

    //menangkap pilihan computer
    //membangkitkan bilangan random

    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'BATU';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'GUNTING';
    } else {
        comp = 'KERTAS';
    }

    //menentukan rules
    //menentukan rules
    var hasil = '';
    if (suit == comp) {
        hasil = 'SERI';
    } else if (suit == 'BATU') {
        hasil = (comp == 'KERTAS') ? 'MENANG' : 'KALAH!';
    } else if (suit == 'GUNTING') {
        hasil = (comp == 'KERTAS') ? 'MENANG' : 'KALAH!';
    } else if (suit == 'KERTAS') {
        hasil = (comp == 'BATU ') ? 'KALAH' : 'MENANG';
    } else {
        hasil = 'enter the wrong option!';
    }
    //tampilkan hasilnya

    alert('ANISSA MEMILIH : ' + suit + '\nDAN SEPTI MEMILIH : ' + comp +
        '\nMAKA HASILNYA : ANISSA ' + hasil);
    tanya = confirm('PLAY AGAIN?');
}
alert('THANKYOU FOR TRYING THIS GAME!!');