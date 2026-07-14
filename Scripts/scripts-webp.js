const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const pasta = path.join(__dirname, "../client/public");

async function converter(dir) {
    const arquivos = fs.readdirSync(dir);

    for (const arquivo of arquivos) {
        const caminho = path.join(dir, arquivo);

        if (fs.statSync(caminho).isDirectory()) {
            await converter(caminho);
            continue;
        }

        if (!/\.(png|jpg|jpeg)$/i.test(arquivo)) {
            continue;
        }

        if (fs.statSync(caminho).size === 0) {
            console.log("Ignorado (arquivo vazio):", caminho);
            continue;
        }

        const destino = caminho.replace(/\.(png|jpg|jpeg)$/i, ".webp");

        await sharp(caminho)
            .webp({ quality: 82 })
            .toFile(destino);

        console.log("✔", destino);
    }
}

converter(pasta)
    .then(() => console.log("\nConversão concluída."))
    .catch(console.error);