const pptxgen = require('pptxgenjs');
const fs = require('fs');
const nombres = JSON.parse(fs.readFileSync('_nombres.json','utf8'));

const INK='12171C', PAPER='FFFFFF', MUTED='6E7781', ACC='0F766E', MARK='B45309',
      WABG='E8E4DD', BUBBLE='FFFFFF', LINE='D9DDE1';
const H='Calibri', B='Calibri';

const p = new pptxgen();
p.layout = 'LAYOUT_WIDE';            // 13.3 x 7.5
p.author = 'Nicolas Taboada';
p.title  = 'IA aplicada a la gestion de la academia';

// ---------- helpers ----------
const dark = s => { s.background = { color: INK }; };
const light = s => { s.background = { color: PAPER }; };

// =========== 1 · sin placa (habla, no hay nada en pantalla) ===========
let s1 = p.addSlide(); dark(s1);
s1.addNotes(
`BLOQUE 0 - APERTURA EN FRIO (4 min)
Pantalla en negro a proposito. La sala te mira a vos.

"Tres de noviembre. Abris la planilla de alumnos.
Ciento quince chicos y adultos terminan nivel este ano. Por cada uno tenes que
mirar si promociono o no. Si promociono, a que nivel pasa. Si ese nivel existe el
ano que viene, en que horario, en que sede y con que docente. Si hay vacante. Si
la familia tiene deuda. Si le corresponde algun descuento.
Y recien ahi le escribis. Uno por uno, porque a cada familia le toca un horario distinto.
Y cuando terminas con los ciento quince, empiezan a contestar."

(pausa)

"Eso, cronometrado, es entre una y dos semanas de trabajo de una persona.
Todos los anos. Y arranca en tres semanas."

TOPE: 90 segundos.`);

// =========== 2 · el mensaje ===========
function mensaje(slide, resaltar) {
  slide.background = { color: WABG };
  slide.addShape(p.ShapeType.roundRect, { x:1.15, y:0.5, w:11.0, h:6.5, fill:{color:BUBBLE},
    rectRadius:0.12, shadow:{type:'outer', color:'9AA0A6', blur:14, offset:3, angle:90, opacity:0.28} });
  const t = [
    [{t:'Hola Isabella, ¿cómo estás?\n\n', o:{}}],
    [{t:'Te escribo porque Dante termina ', o:{}},
     {t:'Teens 1', o:{bold:true, color: resaltar?MARK:INK}},
     {t:' este año con muy buen desempeño: promedio 8,43 y 91% de asistencia.\n\n', o:{}}],
    [{t:'Ya tiene su vacante reservada en ', o:{}},
     {t:'Teens 2', o:{bold:true, color: resaltar?MARK:INK}},
     {t:', que el año que viene va ', o:{}},
     {t:'lunes y miércoles de 18:00 a 19:30', o:{bold:true, color: resaltar?MARK:INK}},
     {t:', en la sede de Vicente López, con ', o:{}},
     {t:'Julián Recalde', o:{bold:true, color: resaltar?MARK:INK}},
     {t:'.\n\n', o:{}}],
    [{t:'La matrícula de reinscripción es de ', o:{}},
     {t:'$30.000 —en lugar de $42.000—', o:{bold:true, color: resaltar?MARK:INK}},
     {t:' y el arancel mensual queda en $84.000. Si confirmás antes del ', o:{}},
     {t:'30 de noviembre', o:{bold:true, color: resaltar?MARK:INK}},
     {t:' mantenés la bonificación por reinscripción temprana.\n\n', o:{}}],
    [{t:'¿Te reservo el lugar?', o:{}}],
  ].flat().map(r => ({ text:r.t, options:{ fontFace:B, fontSize:21, color:INK, ...r.o } }));
  slide.addText(t, { x:1.6, y:0.95, w:10.1, h:5.6, isTextBox:true, margin:0,
                     align:'left', valign:'top', lineSpacing:31 });
}
let s2 = p.addSlide(); mensaje(s2, false);
s2.addNotes(`Cinco segundos de SILENCIO. Que lo lean.

Despues: "Este salio de esa misma planilla."`);

