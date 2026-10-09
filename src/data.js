export const DOCUMENT_META = {
  version: '3.0.0',
  updatedAt: '9 de outubro de 2026',
  platform: 'Android, iOS e painel web',
}

// TODO(publicação): preencher e validar com o responsável jurídico os dados da
// operadora (razão social, CNPJ, endereço e canais oficiais) antes do deploy.
// Esses dados não existem nos repositórios analisados e não devem ser inventados.

export const SECTIONS = [
  {
    id: 's1',
    num: '01',
    title: 'Objeto, abrangência e aceite',
    content: [
      { type: 'p', text: 'Estes Termos de Uso regulam o acesso e a utilização da plataforma MeatShop, incluindo seus aplicativos para Android e iOS, painel web, interfaces de programação, canais digitais e funcionalidades relacionadas.' },
      { type: 'p', text: 'Ao criar uma conta, acessar ou utilizar a Plataforma, o usuário declara que leu, compreendeu e concorda com estes Termos. Caso não concorde, deverá interromper o uso. Funcionalidades específicas poderão exigir confirmações ou condições adicionais apresentadas no respectivo fluxo.' },
      { type: 'highlight', label: 'Transparência', text: 'A versão, a data de atualização e a abrangência deste documento são indicadas no cabeçalho. Alterações materiais deverão ser comunicadas pelos canais disponíveis e poderão exigir novo aceite.' },
    ],
  },
  {
    id: 's2',
    num: '02',
    title: 'Participantes e perfis',
    content: [
      { type: 'p', text: 'A Plataforma conecta clientes, estabelecimentos do setor de carnes e alimentos, entregadores e usuários responsáveis pela operação das unidades cadastradas.' },
      {
        type: 'sub',
        items: [
          { label: '2.1 — Cliente', text: 'Consulta estabelecimentos e produtos, monta o carrinho, realiza pedidos, escolhe modalidades disponíveis de pagamento e entrega, acompanha o pedido e registra avaliações elegíveis.' },
          { label: '2.2 — Entregador', text: 'Após cadastro e eventual aprovação, pode ficar disponível, aceitar entregas, compartilhar localização durante a execução autorizada e consultar informações operacionais e ganhos disponibilizados.' },
          { label: '2.3 — Perfil duplo', text: 'O usuário habilitado como Cliente e Entregador pode alternar entre os modos, ficando sujeito às obrigações do perfil utilizado em cada momento.' },
          { label: '2.4 — Unidade', text: 'O estabelecimento parceiro anuncia produtos, define preços, estoque, horários e condições operacionais, recebe e gerencia pedidos e responde pela regularidade de sua atividade e dos produtos comercializados.' },
          { label: '2.5 — Equipe da unidade', text: 'Proprietários, gerentes, operadores e entregadores vinculados recebem permissões conforme sua função e devem usar o painel somente para atividades autorizadas.' },
          { label: '2.6 — Administração', text: 'Usuários administrativos podem operar recursos de segurança, suporte, auditoria e gestão da Plataforma dentro de suas atribuições.' },
        ],
      },
    ],
  },
  {
    id: 's3',
    num: '03',
    title: 'Elegibilidade, cadastro e conta',
    content: [
      {
        type: 'sub',
        items: [
          { label: '3.1', text: 'O usuário deve fornecer dados verdadeiros, completos e atualizados. Cadastros falsos, de terceiros sem autorização ou usados para fraude poderão ser recusados, suspensos ou encerrados.' },
          { label: '3.2', text: 'O acesso pode ocorrer por e-mail e senha ou por provedores de autenticação disponibilizados. Cada e-mail poderá estar vinculado a uma única conta ativa, ressalvadas regras específicas informadas pela Plataforma.' },
          { label: '3.3', text: 'As credenciais são pessoais e intransferíveis. O usuário deve manter sua senha em sigilo, proteger seus dispositivos e comunicar suspeitas de acesso indevido pelos canais oficiais disponíveis.' },
          { label: '3.4', text: 'Controles de segurança, como limitação de tentativas, bloqueio temporário, confirmação de identidade e encerramento de sessões, poderão ser aplicados para proteger contas e transações.' },
          { label: '3.5', text: 'Permissões do painel são vinculadas à função e à unidade. É proibido compartilhar acesso, consultar dados sem necessidade profissional ou executar ações fora das atribuições concedidas.' },
          { label: '3.6', text: 'A Plataforma não é direcionada a crianças. Menores de 18 anos somente poderão utilizá-la sob assistência ou representação de seus pais ou responsáveis, conforme a legislação aplicável e sempre observando seu melhor interesse.' },
        ],
      },
    ],
  },
  {
    id: 's4',
    num: '04',
    title: 'Funcionamento da Plataforma',
    content: [
      { type: 'p', text: 'O MeatShop fornece infraestrutura tecnológica para descoberta de estabelecimentos, apresentação de catálogos, realização e gestão de pedidos, pagamentos disponibilizados, entrega, comunicação, avaliações, promoções e recursos administrativos.' },
      { type: 'p', text: 'Salvo quando expressamente indicado de outra forma, os estabelecimentos são responsáveis pela oferta, origem, qualidade, conservação, peso, preparo, embalagem, informações e regularidade sanitária dos produtos. A identificação do fornecedor aplicável deve ser observada na oferta e nos dados do pedido.' },
      { type: 'highlight', label: 'Intermediação tecnológica', text: 'A atuação tecnológica do MeatShop não elimina as responsabilidades legais próprias da Plataforma, do estabelecimento, do entregador, dos prestadores de pagamento ou de outros participantes da operação.' },
    ],
  },
  {
    id: 's5',
    num: '05',
    title: 'Catálogo, preços e promoções',
    content: [
      {
        type: 'sub',
        items: [
          { label: '5.1', text: 'Descrições, imagens, disponibilidade, unidades de medida e preços são informados pelos estabelecimentos e podem variar por unidade, região, estoque e horário.' },
          { label: '5.2', text: 'O valor válido será o exibido na revisão do pedido e confirmado pelo sistema. O carrinho não garante reserva de estoque nem manutenção de preço antes da finalização.' },
          { label: '5.3', text: 'Quando o produto for vendido por peso, o valor final poderá sofrer ajuste conforme a pesagem efetiva, desde que essa condição seja informada ao consumidor e respeite a legislação aplicável.' },
          { label: '5.4', text: 'Cupons, descontos e promoções podem ter prazo, quantidade, público, unidade, valor mínimo, limite de uso e outras regras próprias, apresentadas no momento da oferta.' },
          { label: '5.5', text: 'Erros manifestos de preço ou disponibilidade serão tratados com transparência. O consumidor será informado e poderá confirmar a condição corrigida ou solicitar o cancelamento quando cabível.' },
        ],
      },
    ],
  },
  {
    id: 's6',
    num: '06',
    title: 'Pedidos e agendamentos',
    content: [
      {
        type: 'sub',
        items: [
          { label: '6.1', text: 'Ao enviar um pedido, o cliente confirma os itens, quantidades, endereço ou retirada, modalidade, horário, descontos, taxas e total apresentados na revisão.' },
          { label: '6.2', text: 'O recebimento eletrônico do pedido não significa aceitação definitiva. O pedido poderá depender de disponibilidade, validação do estabelecimento, aprovação financeira e possibilidade de entrega.' },
          { label: '6.3', text: 'Os estados operacional e financeiro podem ser exibidos separadamente. A confirmação pelo estabelecimento não substitui a aprovação do pagamento quando ele for realizado online.' },
          { label: '6.4', text: 'Pedidos agendados dependem do horário de funcionamento, capacidade e estoque da unidade. Horários são estimativas e podem ser ajustados ou recusados mediante informação ao cliente.' },
          { label: '6.5', text: 'Mecanismos de idempotência e conferência podem ser utilizados para reduzir pedidos ou cobranças duplicadas. Em caso de dúvida após falha de conexão, o usuário deve consultar o histórico antes de repetir a operação.' },
          { label: '6.6', text: 'Cancelamento e reagendamento estarão disponíveis apenas nos estados e condições exibidos na Plataforma. Após o início do preparo ou da entrega, poderão existir restrições justificadas pela natureza do produto e pelos custos já incorridos, sem afastar direitos previstos em lei.' },
        ],
      },
    ],
  },
  {
    id: 's7',
    num: '07',
    title: 'Pagamentos, cancelamentos e reembolsos',
    content: [
      {
        type: 'sub',
        items: [
          { label: '7.1', text: 'Os meios efetivamente aceitos serão aqueles exibidos no checkout e podem incluir Pix, cartão, dinheiro ou pagamento na entrega, conforme a unidade, o provedor e a disponibilidade técnica.' },
          { label: '7.2', text: 'Pagamentos online podem ser processados por prestadores especializados. Dados completos de cartão não devem ser armazenados nos servidores do MeatShop; tokens e metadados poderão ser mantidos para viabilizar a operação e a identificação do meio de pagamento.' },
          { label: '7.3', text: 'Pagamentos recusados, pendentes, expirados ou submetidos a análise poderão impedir a continuidade, manter o pedido pendente por tempo limitado ou resultar em cancelamento.' },
          { label: '7.4', text: 'Pagamentos feitos diretamente na entrega são de responsabilidade dos participantes que os recebem e devem observar o valor e o método registrados no pedido.' },
          { label: '7.5', text: 'Pedidos poderão ser cancelados pelo cliente, estabelecimento ou Plataforma em situações como indisponibilidade, falha de pagamento, risco de fraude, impossibilidade de entrega ou violação destes Termos.' },
          { label: '7.6', text: 'Quando houver valor a devolver, o reembolso será solicitado ou processado pelo mesmo meio de pagamento sempre que possível. O prazo de visualização depende do provedor, da instituição financeira e das regras legais aplicáveis.' },
          { label: '7.7', text: 'Direitos de arrependimento, cancelamento por vício, oferta descumprida ou cobrança indevida serão avaliados conforme o Código de Defesa do Consumidor, a natureza perecível dos produtos e as circunstâncias concretas, sem renúncia prévia a direitos legais.' },
        ],
      },
    ],
  },
  {
    id: 's8',
    num: '08',
    title: 'Entrega, retirada e localização',
    content: [
      {
        type: 'sub',
        items: [
          { label: '8.1', text: 'Prazos de entrega são estimativas e dependem de preparo, distância, trânsito, clima, disponibilidade de entregadores e outras condições operacionais.' },
          { label: '8.2', text: 'O cliente deve fornecer endereço correto, referências necessárias e condições seguras de recebimento. Tentativas frustradas por dados incorretos, ausência ou restrição de acesso poderão gerar atraso, retorno ou cobrança permitida.' },
          { label: '8.3', text: 'Na retirada, o cliente deve comparecer à unidade indicada dentro do horário e seguir os procedimentos de identificação e confirmação apresentados.' },
          { label: '8.4', text: 'A localização do entregador pode ser tratada durante uma entrega ativa mediante ciência e controles apresentados no aplicativo. O entregador poderá pausar ou revogar o compartilhamento, sujeito aos impactos operacionais informados.' },
          { label: '8.5', text: 'A localização exibida é aproximada e pode sofrer imprecisões por GPS, conexão, sistema operacional ou mapas de terceiros. Ela não deve ser usada para finalidade estranha à entrega.' },
          { label: '8.6', text: 'Códigos ou confirmações de entrega são pessoais. O cliente deve fornecê-los somente no recebimento correto do pedido.' },
        ],
      },
    ],
  },
  {
    id: 's9',
    num: '09',
    title: 'Obrigações dos estabelecimentos',
    content: [
      {
        type: 'list',
        items: [
          'Manter cadastro, CNPJ, endereço, horários e informações comerciais atualizados',
          'Cumprir normas sanitárias, consumeristas, fiscais, trabalhistas e regulatórias aplicáveis à sua atividade',
          'Anunciar produtos com informações claras sobre características, preço, peso, disponibilidade, conservação e eventuais restrições',
          'Gerenciar estoque e pedidos com diligência, evitando confirmações que não possam ser atendidas',
          'Preparar, acondicionar e entregar produtos em condições adequadas de qualidade, higiene e segurança alimentar',
          'Utilizar dados de clientes e entregadores apenas para executar a operação autorizada e cumprir obrigações legais',
          'Controlar acessos de sua equipe, revogar permissões indevidas e responder pelas ações realizadas em sua unidade',
        ],
      },
    ],
  },
  {
    id: 's10',
    num: '10',
    title: 'Obrigações dos entregadores',
    content: [
      {
        type: 'list',
        items: [
          'Fornecer dados e documentos verdadeiros e manter o veículo regular e em condições seguras',
          'Aceitar somente entregas que possa realizar com segurança e dentro das condições apresentadas',
          'Preservar a integridade, temperatura e embalagem do pedido durante o transporte',
          'Usar endereços, contatos, códigos e localização exclusivamente para executar a entrega',
          'Não compartilhar contas, rotas, dados pessoais ou informações operacionais com terceiros não autorizados',
          'Cumprir regras de trânsito, segurança, identificação e confirmação da entrega',
          'Comunicar incidentes, avarias, atrasos relevantes e impossibilidade de conclusão pelos canais disponíveis',
        ],
      },
      { type: 'p', text: 'A forma da relação entre entregador, estabelecimento e Plataforma observará os contratos e a legislação aplicáveis. Estes Termos, por si só, não criam promessa de volume mínimo, exclusividade ou renda garantida.' },
    ],
  },
  {
    id: 's11',
    num: '11',
    title: 'Avaliações, mensagens e conteúdo',
    content: [
      {
        type: 'sub',
        items: [
          { label: '11.1', text: 'Avaliações estarão disponíveis somente quando os critérios de elegibilidade do pedido forem atendidos e devem refletir experiência autêntica.' },
          { label: '11.2', text: 'É proibido publicar conteúdo ilegal, fraudulento, discriminatório, ameaçador, ofensivo, enganoso, publicitário não autorizado ou que exponha dados pessoais de terceiros.' },
          { label: '11.3', text: 'Mensagens e anexos devem tratar da operação legítima. Os participantes não devem solicitar senhas, códigos de autenticação, dados completos de cartão ou informações desnecessárias.' },
          { label: '11.4', text: 'Conteúdos poderão ser analisados, restringidos ou removidos quando houver violação destes Termos, obrigação legal, risco à segurança ou denúncia fundamentada, preservados os registros necessários à apuração.' },
          { label: '11.5', text: 'O usuário mantém a titularidade de seu conteúdo e concede à Plataforma licença não exclusiva e limitada para armazená-lo, processá-lo e exibi-lo apenas na medida necessária à prestação, segurança e melhoria do serviço.' },
        ],
      },
    ],
  },
  {
    id: 's12',
    num: '12',
    title: 'Assistente virtual e inteligência artificial',
    content: [
      {
        type: 'sub',
        items: [
          { label: '12.1', text: 'A Plataforma pode disponibilizar assistente baseado em modelo de inteligência artificial de terceiro, configurado para responder sobre carnes, cortes, receitas e temas relacionados.' },
          { label: '12.2', text: 'As respostas são automatizadas, podem conter erros e não representam garantia de resultado. Elas não substituem orientação médica, nutricional, sanitária ou profissional.' },
          { label: '12.3', text: 'Perguntas podem ser transmitidas e temporariamente processadas pelo fornecedor da tecnologia. O usuário não deve inserir CPF, endereço, telefone, senhas, dados financeiros, informações de saúde ou outros dados pessoais desnecessários.' },
          { label: '12.4', text: 'Interações podem ser mantidas temporariamente em cache ou registros técnicos para funcionamento, segurança e melhoria, conforme as práticas de retenção aplicáveis e as informações de privacidade.' },
          { label: '12.5', text: 'A Plataforma poderá limitar temas, bloquear uso abusivo ou suspender o assistente por segurança, manutenção ou indisponibilidade do fornecedor.' },
        ],
      },
    ],
  },
  {
    id: 's13',
    num: '13',
    title: 'Uso aceitável e segurança',
    content: [
      { type: 'p', text: 'O usuário deve utilizar a Plataforma de forma lícita, segura e compatível com sua finalidade. É proibido:' },
      {
        type: 'list',
        items: [
          'Praticar fraude, simular pedidos, pagamentos, entregas, avaliações ou identidades',
          'Acessar conta, unidade, dados ou função sem autorização',
          'Explorar falhas, contornar controles, interferir no serviço ou realizar engenharia reversa proibida por lei',
          'Introduzir código malicioso, automatizar acessos abusivos, raspar conteúdo ou sobrecarregar a infraestrutura',
          'Usar dados obtidos na Plataforma para assédio, discriminação, publicidade não autorizada ou finalidade incompatível',
          'Violar direitos de propriedade intelectual, privacidade, imagem ou outros direitos de terceiros',
        ],
      },
      { type: 'p', text: 'Suspeitas de vulnerabilidade devem ser comunicadas de forma responsável pelos canais oficiais, sem exploração adicional nem divulgação que aumente riscos aos usuários.' },
    ],
  },
  {
    id: 's14',
    num: '14',
    title: 'Dados pessoais tratados',
    content: [
      { type: 'p', text: 'Para prestar e proteger os serviços, a Plataforma pode tratar dados conforme o perfil e a funcionalidade utilizada:' },
      {
        type: 'list',
        items: [
          'Cadastro e identidade: nome, e-mail, telefone, CPF, identificadores de autenticação, foto e situação da conta',
          'Estabelecimentos e equipe: CNPJ, dados comerciais, endereço, função, permissões e vínculos com unidades',
          'Entregadores: dados cadastrais, situação de aprovação, informações e imagens do veículo, disponibilidade e dados operacionais',
          'Pedidos e pagamentos: itens, valores, descontos, endereços, horários, estados do pedido, comprovantes, tokens e metadados do meio de pagamento',
          'Localização: coordenadas de endereços e, quando autorizado, posições necessárias ao acompanhamento da entrega',
          'Comunicação e conteúdo: mensagens, avaliações, chamados, anexos e interações com o assistente virtual',
          'Dispositivo e segurança: tokens de notificação, plataforma, versão do aplicativo, IP, user-agent, eventos de autenticação, auditoria, falhas e desempenho',
          'Preferências: configurações, notificações, unidade selecionada e informações armazenadas localmente no dispositivo ou navegador',
        ],
      },
    ],
  },
  {
    id: 's15',
    num: '15',
    title: 'Finalidades e bases do tratamento',
    content: [
      { type: 'p', text: 'Os dados poderão ser tratados, conforme o caso, para executar contratos e procedimentos preliminares; cumprir obrigações legais ou regulatórias; prevenir fraude e proteger direitos; atender interesses legítimos avaliados; exercer direitos em processos; proteger a vida e a segurança; e obter consentimento quando essa for a base adequada.' },
      {
        type: 'list',
        items: [
          'Criar e autenticar contas, verificar perfis e administrar permissões',
          'Exibir ofertas, calcular taxas, processar pedidos, pagamentos, retiradas e entregas',
          'Permitir comunicação, suporte, notificações transacionais e recuperação de conta',
          'Prevenir fraude, abuso, incidentes e acessos não autorizados',
          'Manter registros financeiros, fiscais, consumeristas, contratuais e de auditoria',
          'Medir estabilidade, corrigir falhas e melhorar desempenho e experiência',
          'Personalizar recursos e enviar comunicações promocionais somente quando permitido, respeitando preferências e meios de oposição',
        ],
      },
      { type: 'highlight', label: 'Escolhas do usuário', text: 'Permissões de localização, câmera, fotos e notificações podem ser controladas no dispositivo. A recusa poderá limitar apenas as funções que dependam tecnicamente desses recursos, e alternativas serão oferecidas quando viáveis.' },
    ],
  },
  {
    id: 's16',
    num: '16',
    title: 'Compartilhamento e fornecedores',
    content: [
      { type: 'p', text: 'Dados podem ser compartilhados no limite necessário com clientes, estabelecimentos e entregadores envolvidos no pedido; provedores de autenticação, nuvem, hospedagem, armazenamento de imagens, mapas, geocodificação, pagamentos, e-mail, notificações, monitoramento, suporte e inteligência artificial; autoridades públicas; e assessores sujeitos a deveres de confidencialidade.' },
      { type: 'p', text: 'Alguns fornecedores podem processar dados fora do Brasil. Nesses casos, serão adotados mecanismos compatíveis com a LGPD e medidas razoáveis de proteção, considerando a natureza do serviço e as regras aplicáveis à transferência internacional.' },
      { type: 'p', text: 'O MeatShop não comercializa dados pessoais. Compartilhamentos para publicidade ou finalidade independente somente ocorrerão quando houver base legal adequada e transparência ao titular.' },
    ],
  },
  {
    id: 's17',
    num: '17',
    title: 'Retenção, direitos e exclusão da conta',
    content: [
      {
        type: 'sub',
        items: [
          { label: '17.1', text: 'Os dados serão mantidos pelo tempo necessário às finalidades informadas, à execução dos serviços e ao cumprimento de obrigações legais, regulatórias, fiscais, consumeristas, antifraude e de exercício de direitos.' },
          { label: '17.2', text: 'Registros de rastreamento de entregas são sujeitos a rotina específica de expurgo e, na configuração padrão atual, são eliminados após 30 dias, ressalvadas retenções justificadas e alterações operacionais informadas.' },
          { label: '17.3', text: 'O titular pode solicitar confirmação, acesso, correção, informações sobre compartilhamento, revisão de decisões aplicáveis, portabilidade quando regulamentada, oposição, anonimização, bloqueio, eliminação e revogação de consentimento, observados os limites legais.' },
          { label: '17.4', text: 'A exclusão da conta pode exigir reautenticação. A solicitação inicia a desativação e a eliminação ou anonimização dos dados que não precisem ser preservados; registros obrigatórios poderão permanecer bloqueados e com acesso restrito pelo prazo aplicável.' },
          { label: '17.5', text: 'Tokens de sessão e notificações vinculados à conta serão revogados conforme o fluxo de encerramento. Cadastros mantidos por fornecedores, como meios de pagamento, podem exigir tratamento adicional pelo respectivo provedor.' },
          { label: '17.6', text: 'Solicitações de privacidade dependerão da validação da identidade e deverão ser encaminhadas pelo canal oficial disponibilizado pela Plataforma. A resposta observará os prazos legais e poderá explicar eventual impossibilidade de atendimento integral.' },
        ],
      },
    ],
  },
  {
    id: 's18',
    num: '18',
    title: 'Proteção e incidentes de segurança',
    content: [
      { type: 'p', text: 'São adotadas medidas técnicas e administrativas proporcionais aos riscos, incluindo controle de acesso, autenticação, proteção de credenciais, registros de auditoria, limitação de requisições e monitoramento. Nenhum ambiente digital, entretanto, é totalmente imune a incidentes.' },
      { type: 'p', text: 'Incidentes relevantes serão avaliados e, quando exigido, comunicados à Autoridade Nacional de Proteção de Dados e aos titulares afetados nos termos e prazos aplicáveis, com informações sobre natureza, riscos e medidas adotadas.' },
      { type: 'p', text: 'O usuário deve manter o aplicativo, navegador e sistema operacional atualizados, evitar redes ou dispositivos comprometidos e nunca compartilhar senhas ou códigos de autenticação.' },
    ],
  },
  {
    id: 's19',
    num: '19',
    title: 'Propriedade intelectual',
    content: [
      { type: 'p', text: 'Marcas, logotipos, interfaces, software, textos, bases, elementos visuais e demais conteúdos da Plataforma pertencem aos respectivos titulares e são protegidos pela legislação. O acesso concede licença limitada, revogável, não exclusiva e intransferível para uso regular do serviço.' },
      { type: 'p', text: 'É proibido copiar, modificar, distribuir, vender, licenciar ou explorar esses elementos fora das permissões legais ou de autorização expressa. Marcas, imagens e conteúdos enviados por estabelecimentos e usuários permanecem sujeitos aos direitos de seus titulares.' },
    ],
  },
  {
    id: 's20',
    num: '20',
    title: 'Disponibilidade e limitações',
    content: [
      { type: 'p', text: 'A Plataforma busca manter seus serviços disponíveis e seguros, mas poderá apresentar interrupções por manutenção, falhas, atualizações, indisponibilidade de terceiros, eventos de força maior ou medidas de segurança. Não é garantido índice mínimo de disponibilidade, salvo compromisso específico formalizado separadamente.' },
      { type: 'p', text: 'Funcionalidades podem ser alteradas, suspensas ou descontinuadas, especialmente quando experimentais ou dependentes de terceiros. Sempre que razoável, mudanças relevantes serão comunicadas com antecedência compatível.' },
      { type: 'p', text: 'Nenhuma disposição destes Termos limita responsabilidade que não possa ser legalmente excluída, nem afasta direitos do consumidor. Eventuais perdas serão analisadas conforme a participação de cada agente, o nexo causal e a legislação aplicável.' },
    ],
  },
  {
    id: 's21',
    num: '21',
    title: 'Suspensão e encerramento',
    content: [
      { type: 'p', text: 'Contas, permissões, anúncios, conteúdos ou operações poderão ser limitados, suspensos ou encerrados em caso de fraude, risco à segurança, obrigação legal, violação destes Termos, inadimplência aplicável ou uso que prejudique terceiros ou a Plataforma.' },
      { type: 'p', text: 'Quando compatível com o risco e a lei, o usuário será informado sobre a medida e poderá apresentar esclarecimentos pelos canais oficiais. Medidas urgentes poderão ser aplicadas preventivamente para conter danos ou preservar evidências.' },
      { type: 'p', text: 'O encerramento não elimina obrigações pendentes, valores devidos, responsabilidades por condutas anteriores nem registros cuja conservação seja exigida ou permitida por lei.' },
    ],
  },
  {
    id: 's22',
    num: '22',
    title: 'Comunicações e alterações',
    content: [
      { type: 'p', text: 'Comunicações operacionais, de segurança, suporte e atualização poderão ser enviadas pelo aplicativo, painel, push, e-mail ou outro contato cadastrado. O usuário deve manter seus dados atualizados e consultar os canais disponibilizados.' },
      { type: 'p', text: 'Estes Termos poderão ser atualizados para refletir mudanças legais, técnicas ou comerciais. A nova versão indicará a data de atualização. Alterações materiais serão destacadas e, quando necessário, será solicitado novo aceite antes da continuidade do uso.' },
      { type: 'p', text: 'A continuidade de uso após a entrada em vigor da nova versão produzirá os efeitos permitidos pela legislação, sem substituir consentimento ou aceite específico quando estes forem exigidos.' },
    ],
  },
  {
    id: 's23',
    num: '23',
    title: 'Disposições gerais e contato',
    content: [
      {
        type: 'sub',
        items: [
          { label: '23.1', text: 'Estes Termos são regidos pelas leis brasileiras, incluindo o Código de Defesa do Consumidor, o Marco Civil da Internet e a Lei Geral de Proteção de Dados, quando aplicáveis.' },
          { label: '23.2', text: 'Eventual tolerância não representa renúncia de direito. Se uma disposição for considerada inválida, as demais permanecerão em vigor na máxima extensão permitida.' },
          { label: '23.3', text: 'Em relações de consumo, fica preservado o foro do domicílio do consumidor e qualquer outra proteção legal. Nos demais casos, eventual foro contratual somente será aplicado quando válido.' },
          { label: '23.4', text: 'Dúvidas, suporte, cancelamentos e solicitações relacionadas a dados pessoais devem ser encaminhados pelos canais oficiais disponibilizados na Plataforma.' },
        ],
      },
      { type: 'highlight', label: 'Identificação da operadora', text: 'Antes da publicação desta versão, devem ser incluídos nesta seção a razão social, o CNPJ, o endereço físico e eletrônico e os contatos oficiais da responsável pela Plataforma MeatShop.' },
    ],
  },
]
