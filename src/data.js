export const SECTIONS = [
  {
    id: 's1',
    num: '01',
    title: 'Aceitação dos Termos',
    content: [
      {
        type: 'p',
        text: 'Ao criar uma conta, acessar ou utilizar o aplicativo MeatShop, você declara ter lido, compreendido e concordado com os presentes Termos de Uso. Caso não concorde com alguma das condições aqui descritas, não utilize o aplicativo.',
      },
      {
        type: 'p',
        html: 'Estes Termos se aplicam a todos os perfis de usuário disponíveis na plataforma: <strong>Cliente</strong>, <strong>Entregador</strong> e usuários com <strong>perfil duplo</strong> (Cliente e Entregador).',
      },
    ],
  },
  {
    id: 's2',
    num: '02',
    title: 'Descrição do Serviço',
    content: [
      {
        type: 'p',
        text: 'O MeatShop é uma plataforma digital que conecta clientes, açougues e entregadores autônomos, permitindo a realização de pedidos de carnes e produtos de açougue com entrega em domicílio ou retirada no estabelecimento.',
      },
      {
        type: 'p',
        text: 'A plataforma oferece, entre outras funcionalidades: catálogo de produtos por açougue, carrinho de compras, agendamento de pedidos, acompanhamento de entrega em tempo real, pagamento online ou na entrega, chat entre as partes e um assistente virtual especializado em receitas e cortes de carne.',
      },
      {
        type: 'highlight',
        text: 'O MeatShop atua como intermediador tecnológico entre clientes, açougues e entregadores, não sendo responsável pela produção, qualidade ou preparo dos produtos comercializados pelos estabelecimentos parceiros.',
        label: 'Nota importante',
      },
    ],
  },
  {
    id: 's3',
    num: '03',
    title: 'Cadastro e Conta de Usuário',
    content: [
      {
        type: 'sub',
        items: [
          { label: '3.1', text: 'Para utilizar as funcionalidades completas do aplicativo, é necessário criar uma conta com e-mail e senha válidos, ou por meio de autenticação integrada quando disponível.' },
          { label: '3.2', text: 'Cada endereço de e-mail pode estar vinculado a apenas uma conta ativa na plataforma.' },
          { label: '3.3', text: 'A senha deve conter no mínimo 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caractere especial. O armazenamento de senhas é realizado exclusivamente por meio de hash criptográfico seguro.' },
          { label: '3.4', text: 'Após 5 tentativas consecutivas de login inválido, a conta será temporariamente bloqueada por período determinado como medida de segurança.' },
          { label: '3.5', text: 'O usuário é integralmente responsável pela confidencialidade de suas credenciais de acesso. Qualquer atividade realizada com a sua conta é de sua responsabilidade.' },
          { label: '3.6', text: 'Em caso de suspeita de acesso não autorizado, o usuário deve comunicar imediatamente a equipe do MeatShop pelos canais de suporte disponíveis no aplicativo.' },
          { label: '3.7', text: 'O MeatShop reserva-se o direito de suspender ou encerrar contas que violem estes Termos, pratiquem fraude ou utilizem a plataforma de forma inadequada.' },
        ],
      },
    ],
  },
  {
    id: 's4',
    num: '04',
    title: 'Perfis de Usuário',
    content: [
      {
        type: 'sub',
        items: [
          { label: '4.1 — Cliente', text: 'Pode visualizar o catálogo de produtos, realizar pedidos, efetuar pagamentos, acompanhar entregas, avaliar produtos e açougues, e utilizar o chat com os estabelecimentos.' },
          { label: '4.2 — Entregador', text: 'Deve passar por processo de aprovação antes de receber chamadas de entrega. Após ativo, pode visualizar pedidos disponíveis, aceitar ou recusar entregas, utilizar o mapa integrado para navegação e acompanhar seus ganhos e relatórios.' },
          { label: '4.3 — Perfil Duplo', text: 'Usuários com os dois perfis podem alternar entre o modo Cliente e o modo Entregador diretamente pelo aplicativo, sendo que os direitos e responsabilidades de cada perfil se aplicam conforme o modo ativo.' },
        ],
      },
    ],
  },
  {
    id: 's5',
    num: '05',
    title: 'Pedidos e Pagamentos',
    content: [
      {
        type: 'sub',
        items: [
          { label: '5.1', text: 'Ao confirmar um pedido, o usuário declara estar ciente dos itens, quantidades e valor total apresentados na tela de revisão.' },
          { label: '5.2', text: 'O valor considerado válido para o pedido é sempre o preço vigente no momento da confirmação do checkout. Alterações de preço realizadas após a adição ao carrinho serão refletidas antes da finalização.' },
          { label: '5.3', text: 'Um pedido somente será considerado confirmado após retorno positivo do provedor de pagamento. Em caso de recusa, o pedido permanecerá com status pendente ou será cancelado automaticamente.' },
          { label: '5.4', text: 'O sistema valida a disponibilidade em estoque antes da finalização do pagamento. Pedidos com quantidade superior ao disponível não poderão ser concluídos.' },
          { label: '5.5', text: 'Pedidos finalizados não poderão ser alterados, apenas consultados ou replicados por meio da funcionalidade "Pedir novamente".' },
          { label: '5.6', text: 'Em caso de falha de conexão durante o checkout, o pedido permanecerá em estado pendente até confirmação ou cancelamento automático, evitando duplicidade de cobranças.' },
          { label: '5.7', text: 'As opções de pagamento incluem Pix, cartão de crédito, cartão de débito e pagamento na entrega, conforme disponibilidade no momento da compra.' },
          { label: '5.8', text: 'Cartões salvos são armazenados por meio de integração com provedor de pagamentos externo. O MeatShop não armazena dados completos de cartão em seus servidores.' },
        ],
      },
    ],
  },
  {
    id: 's6',
    num: '06',
    title: 'Entrega e Rastreamento',
    content: [
      {
        type: 'sub',
        items: [
          { label: '6.1', text: 'O prazo e as condições de entrega dependem da disponibilidade do açougue e dos entregadores ativos na região no momento do pedido.' },
          { label: '6.2', text: 'O rastreamento em tempo real da entrega está disponível durante o fluxo ativo de um pedido em andamento.' },
          { label: '6.3', text: 'O cliente pode optar por entrega imediata ou agendamento para data e horário futuros, respeitando o horário de funcionamento do estabelecimento.' },
          { label: '6.4', text: 'A modalidade de retirada no estabelecimento, quando disponível, é de responsabilidade do cliente comparecer no local indicado.' },
          { label: '6.5', text: 'O MeatShop não se responsabiliza por atrasos causados por condições climáticas, tráfego, indisponibilidade de entregadores ou situações fora do controle da plataforma.' },
        ],
      },
    ],
  },
  {
    id: 's7',
    num: '07',
    title: 'Avaliações e Comentários',
    content: [
      {
        type: 'sub',
        items: [
          { label: '7.1', text: 'Somente usuários que concluíram um pedido podem registrar avaliações sobre produtos ou açougues relacionados àquela compra.' },
          { label: '7.2', text: 'As avaliações devem refletir a experiência real do usuário e não podem conter linguagem ofensiva, discriminatória, conteúdo falso ou com intenção de prejudicar deliberadamente um estabelecimento.' },
          { label: '7.3', text: 'O MeatShop reserva-se o direito de remover avaliações que violem estas diretrizes, sem necessidade de aviso prévio.' },
        ],
      },
    ],
  },
  {
    id: 's8',
    num: '08',
    title: 'Assistente Virtual — MeatShop Chatbot',
    content: [
      {
        type: 'sub',
        items: [
          { label: '8.1', text: 'O aplicativo disponibiliza um assistente de inteligência artificial especializado em carnes, cortes, receitas e técnicas de preparo culinário.' },
          { label: '8.2', text: 'As respostas fornecidas pelo assistente têm caráter informativo e não substituem orientação profissional em nutrição ou culinária.' },
          { label: '8.3', text: 'O assistente é treinado exclusivamente para o escopo do serviço e não deve ser utilizado para fins alheios à proposta da plataforma.' },
          { label: '8.4', text: 'As interações com o assistente podem ser armazenadas para fins de melhoria do serviço, respeitando a política de privacidade e as disposições da LGPD.' },
        ],
      },
    ],
  },
  {
    id: 's9',
    num: '09',
    title: 'Localização e Dados do Dispositivo',
    content: [
      {
        type: 'sub',
        items: [
          { label: '9.1', text: 'A coleta de localização do dispositivo ocorre exclusivamente mediante consentimento explícito do usuário, sendo utilizada para identificar açougues próximos e para o rastreamento de entregas em andamento.' },
          { label: '9.2', text: 'Caso o usuário negue a permissão de localização, o aplicativo oferecerá a alternativa de inserção manual da cidade ou endereço.' },
          { label: '9.3', text: 'O envio de notificações push está condicionado à autorização concedida pelo usuário nas configurações do dispositivo.' },
        ],
      },
    ],
  },
  {
    id: 's10',
    num: '10',
    title: 'Responsabilidades do Usuário',
    content: [
      { type: 'p', text: 'O usuário se compromete a:' },
      {
        type: 'list',
        items: [
          'Fornecer informações verdadeiras e atualizadas no cadastro',
          'Não utilizar a plataforma para fins ilícitos, fraudulentos ou que prejudiquem outros usuários, açougues ou entregadores',
          'Não tentar contornar os mecanismos de segurança da aplicação',
          'Comunicar ao MeatShop qualquer irregularidade identificada no uso da plataforma',
          'Manter seus dados de contato e endereço atualizados para garantir a correta execução das entregas',
        ],
      },
    ],
  },
  {
    id: 's11',
    num: '11',
    title: 'Responsabilidades do MeatShop',
    content: [
      { type: 'p', text: 'O MeatShop se compromete a:' },
      {
        type: 'list',
        items: [
          'Manter a plataforma disponível com índice mínimo de 99,5% ao mês',
          'Proteger os dados pessoais dos usuários conforme as disposições da LGPD',
          'Registrar e tratar solicitações de suporte encaminhadas pelos canais disponíveis',
          'Comunicar previamente períodos de manutenção programada que possam afetar a disponibilidade do serviço',
          'Manter os dados de pedidos confirmados armazenados de forma segura e persistente',
        ],
      },
      {
        type: 'highlight',
        text: 'O MeatShop não se responsabiliza pela qualidade, segurança alimentar ou regularidade sanitária dos produtos comercializados pelos açougues parceiros, nem por condutas de entregadores autônomos fora do fluxo ativo de entrega monitorado pela plataforma.',
        label: 'Limitação de responsabilidade',
      },
    ],
  },
  {
    id: 's12',
    num: '12',
    title: 'Privacidade e Proteção de Dados',
    content: [
      {
        type: 'sub',
        items: [
          { label: '12.1', text: 'O tratamento de dados pessoais realizado pelo MeatShop obedece ao disposto na Lei nº 13.709/2018 — Lei Geral de Proteção de Dados (LGPD).' },
          { label: '12.2', text: 'Os dados coletados são utilizados para viabilizar as funcionalidades da plataforma, melhorar a experiência do usuário e cumprir obrigações legais.' },
          { label: '12.3', text: 'O usuário tem direito a solicitar a consulta, correção ou exclusão de seus dados pessoais a qualquer momento pelos canais de suporte do aplicativo.' },
          { label: '12.4', text: 'A exclusão da conta pode ser solicitada diretamente pelo aplicativo, mediante confirmação de identidade por senha. Após a exclusão, os dados serão tratados conforme as obrigações legais de retenção aplicáveis.' },
          { label: '12.5', text: 'Dados de localização, histórico de pedidos e interações com o assistente virtual são tratados conforme descrito na Política de Privacidade, disponível no aplicativo.' },
        ],
      },
    ],
  },
  {
    id: 's13',
    num: '13',
    title: 'Propriedade Intelectual',
    content: [
      {
        type: 'p',
        text: 'Todo o conteúdo presente no aplicativo MeatShop, incluindo marca, logotipo, interface, textos, imagens e código-fonte, é de propriedade exclusiva da equipe desenvolvedora ou de seus licenciantes.',
      },
      {
        type: 'p',
        text: 'É vedada a reprodução, distribuição ou uso comercial sem autorização expressa.',
      },
    ],
  },
  {
    id: 's14',
    num: '14',
    title: 'Suspensão e Encerramento',
    content: [
      {
        type: 'p',
        text: 'O MeatShop pode suspender ou encerrar o acesso de qualquer usuário que viole estes Termos, sem necessidade de aviso prévio, nos seguintes casos:',
      },
      {
        type: 'list',
        items: [
          'Uso fraudulento da plataforma',
          'Tentativas de invasão ou comprometimento da segurança do sistema',
          'Fornecimento de informações falsas no cadastro',
          'Prática de condutas que prejudiquem outros usuários ou a integridade da plataforma',
        ],
      },
    ],
  },
  {
    id: 's15',
    num: '15',
    title: 'Alterações nos Termos',
    content: [
      {
        type: 'p',
        text: 'O MeatShop pode atualizar estes Termos de Uso a qualquer momento. As alterações serão comunicadas por meio de notificação no aplicativo ou por e-mail cadastrado.',
      },
      {
        type: 'p',
        text: 'O uso continuado da plataforma após a notificação implica a aceitação dos novos termos.',
      },
    ],
  },
  {
    id: 's16',
    num: '16',
    title: 'Disposições Gerais',
    content: [
      {
        type: 'sub',
        items: [
          { label: '16.1', text: 'Estes Termos são regidos pelas leis brasileiras. Fica eleito o foro da comarca de Anápolis — GO para dirimir eventuais conflitos decorrentes da utilização da plataforma, salvo disposição legal em contrário.' },
          { label: '16.2', text: 'A eventual invalidade de alguma cláusula destes Termos não afeta a validade das demais disposições.' },
          { label: '16.3', text: 'Em caso de dúvidas, o usuário pode entrar em contato com a equipe MeatShop pelos canais de suporte disponíveis diretamente no aplicativo.' },
        ],
      },
    ],
  },
]
