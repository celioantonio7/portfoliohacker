// i18n Translation dictionaries
let translations = {
  PT: null,
  EN: null
};

// Fallback translations in case JSON fetch fails on local file:// protocol
const fallbackTranslations = {
  PT: {
    pageTitle: "Alex Vance // Elite Cybersecurity Portfolio",
    nav: {
      name: "Alex Vance",
      home: "Home",
      about: "Perfil",
      skills: "Especialidades",
      services: "Serviços",
      projects: "Cases",
      contact: "Contato",
      status: "SECURE // ONLINE",
      lightMode: "LIGHT_MODE",
      darkMode: "DARK_MODE",
      lang: "PT"
    },
    hero: {
      tag: "ESPECIALISTA EM CIBERSEGURANÇA OFENSIVA",
      title: "Alex Vance",
      subtitle: "> Encontrar vulnerabilidades antes que elas se tornem incidentes_",
      description: "Pentest, segurança de aplicações, APIs, infraestrutura e ambientes cloud. Avaliações técnicas orientadas a risco para empresas que precisam descobrir, priorizar e corrigir vulnerabilidades antes que sejam exploradas.",
      btnServices: "Conhecer os serviços →",
      btnContact: "Solicitar uma avaliação"
    },
    about: {
      sub: "SOBRE // PERFIL",
      title: "Segurança ofensiva com visão defensiva",
      terminalHeader: "root@vance-sec:~# ./perfil.sh",
      cmdWhoami: "whoami",
      outWhoami: "security_assessment_specialist",
      cmdSpecs: "cat especialidades.txt",
      cmdMethod: "cat metodologia.txt",
      specs: [
        "[+] Pentest Web & API",
        "[+] Segurança de Redes",
        "[+] Cloud Security",
        "[+] Vulnerability Assessment",
        "[+] Threat Hunting",
        "[+] Security Architecture"
      ],
      method: [
        "[+] Reconhecimento",
        "[+] Mapeamento da superfície de ataque",
        "[+] Validação técnica",
        "[+] Exploração controlada",
        "[+] Análise de impacto",
        "[+] Remediação"
      ],
      heading: "Encontrar falhas.<br>Reduzir riscos.<br>Fortalecer sistemas.",
      p1: "Atuo com avaliações de segurança ofensiva, análise de vulnerabilidades e revisão de ambientes tecnológicos. O trabalho combina reconhecimento técnico, validação manual, análise de impacto e recomendações práticas de correção.",
      p2: "A metodologia utiliza referências reconhecidas pela indústria, incluindo OWASP Top 10, MITRE ATT&CK e CVSS, permitindo transformar descobertas técnicas em prioridades de segurança compreensíveis para equipes técnicas e gestores.",
      stat1Label: "Avaliações Técnicas*",
      stat2Label: "Achados de Segurança*",
      stat3Label: "Achados Remediados*",
      statNote: "*Indicadores demonstrativos utilizados exclusivamente nesta apresentação."
    },
    skills: {
      sub: "CAPACIDADES // ESPECIALIDADES",
      title: "Expertise Técnica",
      webApi: { name: "Pentest Web & API", desc: "Avaliação de aplicações web e APIs com foco em autenticação, autorização, controle de acesso e exposição de dados." },
      network: { name: "Segurança de Redes", desc: "Avaliação da superfície de exposição, serviços, configurações, segmentação de rede e controles de acesso." },
      cloud: { name: "Cloud Security", desc: "Avaliação de ambientes AWS, Azure e GCP, com foco em identidade, permissões, redes e workloads." },
      vuln: { name: "Vulnerability Assessment", desc: "Mapeamento, validação e priorização de vulnerabilidades utilizando métricas de severidade como o CVSS 4.0." },
      hunting: { name: "Threat Hunting", desc: "Investigação proativa de comportamentos suspeitos e possíveis sinais de atividade maliciosa." },
      arch: { name: "Security Architecture", desc: "Análise de arquitetura e recomendações para melhorar gestão de identidade, proteção de dados e controles." }
    },
    services: {
      sub: "SERVIÇOS // OPERAÇÕES",
      title: "Avaliações de segurança sob medida",
      pentest: { title: "Pentest", desc: "Identificação e validação controlada de vulnerabilidades em sistemas e aplicações.", items: ["Aplicações Web & APIs", "Infraestrutura & Redes", "Ambientes Cloud", "Recomendações de correção"] },
      redteam: { title: "Red Team", desc: "Simulações controladas de adversários para avaliar a capacidade de prevenir, detectar e responder a ataques.", items: ["Mapeamento de superfície", "Simulação de ameaças", "Testes de detecção", "MITRE ATT&CK"] },
      cloud: { title: "Cloud Security", desc: "Avaliação da postura de segurança dos ambientes cloud e arquitetura em nuvem.", items: ["AWS / Azure / GCP", "IAM & Storage", "Containers & Network", "Configurações de segurança"] },
      vuln: { title: "Vulnerability Assessment", desc: "Descoberta e priorização de vulnerabilidades utilizando métricas claras e orientadas a risco.", items: ["Inventário de ativos", "Scanning & Validação manual", "Classificação de risco", "Plano de remediação"] },
      incident: { title: "Incident Response", desc: "Apoio técnico na investigação e resposta a incidentes de segurança de forma rápida e eficiente.", items: ["Análise de evidências", "Contenção & Investigação", "Indicadores de comprometimento", "Análise pós-incidente"] },
      awareness: { title: "Security Awareness", desc: "Programas de conscientização e treinamento para equipes técnicas e colaboradores.", items: ["Segurança para desenvolvedores", "Phishing simulado autorizado", "Workshops & Boas práticas", "Cultura de segurança"] }
    },
    projects: {
      sub: "OPERAÇÕES // CASES",
      title: "Projetos Demonstrativos",
      viewCase: "[VER CASE →]",
      nightfall: {
        tag: "WEB PENTEST", title: "Operação Nightfall", desc: "Avaliação demonstrativa de uma aplicação corporativa fictícia com problemas de controle de acesso.",
        modal: {
          p1: "Avaliação demonstrativa de uma aplicação corporativa fictícia.",
          p2: "Durante o assessment foram identificados problemas relacionados a controle de acesso, exposição de informações e validação de entradas.",
          h4_1: "Resultados Obtidos",
          results: ["Bypass de autenticação em painel administrativo (Crítico)", "Exposição de PII de clientes através de IDOR (Alto)", "Injeção de SQL em endpoints de busca (Alto)"],
          h4_2: "Recomendações",
          rec: "Implementação de controle de acesso baseado em funções (RBAC) estrito, validação de inputs centralizada e revisão completa da arquitetura de autorização."
        }
      },
      ironcloud: {
        tag: "CLOUD SECURITY", title: "Project Iron Cloud", desc: "Assessment demonstrativo de infraestrutura cloud fictícia avaliando permissões e exposição de recursos.",
        modal: {
          p1: "Assessment demonstrativo de uma infraestrutura cloud fictícia.",
          p2: "O objetivo foi avaliar identidade, permissões, exposição de recursos, armazenamento e controles de rede em um ambiente altamente distribuído.",
          h4_1: "Resultados Obtidos",
          results: ["Buckets S3 públicos contendo backups sensíveis (Crítico)", "Políticas IAM excessivamente permissivas (Wildcards) (Alto)", "Contêineres rodando em modo privilegiado (Médio)"],
          h4_2: "Recomendações",
          rec: "Aplicação do princípio do menor privilégio (PoLP) nas roles IAM, isolamento de workloads em VPCs separadas e bloqueio de acesso público ao S3."
        }
      },
      blackbox: {
        tag: "RED TEAM", title: "Operação Blackbox", desc: "Simulação controlada de adversário para avaliar capacidade de prevenção, detecção e resposta da equipe.",
        modal: {
          p1: "Simulação controlada de adversário contra uma organização fictícia.",
          p2: "O exercício teve como objetivo avaliar a capacidade de prevenção, detecção e resposta da equipe de segurança, utilizando táticas de ameaças persistentes reais.",
          h4_1: "Resultados Obtidos",
          results: ["Acesso inicial via Spear Phishing bem sucedido (Alto)", "Movimentação lateral via Pass-the-Hash (Crítico)", "Tempo médio de detecção pelo SOC: 72 horas"],
          h4_2: "Recomendações",
          rec: "Melhoria contínua de detecção EDR, hardening de Active Directory, e treinamento intensivo de conscientização anti-phishing."
        }
      },
      apisentinel: {
        tag: "API SECURITY", title: "API Sentinel", desc: "Avaliação demonstrativa de uma API corporativa com foco em autenticação e exposição de dados.",
        modal: {
          p1: "Avaliação demonstrativa de uma API corporativa B2B fictícia.",
          p2: "O foco foi identificar problemas de autenticação, autorização, exposição de dados e ausência de rate-limiting.",
          h4_1: "Resultados Obtidos",
          results: ["BOLA (Broken Object Level Authorization) detectado (Crítico)", "Ausência de rate limiting em rotas de login (Alto)", "Exposição de stack traces em mensagens de erro (Baixo)"],
          h4_2: "Recomendações",
          rec: "Implementar verificação de autorização a nível de objeto (IDOR) em todos os endpoints sensíveis, configurar API Gateway com rate limiting e mascarar mensagens de erro em produção."
        }
      }
    },
    contact: {
      sub: "CONTATO // CANAL SEGURO",
      title: "Vamos avaliar a segurança do seu ambiente?",
      heading: "Sua empresa precisa de uma avaliação?",
      desc: "Sua empresa possui uma aplicação, API, infraestrutura ou ambiente cloud que precisa ser avaliado? Converse com Alex Vance para definir o escopo adequado.",
      emailLabel: "E-mail",
      emailValue: "contato@vancesecurity.com.br",
      serviceAreaLabel: "Atendimento",
      serviceAreaValue: "Brasil · Remoto",
      scopeLabel: "Escopo",
      scopeValue: "Avaliações realizadas exclusivamente mediante autorização.",
      roleLabel: "Atuação",
      roleValue: "Pentest · Security Assessment · Cloud Security · Red Team",
      secStatusHeader: "SECURITY STATUS",
      secChannel: "[+] SECURE CHANNEL ........ ONLINE",
      secAssessment: "[+] ASSESSMENT ............ AVAILABLE",
      secResponse: "[+] RESPONSE .............. READY",
      secAuth: "[+] AUTHORIZATION ......... REQUIRED",
      form: {
        idLabel: "// IDENTIFICADOR",
        idPlaceholder: "Seu nome / Empresa",
        channelLabel: "// CANAL DE COMUNICAÇÃO",
        channelPlaceholder: "seu@email.com",
        subjectLabel: "// ASSUNTO",
        subjectPlaceholder: "Tipo de avaliação desejada",
        scopeLabel: "// ESCOPO (OPCIONAL)",
        scopePlaceholder: "Descreva brevemente o ambiente a ser avaliado...",
        submitBtn: "Solicitar Avaliação →",
        encrypting: "Criptografando...",
        success: "✓ Transmitido com Segurança"
      }
    },
    footer: {
      copy: "© 2026 Alex Vance // SECURITY ASSESSMENT",
      motto: "Encontrar falhas. Reduzir riscos. Fortalecer sistemas."
    },
    splash: {
      bypass: "[ FAST_ACCESS ]",
      hint: "💡 Digite <span class=\"highlight-cmd\">sudo start</span> ou pressione <strong>Enter</strong> para inicializar o sistema.",
      booting: "[+] Inicializando VANCE_SEC_OS v4.0.9...",
      fetching: "[+] Baixando pacotes de dados e segurança...",
      modules: "[+] Carregando módulos ofensivos e defensivos...",
      network: "[+] Conectando canal TLS criptografado... OK",
      authReq: "[!] AUTENTICAÇÃO NECESSÁRIA. Digite um comando para iniciar.",
      accessGranted: "[+] ACESSO AUTORIZADO! Carregando o sistema...",
      unknownCmd: "Comando não reconhecido. Digite 'sudo start' ou pressione Enter."
    }
  },
  EN: {
    pageTitle: "Alex Vance // Elite Cybersecurity Portfolio",
    nav: {
      name: "Alex Vance",
      home: "Home",
      about: "Profile",
      skills: "Specialties",
      services: "Services",
      projects: "Cases",
      contact: "Contact",
      status: "SECURE // ONLINE",
      lightMode: "LIGHT_MODE",
      darkMode: "DARK_MODE",
      lang: "EN"
    },
    hero: {
      tag: "OFFENSIVE CYBERSECURITY SPECIALIST",
      title: "Alex Vance",
      subtitle: "> Finding vulnerabilities before they turn into incidents_",
      description: "Pentesting, application security, APIs, infrastructure, and cloud environments. Technical risk-oriented assessments for organizations needing to discover, prioritize, and remediate vulnerabilities prior to exploitation.",
      btnServices: "Explore Services →",
      btnContact: "Request Assessment"
    },
    about: {
      sub: "ABOUT // PROFILE",
      title: "Offensive security with defensive vision",
      terminalHeader: "root@vance-sec:~# ./profile.sh",
      cmdWhoami: "whoami",
      outWhoami: "security_assessment_specialist",
      cmdSpecs: "cat specialties.txt",
      cmdMethod: "cat methodology.txt",
      specs: [
        "[+] Web & API Pentesting",
        "[+] Network Security",
        "[+] Cloud Security",
        "[+] Vulnerability Assessment",
        "[+] Threat Hunting",
        "[+] Security Architecture"
      ],
      method: [
        "[+] Reconnaissance",
        "[+] Attack Surface Mapping",
        "[+] Technical Validation",
        "[+] Controlled Exploitation",
        "[+] Impact Analysis",
        "[+] Remediation"
      ],
      heading: "Find flaws.<br>Reduce risks.<br>Fortify systems.",
      p1: "Specializing in offensive security assessments, vulnerability analysis, and tech environment reviews. My work combines technical reconnaissance, manual validation, impact analysis, and practical remediation guidelines.",
      p2: "The methodology leverages industry-standard frameworks, including OWASP Top 10, MITRE ATT&CK, and CVSS, turning complex technical findings into clear security priorities for engineering teams and management.",
      stat1Label: "Technical Assessments*",
      stat2Label: "Security Findings*",
      stat3Label: "Findings Remediated*",
      statNote: "*Demonstrative indicators used exclusively for this presentation."
    },
    skills: {
      sub: "CAPABILITIES // SPECIALTIES",
      title: "Technical Expertise",
      webApi: { name: "Web & API Pentesting", desc: "Assessment of web apps and APIs focusing on authentication, authorization, access control, and data exposure." },
      network: { name: "Network Security", desc: "Evaluation of attack surface exposure, services, configurations, network segmentation, and access controls." },
      cloud: { name: "Cloud Security", desc: "Assessment of AWS, Azure, and GCP environments focusing on identity, permissions, network, and workloads." },
      vuln: { name: "Vulnerability Assessment", desc: "Mapping, validation, and prioritization of vulnerabilities using severity scoring metrics such as CVSS 4.0." },
      hunting: { name: "Threat Hunting", desc: "Proactive investigation of suspicious behaviors, indicators of compromise, and malicious activity signals." },
      arch: { name: "Security Architecture", desc: "Architectural review and recommendations to enhance identity management, data protection, and security controls." }
    },
    services: {
      sub: "SERVICES // OPERATIONS",
      title: "Tailored Security Assessments",
      pentest: { title: "Pentest", desc: "Identification and controlled validation of security flaws across applications and infrastructure.", items: ["Web Applications & APIs", "Infrastructure & Networks", "Cloud Environments", "Remediation Guidance"] },
      redteam: { title: "Red Team", desc: "Controlled adversary simulations to evaluate an organization's detection and response capabilities.", items: ["Surface Mapping", "Threat Simulation", "Detection Testing", "MITRE ATT&CK"] },
      cloud: { title: "Cloud Security", desc: "Evaluating security posture across cloud environments and cloud-native architecture.", items: ["AWS / Azure / GCP", "IAM & Storage", "Containers & Network", "Security Benchmarks"] },
      vuln: { title: "Vulnerability Assessment", desc: "Discovery and prioritization of security gaps using clear risk-driven metrics.", items: ["Asset Inventory", "Scanning & Manual Checks", "Risk Rating", "Remediation Plan"] },
      incident: { title: "Incident Response", desc: "Technical support for rapid incident investigation, containment, and root cause analysis.", items: ["Evidence Analysis", "Containment & Investigation", "Indicators of Compromise", "Post-Incident Analysis"] },
      awareness: { title: "Security Awareness", desc: "Targeted security training programs for developer teams and organizational staff.", items: ["Secure Coding for Devs", "Authorized Phishing Drills", "Workshops & Best Practices", "Security Culture"] }
    },
    projects: {
      sub: "OPERATIONS // CASES",
      title: "Demonstrative Projects",
      viewCase: "[VIEW CASE →]",
      nightfall: {
        tag: "WEB PENTEST", title: "Operation Nightfall", desc: "Demonstrative assessment of a fictitious corporate application with access control vulnerabilities.",
        modal: {
          p1: "Demonstrative assessment of a fictitious corporate application.",
          p2: "During the assessment, key issues were identified regarding access control, data exposure, and input sanitization.",
          h4_1: "Findings",
          results: ["Authentication bypass on admin panel (Critical)", "Customer PII exposure via IDOR (High)", "SQL Injection on search endpoints (High)"],
          h4_2: "Recommendations",
          rec: "Implementation of strict Role-Based Access Control (RBAC), centralized input validation, and authorization architecture overhaul."
        }
      },
      ironcloud: {
        tag: "CLOUD SECURITY", title: "Project Iron Cloud", desc: "Demonstrative assessment of fictitious cloud infrastructure evaluating permissions and resource exposure.",
        modal: {
          p1: "Demonstrative assessment of a fictitious cloud infrastructure.",
          p2: "Objective: evaluate identity management, permissions, resource exposure, storage, and network boundaries in a distributed ecosystem.",
          h4_1: "Findings",
          results: ["Public S3 buckets containing sensitive backups (Critical)", "Overly permissive IAM policies (Wildcards) (High)", "Privileged containers in production cluster (Medium)"],
          h4_2: "Recommendations",
          rec: "Enforce Principle of Least Privilege (PoLP) on IAM roles, isolate workloads into distinct VPCs, and block public S3 access."
        }
      },
      blackbox: {
        tag: "RED TEAM", title: "Operation Blackbox", desc: "Controlled adversary simulation assessing team prevention, detection, and response capabilities.",
        modal: {
          p1: "Controlled adversary simulation against a fictitious enterprise.",
          p2: "Designed to evaluate security team detection and response capabilities using real-world adversary tactics.",
          h4_1: "Findings",
          results: ["Initial entry achieved via Spear Phishing (High)", "Lateral movement executed via Pass-the-Hash (Critical)", "SOC Average Detection Time: 72 hours"],
          h4_2: "Recommendations",
          rec: "Enhance EDR detection coverage, harden Active Directory domain policies, and deliver intensive anti-phishing drills."
        }
      },
      apisentinel: {
        tag: "API SECURITY", title: "API Sentinel", desc: "Demonstrative assessment of a corporate B2B API focusing on authentication and data exposure.",
        modal: {
          p1: "Demonstrative assessment of a fictitious corporate B2B API.",
          p2: "Focused on identifying broken authentication, authorization gaps, data exposure, and lack of rate limiting.",
          h4_1: "Findings",
          results: ["BOLA (Broken Object Level Authorization) detected (Critical)", "Missing rate limiting on authentication routes (High)", "Stack trace exposure in error responses (Low)"],
          h4_2: "Recommendations",
          rec: "Enforce object-level authorization (IDOR) checks across sensitive endpoints, deploy API Gateway rate-limiting, and mask stack traces."
        }
      }
    },
    contact: {
      sub: "CONTACT // SECURE CHANNEL",
      title: "Ready to assess your environment's security?",
      heading: "Does your enterprise need an assessment?",
      desc: "Does your organization have an application, API, infrastructure, or cloud setup requiring review? Connect with Alex Vance to define the proper scope.",
      emailLabel: "E-mail",
      emailValue: "contact@vancesecurity.com.br",
      serviceAreaLabel: "Location",
      serviceAreaValue: "Worldwide · Remote",
      scopeLabel: "Scope",
      scopeValue: "Assessments conducted exclusively under explicit authorization.",
      roleLabel: "Domain",
      roleValue: "Pentest · Security Assessment · Cloud Security · Red Team",
      secStatusHeader: "SECURITY STATUS",
      secChannel: "[+] SECURE CHANNEL ........ ONLINE",
      secAssessment: "[+] ASSESSMENT ............ AVAILABLE",
      secResponse: "[+] RESPONSE .............. READY",
      secAuth: "[+] AUTHORIZATION ......... REQUIRED",
      form: {
        idLabel: "// IDENTIFIER",
        idPlaceholder: "Your name / Company",
        channelLabel: "// COMMUNICATION CHANNEL",
        channelPlaceholder: "you@domain.com",
        subjectLabel: "// SUBJECT",
        subjectPlaceholder: "Desired assessment type",
        scopeLabel: "// SCOPE (OPTIONAL)",
        scopePlaceholder: "Briefly describe the target environment...",
        submitBtn: "Request Assessment →",
        encrypting: "Encrypting...",
        success: "✓ Transmitted Securely"
      }
    },
    footer: {
      copy: "© 2026 Alex Vance // SECURITY ASSESSMENT",
      motto: "Find flaws. Reduce risks. Fortify systems."
    },
    splash: {
      bypass: "[ FAST_ACCESS ]",
      hint: "💡 Type <span class=\"highlight-cmd\">sudo start</span> or press <strong>Enter</strong> to boot the system.",
      booting: "[+] Initializing VANCE_SEC_OS v4.0.9...",
      fetching: "[+] Downloading data & security packages...",
      modules: "[+] Loading offensive & defensive modules...",
      network: "[+] Connecting encrypted TLS channel... OK",
      authReq: "[!] AUTHENTICATION REQUIRED. Type a command to initialize.",
      accessGranted: "[+] ACCESS GRANTED! Loading portfolio system...",
      unknownCmd: "Unknown command. Type 'sudo start' or press Enter."
    }
  }
};

