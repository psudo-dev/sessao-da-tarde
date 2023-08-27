"use strict";
const options = {
	diasDaSemana: [
		"Nesta Segunda-Feira",
		"Nesta Terça-Feira",
		"Nesta Quarta-Feira",
		"Nesta Quinta-Feira",
		"Nesta Sexta-Feira",
	],
	atores: [
		"Steve Martin",
		"Chevy Chase",
		"Eddie Murphy",
		"Denny Devitto",
		"Bill Murray",
		"John Candy",
		"Tom Hanks",
		"Sylvester Stallone",
		"Arnold Schwarzenegger",
	],
	papel: [
		["é o líder de uma turma", "essa galerinha"],
		["é o irmão mais velho de Rick Moranis,", "essa dupla"],
		["renasce como um cachorro", "esse cachorro"],
		["é um policial", "esse tira"],
	],
	enredo: [
		"que é acusado injustamente por um crime que não cometeu",
		"que acaba de pintar na área",
		"que recebe um estranho presente",
		"que tem um talento muito especial",
	],
	option1: ["Vai rolar", "Será", "Vai sobrar", "Vocês verão"],
	option2: ["uma tremenda", "uma grande", "muita"],
	fraseDeEfeito1: [
		"ninguém botar defeito",
		"todo mundo",
		"dar e vender",
		"todos os lados",
	],
	fraseDeEfeito2: [
		"detonar tudo",
		"encarar esse desafio",
		"jogar tudo pro alto",
		"botar pra quebrar",
	],
	adjetivo1: ["emocionante", "eletrizante", "incrível", "fantástica"],
	option3: ["jornada", "missão", "fuga", "viagem"],
	adjetivo2: ["aventura", "agito", "zoação", "diversão"],
	adjetivo3: [
		"muitas enrascadas",
		"muita azaração",
		"muitas roubadas",
		"altas frias",
	],
};
const randomizer = (optionsObject) => {
	const optionsToArray = Object.values(optionsObject);
	const optionsArray = [];
	optionsToArray.forEach((option) => {
		const index = Math.floor(Math.random() * option.length);
		const random = option[index];
		if (Array.isArray(random)) {
			optionsArray.push(random[0]);
			optionsArray.push(random[1]);
		} else {
			optionsArray.push(random);
		}
	});
	return {
		diaDaSemana: optionsArray[0],
		ator: optionsArray[1],
		papel1: optionsArray[2],
		papel2: optionsArray[3],
		enredo: optionsArray[4],
		option1: optionsArray[5],
		option2: optionsArray[6],
		fraseDeEfeito1: optionsArray[7],
		fraseDeEfeito2: optionsArray[8],
		adjetivo1: optionsArray[9],
		option3: optionsArray[10],
		adjetivo2: optionsArray[11],
		adjetivo3: optionsArray[12],
	};
};

const chamada = (selectedOptions) => {
	// text contructor
	const text = `Embarque em mais um grande sucesso do cinema: ${selectedOptions.ator} ${selectedOptions.papel1} ${selectedOptions.enredo}. ${selectedOptions.option1} ${selectedOptions.option2} confusão para ${selectedOptions.fraseDeEfeito1} quando ${selectedOptions.papel2} resolve ${selectedOptions.fraseDeEfeito2}. Uma ${selectedOptions.adjetivo1} ${selectedOptions.option3} em que não vai faltar ${selectedOptions.adjetivo2} e ${selectedOptions.adjetivo3}!`;
	document.querySelector(
		".card-subtitle"
	).textContent = `${selectedOptions.diaDaSemana}`;
	document.querySelector(".card-text").textContent = text;
};

chamada(randomizer(options));
document.querySelector("button").addEventListener("click", () => {
	chamada(randomizer(options));
});