// =========== 3 · lo que sabe ===========
let s3 = p.addSlide(); mensaje(s3, true);
s3.addNotes(
`"Y miren lo que sabe.
Sabe que Dante termina Teens 1.
Sabe que Teens 2 en Vicente Lopez va lunes y miercoles a las seis.
Sabe quien es el docente.
Sabe que la matricula del que continua es treinta mil y no cuarenta y dos mil.
Y sabe que la bonificacion vence el 30 de noviembre."

(pausa)

"Nada de eso esta en internet.
Todo eso esta en las planillas y en el reglamento de esta academia."`);

// =========== 4 · los 115 ===========
let s4 = p.addSlide(); s4.background = { color: WABG };
const COLS=13, ROWS=9, cw=0.93, ch=0.74, gx=0.055, gy=0.055;
const totW = COLS*cw + (COLS-1)*gx, totH = ROWS*ch + (ROWS-1)*gy;
const ox = (13.3-totW)/2, oy = (7.5-totH)/2;
for (let i=0;i<115;i++){
  const c=i%COLS, r=Math.floor(i/COLS);
  const x=ox+c*(cw+gx), y=oy+r*(ch+gy);
  s4.addShape(p.ShapeType.roundRect,{x,y,w:cw,h:ch,fill:{color:BUBBLE},rectRadius:0.05,
    line:{type:'none'}});
  s4.addText(nombres[i].al,{x:x+0.06,y:y+0.05,w:cw-0.12,h:0.2,isTextBox:true,margin:0,
    fontFace:B,fontSize:7,bold:true,color:INK});
  for (let l=0;l<3;l++)
    s4.addShape(p.ShapeType.rect,{x:x+0.06,y:y+0.28+l*0.13,w:(cw-0.12)*(l===2?0.55:1),h:0.045,
      fill:{color:LINE},line:{type:'none'}});
}
s4.addNotes(`"Hay ciento catorce mas. Cada uno con su nivel, su horario y su docente.
Los produjo una persona sentada, en una tarde."`);

// =========== 5 · el reencuadre ===========
let s5 = p.addSlide(); dark(s5);
s5.addText([
  {text:'Esta no es una charla sobre\ninteligencia artificial.\n', options:{color:'8A9199'}},
  {text:'Es una charla sobre cómo\nse lleva una academia.', options:{color:'FFFFFF'}},
], { x:1.1, y:1.6, w:11.1, h:4.3, isTextBox:true, margin:0, fontFace:H, fontSize:40,
     bold:true, lineSpacing:54, align:'left', valign:'middle' });
s5.addNotes(`Decila despacio. Es la frase que ordena los sesenta minutos.`);

// =========== 6 · vos, 20 segundos ===========
let s6 = p.addSlide(); light(s6);
s6.addText('Nicolás Taboada', { x:1.1, y:2.15, w:11.1, h:0.85, isTextBox:true, margin:0,
  fontFace:H, fontSize:44, bold:true, color:INK });
s6.addText([
  {text:'Ingeniero de software', options:{breakLine:true}},
  {text:'Desarrollo software de gestión para academias de idiomas', options:{breakLine:true}},
  {text:'El último año lo pasé metido en cómo funcionan por dentro', options:{}},
], { x:1.1, y:3.15, w:11.1, h:1.9, isTextBox:true, margin:0, fontFace:B, fontSize:24,
     color:MUTED, lineSpacing:40 });
s6.addNotes(`VEINTE SEGUNDOS. No mas.
No enumeres logros. Decis quien sos y seguis.`);

// ============================================================
//  BLOQUE 1 · DIAGNOSTICO  (6 min)
// ============================================================
function pregunta(txt, nota){
  const s = p.addSlide(); light(s);
  s.addText(txt, { x:1.1, y:2.1, w:11.1, h:3.3, isTextBox:true, margin:0,
    fontFace:H, fontSize:46, bold:true, color:INK, lineSpacing:60, align:'left', valign:'middle' });
  s.addNotes(nota); return s;
}

pregunta('¿Quién usó alguna vez la IA\npara escribir algo de la academia?',
`SONDEO 1 de 3.
Pedi que levanten la mano. Espera. Mira la sala, contala en voz alta:
"casi todos".

No sigas hasta que las manos esten arriba. Si vos no esperas, ellos no levantan.`);

