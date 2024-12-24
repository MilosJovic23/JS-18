

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
			throw new Error("morate naznaciti sve osobine jedne osobe");
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


let petar = new Osoba("Toma", "Nikolic", "M");

petar.tezina = 90;
petar.visina = 180;
petar.bojaOciju = "Smedja";
petar.Pozdravi();

let martina = new Osoba("Martina", "Martinovic", "Z");
martina.visina = 168;
martina.tezina = 55;
martina.bojaOciju = "plava";
martina.Pozdravi();

let jelena = new Osoba("Jelena", "Nikolic", "Z");

jelena.visina = 171;
jelena.bojaOviua = "plava";
jelena.Pozdravi();
