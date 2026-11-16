// ==============================================================================
// vCard Generator - Asociación de Mujeres Empresarias Hispalenses (Empresarias Sevillanas)
// Estándar SeviAI Hub - Generación dinámica en cliente compatible con iOS y Android
// ==============================================================================

function generateVCard() {
  const hubUrl = window.location.href.split('?')[0].split('#')[0] || "https://empresariassevillanas.es/";
  
  // vCard versión 3.0 con saltos de línea estrictos CRLF
  const vcard = 
`BEGIN:VCARD\r
VERSION:3.0\r
N:Empresarias Sevillanas;Asociación;;;\r
FN:Asociación Empresarias Sevillanas\r
ORG:Asociación de Mujeres Empresarias Hispalenses (Empresarias Sevillanas)\r
TITLE:Asociación de Mujeres Empresarias\r
TEL;TYPE=WORK,VOICE:+34672689247\r
TEL;TYPE=CELL,VOICE:+34672689247\r
EMAIL;TYPE=WORK,INTERNET:info@empresariassevillanas.es\r
URL:https://empresariassevillanas.es/\r
URL;TYPE=HUB:${hubUrl}\r
ADR;TYPE=WORK:;;Sevilla;Sevilla;;41001;España\r
NOTE:Asociación de Mujeres Empresarias Hispalenses (Empresarias Sevillanas). Mujeres que inspiran, empresas que transforman. Punto de encuentro, formación, sinergias y visibilidad.\r
END:VCARD`;

  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Empresarias_Sevillanas.vcf');
  document.body.appendChild(link);
  link.click();
  
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}