let currentLang = localStorage.getItem('user_lang') || 'PT';

// Fetch JSON translations with fallback
async function loadTranslations() {
  try {
    const resPt = await fetch('pt.json');
    if (resPt.ok) translations.PT = await resPt.json();
    const resEn = await fetch('en.json');
    if (resEn.ok) translations.EN = await resEn.json();
  } catch (e) {
    console.warn('Falling back to embedded translations:', e);
  }
  if (!translations.PT) translations.PT = fallbackTranslations.PT;
  if (!translations.EN) translations.EN = fallbackTranslations.EN;
}

// Get nested object property by dot notation path string
function getNestedValue(obj, path) {
  return path.split('.').reduce((prev, curr) => (prev && prev[curr] !== undefined ? prev[curr] : null), obj);
}

// Apply current language to DOM
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('user_lang', lang);
  const data = translations[lang] || fallbackTranslations[lang];
  if (!data) return;

  // Title tag
  document.title = data.pageTitle;

  // Update button label
  const langLabel = document.getElementById('langLabel');
  if (langLabel) langLabel.textContent = lang;

  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = getNestedValue(data, key);
    if (val !== null) {
      el.textContent = val;
      if (el.hasAttribute('data-i18n-glitch')) {
        el.setAttribute('data-text', val);
      }
    }
  });

  // HTML content
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const val = getNestedValue(data, key);
    if (val !== null) el.innerHTML = val;
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = getNestedValue(data, key);
    if (val !== null) el.setAttribute('placeholder', val);
  });

  // Update Terminal in About section
  const termHeader = document.getElementById('terminalTitle');
  if (termHeader) termHeader.textContent = data.about.terminalHeader;

  const termSpecs = document.getElementById('terminalSpecs');
  if (termSpecs && data.about.specs) {
    termSpecs.innerHTML = data.about.specs.map(s => `<div class="out">${s}</div>`).join('');
  }

  const termMethod = document.getElementById('terminalMethod');
  if (termMethod && data.about.method) {
    termMethod.innerHTML = data.about.method.map(m => `<div class="out">${m}</div>`).join('');
  }

  // Update Service lists
  const srvLists = {
    srvListPentest: data.services.pentest.items,
    srvListRedteam: data.services.redteam.items,
    srvListCloud: data.services.cloud.items,
    srvListVuln: data.services.vuln.items,
    srvListIncident: data.services.incident.items,
    srvListAwareness: data.services.awareness.items
  };
  Object.keys(srvLists).forEach(id => {
    const el = document.getElementById(id);
    if (el && srvLists[id]) {
      el.innerHTML = srvLists[id].map(item => `<li>${item}</li>`).join('');
    }
  });

  // Contact security status
  const secStatusEl = document.getElementById('contactSecStatus');
  if (secStatusEl && data.contact) {
    secStatusEl.innerHTML = `${data.contact.secStatusHeader}<br>${data.contact.secChannel}<br>${data.contact.secAssessment}<br>${data.contact.secResponse}<br><span style="color:var(--red)">${data.contact.secAuth}</span>`;
  }

  // Update Case Modals data
  updateCaseData(data);

  // Update Splash Bypass Btn
  const splashBypassBtn = document.getElementById('splashBypassBtn');
  if (splashBypassBtn && data.splash) {
    splashBypassBtn.textContent = data.splash.bypass;
  }
}

