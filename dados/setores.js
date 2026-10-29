/* =========================================================
   CONTEÚDO DAS PÁGINAS DE SETOR
   Para editar um setor, mude só os textos entre aspas.
   - Datas no formato 'AAAA-MM-DD'. Sem data definida: deixe sem ini/fim.
   - Fotos ficam em assets/img. Use 'img/nome-do-arquivo.jpg'.
   - Os números do topo (programas, jornadas, feiras, consultorias)
     são contados sozinhos a partir das listas abaixo.
   ========================================================= */

/* Modelo para setores que ainda não têm conteúdo */
function modeloVazio() {
  return {
    programas: [1, 2, 3, 4, 5].map((n) => ({ nome: '[Programa ' + n + ']', itens: ['[Ação]', '[Ação]', '[Ação]'] })),
    jornadas: [1, 2, 3].map((n) => ({
      nome: '[Trilha ' + n + ']', selo: '[carga horária]', texto: '[Para quem é a trilha e o que ela resolve.]',
      temas: ['[Tema]', '[Tema]', '[Tema]'],
      etapas: [{ n: 1, titulo: 'Palestras e oficinas', quando: '[Mês]' }, { n: 2, titulo: 'Mentorias', quando: '[Mês]' }, { n: 3, titulo: 'Certificação', quando: '[Mês]' }]
    })),
    frentes: [1, 2].map((n) => ({
      nome: '[Frente ' + n + ']', img: 'img/sem-foto.svg', alt: '[Descrição da foto]',
      itens: [1, 2, 3].map(() => ({ nome: '[Consultoria]', texto: '[O que a consultoria resolve.]' }))
    })),
    missoes: [],
    feiras: []
  };
}