pregunta('¿Y quién la usó para resolver\nalgo de la gestión?\n\nNo para escribir: para resolver.',
`SONDEO 2 de 3. Aca se bajan casi todas.
Deja el contraste colgado dos segundos antes de hablar.

"Eso que acaba de pasar me pasa en todas las academias con las que trabaje.
Todos la usan. Nadie la usa para gestionar.
Y no es por falta de conocimientos tecnicos."`);

pregunta('¿Quién lleva todo en planillas?\n\n¿Y quién en papel o en un cuaderno?',
`SONDEO 3 de 3. Es CALIBRACION, no retorica: te dice a quien le estas hablando.

Si se levantan muchas manos en "papel": alargas el caso de la lista de papel
y acortas el de reinscripcion.
Si casi todos tienen planillas: al reves.

Y decilo en voz alta: "no hace falta que tengan un sistema. Hace falta que
tengan papeles."`);

// --- la tesis ---
let s10 = p.addSlide(); dark(s10);
s10.addText('No sabe nada\nde tu academia.', { x:1.1, y:1.5, w:11.1, h:4.5, isTextBox:true,
  margin:0, fontFace:H, fontSize:62, bold:true, color:'FFFFFF', lineSpacing:80,
  align:'left', valign:'middle' });
s10.addNotes(`LA FRASE DE LA CHARLA. Se dice tres veces en la hora: aca, al terminar
de cargar Alborada, y en el cierre.

Decila y callate dos segundos.`);

// --- que no conoce ---
let s11 = p.addSlide(); light(s11);
s11.addText('No conoce', { x:1.1, y:1.15, w:11.1, h:0.6, isTextBox:true, margin:0,
  fontFace:B, fontSize:24, color:MUTED });
const items = ['tus cursos', 'tus aranceles', 'tus horarios', 'tu reglamento'];
items.forEach((t,i) => {
  s11.addText(t, { x:1.1, y:1.95+i*1.05, w:11.1, h:0.9, isTextBox:true, margin:0,
    fontFace:H, fontSize:40, bold:true, color:INK, valign:'middle' });
});
s11.addNotes(`"Por eso cuando le preguntas algo de tu institucion te contesta
cualquier cosa razonable y generica. Que no te sirve para nada."`);

// --- los tres niveles ---
let s12 = p.addSlide(); light(s12);
s12.addText('Tres niveles', { x:1.1, y:0.72, w:11.1, h:0.6, isTextBox:true, margin:0,
  fontFace:B, fontSize:24, color:MUTED });
const niveles = [
  ['Manual',       'Una persona lo hace desde cero, cada vez.', false],
  ['Asistido',     'Una persona lo ejecuta, pero no lo hace desde cero.', true],
  ['Automatizado', 'Pasa solo, sin que nadie lo dispare.', false],
];
niveles.forEach(([tit, des, foco], i) => {
  const y = 1.92 + i*1.74;
  s12.addShape(p.ShapeType.roundRect, { x:1.1, y, w:11.1, h:1.50, rectRadius:0.06,
    fill:{ color: foco ? 'FBF0DF' : 'F4F5F6' }, line:{ type:'none' } });
  s12.addText(tit, { x:1.55, y:y+0.20, w:4.2, h:0.6, isTextBox:true, margin:0,
    fontFace:H, fontSize:32, bold:true, color: foco ? MARK : INK, valign:'middle' });
  s12.addText(des, { x:1.55, y:y+0.78, w:9.9, h:0.5, isTextBox:true, margin:0,
    fontFace:B, fontSize:20, color: foco ? INK : MUTED, valign:'middle' });
});
s12.addNotes(
`"Todo lo que van a ver hoy esta en el del medio.
No se hace solo: lo sigue haciendo alguien. Pero deja de hacerse desde cero.
El tercero existe, y sobre el final les voy a decir que hace falta para llegar ahi,
porque no se llega con un chat."

NO anuncies ningun metodo de cuatro pasos. Cerras abriendo lo que sigue:

"Antes de ensenarle algo, hay que saber que le vamos a sacar de encima.
Empecemos por ahi."`);


p.writeFile({ fileName: 'IA-gestion-academia.pptx' }).then(f => console.log('ok:', f));
