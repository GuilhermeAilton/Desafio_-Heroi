const nome = 'Guilherme';
const xp = 4500; // Substitua por um valor de XP válido
let nivel;

if (xp < 1000) {
    nivel = "Ferro";
} else if (xp < 2001) {
    nivel = "Bronze";
} else if (xp < 5001) {
    nivel = "Prata";
} else if (xp < 7001) {
    nivel = "Ouro";
} else if (xp < 8001) {
    nivel = "Platina";
} else if (xp < 9001) {
    nivel = "Ascendente";
} else if (xp < 10001) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

console.log(`O Herói de nome ${nome} está no nível de ${nivel}.`);


