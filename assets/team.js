// Role labels are kept in English across all three language versions.
const TEAM_ROLES = {
  'co-director-m': 'Co-Director',
  'co-director-f': 'Co-Director',
  'hub-leader':    'Hub Leader',
  'researcher':    'Researcher',
};

const TEAM_UI = {
  learnMore: { en: 'Learn More',     de: 'Mehr erfahren',    fr: 'En savoir plus' },
  showLess:  { en: 'Show Less',      de: 'Weniger anzeigen', fr: 'Réduire' },
};

// To add a team member: add one entry here. It appears in all three languages automatically.
// - role: key from TEAM_ROLES above (label shown in English across all languages)
// - detail: English string shown below the name (kept English across all languages)
// - bio: { en, de, fr } — write all three, or just 'en' and the others fall back to English
const teamMembers = [
  {
    name: 'Simon Mayer',
    photo: 'https://storage.inrupt.com/f531f8ef-cd9d-474a-9fa6-70026b37c847/public/publicPortrait-square.jpg',
    detail: 'Prof. Dr., Institute of Computer Science',
    role: 'co-director-m',
    bio: {
      en: 'I lead the Interactions Research Group at ICS-HSG, investigating technology-mediated interactions in complex socio-technical systems. My work spans the Web of Things, autonomous multi-agent systems, human-robot interaction, and pervasive computing.',
      de: 'Ich erforsche, wie Technologie die Interaktion zwischen Menschen und ihrer Umgebung verändert — vom Web of Things über autonome Agenten bis zur Mensch-Roboter-Interaktion.',
      fr: 'J\'étudie comment la technologie transforme les interactions entre les personnes et leur environnement — du Web of Things aux agents autonomes en passant par la robotique.',
    }
  },
  {
    name: 'Aurelia Tamò-Larrieux',
    photo: 'https://www.sectorplandls.nl/wordpress/wp-content/uploads/elementor/thumbs/at-scaled-e1667747586811-pxbhxlwz04n8sysm54fadyobe105o6hzjq0aotqw8o.jpg',
    detail: 'Prof. Dr., Institute of Law and Economics',
    role: 'co-director-f',
    bio: {
      en: 'I head the Legal Design &amp; Code Lab and specialize in privacy-by-design, AI transparency, computational law, and the governance of automated decision-making.',
      de: 'Ich beschäftige mich mit der Frage, wie Recht und Technologie zusammenwachsen — mit Schwerpunkten auf Privacy-by-Design, KI-Transparenz und der Governance automatisierter Entscheidungen.',
      fr: 'Je m\'intéresse à la rencontre entre droit et technologie — notamment autour de la privacy-by-design, de la transparence de l\'IA et de la gouvernance des décisions automatisées.',
    }
  },
  {
    name: 'Jannis Strecker-Bischoff',
    link: 'https://academia.jrstrecker.de',
    photo: 'https://academia.jrstrecker.de/images/profile.jpg',
    detail: 'PhD candidate',
    role: 'hub-leader',
    bio: {
      en: 'I am a PhD student at the University of St.Gallen studying how ubiquitous personalization systems can make interactions with our environment more efficient, safer, and more inclusive. My dissertation focuses on Personalized Reality — exploring how customized digital experiences can enhance individual interactions while preventing social fragmentation in a Personalized Society.',
      de: 'Ich erforsche, wie Personalisierungstechnologien unseren Alltag prägen — und wie wir sie so gestalten können, dass sie Menschen verbinden statt trennen.',
      fr: 'J\'étudie comment les systèmes de personnalisation façonnent notre quotidien — et comment les concevoir pour qu\'ils rapprochent les gens plutôt que de les isoler.',
    }
  },
  {
    name: 'Vlada Druta',
    photo: 'assets/images/vlada.jpg',
    detail: 'PhD candidate',
    role: 'hub-leader',
    bio: {
      en: 'I am a PhD candidate at Lausanne University (UNIL-FDCA), specializing in AI in the judiciary. My expertise focuses on the adoption and usage of digital technologies in the judiciary — such as risk assessment tools and information retrieval systems — as well as on the impact of AI on human dignity.',
      de: 'Ich bin Doktorandin an der Universität Lausanne und beschäftige mich damit, wie KI in der Justiz eingesetzt wird — und was das für die Menschenwürde bedeutet.',
      fr: 'Je suis doctorante à l\'Université de Lausanne et je m\'intéresse à la place de l\'IA dans la justice — et à ce que cela implique pour la dignité humaine.',
    }
  },
  {
    name: 'Alice Palmieri',
    link: 'https://scholar.google.com/citations?user=4etKDf4AAAAJ&hl=en',
    photo: 'https://alicepal.solidcommunity.net/public/picture/alice-fuso.jpg',
    detail: 'PhD candidate',
    role: 'researcher',
    bio: {
      en: 'I research the governance of dominant online platforms, with a focus on the systemic risks they pose to users and the wider digital ecosystem. My work examines how regulation and accountability mechanisms can address the concentrated power of large platforms.',
      de: 'Ich erforsche die Governance dominanter Online-Plattformen — insbesondere die systemischen Risiken, die sie für Nutzende und das digitale Ökosystem mit sich bringen, und wie Regulierung und Rechenschaftspflicht ihrer konzentrierten Macht begegnen können.',
      fr: 'J\'étudie la gouvernance des plateformes en ligne dominantes — en particulier les risques systémiques qu\'elles font peser sur les utilisateur·rices et l\'écosystème numérique, et comment la régulation et la responsabilité peuvent encadrer leur pouvoir concentré.',
    }
  },
  {
    name: 'Giovanni De Toni',
    link: 'https://detoni.me/',
    detail: 'Postdoctoral Researcher',
    role: 'researcher',
    bio: {
      en: 'I study the algorithmic challenges of keeping AI systems under meaningful human oversight and understanding their effects once deployed in society — spanning algorithmic recourse, fairness, human-AI complementarity, and risk-controlling machine learning. I earned my PhD at the University of Trento as part of the ELLIS network, with research at the Max Planck Institute for Software Systems, and received a Best Full Paper Award at ACM RecSys 2025. In September 2026 I begin a postdoctoral position at the ETH AI Center.',
      de: 'Ich erforsche, wie sich KI-Systeme unter sinnvoller menschlicher Aufsicht halten lassen und welche Wirkung sie im gesellschaftlichen Einsatz entfalten — von algorithmischem Recourse über Fairness und Mensch-KI-Komplementarität bis zu risikokontrolliertem maschinellem Lernen. Ich habe an der Universität Trento im ELLIS-Netzwerk promoviert, mit Forschungsaufenthalten am Max-Planck-Institut für Softwaresysteme, und einen Best Full Paper Award auf der ACM RecSys 2025 erhalten. Im September 2026 beginne ich eine Postdoc-Stelle am ETH AI Center.',
      fr: 'J\'étudie les défis algorithmiques liés au maintien d\'une supervision humaine effective des systèmes d\'IA et à la compréhension de leurs effets une fois déployés dans la société — du recours algorithmique à l\'équité, en passant par la complémentarité humain-IA et l\'apprentissage automatique sous contrôle du risque. J\'ai obtenu mon doctorat à l\'Université de Trente au sein du réseau ELLIS, avec des travaux à l\'Institut Max Planck pour les systèmes logiciels, et reçu un Best Full Paper Award à l\'ACM RecSys 2025. En septembre 2026, je débute un postdoctorat au ETH AI Center.',
    }
  },
  {
    name: 'Haroon Khan',
    link: 'https://axolotlintelligence.com/',
    photo: 'assets/haroon.jpg',
    detail: 'PhD candidate',
    role: 'researcher',
    bio: {
      en: 'My doctoral research examines the subjectivity of trustworthiness in artificially intelligent systems, spanning AI governance, human rights, and technology security. I have studied algorithmic radicalization and the right-wing social media pipeline, and contributed research to bodies including EUROPOL and the IAEA. Through Axolotl Intelligence, I work to demystify AI from the boardroom to the classroom.',
      de: 'In meiner Doktorarbeit untersuche ich die Subjektivität von Vertrauenswürdigkeit in KI-Systemen — an der Schnittstelle von KI-Governance, Menschenrechten und Technologiesicherheit. Ich habe zu algorithmischer Radikalisierung geforscht und Beiträge für Institutionen wie EUROPOL und die IAEA geleistet. Mit Axolotl Intelligence mache ich KI verständlich — vom Klassenzimmer bis in die Chefetage.',
      fr: 'Ma thèse porte sur la subjectivité de la confiance dans les systèmes d\'intelligence artificielle, à la croisée de la gouvernance de l\'IA, des droits humains et de la sécurité technologique. J\'ai étudié la radicalisation algorithmique et contribué à des travaux pour des organismes tels qu\'EUROPOL et l\'AIEA. À travers Axolotl Intelligence, je m\'attache à démystifier l\'IA, de la salle de classe aux conseils d\'administration.',
    }
  },
  {
    name: 'Jan Grau',
    link: 'https://scholar.google.com/citations?user=XkY6KSIAAAAJ',
    detail: 'PhD candidate',
    role: 'researcher',
    bio: {
      en: 'I am a researcher at Empa (the Swiss Federal Laboratories for Materials Science and Technology) and at the University of St.Gallen, working at the intersection of the Solid protocol, web development, and security and privacy. My work builds decentralized, privacy-preserving systems — from gaze-based human-agent collaboration to secure multi-party computation that lets companies share supply-chain data for a circular economy without giving up control over it.',
      de: 'Ich bin Forscher an der Empa (Eidgenössische Materialprüfungs- und Forschungsanstalt) und an der Universität St.Gallen und arbeite an der Schnittstelle von Solid-Protokoll, Webentwicklung sowie Sicherheit und Datenschutz. Ich entwickle dezentrale, datenschutzfreundliche Systeme — von blickbasierter Mensch-Agent-Kollaboration bis zu Secure Multi-Party Computation, mit der Unternehmen Lieferkettendaten für eine Kreislaufwirtschaft teilen können, ohne die Kontrolle darüber abzugeben.',
      fr: 'Je suis chercheur à l\'Empa (Laboratoire fédéral d\'essai des matériaux et de recherche) et à l\'Université de Saint-Gall, à la croisée du protocole Solid, du développement web et de la sécurité et de la vie privée. Je conçois des systèmes décentralisés et respectueux de la vie privée — de la collaboration humain-agent fondée sur le regard au calcul multipartite sécurisé, qui permet aux entreprises de partager des données de chaîne d\'approvisionnement pour une économie circulaire sans en perdre le contrôle.',
    }
  },
  {
    name: 'Johannes David',
    link: 'https://www.linkedin.com/in/johannes-david/',
    photo: 'assets/images/JD.jpeg',
    detail: 'PhD candidate',
    role: 'researcher',
    bio: {
      en: 'My research focuses on the real-world utility of legal AI, examining the practical barriers to its adoption and exploring how it can improve access to justice. I put this research into practice at Caritas, developing AI tools designed to address concrete needs in legal aid.',
      de: 'Meine Forschung beschäftigt sich mit dem praktischen Nutzen von KI im Rechtsbereich — ich untersuche die realen Hindernisse bei ihrer Einführung und erforsche, wie sie den Zugang zur Justiz verbessern kann. Diese Erkenntnisse setze ich bei der Caritas in die Praxis um, wo ich KI-Tools entwickle, die konkrete Bedürfnisse in der Rechtsberatung adressieren.',
      fr: 'Mes recherches portent sur l\'utilité concrète de l\'IA juridique, en examinant les obstacles pratiques à son adoption et en explorant comment elle peut améliorer l\'accès à la justice. Je mets ces recherches en pratique à la Caritas, en développant des outils d\'IA conçus pour répondre à des besoins concrets en matière d\'aide juridique.',
    }
  },
  {
    name: 'Luka Bekavac',
    link: 'https://scholar.google.com/citations?user=sLRhupsAAAAJ&hl=en&oi=ao',
    photo: 'https://bridgingworlds.solidcommunity.net/public/fuso-photo.jpg',
    detail: 'PhD candidate',
    role: 'researcher',
    bio: {
      en: 'I study how algorithmic systems shape our information environment. My work focuses on filter bubbles, social media auditing, and platform transparency — building tools and methods that make recommender systems legible to researchers, regulators, and users alike.',
      de: 'Ich untersuche, wie algorithmische Systeme unsere Informationsumgebung prägen — mit Schwerpunkten auf Filterblasen, Social-Media-Auditing und Plattformtransparenz, um Empfehlungssysteme für Forschende, Regulierer und Nutzende nachvollziehbar zu machen.',
      fr: 'J\'étudie comment les systèmes algorithmiques façonnent notre environnement informationnel — bulles de filtre, audit des réseaux sociaux et transparence des plateformes — en construisant des outils pour rendre les systèmes de recommandation lisibles pour chercheur·euses, régulateur·rices et utilisateur·rices.',
    }
  },
];