// Case Modal Data update
function updateCaseData(data) {
  const p = data.projects;
  if (!p) return;
  
  caseData.nightfall = {
    tag: p.nightfall.tag,
    title: p.nightfall.title,
    body: `
      <p>${p.nightfall.modal.p1}</p>
      <p>${p.nightfall.modal.p2}</p>
      <h4>${p.nightfall.modal.h4_1}</h4>
      <ul>${p.nightfall.modal.results.map(r => `<li>${r}</li>`).join('')}</ul>
      <div class="modal-terminal">
$ assessment --scope web-application
[+] 37 endpoints identificados
[+] 12 áreas de autenticação analisadas
[+] 08 achados registrados
<span class="highlight-red">[!] 02 críticos</span>
<span class="highlight-cyan">[+] RELATÓRIO GERADO</span>
      </div>
      <h4>${p.nightfall.modal.h4_2}</h4>
      <p>${p.nightfall.modal.rec}</p>
    `
  };

  caseData.ironcloud = {
    tag: p.ironcloud.tag,
    title: p.ironcloud.title,
    body: `
      <p>${p.ironcloud.modal.p1}</p>
      <p>${p.ironcloud.modal.p2}</p>
      <h4>${p.ironcloud.modal.h4_1}</h4>
      <ul>${p.ironcloud.modal.results.map(r => `<li>${r}</li>`).join('')}</ul>
      <div class="modal-terminal">
$ cloud-audit --environment production
[+] 184 recursos analisados
[+] IAM review ........ COMPLETE
[+] Network review .... COMPLETE
[+] Storage review .... COMPLETE
<span class="highlight-cyan">[+] ASSESSMENT COMPLETE</span>
      </div>
      <h4>${p.ironcloud.modal.h4_2}</h4>
      <p>${p.ironcloud.modal.rec}</p>
    `
  };

  caseData.blackbox = {
    tag: p.blackbox.tag,
    title: p.blackbox.title,
    body: `
      <p>${p.blackbox.modal.p1}</p>
      <p>${p.blackbox.modal.p2}</p>
      <h4>${p.blackbox.modal.h4_1}</h4>
      <ul>${p.blackbox.modal.results.map(r => `<li>${r}</li>`).join('')}</ul>
      <div class="modal-terminal">
$ redteam --scope authorized
[+] Reconhecimento ........ COMPLETE
[+] Attack Surface ........ MAPPED
[+] Security Controls ..... TESTED
[+] Detection ............. EVALUATED
<span class="highlight-cyan">[+] ENGAGEMENT COMPLETE</span>
      </div>
      <h4>${p.blackbox.modal.h4_2}</h4>
      <p>${p.blackbox.modal.rec}</p>
    `
  };

  caseData.apisentinel = {
    tag: p.apisentinel.tag,
    title: p.apisentinel.title,
    body: `
      <p>${p.apisentinel.modal.p1}</p>
      <p>${p.apisentinel.modal.p2}</p>
      <h4>${p.apisentinel.modal.h4_1}</h4>
      <ul>${p.apisentinel.modal.results.map(r => `<li>${r}</li>`).join('')}</ul>
      <div class="modal-terminal">
$ api-assessment --target authorized-api
[+] 96 endpoints analisados
[+] Authentication ........ REVIEWED
[+] Input validation ...... TESTED
[+] Data exposure ........ REVIEWED
<span class="highlight-cyan">[+] SECURITY REVIEW COMPLETE</span>
      </div>
      <h4>${p.apisentinel.modal.h4_2}</h4>
      <p>${p.apisentinel.modal.rec}</p>
    `
  };
}

