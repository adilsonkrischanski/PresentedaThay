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
      },
      {
        "phrase": "01-04-2024: Em cada amanhecer, meu amor por você se renova, como se cada raio de sol trouxesse consigo mais motivos para te amar.",
        "date": "01-04-2024",
        "color": "#f39c12"
    },
    {
        "phrase": "02-04-2024: Nosso amor é a trilha sonora da minha vida, uma melodia suave que embala meus dias e me faz acreditar no poder do amor verdadeiro.",
        "date": "02-04-2024",
        "color": "#f39c12"
    },
    {
        "phrase": "03-04-2024: Que neste novo dia, nossos corações estejam alinhados em harmonia, dançando ao ritmo da paixão que nos une.",
        "date": "03-04-2024",
        "color": "#f39c12"
    },
    {
        "phrase": "04-04-2024: Como as flores que desabrocham, nosso amor floresce a cada dia, enchendo nossos dias de cores vibrantes e perfumes doces.",
        "date": "04-04-2024",
        "color": "#f39c12"
    },
    {
        "phrase": "05-04-2024: Que cada momento seja uma lembrança eterna do quanto você é especial para mim, inspirando-me a ser melhor a cada instante.",
        "date": "05-04-2024",
        "color": "#f39c12"
    },
    {
        "phrase": "06-04-2024: Em meio às brisas suaves, encontro a serenidade no calor do seu abraço, onde todo o universo parece se alinhar perfeitamente.",
        "date": "06-04-2024",
        "color": "#f39c12"
    },
    {
        "phrase": "07-04-2024: Se o amor fosse uma obra de arte, você seria minha mais bela pintura, minha escultura mais preciosa, meu tesouro mais valioso.",
        "date": "07-04-2024",
        "color": "#f39c12"
    },
    {
        "phrase": "08-04-2024: Hoje e sempre, prometo caminhar ao seu lado, enfrentando desafios e celebrando vitórias, pois juntos somos invencíveis.",
        "date": "08-04-2024",
        "color": "#f39c12"
    },
    {
        "phrase": "09-04-2024: Nosso amor é como uma chama que nunca se apaga, iluminando nossos caminhos mesmo nos momentos mais sombrios.",
        "date": "09-04-2024",
        "color": "#f39c12"
    },
    {
        "phrase": "10-04-2024: Que cada batida do meu coração seja um lembrete do quanto você é amado, do quanto você significa para mim, hoje e para sempre.",
        "date": "10-04-2024",
        "color": "#f39c12"
    },
    {
        "phrase": "11-04-2024: Em cada pôr do sol, encontro a certeza de que nosso amor é eterno, tão vasto quanto o horizonte que se estende diante de nós.",
        "date": "11-04-2024",
        "color": "#f39c12"
    },
    {
        "phrase": "12-04-2024: Como as estrelas no céu noturno, nosso amor brilha com intensidade, guiando-nos através das trevas e mostrando-nos o caminho para a felicidade.",
        "date": "12-04-2024",
        "color": "#f39c12"
    },
    {
        "phrase": "13-04-2024: Que este novo dia seja repleto de sorrisos, abraços e momentos que nos fazem sentir vivos, celebrando o amor que nos une.",
        "date": "13-04-2024",
        "color": "#f39c12"
    },
    {
        "phrase": "14-04-2024: Em cada palavra, em cada gesto, em cada olhar, encontro a certeza de que você é a minha pessoa especial, meu porto seguro, minha razão de viver.",
        "date": "14-04-2024",
        "color": "#f39c12"
    },
    {
        "phrase": "15-04-2024: Nosso amor é como uma história sem fim, onde cada capítulo é mais emocionante que o anterior, deixando-nos ansiosos para descobrir o que o futuro nos reserva.",
        "date": "15-04-2024",
        "color": "#f39c12"
    },
    {
        "phrase": "16-04-2024: Que hoje e sempre possamos ser como dois pássaros livres, voando juntos em direção aos nossos sonhos, alimentando-nos do amor que compartilhamos.",
        "date": "16-04-2024",
        "color": "#f39c12"
    },
    {
        "phrase": "17-04-2024: Em cada sorriso seu, encontro a paz que tanto busquei, a felicidade que sempre desejei e o amor que me completa.",
        "date": "17-04-2024",
        "color": "#f39c12"
    },
    {
        "phrase": "18-04-2024: Como as ondas que beijam a costa, nosso amor é constante e reconfortante, trazendo consigo uma sensação de calma e serenidade.",
        "date": "18-04-2024",
        "color": "#f39c12"
    },
    {
        "phrase": "19-04-2024: Que neste novo dia possamos nos lembrar do poder transformador do nosso amor, capaz de superar qualquer obstáculo que a vida nos apresentar.",
        "date": "19-04-2024",
        "color": "#f39c12"
    },
    {
        "phrase": "20-04-2024: Em cada abraço seu, encontro o lar que sempre procurei, o refúgio onde posso ser verdadeiramente eu mesmo, sem reservas, sem medo.",
        "date": "20-04-2024",
        "color": "#f39c12"
    },
    {
        "phrase": "21-04-2024: Como as estrelas que pontilham o céu noturno, nosso amor brilha com intensidade, iluminando nossos caminhos e guiando-nos para um futuro cheio de promessas.",
        "date": "21-04-2024",
        "color": "#f39c12"
    },
    {
        "phrase": "22-04-2024: Que hoje seja o início de uma nova jornada repleta de amor, cumplicidade e momentos inesquecíveis, onde cada dia seja mais especial que o anterior.",
        "date": "22-04-2024",
        "color": "#f39c12"
    },
    {
        "phrase": "23-04-2024: Nosso amor é como uma rosa em plena floração, desabrochando em sua plenitude e enchendo nossas vidas com sua beleza e fragrância irresistível.",
        "date": "23-04-2024",
        "color": "#f39c12"
    },
    {
        "phrase": "24-04-2024: Em cada momento ao seu lado, encontro a verdadeira essência da felicidade, a alegria que só o amor genuíno pode proporcionar.",
        "date": "24-04-2024",
        "color": "#f39c12"
    },
    {
        "phrase": "25-04-2024: Como os raios de sol que aquecem a terra, seu amor ilumina minha vida, trazendo calor e vitalidade a cada dia que passa.",
        "date": "25-04-2024",
        "color": "#f39c12"
    },
    {
        "phrase": "26-04-2024: Que neste novo amanhecer possamos renovar nossos votos de amor, comprometendo-nos a cuidar um do outro e a fazer deste mundo um lugar melhor juntos.",
        "date": "26-04-2024",
        "color": "#f39c12"
    },
    {
        "phrase": "27-04-2024: Em cada suspiro, em cada toque, em cada olhar, encontro a confirmação de que nosso amor é verdadeiro, profundo e eterno.",
        "date": "27-04-2024",
        "color": "#f39c12"
    },
    {
        "phrase": "28-04-2024: Nosso amor é como uma canção que ecoa pela eternidade, tocando os corações daqueles que têm a sorte de testemunhar sua beleza e grandeza.",
        "date": "28-04-2024",
        "color": "#f39c12"
    },
    {
        "phrase": "29-04-2024: Que hoje e sempre possamos celebrar o presente, honrar o passado e sonhar com o futuro, pois juntos não há limites para o que podemos alcançar.",
        "date": "29-04-2024",
        "color": "#f39c12"
    },
    {
        "phrase": "30-04-2024: Em cada desafio que enfrentamos juntos, fortalecemos nosso vínculo, solidificando nosso amor e provando que nada pode nos separar.",
        "date": "30-04-2024",
        "color": "#f39c12"
    },
    {
        "phrase": "01-05-2024: Hojeee é Diaaa de verrr meuu amorr",
        "date": "01-05-2024",
        "color": "#e74c3c"
    },
    {
        "phrase": "02-05-2024: Você é a luz que ilumina meus dias e o motivo de todos os meus sorrisos.",
        "date": "02-05-2024",
        "color": "#8e44ad"
    },
    {
        "phrase": "03-05-2024: Seu amor me dá forças para enfrentar qualquer desafio e me torna uma pessoa melhor.",
        "date": "03-05-2024",
        "color": "#3498db"
    },
    {
        "phrase": "04-05-2024: Em cada momento que passamos juntos, sinto que nosso amor só cresce e se fortalece. Tiiiii Ammuuuuuu ❤❤❤❤ ",
        "date": "04-05-2024",
        "color": "#2ecc71"
    },
    {
        "phrase": "05-05-2024: Sua presença é um presente que agradeço todos os dias, pois você é única e especial.",
        "date": "05-05-2024",
        "color": "#f1c40f"
    },
    {
        "phrase": "06-05-2024: Você é a razão pela qual acredito no amor verdadeiro e eterno. Tu é a melhorr coisa que ja me aconteceuu ❤❤❤",
        "date": "06-05-2024",
        "color": "#e67e22"
    },
    {
        "phrase": "07-05-2024: A cada olhar seu, sinto meu coração se aquecer e minha alma se encher de alegria.",
        "date": "07-05-2024",
        "color": "#d35400"
    },
    {
        "phrase": "08-05-2024: Seu carinho e apoio me dão forças para enfrentar qualquer obstáculo que a vida coloque em nosso caminho.",
        "date": "08-05-2024",
        "color": "#c0392b"
    },
    {
        "phrase": "09-05-2024: Ao seu lado, descobri que o amor verdadeiro é aquele que nos faz crescer e ser melhores a cada dia.",
        "date": "09-05-2024",
        "color": "#2980b9"
    },
    {
        "phrase": "10-05-2024: Você é a mulher mais incrível que já conheci, e sou eternamente grato por te ter na minha vida.",
        "date": "10-05-2024",
        "color": "#27ae60"
    },
    {
        "phrase": "11-05-2024: Seu amor me completa e me faz acreditar que juntos somos capazes de tudo.",
        "date": "11-05-2024",
        "color": "#8e44ad"
    },
    {
        "phrase": "12-05-2024: Cada momento ao seu lado é uma bênção e uma prova de que o amor verdadeiro existe.",
        "date": "12-05-2024",
        "color": "#f39c12"
    },
    {
        "phrase": "13-05-2024: Você é a estrela que guia meu caminho e a razão de todos os meus sonhos.",
        "date": "13-05-2024",
        "color": "#e74c3c"
    },
    {
        "phrase": "14-05-2024: Seu amor é a força que me impulsiona a ser melhor a cada dia.",
        "date": "14-05-2024",
        "color": "#8e44ad"
    },
    {
        "phrase": "15-05-2024: Você é a peça que faltava no meu quebra-cabeça, completando minha vida de maneira perfeita.",
        "date": "15-05-2024",
        "color": "#3498db"
    },
    {
        "phrase": "16-05-2024: Ao seu lado, encontrei a verdadeira felicidade e a certeza de que juntos podemos superar qualquer desafio.",
        "date": "16-05-2024",
        "color": "#2ecc71"
    },
    {
        "phrase": "17-05-2024: Sua presença em minha vida é um presente inestimável, e cada dia ao seu lado é uma bênção.",
        "date": "17-05-2024",
        "color": "#f1c40f"
    },
    {
        "phrase": "18-05-2024: Você é a mulher mais maravilhosa do mundo, e sou eternamente grato por tê-la ao meu lado.",
        "date": "18-05-2024",
        "color": "#e67e22"
    },
    {
        "phrase": "19-05-2024: Seu amor me dá a força necessária para enfrentar qualquer desafio e me faz acreditar em um futuro brilhante juntos.",
        "date": "19-05-2024",
        "color": "#d35400"
    },
    {
        "phrase": "20-05-2024: Ao seu lado, cada dia é uma nova aventura cheia de amor e felicidade.",
        "date": "20-05-2024",
        "color": "#c0392b"
    },
    {
        "phrase": "21-05-2024: Seu sorriso é a luz que ilumina meu caminho, tornando meus dias mais brilhantes e felizes.",
        "date": "21-05-2024",
        "color": "#2980b9"
    },
    {
        "phrase": "22-05-2024: Amo-te não só pelo que tu é , mas também por quem tu me faz ser  uma nova pessoa a cada dia, sempre crescendo justos ❤",
        "date": "22-05-2024",
        "color": "#27ae60"
    },
    {
        "phrase": "23-05-2024: O nosso Amor é melhor Ventura e melhor experiencia que eu ja vivi, a gente pra sempree S2",
        "date": "23-05-2024",
        "color": "#8e44ad"
    },
    {
        "phrase": "24-05-2024: Seu carinho e compreensão tornam minha vida mais fácil e repleta de alegria.",
        "date": "24-05-2024",
        "color": "#f39c12"
    },
    {
        "phrase": "25-05-2024: Você é a razão pela qual meu coração bate mais forte e minha vida é mais brilhante.",
        "date": "25-05-2024",
        "color": "#e74c3c"
    },
    {
        "phrase": "26-05-2024: Sua força e beleza me inspiram a ser uma pessoa melhor a cada dia.",
        "date": "26-05-2024",
        "color": "#8e44ad"
    },
    {
        "phrase": "27-05-2024: Juntos, somos invencíveis e nosso amor é a nossa maior arma contra qualquer adversidade.",
        "date": "27-05-2024",
        "color": "#3498db"
    },
    {
        "phrase": "28-05-2024: Você é a mulher mais incrível que já conheci, e cada dia ao seu lado é um presente.",
        "date": "28-05-2024",
        "color": "#2ecc71"
    },
    {
        "phrase": "29-05-2024: Sua presença transforma minha vida, trazendo paz e felicidade incomparáveis.",
        "date": "29-05-2024",
        "color": "#f1c40f"
    },
    {
        "phrase": "30-05-2024: Sua bondade e amor incondicional fazem do mundo um lugar melhor.",
        "date": "30-05-2024",
        "color": "#e67e22"
    },
    {
        "phrase": "31-05-2024: Cada momento com você é um capítulo perfeito em nossa história de amor.",
        "date": "31-05-2024",
        "color": "#d35400"
    },

    {
        "phrase": "01-06-2024: O amor floresce em cada novo dia como as pétalas de uma rosa desabrochando.",
        "date": "01-06-2024",
        "color": "#d35400"
    },
    {
        "phrase": "02-06-2024: Cada sorriso compartilhado é uma obra-prima em nossa galeria de felicidade.",
        "date": "02-06-2024",
        "color": "#d35400"
    },
    {
        "phrase": "03-06-2024: Nosso amor é uma sinfonia de sentimentos, harmonizando nossos corações.",
        "date": "03-06-2024",
        "color": "#d35400"
    },
    {
        "phrase": "04-06-2024: Nas páginas do tempo, nosso amor é uma história eterna, escrita com ternura.",
        "date": "04-06-2024",
        "color": "#d35400"
    },
    {
        "phrase": "05-06-2024: Juntos, somos a calma no meio da tempestade, a luz na escuridão.",
        "date": "05-06-2024",
        "color": "#d35400"
    },
    {
        "phrase": "06-06-2024: Cada abraço é um elo que fortalece os laços invisíveis que nos unem.",
        "date": "06-06-2024",
        "color": "#d35400"
    },
    {
        "phrase": "07-06-2024: Nosso amor é como uma constelação única, brilhando em meio ao vasto universo.",
        "date": "07-06-2024",
        "color": "#d35400"
    },
    {
        "phrase": "08-06-2024: Como uma canção antiga, nosso amor ressoa através das eras, eterno e imutável.",
        "date": "08-06-2024",
        "color": "#d35400"
    },
    {
        "phrase": "09-06-2024: Cada olhar trocado é um poema silencioso, dizendo mais do que mil palavras.",
        "date": "09-06-2024",
        "color": "#d35400"
    },
    {
        "phrase": "10-06-2024: Nossos corações dançam juntos ao ritmo suave da melodia do amor.",
        "date": "10-06-2024",
        "color": "#d35400"
    },
    {
        "phrase": "11-06-2024: Juntos, somos uma pintura vívida, colorindo o mundo com nossa paleta de emoções.",
        "date": "11-06-2024",
        "color": "#d35400"
    },
    {
        "phrase": "12-06-2024: Como dois pássaros voando em sincronia, nosso amor alcança alturas inimagináveis.",
        "date": "12-06-2024",
        "color": "#d35400"
    },
    {
        "phrase": "13-06-2024: Em cada suspiro, encontramos a serenidade que só o amor verdadeiro pode proporcionar.",
        "date": "13-06-2024",
        "color": "#d35400"
    },
    {
        "phrase": "14-06-2024: Nossos sorrisos são como raios de sol, iluminando até os dias mais sombrios.",
        "date": "14-06-2024",
        "color": "#d35400"
    },
    {
        "phrase": "15-06-2024: Juntos, somos uma fortaleza invencível, enfrentando o mundo com coragem e amor.",
        "date": "15-06-2024",
        "color": "#d35400"
    },
    {
        "phrase": "16-06-2024: Como as estrelas no céu noturno, nosso amor brilha com uma luz única e especial.",
        "date": "16-06-2024",
        "color": "#d35400"
    },
    {
        "phrase": "17-06-2024: Cada momento ao seu lado é um presente precioso que guardo em meu coração.",
        "date": "17-06-2024",
        "color": "#d35400"
    },
    {
        "phrase": "18-06-2024: Nossa jornada juntos é uma aventura emocionante, cheia de surpresas e descobertas.",
        "date": "18-06-2024",
        "color": "#d35400"
    },
    {
        "phrase": "19-06-2024: Como uma árvore robusta, nosso amor cresce mais forte a cada estação que passa.",
        "date": "19-06-2024",
        "color": "#d35400"
    },
    {
        "phrase": "20-06-2024: Cada momento ao seu lado é uma bênção que agradeço todos os dias.",
        "date": "20-06-2024",
        "color": "#d35400"
    },
    {
        "phrase": "21-06-2024: Nosso amor é como um farol na escuridão, guiando-nos através das incertezas da vida.",
        "date": "21-06-2024",
        "color": "#d35400"
    },
    {
        "phrase": "22-06-2024: Juntos, somos mais fortes do que qualquer obstáculo que possa surgir em nosso caminho.",
        "date": "22-06-2024",
        "color": "#d35400"
    },
    {
        "phrase": "23-06-2024: Como as ondas do mar, nosso amor é infinito, sempre em movimento e sempre presente.",
        "date": "23-06-2024",
        "color": "#d35400"
    },
    {
        "phrase": "24-06-2024: Em cada respiração, sinto a essência do nosso amor, nutrindo minha alma.",
        "date": "24-06-2024",
        "color": "#d35400"
    },
    {
        "phrase": "25-06-2024: Inicialmente tinha um desafio aqui, mas preciso que tu esteja bem recuperada pra fazer, então adiei e coloque uma frase no lugar' Nossas mãos  entrelaçadas são um lembrete constante de que nunca estamos sozinhos. Teee Amooooo Minhaaa Princesaa ❤❤❤'",
        "date": "25-06-2024",
        "color": "#d35400"
    },
    {

    "phrase": "26-06-2024: Como um arco-íris após uma tempestade, nosso amor é a promessa de dias melhores após as adversidades",

    "date": "26-06-2024",
    "color": "#d35400"
    },
    {
    "phrase": "27-06-2024: Em cada risada compartilhada, encontro a verdadeira essência da felicidade ao seu lado.",
    "date": "27-06-2024",
    "color": "#d35400"
    },
    {
    "phrase": "28-06-2024: Juntos, construímos um castelo de sonhos, onde nossa imaginação não tem limites.",
    "date": "28-06-2024",
    "color": "#d35400"
    },
    {
    "phrase": "29-06-2024: Cada desafio que enfrentamos fortalece ainda mais os laços que nos unem.",
    "date": "29-06-2024",
    "color": "#d35400"
    },
    {
    "phrase": "30-06-2024: Como as estrelas cadentes no céu, nossos desejos se realizam quando estamos juntos.",
    "date": "30-06-2024",
    "color": "#d35400"
    },
    {
      "phrase": "01-07-2024: O amor é a luz que ilumina o caminho nas noites mais escuras da vida.",
      "date": "01-07-2024",
      "color": "#d35400"
  },
  {
      "phrase": "02-07-2024: Cada sorriso seu é um raio de sol que aquece meu coração.",
      "date": "02-07-2024",
      "color": "#ff7675"
  },
  {
      "phrase": "03-07-2024: Quando estou com você, o mundo inteiro parece parar e só nós existimos.",
      "date": "03-07-2024",
      "color": "#55efc4"
  },
  {
      "phrase": "04-07-2024: Seu amor é a melodia que faz meu coração dançar.",
      "date": "04-07-2024",
      "color": "#74b9ff"
  },
  {
      "phrase": "05-07-2024: Seus olhos são como estrelas que iluminam meu universo.",
      "date": "05-07-2024",
      "color": "#a29bfe"
  },
  {
      "phrase": "06-07-2024: Amar você é descobrir o infinito em cada instante ao seu lado.",
      "date": "06-07-2024",
      "color": "#fd79a8"
  },
  {
      "phrase": "07-07-2024: Em seus braços, encontrei o lar que sempre procurei.",
      "date": "07-07-2024",
      "color": "#e17055"
  },
  {
      "phrase": "08-07-2024: Seu amor é o farol que guia meu caminho nos dias mais sombrios.",
      "date": "08-07-2024",
      "color": "#00b894"
  },
  {
      "phrase": "09-07-2024: Cada momento ao seu lado é uma página escrita no livro do amor.",
      "date": "09-07-2024",
      "color": "#0984e3"
  },
  {
      "phrase": "10-07-2024: Seu beijo é o encanto que transforma o comum em extraordinário.",
      "date": "10-07-2024",
      "color": "#6c5ce7"
  },
  {
      "phrase": "11-07-2024: Amar você é como viver em um sonho do qual nunca quero acordar.",
      "date": "11-07-2024",
      "color": "#fab1a0"
  },
  {
      "phrase": "12-07-2024: Seu amor é a poesia que dá ritmo ao meu coração.",
      "date": "12-07-2024",
      "color": "#ff7675"
  },
  {
      "phrase": "13-07-2024: Cada abraço seu é um refúgio de paz e carinho.",
      "date": "13-07-2024",
      "color": "#55efc4"
  },
  {
      "phrase": "14-07-2024: Com você, aprendi que o amor verdadeiro é eterno e imutável.",
      "date": "14-07-2024",
      "color": "#74b9ff"
  },
  {
      "phrase": "15-07-2024: Seu sorriso é o meu amanhecer, a promessa de um novo dia de felicidade.",
      "date": "15-07-2024",
      "color": "#a29bfe"
  },
  {
      "phrase": "16-07-2024: Amar você é mergulhar em um oceano de emoções e nunca desejar voltar à superfície.",
      "date": "16-07-2024",
      "color": "#fd79a8"
  },
  {
      "phrase": "17-07-2024: Seu amor é o presente mais precioso que a vida me deu.",
      "date": "17-07-2024",
      "color": "#e17055"
  },
  {
      "phrase": "18-07-2024: Cada palavra sua é uma declaração de amor que ecoa em meu coração.",
      "date": "18-07-2024",
      "color": "#00b894"
  },
  {
      "phrase": "19-07-2024: Com você, até os silêncios são cheios de significados.",
      "date": "19-07-2024",
      "color": "#0984e3"
  },
  {
      "phrase": "20-07-2024: Amar você é um eterno romance que nunca se cansa de surpreender.",
      "date": "20-07-2024",
      "color": "#6c5ce7"
  },
  {
      "phrase": "21-07-2024: Em seus olhos, encontrei o reflexo de todas as minhas esperanças e sonhos.",
      "date": "21-07-2024",
      "color": "#fab1a0"
  },
  {
      "phrase": "22-07-2024: Seu toque é a magia que transforma um dia comum em uma história de amor.",
      "date": "22-07-2024",
      "color": "#ff7675"
  },
  {
      "phrase": "23-07-2024: Amar você é como encontrar um tesouro que enriquece minha alma.",
      "date": "23-07-2024",
      "color": "#55efc4"
  },
  {
      "phrase": "24-07-2024: Com você, cada dia é um capítulo inesquecível da nossa história de amor.",
      "date": "24-07-2024",
      "color": "#74b9ff"
  },
  {
      "phrase": "25-07-2024: Seu amor é o jardim onde florescem as mais belas emoções.",
      "date": "25-07-2024",
      "color": "#a29bfe"
  },
  {
      "phrase": "26-07-2024: Em cada beijo, sinto a eternidade de nosso amor.",
      "date": "26-07-2024",
      "color": "#fd79a8"
  },
  {
      "phrase": "27-07-2024: Amar você é a certeza de que encontrei meu lugar no mundo.",
      "date": "27-07-2024",
      "color": "#e17055"
  },
  {
      "phrase": "28-07-2024: Seu amor é a chama que mantém acesa a paixão em meu coração.",
      "date": "28-07-2024",
      "color": "#00b894"
  },
  {
      "phrase": "29-07-2024: Com você, cada pôr do sol é mais lindo, e cada amanhecer, mais promissor.",
      "date": "29-07-2024",
      "color": "#0984e3"
  },
  {
      "phrase": "30-07-2024: Seu amor é a melodia que dá ritmo aos meus dias e serenidade às minhas noites.",
      "date": "30-07-2024",
      "color": "#6c5ce7"
  },
  {
      "phrase": "31-07-2024: Mais um mes chegando ao fim, me surprendaa HJ :))",
      "date": "31-07-2024",
      "color": "#fab1a0"
  },

    {
      "phrase": "01-08-2024: Desafio do dia - Faz uma listi de 3 coisas pra gente fazer esse mes e me mandaa :)).",
      "date": "01-08-2024",
      "color": "#ff9ff3"
    },
    {
      "phrase": "02-08-2024: Acredite em si mesmo e em tudo que você é. Saiba que há algo dentro de você que é maior do que qualquer obstáculo.",
      "date": "02-08-2024",
      "color": "#55efc4"
    },
    {
      "phrase": "03-08-2024: Cada momento ao seu lado é uma benção que agradeço todos os dias.",
      "date": "03-08-2024",
      "color": "#fdcb6e"
    },
    {
      "phrase": "04-08-2024: O sucesso é a soma de pequenos esforços repetidos dia após dia.",
      "date": "04-08-2024",
      "color": "#74b9ff"
    },
    {
      "phrase": "05-08-2024: Seu sorriso é a minha luz na escuridão.",
      "date": "05-08-2024",
      "color": "#ff7675"
    },
    {
      "phrase": "06-08-2024: Nunca desista dos seus sonhos, mesmo que eles pareçam impossíveis.",
      "date": "06-08-2024",
      "color": "#a29bfe"
    },
    {
      "phrase": "07-08-2024: Cada batida do meu coração é uma declaração de amor por você.",
      "date": "07-08-2024",
      "color": "#fd79a8"
    },
    {
      "phrase": "08-08-2024: Grandes coisas nunca vêm de zonas de conforto.",
      "date": "08-08-2024",
      "color": "#ffeaa7"
    },
    {
      "phrase": "09-08-2024: Estar com você é como um sonho que nunca quero acordar.",
      "date": "09-08-2024",
      "color": "#00cec9"
    },
    {
      "phrase": "10-08-2024: Desafio do dia - Faça algo hoje que o seu futuro agradeça.",
      "date": "10-08-2024",
      "color": "#e17055"
    },
    {
      "phrase": "11-08-2024: A vida é 10% do que acontece com você e 90% de como você reage a isso. (copiei de algum lugar, mas é a gente que faz nosso futuro)",
      "date": "11-08-2024",
      "color": "#fab1a0"
    },
    {
      "phrase": "12-08-2024: Você é a razão pela qual acredito no amor verdadeiro. S2",
      "date": "12-08-2024",
      "color": "#81ecec"
    },
    {
      "phrase": "13-08-2024: O único lugar onde o sucesso vem antes do trabalho é no dicionário. Bora Lutar pelo que a gente sonha",
      "date": "13-08-2024",
      "color": "#ffeaa7"
    },
    {
      "phrase": "14-08-2024: Meu amor por você cresce mais a cada dia que passa.",
      "date": "14-08-2024",
      "color": "#fab1a0"
    },
    {
      "phrase": "15-08-2024: A chave para o sucesso é começar antes de estar pronto.",
      "date": "15-08-2024",
      "color": "#fdcb6e"
    },
    {
      "phrase": "16-08-2024: Cada segundo ao seu lado é uma eternidade de felicidade.",
      "date": "16-08-2024",
      "color": "#ff7675"
    },
    {
      "phrase": "17-08-2024: O fracasso é apenas a oportunidade de começar de novo, desta vez de forma mais inteligente.",
      "date": "17-08-2024",
      "color": "#55efc4"
    },
    {
      "phrase": "18-08-2024: Amar você é a melhor parte do meu dia. Tu é o meu lugar Preferidoo",
      "date": "18-08-2024",
      "color": "#fd79a8"
    },
    {
      "phrase": "19-08-2024: Se você pode sonhar, você pode realizar. Nunca desista dos teus sonhos meu anjoo",
      "date": "19-08-2024",
      "color": "#74b9ff"
    },
    {
      "phrase": "20-08-2024: Você é meu sonho que se tornou realidade. teee amoooo",
      "date": "20-08-2024",
      "color": "#fab1a0"
    },
    {
      "phrase": "21-08-2024: Sucesso é a soma de pequenos esforços repetidos dia após dia.",
      "date": "21-08-2024",
      "color": "#81ecec"
    },
    {
      "phrase": "22-08-2024: Cada vez que vejo teu sorriso meu coração fica quentinhoo.",
      "date": "22-08-2024",
      "color": "#e17055"
    },
    {
      "phrase": "23-08-2024: Não importa o quão devagar você vá, desde que você não pare.",
      "date": "23-08-2024",
      "color": "#ffeaa7"
    },
    {
      "phrase": "24-08-2024: Você é o amor da minha vida, hoje e sempreee.",
      "date": "24-08-2024",
      "color": "#fab1a0"
    },
    {
      "phrase": "25-08-2024: O sucesso não é a chave para a felicidade. A felicidade é a chave para o sucesso.",
      "date": "25-08-2024",
      "color": "#55efc4"
    },
    {
      "phrase": "26-08-2024: Desafio do dia - Faça uma boa ação anonimamente. o mundo precisa de tii",
      "date": "26-08-2024",
      "color": "#fdcb6e"
    },
    {
      "phrase": "27-08-2024: Você é a melhor parte dos meus dias.",
      "date": "27-08-2024",
      "color": "#ff7675"
    },
    {
      "phrase": "28-08-2024: Acredite em si mesmo e em tudo que você é.",
      "date": "28-08-2024",
      "color": "#74b9ff"
    },
    {
      "phrase": "29-08-2024: Meu amor por você é infinito e eterno.",
      "date": "29-08-2024",
      "color": "#fd79a8"
    },
    {
      "phrase": "30-08-2024: A persistência é o caminho do êxito.",
      "date": "30-08-2024",
      "color": "#81ecec"
    },
    {
      "phrase": "31-08-2024: Amar você é a jornada mais linda que já empreendi.",
      "date": "31-08-2024",
      "color": "#fab1a0"
    },
    {
      "phrase": "01-09-2024: O amor verdadeiro é como um farol em meio à tempestade.",
      "date": "01-09-2024",
      "color": "#ffeaa7"
    },
    {
      "phrase": "02-09-2024: Cada dia ao seu lado é um presente que nunca imaginei receber.",
      "date": "02-09-2024",
      "color": "#74b9ff"
    },
    {
      "phrase": "03-09-2024: 'Não é o amor que sustenta o relacionamento, é o modo de se relacionar que sustenta o amor.' – O Pequeno Príncipe",
      "date": "03-09-2024",
      "color": "#a29bfe"
    },
    {
      "phrase": "04-09-2024: Você é a razão pela qual acredito na beleza dos dias simples.",
      "date": "04-09-2024",
      "color": "#fab1a0"
    },
    {
      "phrase": "05-09-2024: Amar é dar as mãos, mesmo quando o caminho é incerto.",
      "date": "05-09-2024",
      "color": "#ffeaa7"
    },
    {
      "phrase": "06-09-2024: 'Ame o que faz e não precisará trabalhar um dia sequer.' – Confúcio",
      "date": "06-09-2024",
      "color": "#74b9ff"
    },
    {
      "phrase": "07-09-2024: Nos seus olhos, encontro o mundo que sempre quis explorar.",
      "date": "07-09-2024",
      "color": "#81ecec"
    },
    {
      "phrase": "08-09-2024: A vida é mais bela quando compartilhada com quem se ama.",
      "date": "08-09-2024",
      "color": "#a29bfe"
    },
    {
      "phrase": "09-09-2024: 'E em seus braços, encontrei o meu lar.' – Jane Austen",
      "date": "09-09-2024",
      "color": "#fab1a0"
    },
    {
      "phrase": "10-09-2024: Nosso amor é a força que move montanhas e supera desafios.",
      "date": "10-09-2024",
      "color": "#ffeaa7"
    },
    {
      "phrase": "11-09-2024: 'Tudo o que você pode imaginar é real.' – Pablo Picasso",
      "date": "11-09-2024",
      "color": "#74b9ff"
    },
    {
      "phrase": "12-09-2024: Seu sorriso ilumina até os dias mais sombrios.",
      "date": "12-09-2024",
      "color": "#81ecec"
    },
    {
      "phrase": "13-09-2024: Ao seu lado, aprendi que o amor não tem limites.",
      "date": "13-09-2024",
      "color": "#fab1a0"
    },
    {
      "phrase": "14-09-2024: 'O essencial é invisível aos olhos.' – O Pequeno Príncipe",
      "date": "14-09-2024",
      "color": "#a29bfe"
    },
    {
      "phrase": "15-09-2024: Cada momento contigo é um capítulo inesquecível da minha vida.",
      "date": "15-09-2024",
      "color": "#ffeaa7"
    },
    {
      "phrase": "16-09-2024: Você é a poesia que eu nunca soube que precisava.",
      "date": "16-09-2024",
      "color": "#74b9ff"
    },
    {
      "phrase": "17-09-2024: 'Amar é encontrar na felicidade do outro a própria felicidade.' – Gottfried Leibniz",
      "date": "17-09-2024",
      "color": "#81ecec"
    },
    {
      "phrase": "18-09-2024: Com você, cada dia é uma nova oportunidade de ser feliz.",
      "date": "18-09-2024",
      "color": "#fab1a0"
    },
    {
      "phrase": "19-09-2024: A sua presença transforma a minha vida em um mar de tranquilidade.",
      "date": "19-09-2024",
      "color": "#a29bfe"
    },
    {
      "phrase": "20-09-2024: 'O amor não se vê com os olhos, mas com o coração.' – William Shakespeare",
      "date": "20-09-2024",
      "color": "#ffeaa7"
    },
    {
      "phrase": "21-09-2024: Seu amor é a melodia que toca incessantemente em minha alma.",
      "date": "21-09-2024",
      "color": "#74b9ff"
    },
    {
      "phrase": "22-09-2024: Cada vez que penso em você, meu coração sorri.",
      "date": "22-09-2024",
      "color": "#81ecec"
    },
    {
      "phrase": "23-09-2024: O amor é a arte de transformar o comum em extraordinário.",
      "date": "23-09-2024",
      "color": "#fab1a0"
    },
    {
      "phrase": "24-09-2024: 'O maior ato de coragem é amar alguém incondicionalmente.' – Michael Leunig",
      "date": "24-09-2024",
      "color": "#a29bfe"
    },
    {
      "phrase": "25-09-2024: Seu abraço é meu porto seguro, onde encontro paz e felicidade.",
      "date": "25-09-2024",
      "color": "#ffeaa7"
    },
    {
      "phrase": "26-09-2024: 'O amor é o triunfo da imaginação sobre a inteligência.' – H. L. Mencken",
      "date": "26-09-2024",
      "color": "#74b9ff"
    },
    {
      "phrase": "27-09-2024: Nos seus olhos, vejo o reflexo de um futuro brilhante ao nosso lado.",
      "date": "27-09-2024",
      "color": "#81ecec"
    },
    {
      "phrase": "28-09-2024: Seu amor é a luz que guia meu caminho, mesmo nas noites mais escuras.",
      "date": "28-09-2024",
      "color": "#fab1a0"
    },
    {
      "phrase": "29-09-2024: O amor é a linguagem universal que todos os corações entendem.",
      "date": "29-09-2024",
      "color": "#a29bfe"
    },
    {
      "phrase": "30-09-2024: 'Amar é transformar a realidade em sonhos.' – Jorge Amado",
      "date": "30-09-2024",
      "color": "#ffeaa7"
    },
    {
      "phrase": "01-10-2024: Faltam 10 dias: 'E começou o melhor mes do ano, o primeiro passo para o sucesso é acreditar em si mesmo.'",
      "date": "01-10-2024",
      "color": "#ffeaa7"
    },
    {
        "phrase": "02-10-2024: 'Faltam 9 dias: Cada passo dado hoje constrói o caminho para o amanhã, e o amanha é o pra sempree ❤️❤️❤️❤️'",
        "date": "02-10-2024",
        "color": "#fab1a0"
    },
    {
        "phrase": "03-10-2024: 'Faltam 8 dias: A perseverança transforma sonhos em realidade.'",
        "date": "03-10-2024",
        "color": "#ff7675"
    },
    {
        "phrase": "04-10-2024: 'Faltam 7 dias: Pequenas conquistas diárias levam a grandes vitórias. ajuda uma pessoa hj :)'",
        "date": "04-10-2024",
        "color": "#fd79a8"
    },
    {
        "phrase": "05-10-2024: 'Faltam 6 dias: Encare os desafios com coragem, eles te fortalecem.'",
        "date": "05-10-2024",
        "color": "#e84393"
    },
    {
        "phrase": "06-10-2024: 'Faltam 5 dias: Achou que ia ser só textinho fofo, hj é dia de desafio: Explique o papel do ciclo do hidrogênio na Terra, destacando sua relação com o ciclo da água e o ciclo do carbono. Em sua resposta, mencione as principais transformações do hidrogênio em processos biológicos e geológicos, bem como sua importância para os sistemas naturais e tecnológicos.'",
        "date": "06-10-2024",
        "color": "#d63031"
    },
    {
        "phrase": "07-10-2024: 'Faltam 5 dias: A cada amanhecer, uma nova chance de recomeçar. Hoje eu te amo mais que ontem e menos que amanha ❤️❤️❤️❤️❤️'",
        "date": "07-10-2024",
        "color": "#fdcb6e"
    },
    {
        "phrase": "08-10-2024: 'Faltam 3 dias: Com determinação, você pode superar qualquer obstáculo.'",
        "date": "08-10-2024",
        "color": "#55efc4"
    },
    {
        "phrase": "09-10-2024: 'Faltam 2 dias: A contagem é pro meu aniversario. mas hj a gente ta fazz um anoo do primeiro beijoo. teeeeee amooooooooo ❤️❤️❤️'",
        "date": "09-10-2024",
        "color": "#74b9ff"
    },
    {
        "phrase": "10-10-2024: 'Faltam 1 dias: Tu é a pessoinha que eu mais adimiro nesse mundo Todinhooo, hj faz um anoo da primeira rosa que eu te dei  ❤️❤️❤️❤️❤️'",
        "date": "10-10-2024",
        "color": "#a29bfe"
    },
    {
        "phrase": "11-10-2024: 'Hoje é dia da mulher mais incrívell do mundooo, minhaa velhinhaaa '",
        "date": "11-10-2024",
        "color": "#ffeaa7"
    },
    {
        "phrase": "12-10-2024: 'A alegria de hoje é a força para os desafios de amanhã.'",
        "date": "12-10-2024",
        "color": "#fab1a0"
    },
    {
        "phrase": "13-10-2024: 'A gratidão transforma o que temos em suficiente.'",
        "date": "13-10-2024",
        "color": "#ff7675"
    },
    {
        "phrase": "14-10-2024: 'O que você planta hoje, florescerá amanhã.'",
        "date": "14-10-2024",
        "color": "#fd79a8"
    },
    {
        "phrase": "15-10-2024: 'O sucesso é a soma de pequenos esforços repetidos diariamente.'",
        "date": "15-10-2024",
        "color": "#e84393"
    },
    {
        "phrase": "16-10-2024: 'Acreditar em si mesmo é o primeiro passo para qualquer conquista.'",
        "date": "16-10-2024",
        "color": "#d63031"
    },
    {
        "phrase": "17-10-2024: 'A vida é feita de momentos; aproveite cada um deles.'",
        "date": "17-10-2024",
        "color": "#fdcb6e"
    },
    {
        "phrase": "18-10-2024: 'O melhor ainda está por vir, continue acreditando.'",
        "date": "18-10-2024",
        "color": "#55efc4"
    },
    {
        "phrase": "19-10-2024: 'Não espere o momento perfeito, faça do agora o seu momento.'",
        "date": "19-10-2024",
        "color": "#74b9ff"
    },
    {
        "phrase": "20-10-2024: 'Seja a mudança que você deseja ver no mundo.'",
        "date": "20-10-2024",
        "color": "#a29bfe"
    },
    {
        "phrase": "21-10-2024: 'A maior riqueza é viver com propósito.'",
        "date": "21-10-2024",
        "color": "#ffeaa7"
    },
    {
        "phrase": "22-10-2024: 'Com cada escolha, construímos o nosso futuro.'",
        "date": "22-10-2024",
        "color": "#fab1a0"
    },
    {
        "phrase": "23-10-2024: 'A paciência é a chave para grandes realizações.'",
        "date": "23-10-2024",
        "color": "#ff7675"
    },
    {
        "phrase": "24-10-2024: 'O otimismo é o imã da felicidade.'",
        "date": "24-10-2024",
        "color": "#fd79a8"
    },
    {
        "phrase": "25-10-2024: 'Siga em frente com coragem, o melhor está por vir.'",
        "date": "25-10-2024",
        "color": "#e84393"
    },
    {
        "phrase": "26-10-2024: 'A determinação é o que separa os grandes dos comuns.'",
        "date": "26-10-2024",
        "color": "#d63031"
    },
    {
        "phrase": "27-10-2024: 'Acredite, o universo sempre conspira a favor de quem se esforça.'",
        "date": "27-10-2024",
        "color": "#fdcb6e"
    },
    {
        "phrase": "28-10-2024: 'Faça o que puder, com o que tem, onde estiver.'",
        "date": "28-10-2024",
        "color": "#55efc4"
    },
    {
        "phrase": "29-10-2024: 'O maior poder está dentro de você.'",
        "date": "29-10-2024",
        "color": "#74b9ff"
    },
    {
        "phrase": "30-10-2024: 'A vida é feita de escolhas, e cada escolha define o nosso destino.'",
        "date": "30-10-2024",
        "color": "#a29bfe"
    },
    {
        "phrase": "31-10-2024: 'Encerramos outubro, mas novos começos sempre surgem no horizonte.'",
        "date": "31-10-2024",
        "color": "#ffeaa7"
    },
    {
      "phrase": "01-11-2024: 'Felizzz ummm anooo de Namoroooo ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️  Euuuuuuu teeeee amooooo maisss queee tudooo'",
      "date": "01-11-2024",
      "color": "#fdcb6e"
  },

    {
        "phrase": "02-11-2024: 'Felizzz ummm anooo de Namoroooo '",
        "date": "02-11-2024",
        "color": "#fdcb6e"
    },
    {
        "phrase": "03-11-2024: 'Diaaa de Enemm, eu seuu que ta sendoo dificill, tuu vaiii dominarr o mundoooo ❤️❤️❤️❤️❤️❤️'",
        "date": "03-11-2024",
        "color": "#55efc4"
    },
    {
        "phrase": "04-11-2024: 'O tempo é o melhor amigo de quem sabe esperar.'",
        "date": "04-11-2024",
        "color": "#fab1a0"
    },
    {
        "phrase": "05-11-2024: 'Sou muito  gratooo por te ter na minha vidaaa meu anjooo ",
        "date": "05-11-2024",
        "color": "#e17055"
    },
    {
        "phrase": "06-11-2024: 'O amanhã começa nas escolhas que fazemos hoje.'",
        "date": "06-11-2024",
        "color": "#74b9ff"
    },
    {
        "phrase": "07-11-2024: 'Seja a mudança que deseja ver no mundo.'",
        "date": "07-11-2024",
        "color": "#d63031"
    },
    {
        "phrase": "08-11-2024: 'A genteee pra ssseempreee, teeeeee amooooo muitoooooo'",
        "date": "08-11-2024",
        "color": "#00cec9"
    },
    {
        "phrase": "09-11-2024: 'Hojee, euu souu juradooo, too esperandoo textinhooo pra mim responder dessa vezz :)))'",
        "date": "09-11-2024",
        "color": "#e84393"
    },
    {
        "phrase": "10-11-2024: 'Enemmm de Novoooo, Boaaa provaa Amoorrr'",
        "date": "10-11-2024",
        "color": "#ffeaa7"
    },
    {
        "phrase": "11-11-2024: 'A força está em nunca desistir.'",
        "date": "11-11-2024",
        "color": "#a29bfe"
    },
    {
        "phrase": "12-11-2024: 'Que os ventos levem o que é desnecessário.'",
        "date": "12-11-2024",
        "color": "#fd79a8"
    },
    {
        "phrase": "13-11-2024: 'Seja luz onde quer que vá.'",
        "date": "13-11-2024",
        "color": "#81ecec"
    },
    {
        "phrase": "14-11-2024: 'A vida é um eterno aprender.'",
        "date": "14-11-2024",
        "color": "#6c5ce7"
    },
    {
        "phrase": "15-11-2024: 'Playyy nas comemoraçõess, Boraaaa Uelllll'",
        "date": "15-11-2024",
        "color": "#ff7675"
    },
    {
        "phrase": "16-11-2024: 'Transforme cada dificuldade em uma lição.'",
        "date": "16-11-2024",
        "color": "#00b894"
    },
    {
        "phrase": "17-11-2024: 'Valorize cada passo da jornada.'",
        "date": "17-11-2024",
        "color": "#fdcb6e"
    },
    {
        "phrase": "18-11-2024: 'Acredite na beleza dos seus sonhos.'",
        "date": "18-11-2024",
        "color": "#55efc4"
    },
    {
        "phrase": "19-11-2024: 'Crescer é aceitar o novo e deixar o velho para trás.'",
        "date": "19-11-2024",
        "color": "#fab1a0"
    },
    {
        "phrase": "20-11-2024: 'Um feriaadooo pq merecemoss descaçarr née'",
        "date": "20-11-2024",
        "color": "#e17055"
    },
    {
        "phrase": "21-11-2024: 'A paz está em aceitar o que não podemos mudar.'",
        "date": "21-11-2024",
        "color": "#74b9ff"
    },
    {
        "phrase": "22-11-2024: 'Tudo o que vai, volta. Que seja o bem.'",
        "date": "22-11-2024",
        "color": "#d63031"
    },
    {
        "phrase": "23-11-2024: 'Cada sonho é uma nova esperança de vida.'",
        "date": "23-11-2024",
        "color": "#00cec9"
    },
    {
        "phrase": "24-11-2024: 'Vidinhaaa, simplismente te  amoooooo '",
        "date": "24-11-2024",
        "color": "#e84393"
    },
    {
        "phrase": "25-11-2024: 'Permita-se ser quem você realmente é.'",
        "date": "25-11-2024",
        "color": "#ffeaa7"
    },
    {
        "phrase": "26-11-2024: 'Sonhe grande e trabalhe para realizá-lo.'",
        "date": "26-11-2024",
        "color": "#a29bfe"
    },
    {
        "phrase": "27-11-2024: 'Sorria para a vida e ela sorrirá de volta.'",
        "date": "27-11-2024",
        "color": "#fd79a8"
    },
    {
        "phrase": "28-11-2024: 'Teeeee amoooooo millllll milhõessss ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️'",
        "date": "28-11-2024",
        "color": "#81ecec"
    },
    {
        "phrase": "29-11-2024: 'A bondade é a chave para abrir todas as portas.'",
        "date": "29-11-2024",
        "color": "#6c5ce7"
    },
    {
        "phrase": "30-11-2024: 'Dezembroooo taaa quasee, aii, duvidoo tu me surprender hj :)))'",
        "date": "30-11-2024",
        "color": "#ff7675"
    },
    {
      "phrase": "01-12-2024: 'Dezembro começou, e cada dia com você é um presente que só aumenta meu amor. ❤️'",
      "date": "01-12-2024",
      "color": "#74b9ff"
  },
  {
      "phrase": "02-12-2024: 'Rosa é vermelha violeta é azul, eu nao sei escrever poema, só sei que te amooooooo '",
      "date": "02-12-2024",
      "color": "#fab1a0"
  },
  {
      "phrase": "03-12-2024: 'Você é a estrela que ilumina meus dias e meu coraçãoooo'",
      "date": "03-12-2024",
      "color": "#fdcb6e"
  },
  {
      "phrase": "04-12-2024: 'Contigoo cada momento é único, e meu amor só cresce  mais e mais a cada dia. ❤️✨'",
      "date": "04-12-2024",
      "color": "#a29bfe"
  },
  {
      "phrase": "05-12-2024: 'Tuuuu é o motivo de cada sorriso e de cada sonhoss que vira um plano ao teu lado ❤️'",
      "date": "05-12-2024",
      "color": "#e17055"
  },
  {
      "phrase": "06-12-2024: 'Meu coração só sabe dizer o quanto te amo, hoje e sempreeee. ❤️❤️❤️❤️'",
      "date": "06-12-2024",
      "color": "#55efc4"
  },
  {
      "phrase": "07-12-2024: 'O amor que sinto por você é a minha força a minha paz e as minha cocegas. '",
      "date": "07-12-2024",
      "color": "#ffeaa7"
  },
  {
      "phrase": "08-12-2024: 'Amooo vocêee, gostooo tantooooo deeee voceeeee.... O desafioo do diaa é tuu cantarr'",
      "date": "08-12-2024",
      "color": "#636e72"
  },
  {
      "phrase": "09-12-2024: 'Com você, tudo é mais bonito, e o meu amor só cresce. ❤️✨'",
      "date": "09-12-2024",
      "color": "#81ecec"
  },
  {
      "phrase": "10-12-2024: ' O meu maior presente é poder te amar dia apóss diaa. Amuuu Tuuu ❤️🎁'",
      "date": "10-12-2024",
      "color": "#d63031"
  },
  {
    "phrase": "11-12-2024: 'Amar você é como respirar, algo que faço sem nem perceber. ❤️'",
    "date": "11-12-2024",
    "color": "#74b9ff"
},
{
    "phrase": "12-12-2024: 'Meu coração encontrou o lar perfeito no teu amor. ❤️'",
    "date": "12-12-2024",
    "color": "#fab1a0"
},
{
    "phrase": "13-12-2024: 'Nos seus olhos vejo o reflexo dos meus sonhos mais lindos. ❤️✨",
    "date": "13-12-2024",
    "color": "#fdcb6e"
},
{
    "phrase": "14-12-2024: 'Cada abraço teu é como um poema que aquece minha alma. ❤️'",
    "date": "14-12-2024",
    "color": "#a29bfe"
},
{
    "phrase": "15-12-2024: 'Ao teu lado, todos os dias são especiais e cheios de amor. ❤️'",
    "date": "15-12-2024",
    "color": "#e17055"
},
{
    "phrase": "16-12-2024: 'O mundo pode mudar, mas meu amor por você é eterno. ❤️'",
    "date": "16-12-2024",
    "color": "#55efc4"
},
{
    "phrase": "17-12-2024: 'O teu sorriso é a minha maior fonte de felicidade. ❤️'",
    "date": "17-12-2024",
    "color": "#ffeaa7"
},
{
    "phrase": "18-12-2024: 'Te amo com a força de mil constelações. Tee amooo milll milhoesss'",
    "date": "18-12-2024",
    "color": "#636e72"
},
{
    "phrase": "19-12-2024: 'tuuu é o o mais brlo capítulo da minha história. ❤️📖'",
    "date": "19-12-2024",
    "color": "#81ecec"
},
{
    "phrase": "20-12-2024: 'Cada vez que penso em você, meu coração sorri. '",
    "date": "20-12-2024",
    "color": "#d63031"
},
{
    "phrase": "21-12-2024: 'O teu amor é a melhor parte dos meus diass. ❤️☀️'",
    "date": "21-12-2024",
    "color": "#fab1a0"
},
{
    "phrase": "22-12-2024: 'emm você, encontrei tudo o que sempre sonhei. '",
    "date": "22-12-2024",
    "color": "#fdcb6e"
},
{
    "phrase": "23-12-2024: 'No teu amor, encontrei a paz que sempre procurei. ❤️🕊️'",
    "date": "23-12-2024",
    "color": "#a29bfe"
},
{
    "phrase": "24-12-2024: 'Neste Natal...............'",
    "date": "24-12-2024",
    "color": "#e17055"
}

    
  
];






