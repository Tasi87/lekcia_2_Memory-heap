const x = 5 + 3;

/**
//note	Parser je nástroj, ktorý analyzuje text podľa určitých pravidiel a prevedie ho na štruktúrovanú formu (napr. objekt alebo strom).

	//!	Toto je rozparsovanie prvkov na tokeny:

	const	-	kľučové slovo
	x		-	identifikátor
	=		-	operátor
	5		-	číslo
	+		-	operátor
	3		-	číslo
	;		-	bodkočiarka

//note	AST (Abstract Syntax Tree) je stromová dátová štruktúra, ktorá reprezentuje syntaktickú 	štruktúru zdrojového kódu po tom, čo ho parser spracuje. 
//note	AST je strom, ktorý popisuje, z akých častí sa skladá program a ako spolu súvisia.

//note	Interpreter interpetuje kód, ktorý mu dorazí. Ide riadok po riadku kódu.
			Výsledkom Interpretru je Bytecode.

Jazyky delíme na:
	-	Interpretované
	-	Kompilované

//note	Profiler/Monitor je nástroj na analýzu výkonu programu, ktorý ukazuje, ktoré časti kódu sú najpomalšie alebo najnáročnejšie.
		//! Ide riadok po riadku.

//note	Compiler vezme celý kód a prekladá ho na nový jazyk.
*/

// Interpretor vs Compiler
// Interpretor	-	riadok po riadku, pomalší. rýchlejší -> pomalejší
// Compiler		-	celý kód naraz, rýchlejší. pomalejší -> rýchlejší (optimalizuje rýchlosť)

const sum = (num1, num2) => {
	return num1 + num2
}

for (let i = 0; i < 1000; i++) {
	sum(5, 10);
}

// Just in time compiler	-	spojenie výhod Interpretoru a Compileru

//note	Optimalizovaný kód
//			eval()
//			arguments
//			for in
//			with
//			delete
//			hidden classes


//bug		hidden classes

class Animal {
		constructor(x, y) {
			this.x = x
			this.y = y
		}
}

const obj1 = new Animal(1, 2);
const obj2 = new Animal(3, 4);

// toto sú tie hidden classes (nie sú definované v class):
//! !!!	TAKTO SA TO NEROBÍ	!!! Je to len príklad
obj1.a = 5;
obj1.b = 6;
obj2.a = 10;
obj2.b = 11;

console.log(obj1);
console.log(obj2);

//bug		delete

//!	Snažíme sa nepoužívať, vytvára neoptimalizovaný kód
delete obj1.a;

console.log(obj1);
console.log(obj2);