// Case Modal Store
let caseData = {};

// Language Toggle Setup
function initLanguageToggle() {
  const toggleBtn = document.getElementById('langToggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'PT' ? 'EN' : 'PT';
      applyLanguage(nextLang);
    });
  }
}

// Theme Toggle (Dark/Light Mode)
function initTheme() {
  const toggleBtn = document.getElementById('themeToggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      const isLight = document.body.classList.contains('light-mode');
      toggleBtn.textContent = isLight ? 'DARK_MODE' : 'LIGHT_MODE';
    });
  }
}

// Custom cursor
function initCursor() {
  const cursor = document.getElementById('cursor');
  const cursorDot = document.getElementById('cursor-dot');
  if (!cursor || !cursorDot) return;
  
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
  });
  document.querySelectorAll('a, button, .service, .project, .social, input, textarea, .theme-toggle, .lang-toggle').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });
}

// Hex grid
function initHexGrid() {
  const hexGrid = document.getElementById('hexGrid');
  if (!hexGrid) return;
  for (let i = 0; i < 36; i++) {
    const h = document.createElement('div');
    h.className = 'hex';
    hexGrid.appendChild(h);
  }
}

// Matrix rain
function initMatrix() {
  const matrixCanvas = document.getElementById('matrix');
  if (!matrixCanvas) return;
  const mctx = matrixCanvas.getContext('2d');
  
  let fontSize = 14;
  let columns, drops;
  
  function resizeMatrix() {
    matrixCanvas.width = window.innerWidth;
    matrixCanvas.height = window.innerHeight;
    columns = Math.floor(matrixCanvas.width / fontSize);
    drops = Array(columns).fill(1);
  }
  
  resizeMatrix();
  window.addEventListener('resize', resizeMatrix);
  
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!?:;/<=>[]{}|~+-_';
  
  function drawMatrix() {
    mctx.fillStyle = 'rgba(5,7,10,0.05)';
    mctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
    mctx.fillStyle = '#00ff41'; // Matrix color always green
    mctx.font = fontSize + 'px monospace';
    for (let i = 0; i < drops.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];
      mctx.fillText(text, i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
  }
  setInterval(drawMatrix, 50);
}

// Three.js 3D background - Lazy loaded
function initThreeJs() {
  if (typeof THREE === 'undefined') {
    setTimeout(initThreeJs, 200);
    return;
  }
  const canvas = document.getElementById('bg3d');
  if (!canvas) return;
  
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  camera.position.z = 5;

  // Particle network
  const particleCount = 150;
  const particlesGeo = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const velocities = [];
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 15;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
    velocities.push({ x: (Math.random() - 0.5) * 0.01, y: (Math.random() - 0.5) * 0.01, z: (Math.random() - 0.5) * 0.01 });
  }
  particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particlesMat = new THREE.PointsMaterial({ color: 0x00ff41, size: 0.05, transparent: true, opacity: 0.8 });
  const particles = new THREE.Points(particlesGeo, particlesMat);
  scene.add(particles);

  // Wireframe icosahedron
  const icoGeo = new THREE.IcosahedronGeometry(2, 1);
  const icoMat = new THREE.MeshBasicMaterial({ color: 0x00ffff, wireframe: true, transparent: true, opacity: 0.3 });
  const ico = new THREE.Mesh(icoGeo, icoMat);
  scene.add(ico);

  // Inner sphere
  const sphereGeo = new THREE.SphereGeometry(1.2, 16, 16);
  const sphereMat = new THREE.MeshBasicMaterial({ color: 0x00ff41, wireframe: true, transparent: true, opacity: 0.2 });
  const sphere = new THREE.Mesh(sphereGeo, sphereMat);
  scene.add(sphere);

  // Outer rings
  const ringGeo = new THREE.TorusGeometry(3, 0.02, 16, 100);
  const ringMat = new THREE.MeshBasicMaterial({ color: 0xb026ff, transparent: true, opacity: 0.4 });
  const ring = new THREE.Mesh(ringGeo, ringMat);
  ring.rotation.x = Math.PI / 2;
  scene.add(ring);

  const ring2 = new THREE.Mesh(new THREE.TorusGeometry(3.5, 0.01, 16, 100), new THREE.MeshBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.3 }));
  ring2.rotation.x = Math.PI / 3;
  scene.add(ring2);

  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', e => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  function animate() {
    requestAnimationFrame(animate);
    const pos = particlesGeo.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] += velocities[i].x;
      pos[i * 3 + 1] += velocities[i].y;
      pos[i * 3 + 2] += velocities[i].z;
      if (Math.abs(pos[i * 3]) > 7.5) velocities[i].x *= -1;
      if (Math.abs(pos[i * 3 + 1]) > 7.5) velocities[i].y *= -1;
      if (Math.abs(pos[i * 3 + 2]) > 7.5) velocities[i].z *= -1;
    }
    particlesGeo.attributes.position.needsUpdate = true;
    ico.rotation.x += 0.002;
    ico.rotation.y += 0.003;
    sphere.rotation.x -= 0.003;
    sphere.rotation.y -= 0.002;
    ring.rotation.z += 0.003;
    ring2.rotation.z -= 0.002;
    ring2.rotation.y += 0.001;
    camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
    camera.position.y += (-mouseY * 0.5 - camera.position.y) * 0.05;
    camera.lookAt(scene.position);
    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

