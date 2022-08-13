

document.getElementById("osszeadas").addEventListener("click", function () {
    
    var eredmeny = document.getElementById("eredmeny");

    var szam1 = parseInt(document.getElementById("szam1").value);
    var szam2 = parseInt(document.getElementById("szam2").value);

    eredmeny.value = szam1 + szam2;
})

document.getElementById("kivonas").addEventListener("click", function () {

    var eredmeny = document.getElementById("eredmeny");

    var szam1 = parseInt(document.getElementById("szam1").value);
    var szam2 = parseInt(document.getElementById("szam2").value);
    eredmeny.value= szam1 - szam2;
})

document.getElementById("szorzas").addEventListener("click", function () {

    var eredmeny = document.getElementById("eredmeny");

    var szam1 = parseInt(document.getElementById("szam1").value);
    var szam2 = parseInt(document.getElementById("szam2").value);

    eredmeny.value = szam1 * szam2;
})

document.getElementById("osztas").addEventListener("click", function () {

    var eredmeny = document.getElementById("eredmeny");

    var szam1 = parseInt(document.getElementById("szam1").value);
    var szam2 = parseInt(document.getElementById("szam2").value);

    eredmeny.value = szam1 / szam2;
})