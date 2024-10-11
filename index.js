// Função para determinar o nível do herói
function determinarNivel(nome, xp) {
    let nivel;

    // Estrutura de decisão para determinar o nível com base na XP
    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else { // xp >= 10001
        nivel = "Radiante";
    }

    // Exibir a mensagem final
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}.`);
}

// Solicitar o nome e a quantidade de XP do herói
const nome = 'guilherme';
const xp = parseInt(4)

// Chamar a função para determinar o nível
determinarNivel(nome, xp);