// Intersections and Observables
function initObservers() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const fill = e.target.querySelector('.skill-fill');
        if (fill) fill.style.width = fill.dataset.pct + '%';
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.skill').forEach(el => skillObserver.observe(el));

  const statObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        const target = parseInt(el.dataset.target);
        let current = 0;
        const step = target / 60;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) { current = target; clearInterval(timer); }
          el.textContent = Math.floor(current) + (target === 96 ? '%' : '+');
        }, 20);
        statObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat-num').forEach(el => statObserver.observe(el));
}

// Global scope for form submission
window.handleSubmit = function(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  const orig = btn.innerHTML;
  const data = translations[currentLang] || fallbackTranslations[currentLang];
  const encText = data?.contact?.form?.encrypting || 'Encrypting...';
  const succText = data?.contact?.form?.success || '✓ Transmitted Securely';

  btn.innerHTML = encText;
  setTimeout(() => {
    btn.innerHTML = succText;
    btn.style.background = 'var(--cyan)';
    e.target.reset();
    setTimeout(() => { btn.innerHTML = orig; btn.style.background = ''; }, 3000);
  }, 1500);
}

// Case Modal Logic
function initModal() {
  const modal = document.getElementById('caseModal');
  const modalClose = document.getElementById('closeModal');
  const modalTag = document.getElementById('modalTag');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  
  if (!modal) return;

  document.querySelectorAll('.open-modal').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const caseId = btn.getAttribute('data-case');
      const data = caseData[caseId];
      if (data) {
        modalTag.textContent = data.tag;
        modalTitle.textContent = data.title;
        modalBody.innerHTML = data.body;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });
}

