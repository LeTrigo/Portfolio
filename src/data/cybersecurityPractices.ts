export interface CybersecurityPractice {
  id: number;
  title: { en: string; es: string };
  summary: { en: string; es: string };
  category: { en: string; es: string };
  filePath: string;
}

const practiceFile = (path: string) =>
  encodeURI(`/cybersecurity/Portfolio/${path}`);

export const cybersecurityPractices: CybersecurityPractice[] = [
  {
    id: 1,
    title: {
      en: "Algorithm for file updates in Python",
      es: "Algoritmo para actualizar archivos en Python",
    },
    summary: {
      en: "Automates allow-list maintenance in a healthcare environment by comparing allowed and removed entries to reduce unauthorized access.",
      es: "Automatiza el mantenimiento de una allow list en un entorno sanitario comparando entradas permitidas y eliminadas para reducir accesos no autorizados.",
    },
    category: { en: "Python automation", es: "Automatización en Python" },
    filePath: practiceFile("Algorithm for file updates in Python.docx"),
  },
  {
    id: 2,
    title: {
      en: "Apply filters to SQL queries",
      es: "Aplicar filtros a consultas SQL",
    },
    summary: {
      en: "Uses SQL logic and pattern filters to analyze employees and login attempts and identify suspicious behavior.",
      es: "Usa lógica SQL y filtros de patrón para analizar empleados e intentos de inicio de sesión e identificar comportamiento sospechoso.",
    },
    category: { en: "SQL analysis", es: "Análisis SQL" },
    filePath: practiceFile("Apply filters to SQL queries.docx"),
  },
  {
    id: 3,
    title: {
      en: "Cybersecurity incident report",
      es: "Informe de incidente de ciberseguridad",
    },
    summary: {
      en: "Reviews a SYN flood attack and explains how repeated SYN requests exhausted server resources.",
      es: "Revisa un ataque SYN flood y explica cómo la repetición de solicitudes SYN agotó los recursos del servidor.",
    },
    category: { en: "Incident response", es: "Respuesta a incidentes" },
    filePath: practiceFile("Cybersecurity incident report.docx"),
  },
  {
    id: 4,
    title: {
      en: "Cybersecurity incident report: network traffic analysis",
      es: "Informe de incidente: análisis de tráfico de red",
    },
    summary: {
      en: "Analyzes DNS and ICMP traffic to diagnose a UDP port 53 issue affecting name resolution.",
      es: "Analiza tráfico DNS e ICMP para diagnosticar un problema en el puerto UDP 53 que afecta la resolución de nombres.",
    },
    category: { en: "Network analysis", es: "Análisis de red" },
    filePath: practiceFile(
      "Cybersecurity incident report network traffic analysis.docx",
    ),
  },
  {
    id: 5,
    title: { en: "Professional statement", es: "Declaración profesional" },
    summary: {
      en: "Defines a professional profile focused on cybersecurity and secure web solutions.",
      es: "Define un perfil profesional enfocado en ciberseguridad y soluciones web seguras.",
    },
    category: { en: "Profile", es: "Perfil" },
    filePath: practiceFile("Declaración profesional - Ciberseguridad.docx"),
  },
  {
    id: 6,
    title: {
      en: "File permissions in Linux",
      es: "Permisos de archivos en Linux",
    },
    summary: {
      en: "Audits file permissions and applies chmod changes to enforce least privilege.",
      es: "Audita permisos de archivos y aplica cambios con chmod para reforzar el principio de menor privilegio.",
    },
    category: { en: "Linux hardening", es: "Hardening en Linux" },
    filePath: practiceFile("File permissions in Linux.docx"),
  },
  {
    id: 7,
    title: {
      en: "Security incident report template",
      es: "Plantilla de informe de incidente",
    },
    summary: {
      en: "Documents a tcpdump-based investigation involving DNS, HTTP and a malicious executable download.",
      es: "Documenta una investigación con tcpdump que involucra DNS, HTTP y la descarga de un ejecutable malicioso.",
    },
    category: {
      en: "Incident documentation",
      es: "Documentación de incidentes",
    },
    filePath: practiceFile("Security incident report template.docx"),
  },
  {
    id: 8,
    title: {
      en: "Security risk assessment report",
      es: "Informe de evaluación de riesgos de seguridad",
    },
    summary: {
      en: "Recommends MFA, firewall maintenance and password policies to reduce common security risks.",
      es: "Recomienda MFA, mantenimiento del firewall y políticas de contraseñas para reducir riesgos comunes de seguridad.",
    },
    category: { en: "Risk assessment", es: "Evaluación de riesgos" },
    filePath: practiceFile("Security risk assessment report.docx"),
  },
  {
    id: 9,
    title: {
      en: "Compliance checklist",
      es: "Lista de verificación de cumplimiento",
    },
    summary: {
      en: "Reviews regulatory frameworks and compliance obligations such as FERC-NERC and GDPR.",
      es: "Repasa marcos regulatorios y obligaciones de cumplimiento como FERC-NERC y GDPR.",
    },
    category: { en: "Compliance", es: "Cumplimiento" },
    filePath: practiceFile("Auditoría/Compliance checklist.docx"),
  },
  {
    id: 10,
    title: { en: "Controls assessment", es: "Evaluación de controles" },
    summary: {
      en: "Classifies administrative controls and prioritizes least-privilege safeguards across key assets.",
      es: "Clasifica controles administrativos y prioriza salvaguardas de menor privilegio sobre activos clave.",
    },
    category: { en: "Controls review", es: "Revisión de controles" },
    filePath: practiceFile("Auditoría/Controls assessment.docx"),
  },
  {
    id: 11,
    title: { en: "Stakeholder memorandum", es: "Memorando para stakeholders" },
    summary: {
      en: "Summarizes internal audit findings and recommendations for a fictional organization.",
      es: "Resume hallazgos y recomendaciones de una auditoría interna para una organización ficticia.",
    },
    category: { en: "Audit memo", es: "Memorando de auditoría" },
    filePath: practiceFile("Auditoría/Stakeholder memorandum.docx"),
  },
  {
    id: 12,
    title: {
      en: "Incident report analysis",
      es: "Análisis del informe de incidente",
    },
    summary: {
      en: "Tracks a DDoS event caused by ICMP flooding and shows the containment steps taken.",
      es: "Analiza un evento DDoS causado por inundación ICMP y muestra los pasos de contención aplicados.",
    },
    category: { en: "Response analysis", es: "Análisis de respuesta" },
    filePath: practiceFile(
      "Responder a un incidente de seguridad/Incident report analysis.docx",
    ),
  },
  {
    id: 13,
    title: {
      en: "NIST CSF completed report analysis",
      es: "Análisis completo del informe NIST CSF",
    },
    summary: {
      en: "Applies the NIST Cybersecurity Framework to a case involving account misuse and data tampering.",
      es: "Aplica el Marco de Ciberseguridad NIST a un caso de uso indebido de cuentas y manipulación de datos.",
    },
    category: { en: "NIST framework", es: "Marco NIST" },
    filePath: practiceFile(
      "Responder a un incidente de seguridad/Portfolio-Activity-Use-the-NIST-Cybersecurity-Framework-to-respond-to-a-security-incident__Completed-report-analysis.docx",
    ),
  },
  {
    id: 14,
    title: { en: "Applying the NIST CSF", es: "Aplicación del CSF de NIST" },
    summary: {
      en: "Explains the five core NIST CSF functions: Identify, Protect, Detect, Respond and Recover.",
      es: "Explica las cinco funciones básicas del CSF de NIST: Identificar, Proteger, Detectar, Responder y Recuperar.",
    },
    category: { en: "NIST framework", es: "Marco NIST" },
    filePath: practiceFile(
      "Responder a un incidente de seguridad/Portfolio-Activity-Use-the-NIST-Cybersecurity-Framework-to-respond-to-a-security-incident__Applying-the-NIST-CSF-.docx",
    ),
  },
  {
    id: 15,
    title: {
      en: "NIST incident report analysis",
      es: "Análisis de informe de incidente NIST",
    },
    summary: {
      en: "Provides a bilingual incident template for documenting response phases and reflections.",
      es: "Ofrece una plantilla bilingüe para documentar fases de respuesta y reflexiones.",
    },
    category: { en: "Template", es: "Plantilla" },
    filePath: practiceFile(
      "Responder a un incidente de seguridad/Portfolio-Activity-Use-the-NIST-Cybersecurity-Framework-to-respond-to-a-security-incident_Incident-report-analysis.docx",
    ),
  },
];