window.SETORES = {

  'alimentacao-fora-do-lar': Object.assign(modeloVazio(), {
    nome: 'Alimentação Fora do Lar',
    titulo: ['Alimentação', 'Fora do Lar.'],
    subtitulo: 'Restaurantes, bares, lanchonetes e delivery com gestão, cardápio e mercado em dia no Rio Grande do Norte.',
    segmentos: ['Restaurantes', 'Bares', 'Lanchonetes', 'Delivery'],
    gestor: { nome: 'Maria Luiza', rotulo: 'Gestora do setor', foto: 'img/maria-luiza.jpg' }
  }),

  'alimentos-e-bebidas': Object.assign(modeloVazio(), {
    nome: 'Alimentos e Bebidas',
    titulo: ['Alimentos', 'e Bebidas.'],
    subtitulo: 'Da cozinha à gôndola: produção, embalagem e acesso a mercado para quem fabrica alimentos e bebidas no RN.',
    segmentos: ['Panificação', 'Laticínios', 'Bebidas', 'Doces e conservas'],
    gestor: { nome: 'Ana Carolina', rotulo: 'Gestora do setor', foto: 'img/ana-carolina.jpg' },
    missoes: ['China · ProPak e Hi & Fi Asia'],
    feiras: [
      { nome: 'ANUGA', ini: '2026-04-07', fim: '2026-04-09' },
      { nome: 'BioBrazil', ini: '2026-06-10', fim: '2026-06-13' },
      { nome: 'FIPAN', ini: '2026-07-21', fim: '2026-07-24' },
      { nome: 'Super Bahia', ini: '2026-07-28', fim: '2026-07-30' },
      { nome: 'CONSUPER', ini: '2026-10-19', fim: '2026-10-21' },
      { nome: 'Recifitness', ini: '2026-11-14', fim: '2026-11-15' }
    ]
  }),

  'beleza-e-varejo': Object.assign(modeloVazio(), {
    nome: 'Beleza e Varejo',
    titulo: ['Beleza', 'e Varejo.'],
    subtitulo: 'Salões, estética e comércio com gestão, atendimento e vendas que fazem o cliente voltar.',
    segmentos: ['Salões de beleza', 'Estética', 'Lojas', 'Comércio de bairro'],
    gestor: { nome: 'Jessica', rotulo: 'Gestora do setor', foto: 'img/jessica.jpg' }
  }),

  'casa-e-construcao': Object.assign(modeloVazio(), {
    nome: 'Casa e Construção',
    titulo: ['Casa e', 'Construção.'],
    subtitulo: 'Móveis, cerâmica e materiais de construção com produtividade, produto e novos mercados.',
    segmentos: ['Movelaria', 'Cerâmica vermelha', 'Materiais de construção', 'Construção civil'],
    gestor: { nome: 'Anna Lívia', rotulo: 'Gestora do setor', foto: 'img/anna-livia.jpg' },
    feiras: [
      { nome: 'Construsind · Mossoró', ini: '2026-03-28', fim: '2026-03-28' },
      { nome: 'Feicon', ini: '2026-04-07', fim: '2026-04-10' },
      { nome: 'Encontro Nacional de Cerâmica Vermelha', ini: '2026-08-05', fim: '2026-08-07' },
      { nome: 'CONEMOV · Natal', ini: '2026-08-13', fim: '2026-08-14' },
      { nome: 'ELI Summit / Polo Londrina', ini: '2026-11-24', fim: '2026-11-28' },
      { nome: 'Formóbile' }
    ]
  }),

  'economia-criativa': Object.assign(modeloVazio(), {
    nome: 'Economia Criativa',
    titulo: ['Economia', 'Criativa.'],
    subtitulo: 'Artesanato, cultura e design com produto, gestão e mercado para quem cria no Rio Grande do Norte.',
    segmentos: ['Artesanato', 'Audiovisual', 'Música', 'Design'],
    gestor: { nome: 'Maézia Teodora', rotulo: 'Gestora do setor', foto: 'img/maezia.jpg' }
  }),

  'industria': Object.assign(modeloVazio(), {
    nome: 'Indústria',
    titulo: ['', 'Indústria.'],
    subtitulo: 'Produtividade, processos e inovação para pequenas indústrias do Rio Grande do Norte.',
    segmentos: ['Metalmecânica', 'Plásticos', 'Gráficas', 'Química'],
    gestor: { nome: 'Vitória Mauad', rotulo: 'Gestora do setor', foto: 'img/vitoria.jpg' }
  }),

  'moda': {
    nome: 'Moda',
    titulo: ['Negócios da', 'Moda.'],
    subtitulo: 'Do ateliê à indústria: gestão, produto e mercado para quem faz moda no Rio Grande do Norte.',
    segmentos: ['Moda autoral', 'Confecções', 'Uniformes e fardamentos', 'Oficinas de costura'],
    gestor: { nome: 'Camilla Ruama', rotulo: 'Gestora do setor', foto: 'img/camilla.jpg' },
    tituloAgenda: ['Onde a moda potiguar', 'se mostra.'],
    tituloCase: ['Marcas que', 'cresceram aqui.'],
    tituloContato: ['Sua marca cabe em', 'qual programa?'],
    programas: [
      { nome: 'Impulsiona Moda RN', itens: ['Showroom', 'Natal Pensando Moda', 'Feiras', 'Sebraetec'] },
      { nome: 'Emenda Impulsiona Moda', itens: ['Showroom', 'Feiras', 'Costura', 'Precificação', 'TOC', 'Polivalência'] },
      { nome: 'Costura + RN', itens: ['Showroom', 'Feiras nacionais', 'Sebraetec', 'Curso de costura'] },
      { nome: 'Brasil Mais Produtivo', itens: ['Consultoria Sebraetec', 'Produtividade'] },
      { nome: 'Encadeamento Produtivo', itens: ['Fatura+', 'Lidera+', 'Organiza+', 'Produza+'] }
    ],
    jornadas: [
      { nome: 'Trilha Impulsiona Moda', selo: '10h de conteúdo', texto: 'Para marcas que querem organizar a estratégia, acertar o preço e se comunicar melhor.', temas: ['Planejamento estratégico e inovação', 'Finanças e precificação', 'Marketing e comunicação'], etapas: [{ n: 1, titulo: 'Palestras e oficinas', quando: 'Maio' }, { n: 2, titulo: 'Mentorias', quando: 'Junho' }, { n: 3, titulo: 'Certificação', quando: 'Julho' }] },
      { nome: 'Jornada ESG Bonelaria', selo: 'Gestão de resíduos', texto: 'Do diagnóstico à execução do Plano de Gerenciamento de Resíduos Sólidos (PGRS).', temas: ['Sustentabilidade', 'Gestão de resíduos', 'PGRS'], etapas: [{ n: 1, titulo: 'Análise e seleção', quando: 'Junho' }, { n: 2, titulo: 'Mapeamento do PGRS', quando: 'Julho' }, { n: 3, titulo: 'Execução do PGRS', quando: 'Agosto' }] },
      { nome: 'Ginga + Talks', selo: 'Conteúdo e conexão', texto: 'Encontros com conteúdo sobre o que está movendo a moda autoral e a indústria têxtil.', temas: ['Tendências de moda', 'Sustentabilidade', 'Inovação', 'Design e estilo', 'Moda autoral e local', 'Processos e indústria têxtil'], etapas: [{ n: 1, titulo: 'Ginga', quando: '27 e 28 de julho' }, { n: 2, titulo: 'Talks temáticos', quando: '[Datas a definir]' }, { n: 3, titulo: 'Conexões e negócios', quando: '[Formato a definir]' }] }
    ],
    missoes: ['Goiás · ONDM', 'FEBRATEX', 'China · Canton Fair'],
    feiras: [
      { nome: 'BH à Porter', ini: '2026-03-02', fim: '2026-03-06' },
      { nome: 'Minas Trend', ini: '2026-04-14', fim: '2026-04-16' },
      { nome: 'Casa Moda', ini: '2026-04-24', fim: '2026-04-27' },
      { nome: 'Opera', ini: '2026-04-25', fim: '2026-04-27' },
      { nome: 'Contemporâneo', ini: '2026-04-25', fim: '2026-04-28' },
      { nome: 'Ginga', ini: '2026-07-27', fim: '2026-07-28' },
      { nome: 'White Milano', ini: '2026-10-24', fim: '2026-10-27' }
    ],
    frentes: [
      { nome: 'Gestão e produtividade', img: 'img/oficina-costura.jpg', alt: 'Oficina de costura em funcionamento', itens: [{ nome: 'Controle e melhoria de processos', texto: 'Organização e padronização da operação.' }, { nome: 'TOC', texto: 'Teoria das Restrições aplicada à produção.' }, { nome: '5S', texto: 'Organização e disciplina no ambiente de trabalho.' }] },
      { nome: 'Produto e desenvolvimento', img: 'img/moda-atelie.jpg', alt: 'Estilista desenhando ao lado de um manequim', itens: [{ nome: 'Desenvolvimento de coleções', texto: 'Do conceito ao produto final.' }, { nome: 'Modelagem e graduação', texto: 'Moldes e variação de tamanhos.' }, { nome: 'Modelagem, encaixe e plotagem', texto: 'Aproveitamento de tecido e impressão de moldes.' }] }
    ]
  },

  'saude-e-bem-estar': Object.assign(modeloVazio(), {
    nome: 'Saúde e Bem-estar',
    titulo: ['Saúde e', 'Bem-estar.'],
    subtitulo: 'Clínicas, academias e serviços de bem-estar com gestão, atendimento e crescimento.',
    segmentos: ['Clínicas', 'Academias', 'Farmácias', 'Terapias integrativas'],
    gestor: { nome: 'Anna Lívia', rotulo: 'Gestora do setor', foto: 'img/anna-livia.jpg' }
  }),

  'turismo': Object.assign(modeloVazio(), {
    nome: 'Turismo',
    titulo: ['', 'Turismo.'],
    subtitulo: 'Hospedagem, receptivo e experiências com gestão, produto e acesso a mercado no Rio Grande do Norte.',
    segmentos: ['Hospedagem', 'Agências', 'Receptivo', 'Turismo de experiência'],
    gestor: { nome: 'Yves Guerra', rotulo: 'Gestor do setor', foto: 'img/yves.jpg' }
  })
};
