// quotes.js
var quotes = [
    { phrase: "31-12-2023. Valido a Partir de 01-01-2024, mas ja pode olhar umas funcionalidades", date: "31-12-2023", color: "##5bc0de" },
    { phrase: "01-01-2024. Hoje mais um ano começa, não posso te dar o abraço que quero agora, mas saiba que quando deram 00h e foquetes estouravam nos céus  eu tava pensando em ti, que nesse novo ano, possam surgir muitas oportunidades desafios e conquistas, vai nosso primeiro ano como casal, tudo bom pra gente, Te amo muito minha princesa e quero estar do teu lado em cada momento desse novo ano que se inicia, Feliz ano novo minha princesa:)", date: "01-01-2024", color: "#d9534f" },
    { phrase: "02-01-2024. Hoje é dia 2, ja passou um dia, e hora de deixar as metas pra esse ano bem alinhadas e começar a trabalhar pra realizar elas, to aqui ctg minha princesa", date: "02-01-2024", color: "#5bc0de" },
    { phrase: "03-01-2024. A vida é uma jornada incrível, e eu sou a pessoa mais feliz do mundo por te ter ao meu lado, compartilhando cada momento. Que este ano seja cheio de aventuras, descobertas e desafio para gente, Te Amo S2", date: "03-01-2024", color: "#5cb85c" },
    { phrase: "04-01-2024. Não importa quão longa seja a jornada, o primeiro passo é sempre o mais importante. Acredite em si mesmo, siga em frente e conquiste cada desafio com determinação. Teu potencial é ilimitado, e tu é a pessoa mais incrivel que eu conheco", date: "04-01-2024", color: "#f0ad4e" },
    { phrase: "05-01-2024. O sol brilha mais forte quando estou ao seu lado, iluminando nossos dias com a luz do amor. Que este ano seja repleto de momentos ensolarados para nós dois, ", date: "05-01-2024", color: "#5bc0de" },
    { phrase: "06-01-2024. Cada novo dia é uma nova página em branco, prontinhaa para ser preenchida com histórias de amor e alegria e as vezes com problemas. Que possamos escrever juntos as mais incriveis páginas da nossa história", date: "06-01-2024", color: "#d9534f" },
    { phrase: "07-01-2024. Hoje não tem frase, to morrendo de saudade de ti, tem um desafio aqui, Me surprenda", date: "07-01-2024", color: "#f0ad4e" },
    { 
        phrase: "08-01-2024. Eu amo teu cheiro, ele  é como uma doce canção que embala nossos momentos juntos. Que cada fragrância  é um lembrete do carinho que compartilhamos e da beleza única que é estar ao teu lado. Te Amo princesa",
        date: "08-01-2024",
        color: "#f0ad4e"
    },
      {
        phrase: "09-01-2024. Hoje é dia de falar de umas das coias que me conquistou por primeiro, tua personalidade e forma de agir brilhou como uma estrela no céu noturno. A gentileza, a compaixão e a força que vejo em ti são motivos constantes para me apaixonar ainda mais. Obrigado por seres quem és e por fazer parte da minha vida. Feliz dia 9 pra gente, Te Amo mil milhoes meu anjo",
        date: "09-01-2024",
        color: "#5cb85c"
      },
      {
        phrase: "10-01-2024. O beijo perfeito. Estavamos tremendo e sem saber ao certo oq tinha acontecido, foi simplemente magico e um passos mais importantes para dar esse passo. Obrigado por tudo vida :)",
        date: "10-01-2024",
        color: "#d9534f"
      },
      {
        phrase: "11-01-2024. Teu sorriso é a pintura mais bela e esta estampada em cada página da história que estamos a escrever. Não tenho mais palavras pra descrever ele, ele é perfeito S2",
        date: "11-01-2024",
        color: "#5bc0de"
      },
      {
        phrase: "12-01-2024. O cheiro do teu abraço é o aroma que acalma minha alma. Que cada abraço seja um lembrete do conforto que encontramos um no outro, tornando este dia especial com a ternura que só nós sabemos proporcionar.",
        date: "12-01-2024",
        color: "#d9534f"
      },
      {
        phrase: "13-01-2024. A essência do teu caráter ilumina nossos dias como um farol guia. Que este dia seja repleto de momentos que destacam a beleza única do que construímos juntos, com a solidez do teu caráter incrível.",
        date: "13-01-2024",
        color: "#5cb85c"
      },
      {
        phrase: "14-01-2024. Cada beijo trocado é um capítulo a mais na história do nosso amor. Que este dia seja marcado por beijos perfeitos e momentos apaixonados, criando uma narrativa única que só nós compartilhamos.",
        date: "14-01-2024",
        color: "#f0ad4e"
      },
      {
        phrase: "15-01-2024.No momento em que percebi que minha melhor amiga era mais do que uma grande amiga, uma conexão tranquila ganhou fez surgir novos sentimentos antes nunca vistos, como se o tempo tivesse esculpido algo mais intenso entre nós. As batidas do coração passaram a seguir uma trilha diferente, revelando que algo especial florescia. Sem precisar de muitas palavras, descobri que me apaixonei pela menina mais perfeita, e hoje, ela me chama de Amor ❤️",
        date: "15-01-2024",
        color: "#f0ad4e"
      },
      {
        phrase: "16-01-2024. Todo dia que acordo, uma das primeiras coisas que imagino é nois dois, juntos, a gente vai desbravando novos horizontes. O futuro, com a gente, é tipo um filme de ação, cheio de coisas malucas, histórias, planos e possibilidade. Thayná, Tu é mulher mais incrivel desse mundo, Te Amo <3",
        date: "16-01-2024",
        color: "#e74c3c"
      },
      {
        phrase: "17-01-2024. Debaixo daquele céu estrelado, eu e você, nossos passos se misturam numa dança eterna. Nossos corações, eles são tipo coreógrafos, criando uma história que só a gente entende.",
        date: "17-01-2024",
        color: "#3498db"
      },
      {
        phrase: "18-01-2024.Dia de Desafio, Me surprenda usando a cor Verde.",
        date: "18-01-2024",
        color: "#3498db"
      },
      {
        phrase: "19-01-2024. A gente, a chama que nos impulsiona, sempre indo além. Somos tipo arquitetos de um destino cheio de conquistas que vai deixar todo mundo de queixo caído.",
        date: "19-01-2024",
        color: "#e74c3c"
      },
      {
        phrase: "20-01-2024. Cada olhar que a gente se troca, a gente descobre um universo único, palavras? Elas ficam meio bobas perto do que a gente sente. É como se o silêncio falasse mais alto.",
        date: "20-01-2024",
        color: "#3498db"
      },
      {
        phrase: "21-01-2024. Imagina a gente lá na frente, tipo velhinhos, ainda compartilhando risadas e carinho, nossos dias futuros vão ser tipo um filme romântico, só que melhor.",
        date: "21-01-2024",
        color: "#f39c12"
      },
      {
        phrase: "18-01-2024. Nossos sonhos, a gente vai construir juntos, tipo arquitetos do amor. Nosso futuro? Ah, ele vai ser tipo grandioso, daqueles de fazer qualquer um morrer de inveja.",
        date: "18-01-2024",
        color: "#f39c12"
      },
      {
        phrase: "18-01-2024. Nossos sonhos, a gente vai construir juntos, tipo arquitetos do amor. Nosso futuro? Ah, ele vai ser tipo grandioso, daqueles de fazer qualquer um morrer de inveja.",
        date: "18-01-2024",
        color: "#f39c12"
      },
      {
        phrase: "21-01-2024. Imagina a gente lá na frente, tipo velhinhos, ainda compartilhando risadas e carinho, nossos dias futuros vão ser tipo um filme romântico, só que melhor.",
        date: "21-01-2024",
        color: "#f39c12"
      },
      {
        phrase: "22-01-2024. Quando você me beija, é como se cada beijo fosse um poema nos lábios, contando uma história de amor que nem o tempo entende. Cada toque, a história só fica mais emocionante.",
        date: "22-01-2024",
        color: "#3498db"
      },
      {
        phrase: "23-01-2024. A gente, como dois pássaros destemidos, voa acima das tempestades da vida. Nosso amor? Ele é a asa que nos faz alcançar alturas inimagináveis.",
        date: "23-01-2024",
        color: "#e74c3c"
      },
      {
        phrase: "24-01-2024. Nossos dias futuros são tipo telas em branco, esperando a gente preencher com pinceladas de um amor que se renova a cada instante. É como um quadro que nunca perde a cor.",
        date: "24-01-2024",
        color: "#f39c12"
      },
      {
        phrase: "25-01-2024. Quando a gente entrelaça as mãos, são juras feitas no silêncio, promessas que ecoam além do tempo. Cada passo é uma dança de eternidade, guiada pelo ritmo do nosso amor, que é só nosso.",
        date: "25-01-2024",
        color: "#3498db"
      }
      
];






