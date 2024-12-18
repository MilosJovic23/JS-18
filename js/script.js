//

//

//

// Klasa- definicije necega
//
// svaka osoba ime karakteristika a one su ime, prezime , tezina..
//
//  new Osoba --napravili smo novi objekat

//

class Osoba {
	ime;
	prezime;
	tezina;
	visina;
	bojaOciju;
	pol;

	constructor(ime, prezime, pol) {
		if (
			typeof ime === "undefined" ||
			typeof prezime === "undefined" ||
			typeof pol === "undefined"
		) {
			throw new Error("morate sve osobine jedne osobe");
		}

		this.ime = ime;
		this.prezime = prezime;
		this.pol = pol;
	}

	Pozdravi() {
		if (this.pol === "M") {
			console.log(
				"Pozdrav ja se zovem " +
					this.ime +
					" " +
					this.prezime +
					" a visok sam " +
					this.visina
			);
		} else {
			console.log(
				"Pozdrav ja se zovem " +
					this.ime +
					" " +
					this.prezime +
					" a visoka sam " +
					this.visina
			);
		}
	}
}

/// istrazi kontsturktore i napravi da se ime prezime i pol moraju uneti

let petar = new Osoba("Toma", "Nikolic", "M");

petar.tezina = 90;
petar.visina = 180;
petar.bojaOciju = "Smedja";
petar.Pozdravi();

// console.log(petar);

let martina = new Osoba("Martina", "Martinovic", "Z");
martina.visina = 168;
martina.tezina = 55;
martina.bojaOciju = "Plava";
martina.Pozdravi();

let jelena = new Osoba("Jelena", "Nikolic", "Z");

jelena.visina = 171;
jelena.bojaOviua = "plava";
jelena.Pozdravi();
// console.log(martina);

/// bonus vezba --Pozdrav ja se zovem IME PREZIME visok/a sam VISINA.

// Domaci:

// * Napraviti klasu Vozilo
//      * Boja
//      * Vrsta(vrsta moze biti automobil, letelica ili plovilo)
//
//  * Napraviti klasu Automobil
//      * Marka
//      * MOdel
//      * Broj vrata (3 ili 5)
//      * Gorivo (benzin, dizel ili metan)
//
