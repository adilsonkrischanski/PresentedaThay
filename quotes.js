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
      },
      {
        phrase: "26-01-2024. Play no nosso dia :)",
        date: "26-01-2024",
        color: "#3498db"
      },
      {
        phrase: "27-01-2024. Amor, nem sempre as coisas acontecem na ordem e na hora que planejamos, as vezes o universo simplismente nos surprende, mas indendenetemente de oque ele nos reserve, saiba que tu sempre pode contar comigo, eu te amo muito e sou muito grato por te ter na minha vida. Simplismente Te Amo. PS. Essa não era a frase de hj :)",
        date: "27-01-2024",
        color: "#3498db"
      },
      {
        phrase: "28-01-2024. Em cada batida do meu coração, ecoa o som do nosso amor eterno. Você é a melodia que faz minha vida mais doce.",
        date: "28-01-2024",
        color: "#e74c3c"
      },
      {
        phrase: "29-01-2024. Nosso amor é como uma constelação única no céu, brilhando intensamente e iluminando os nossos caminhos juntos.",
        date: "29-01-2024",
        color: "#3498db"
      },
      {
        phrase: "30-01-2024. Cada momento ao seu lado é um capítulo da nossa história de amor, e mal posso esperar para escrever muitos mais ao seu lado.",
        date: "30-01-2024",
        color: "#e74c3c"
      },
      {
        phrase: "31-01-2024. Dia de Desafio, Me manda um video fazendo Brigadeiro :)",
        date: "31-01-2024",
        color: "#3498db"
      },
      {
        phrase: "01-02-2024. Como as ondas que beijam a areia, meu amor por você é constante e eterno. Cada momento contigo é uma maré de felicidade.",
        date: "01-02-2024",
        color: "#e74c3c"
      },
      {
        phrase: "02-02-2024. Entre bilhões de estrelas no universo, você é a única que ilumina o meu coração. Te amo além das galáxias.",
        date: "02-02-2024",
        color: "#3498db"
      },
      {
        phrase: "03-02-2024. Assim como o sol nasce a cada manhã, meu amor por você se renova a cada dia. Você é a luz que aquece minha alma.",
        date: "03-02-2024",
        color: "#e74c3c"
      },
      {
        phrase: "04-02-2024. Em cada sorriso seu, encontro a razão para ser feliz. Você é a luz que ilumina os meus dias mais sombrios.",
        date: "04-02-2024",
        color: "#3498db"
      },
      {
        phrase: "05-02-2024. Em meio ao caos do dia a dia ,pude  encontrar me ti o amor, é como descobrir um oásis no deserto. Seu abraço é a calmaria que meu coração precisa para enfrentar as tempestades.",
        date: "05-02-2024",
        color: "#e74c3c"
      },
      {
        phrase: "06-02-2024. Cada dia sabendo que tenho ao meu lado a pessoa mais maravilhosa do mundo é ter de que estamos juntos sendo os autores de uma narrativa cheia de emoções e momentos inesquecíveis.",
        date: "06-02-2024",
        color: "#3498db"
      },
      {
        phrase: "07-02-2024. Amar não é olhar um para o outro, é olhar juntos na mesma direção. Nossa jornada é marcada pela união de nossos olhares, rumo a um futuro cheio de realizações.",
        date: "07-02-2024",
        color: "#2ecc71"
      },
      {
        phrase: "08-02-2024. A vida é feita de escolhas, e eu escolhi te escolher todos os dias. Em cada decisão, encontro a felicidade de ter o amor mais genuíno ao meu lado, iluminando meu caminho.",
        date: "08-02-2024",
        color: "#f39c12"
      },
      {
        phrase: "09-02-2024. Hoje fazem 4 meses do nosso primeiro beijo, e com toda certeza aqueles minutinhos foram um dos mais importantes da nossa vida, foi um beijo que mudou o rumo da historia, muito obrigado por cada momento ao teu lado, eu te amo muito muito muito S2 ",
        // phrase: "09-02-2024. Eu não tenho palavras pra descrer o tamanho dos meus sentimentos por ti, dia de te ver chegou :) TEEE AMOOOOOOO <3 <3 <3",
        date: "09-02-2024",
        color: "#9b59b6"
      },
      {
        phrase: "10-02-2024. Em meio aos desafios, lembre-se de que as estrelas só brilham no céu noturno. Nossos momentos difíceis são a tela escura que destaca o brilho intenso da nossa superação.",
        date: "10-02-2024",
        color: "#e74c3c"
      },
    
      {
        phrase: "11-02-2024. Nosso amor é como uma sinfonia harmoniosa, onde cada nota é uma expressão do nosso carinho e cuidado um pelo outro.",
        date: "11-02-2024",
        color: "#3498db"
      },
      {
        phrase: "12-02-2024. Assim como o sol aquece a terra, seu amor aquece minha alma e ilumina meus dias. Você é meu raio de luz constante.",
        date: "12-02-2024",
        color: "#e74c3c"
      },
      {
        phrase: "13-02-2024. Em cada abraço seu, encontro o conforto que preciso para enfrentar os desafios da vida. Você é meu porto seguro.",
        date: "13-02-2024",
        color: "#3498db"
      },
      {
        phrase: "14-02-2024. Feliz Dia dos Namorados! Que este dia seja apenas uma amostra do amor que compartilhamos todos os dias. Te amo além das palavras.",
        date: "14-02-2024",
        color: "#e74c3c"
      },
      {
        phrase: "15-02-2024. Em cada olhar seu, encontro a paz que tanto busquei. Você é minha tranquilidade em meio ao caos do mundo.",
        date: "15-02-2024",
        color: "#3498db"
      },
      {
        phrase: "16-02-2024. Hojee é dia de ter ver, mal posso esperar pelo pra te abraçar, te beijar e ter só pra mim, loguinho to chegando ai, te amoooo S2",
        date: "16-02-2024",
        color: "#e74c3c"
      },
      {
        phrase: "17-02-2024. Nosso amor é como uma poesia sem fim, onde cada verso é uma declaração do nosso sentimento mais profundo.",
        date: "17-02-2024",
        color: "#3498db"
      },
      {
        phrase: "18-02-2024. Como o vento que acaricia suavemente a pele, seu amor me envolve e me faz sentir vivo. Você é minha brisa constante.",
        date: "18-02-2024",
        color: "#e74c3c"
      },
      {
        phrase: "19-02-2024. Entre todos os caminhos que poderia seguir, escolhi o que me leva até você. Pois é ao seu lado que encontro minha verdadeira jornada.",
        date: "19-02-2024",
        color: "#3498db"
      },
      {
        phrase: "20-02-2024. Como as flores que desabrocham na primavera, nosso amor floresce a cada novo dia, trazendo cor e beleza às nossas vidas.",
        date: "20-02-2024",
        color: "#e74c3c"
      },
      {
        phrase: "21-02-2024. Em cada momento ao seu lado, descubro novas razões para te amar ainda mais. Você é a essência da minha felicidade.",
        date: "21-02-2024",
        color: "#3498db"
      },
      {
        phrase: "22-02-2024. Se o amor fosse uma jornada, eu escolheria você como minha companheira de viagem para toda a eternidade. Te amo além do infinito.",
        date: "22-02-2024",
        color: "#e74c3c"
      },
      {
        phrase: "23-02-2024. Assim como as estrelas no céu, nosso amor é infinito e eterno. Brilharemos juntos por toda a eternidade.",
        date: "23-02-2024",
        color: "#3498db"
      },
      {
        phrase: "24-02-2024. Em cada sonho que tenho, você é a estrela guia que ilumina meu caminho. Com você, meus sonhos se tornam realidade.",
        date: "24-02-2024",
        color: "#e74c3c"
      },
      {
        phrase: "25-02-2024. Nosso amor é como uma chama ardente que nunca se apaga, mesmo nos momentos mais sombrios. Você é minha luz perpétua.",
        date: "25-02-2024",
        color: "#3498db"
      },
      {
        phrase: "26-02-2024. Assim como as ondas que beijam a costa, seu amor é suave e reconfortante. Você é minha calmaria em meio à tempestade.",
        date: "26-02-2024",
        color: "#e74c3c"
      },
      {
        phrase: "27-02-2024. Em cada sorriso seu, encontro a razão para ser feliz. Seu amor é o presente mais precioso que já recebi.",
        date: "27-02-2024",
        color: "#3498db"
      },
      {
        phrase: "28-02-2024. Se o amor fosse uma estrela, você seria o brilho mais intenso do céu. Com você, minha vida é um infinito céu estrelado.",
        date: "28-02-2024",
        color: "#e74c3c"
      },
      {
        phrase: "29-02-2024. Vamos agradecer por 2024 ser um ano  bissexto,Nesse Ano tenho um dia a mais pra te amar S2.",
        date: "29-02-2024",
        color: "#3498db"
      },
      
      {
        "phrase": "01-03-2024. Cada amanhecer sabendo que realizei o sonho de namorar a mulher mais maravilhosa do mundo é um lembrete do quanto sou abençoado por ter você em minha vida. TE AMOO",
        "date": "01-03-2024",
        "color": "#e74c3c"
      },
      {
        "phrase": "02-03-2024. Seu sorriso é a luz que ilumina até mesmo os dias mais sombrios.",
        "date": "02-03-2024",
        "color": "#9b59b6"
      },
      {
        "phrase": "03-03-2024. Com você, cada obstáculo parece uma oportunidade de crescimento e aprendizado.",
        "date": "03-03-2024",
        "color": "#2ecc71"
      },
      {
        "phrase": "04-03-2024. Sua presença é como um abraço caloroso que acalma todas as minhas preocupações.",
        "date": "04-03-2024",
        "color": "#3498db"
      },
      {
        "phrase": "05-03-2024. O amor que compartilhamos é o tesouro mais precioso que guardo em meu coração.",
        "date": "05-03-2024",
        "color": "#e67e22"
      },
      {
        "phrase": "06-03-2024. Seu apoio incondicional é o alicerce sobre o qual construo meus sonhos mais ousados.",
        "date": "06-03-2024",
        "color": "#f1c40f"
      },
      {
        "phrase": "07-03-2024. Em seus braços, encontro o conforto e a segurança que alimentam minha alma.",
        "date": "07-03-2024",
        "color": "#1abc9c"
      },
      {
        "phrase": "08-03-2024. Você é a musa por trás de cada verso que escrevo, cada música que componho.",
        "date": "08-03-2024",
        "color": "#34495e"
      },
      {
        "phrase": "09-03-2024. Com você, descobri que o verdadeiro significado da felicidade está nas pequenas coisas da vida.",
        "date": "09-03-2024",
        "color": "#f39c12"
      },
      {
        "phrase": "10-03-2024. Suas palavras de encorajamento são o impulso que preciso para seguir em frente, mesmo nos dias difíceis.",
        "date": "10-03-2024",
        "color": "#8e44ad"
      },
      {
        "phrase": "11-03-2024. Seu amor é o farol que me guia através das águas turbulentas da vida.",
        "date": "11-03-2024",
        "color": "#d35400"
      },
      {
        "phrase": "12-03-2024. Com você, cada dia é uma aventura cheia de risos, amor e memórias preciosas.",
        "date": "12-03-2024",
        "color": "#27ae60"
      },
      {
        "phrase": "13-03-2024. Seus abraços são meu refúgio seguro em um mundo cheio de caos e incerteza.",
        "date": "13-03-2024",
        "color": "#c0392b"
      },
      {
        "phrase": "14-03-2024. O brilho em seus olhos é o reflexo da felicidade que você trouxe para minha vida.",
        "date": "14-03-2024",
        "color": "#bdc3c7"
      },
      {
        "phrase": "15-03-2024. Hoje o aniversaario é meu e te ter na minha vida é o mior presente que eu podia receber, tu é uma mulher incrivel e faz meus dias serem muito melhores. TE AMOOO MEU ANJOOO.",
        "date": "15-03-2024",
        "color": "#bdc3c7"
      },
      {
        "phrase": "16-03-2024. Seu amor me dá asas para voar mais alto do que jamais imaginei ser possível.",
        "date": "16-03-2024",
        "color": "#3498db"
      },
      {
        "phrase": "17-03-2024. Nas suas mãos, encontro a paz que tanto anseio em meio ao frenesi da vida cotidiana.",
        "date": "17-03-2024",
        "color": "#e74c3c"
      },
      {
        "phrase": "18-03-2024. Com você, aprendi que o verdadeiro amor é paciente, gentil e eterno.",
        "date": "18-03-2024",
        "color": "#9b59b6"
      },
      {
        "phrase": "19-03-2024. Seu riso contagia minha alma e enche meu coração de alegria.",
        "date": "19-03-2024",
        "color": "#2ecc71"
      },
      {
        "phrase": "20-03-2024. Cada momento ao seu lado é uma dádiva preciosa que guardarei para sempre.",
        "date": "20-03-2024",
        "color": "#f1c40f"
      },
      {
        "phrase": "21-03-2024. O amor que sinto por você transcende qualquer barreira, desafio ou distância.",
        "date": "21-03-2024",
        "color": "#1abc9c"
      },
      {
        "phrase": "22-03-2024. Seus sonhos se tornam meus sonhos, e juntos construímos um futuro repleto de possibilidades infinitas.",
        "date": "22-03-2024",
        "color": "#8e44ad"
      },
      {
        "phrase": "23-03-2024. Suas mãos são meu porto seguro em um mar de incertezas e tempestades.",
        "date": "23-03-2024",
        "color": "#d35400"
      },
      {
        "phrase": "24-03-2024. O toque suave dos seus lábios é o bálsamo que acalma minha alma inquieta.",
        "date": "24-03-2024",
        "color": "#27ae60"
      },
      {
        "phrase": "25-03-2024. Seu amor é a música que embala meus dias, trazendo harmonia a cada momento.",
        "date": "25-03-2024",
        "color": "#c0392b"
      },
      {
        "phrase": "26-03-2024. Com você, descobri o verdadeiro significado da palavra 'felicidade'.",
        "date": "26-03-2024",
        "color": "#bdc3c7"
      },
      {
        "phrase": "27-03-2024. Seus olhos são espelhos que refletem a beleza da sua alma e a profundidade do seu amor.",
        "date": "27-03-2024",
        "color": "#3498db"
      },
      {
        "phrase": "28-03-2024. O laço que nos une é tão forte que nem mesmo o tempo pode desfazê-lo.",
        "date": "28-03-2024",
        "color": "#e74c3c"
      },
      {
        "phrase": "29-03-2024. Seu amor me dá coragem para enfrentar todos os desafios que a vida coloca em nosso caminho.",
        "date": "29-03-2024",
        "color": "#9b59b6"
      },
      {
        "phrase": "30-03-2024. Cada dia ao seu lado é uma nova página em nossa história de amor, esperando para ser escrita.",
        "date": "30-03-2024",
        "color": "#2ecc71"
      },
      {
        "phrase": "31-03-2024. Obrigado por ser a luz da minha vida, a inspiração por trás de cada sorriso e a razão do meu coração bater mais forte a cada dia.",
        "date": "31-03-2024",
        "color": "#f39c12"
      }
      
      

      
];