function renderTeam(lang) {
  const wrap = document.getElementById('teamBricks');
  if (!wrap) return;
  wrap.innerHTML = teamMembers.map(m => {
    const role   = TEAM_ROLES[m.role] || m.role;
    const bio    = (m.bio || {})[lang] || (m.bio || {}).en || '';
    const detail = m.detail || '';
    const nameHtml   = m.link
      ? `<a href="${m.link}" target="_blank" rel="noopener" style="color:inherit;text-decoration:none;">${m.name}</a>`
      : m.name;
    const photoHtml  = m.photo  ? `<img class="brick-avatar" src="${m.photo}" alt="${m.name}">` : '';
    const detailHtml = detail   ? `<p class="brick-detail">${detail}</p>` : '';
    const learnMore  = TEAM_UI.learnMore[lang] || TEAM_UI.learnMore.en;
    return `<div class="team-brick">
      ${photoHtml}
      <p class="brick-role">${role}</p>
      <p class="brick-name">${nameHtml}</p>
      ${detailHtml}
      <button class="learn-more-btn" data-lang="${lang}" onclick="toggleBio(this)">${learnMore}</button>
      <p class="brick-bio" style="margin-top:0.75rem; font-size:0.7rem; font-weight:300; color:#666; line-height:1.5;">${bio}</p>
    </div>`;
  }).join('');
}

function toggleBio(btn) {
  const lang  = btn.dataset.lang || 'en';
  const bio   = btn.nextElementSibling;
  const isOpen = bio.classList.contains('open');
  bio.classList.toggle('open', !isOpen);
  btn.textContent = isOpen ? TEAM_UI.learnMore[lang] : TEAM_UI.showLess[lang];
}
