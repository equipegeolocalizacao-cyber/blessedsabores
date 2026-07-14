const fs = require("fs");
const path = require("path");

const pastaProjeto = path.join(__dirname, "..");

// extensões onde procurar referências
const extensoes = [
    ".tsx",
    ".ts",
    ".jsx",
    ".js",
    ".html",
    ".css"
];

// extensões de imagens a substituir
const regex = /\.(png|jpg|jpeg)/gi;

function percorrer(dir) {
    const arquivos = fs.readdirSync(dir);

    for (const arquivo of arquivos) {

        const caminho = path.join(dir, arquivo);
        const stat = fs.statSync(caminho);

        if (stat.isDirectory()) {

            // ignora dependências
            if (
                arquivo === "node_modules" ||
                arquivo === ".git" ||
                arquivo === "dist" ||
                arquivo === "build"
            ) {
                continue;
            }

            percorrer(caminho);
            continue;
        }

        if (!extensoes.includes(path.extname(caminho)))
            continue;

        let conteudo = fs.readFileSync(caminho, "utf8");

        const novoConteudo = conteudo.replace(regex, ".webp");

        if (conteudo !== novoConteudo) {

            fs.writeFileSync(caminho, novoConteudo);

            console.log("Atualizado:", path.relative(pastaProjeto, caminho));
        }
    }
}

percorrer(pastaProjeto);

console.log("\n==================================");
console.log("Conversão das referências concluída.");
console.log("==================================");