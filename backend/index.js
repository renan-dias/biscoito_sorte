const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const frase = [
    {
        msg: "Não desista agora... deixe pra desistir amanhã.",
        gif: "https://media.giphy.com/media/3o7abldj0b3rxrZUxW/giphy.gif"
    },
    {
        msg: "O primeiro passo para o sucesso é levantar da cama. O segundo é tomar café.",
        gif: "https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif"
    },
    {
        msg: "Se tudo está sob controle, você não está indo rápido o suficiente.",
        gif: "https://media.giphy.com/media/l0ExdMHUDKteztyfe/giphy.gif"
    },
    {
        msg: "Errar é humano. Culpar outra pessoa é estratégia.",
        gif: "https://media.giphy.com/media/3orieRzF2lW6c4bC52/giphy.gif"
    },
    {
        msg: "Você é incrível... mas ainda precisa responder aquele e-mail.",
        gif: "https://media.giphy.com/media/l0HlQ7LRalXh8ggWk/giphy.gif"
    },
    {
        msg: "Sonhe grande. Mas não esqueça de colocar o despertador.",
        gif: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif"
    },
    {
        msg: "O impossível só leva mais tempo... e mais café.",
        gif: "https://media.giphy.com/media/26u4nJPf0JtQPdStq/giphy.gif"
    },
    {
        msg: "Você tem 100% de chance de não conseguir se não tentar.",
        gif: "https://media.giphy.com/media/3oKIPwoeGErMmaI43K/giphy.gif"
    },
    {
        msg: "Seja a pessoa que seu cachorro acha que você é.",
        gif: "https://media.giphy.com/media/3oEduSbSGpGaRX2Vri/giphy.gif"
    },
    {
        msg: "Quando tudo falhar, sorria e finja que era parte do plano.",
        gif: "https://media.giphy.com/media/26BRuo6sLetdllPAQ/giphy.gif"
    },
    {
        msg: "Acredite: até o Wi-Fi tem dias ruins.",
        gif: "https://media.giphy.com/media/l0MYFReY9XWfFdw5K/giphy.gif"
    },
    {
        msg: "Corra atrás dos seus sonhos... mas não esqueça de alongar antes.",
        gif: "https://media.giphy.com/media/3o6ZsU2zF7gqOTizna/giphy.gif"
    },
    {
        msg: "Não é preguiça, é modo economia de energia.",
        gif: "https://media.giphy.com/media/l0MYJZ0b8n1acE8rm/giphy.gif"
    },
    {
        msg: "Toda grande jornada começa com um passo... ou um tropeço.",
        gif: "https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif"
    },
    {
        msg: "Lembre-se: o fracasso é só o sucesso tentando se disfarçar.",
        gif: "https://media.giphy.com/media/3o7TKtnuHOHHUjR38Y/giphy.gif"
    }
];

app.get("/frase", (req, res) => {
    const numeroAleatorio = Math.floor(Math.random() 
    + frase.length);
    res.json(frase[numeroAleatorio]);
} );

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Servidor está rodando com sucesso ${PORT}'));