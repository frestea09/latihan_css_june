class operasi{
    constructor(bilanganPertama,bilanganKedua){
        this._bilanganPertama = bilanganPertama;
        this._bilanganKedua = bilanganKedua;
    }
    set bilanganPertama(value){
        this._bilanganPertama = value;
    }
    set bilanganKedua(value){
        this._bilanganKedua = value;
    }
    get bilanganPertama(){
        return this._bilanganPertama;
    }
    get bilanganKedua(){
        return this._bilanganKedua;
    }
    tambah(){
        let hasil = parseInt(this._bilanganPertama) + parseInt(this._bilanganKedua);
        return hasil;
    }
}
function isiTemp(){
    var myObj = new operasi();
    var bilanganPertama = document.querySelector('#bilanganPertama').value;
    var bilanganKedua = document.querySelector('#bilanganKedua').value;
    myObj.bilanganPertama = bilanganPertama;
    myObj.bilanganKedua = bilanganKedua;
    var hasil = myObj.tambah();
    document.querySelector('#hasil').value = hasil;
}
var objPertama = document.querySelector('#bilanganPertama');
objPertama.addEventListener('keyup',isiTemp);
var objKedua = document.querySelector('#bilanganKedua');
objKedua.addEventListener('keyup',isiTemp);