// Splash Terminal Preloader Logic
function initSplashTerminal() {
  const splashScreen = document.getElementById('splashScreen');
  const splashOutput = document.getElementById('splashOutput');
  const splashInputLine = document.getElementById('splashInputLine');
  const splashInput = document.getElementById('splashInput');
  const splashHint = document.getElementById('splashHint');
  const splashBypassBtn = document.getElementById('splashBypassBtn');

  if (!splashScreen || !splashOutput) return;

  // Check if session already unlocked
  if (sessionStorage.getItem('splash_unlocked') === 'true') {
    splashScreen.classList.add('unlocked');
    return;
  }

  const data = translations[currentLang] || fallbackTranslations[currentLang];
  const splashText = data.splash || fallbackTranslations.PT.splash;

  const asciiBannerText =
`█████╗ ██╗     ███████╗██╗  ██╗   ██╗   ██╗ █████╗ ███╗   ██╗ ██████╗ ███████╗
██╔══██╗██║     ██╔════╝╚██╗██╔╝   ██║   ██║██╔══██╗████╗  ██║██╔════╝ ██╔════╝
███████║██║     █████╗   ╚███╔╝    ██║   ██║███████║██╔██╗ ██║██║      █████╗  
██╔══██║██║     ██╔══╝   ██╔██╗    ╚██╗ ██╔╝██╔══██║██║╚██╗██║██║      ██╔══╝  
██║  ██║███████╗███████╗██╔╝ ██╗    ╚████╔╝ ██║  ██║██║ ╚████║╚██████╗ ███████╗
╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝     ╚═══╝  ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝`;

  const bootLogs = [
    { text: splashText.booting || "[+] Initializing VANCE_SEC_OS v4.0.9...", cls: "dim", delay: 250 },
    { text: "[FETCH] https://vancesecurity.com.br/core/packages.tar.gz", cls: "dim", delay: 450 },
    { text: splashText.fetching || "[+] Downloading data & security packages...", cls: "cyan", delay: 700 },
    { text: "   └─ [########################################] 100%", cls: "cyan", delay: 1000 },
    { text: splashText.modules || "[+] Loading offensive & defensive modules...", cls: "dim", delay: 1250 },
    { text: splashText.network || "[+] Connecting encrypted TLS channel... OK", cls: "white", delay: 1500 },
    { text: splashText.authReq || "[!] AUTHENTICATION REQUIRED. Type a command to initialize.", cls: "red", delay: 1750 }
  ];

  function addLog(text, cls = '') {
    const line = document.createElement('div');
    line.className = `splash-log-line ${cls}`;
    line.textContent = text;
    splashOutput.appendChild(line);
    splashOutput.scrollTop = splashOutput.scrollHeight;
  }

  // Print Red ASCII Banner first
  setTimeout(() => {
    const asciiPre = document.createElement('pre');
    asciiPre.className = 'splash-ascii';
    asciiPre.textContent = asciiBannerText;
    splashOutput.appendChild(asciiPre);
  }, 50);

  // Print simulated downloading logs
  bootLogs.forEach(log => {
    setTimeout(() => {
      addLog(log.text, log.cls);
    }, log.delay);
  });

  // Enable input line after logs finish
  setTimeout(() => {
    if (splashInputLine) splashInputLine.classList.remove('hidden');
    if (splashHint) splashHint.classList.remove('hidden');
    if (splashInput) splashInput.focus();
  }, 1800);

  function unlockSite() {
    sessionStorage.setItem('splash_unlocked', 'true');
    splashScreen.classList.add('unlocked');
  }

  if (splashBypassBtn) {
    splashBypassBtn.addEventListener('click', unlockSite);
  }

  if (splashInput) {
    splashScreen.addEventListener('click', (e) => {
      if (!e.target.closest('#splashBypassBtn')) {
        splashInput.focus();
      }
    });

    splashInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const val = splashInput.value.trim().toLowerCase();
        addLog(`guest@vance-sec:~$ ${splashInput.value}`, 'white');
        splashInput.value = '';

        if (
          val.includes('sudo') || 
          val.includes('start') || 
          val.includes('iniciar') ||
          val.includes('open') || 
          val.includes('abrir') ||
          val.includes('run') || 
          val.includes('enter') || 
          val.includes('entrar') ||
          val.includes('access') ||
          val.includes('acesso') ||
          val.includes('acessar') ||
          val.includes('alex') || 
          val.includes('vance') || 
          val.includes('su') ||
          val.includes('help') ||
          val.includes('ajuda') ||
          val === ''
        ) {
          const currentData = translations[currentLang] || fallbackTranslations[currentLang];
          const successMsg = currentData?.splash?.accessGranted || "[+] ACCESS GRANTED! Loading portfolio system...";
          addLog(successMsg, 'cyan');
          setTimeout(unlockSite, 450);
        } else {
          const currentData = translations[currentLang] || fallbackTranslations[currentLang];
          const unknownMsg = currentData?.splash?.unknownCmd || "Command not recognized. Type 'sudo start' or press Enter.";
          addLog(`[-] ${unknownMsg}`, 'red');
        }
      }
    });
  }
}

// Initialization
document.addEventListener('DOMContentLoaded', async () => {
  await loadTranslations();
  initTheme();
  initLanguageToggle();
  applyLanguage(currentLang);
  initSplashTerminal();
  initCursor();
  initHexGrid();
  initMatrix();
  initObservers();
  initThreeJs();
  initModal();
});
