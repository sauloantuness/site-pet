day1 = [
	{
		'start' : '8:00',
		'end' : '9:00',
		'description' : 'Abertura Diretoria Geral e Diretoria de Graduação.',
		'place' : 'Campus 1 - Auditório'
	},
	{
		'start' : '9:00',
		'end' : '12:00',
		'description' : 'Mesa de abertura: A importância do PET para a indissociabilidade entre ensino, pesquisa e extensão - Sandra Isabel dos Reis (Secretária do NAPq, do CENEX, do Sistema de Bolsas da FACE e do PET Administração e Economia - UFMG).',
		'place' : 'Campus 1 - Auditório'
	},
	{
		'start' : '12:00',
		'end' : '14:00',
		'description' : 'Intervalo - Almoço.',
		'place' : ''
	},
	{
		'start' : '14:00',
		'end' : '16:00',
		'description' : 'Relatos de experiência dos Grupos PET CEFET-MG: tutores e discentes.',
		'place' : 'Campus 1 - Auditório'
	},
	{
		'start' : '16:00',
		'end' : '16:30',
		'description' : 'Coffe Break.',
		'place' : 'Campus 1 - Auditório'
	},
	{
		'start' : '16:30',
		'end' : '18:00',
		'description' : 'Relatos de experiência dos Grupos PET CEFET-MG: tutores e discentes.',
		'place' : 'Campus 1 - Auditório'
	},
	{
		'start' : '18:00',
		'end' : '',
		'description' : 'Confraternização.',
		'place' : 'Local a definir'
	},
]

day2 = [
	{
		'start' : '9:00',
		'end' : '10:00',
		'description' : 'Mesa: O PET – Avaliações e Perspectivas - Igor Mota Morici (Presidente do Comitê Local de Acompanhamento e Avaliação – CLAA – do PET e Professor do Departamento de Ciências Sociais e Filosofia - CEFET-MG) ; Lindolpho Oliveira de Araújo Júnior (Professor no curso de Engenharia de Controle e Automação e Tutor PET Controle e Automação, Campus Leopoldina - CEFET-MG).',
		'place' : 'Campus 1 - Auditório'
	},
	{
		'start' : '10:00',
		'end' : '12:00',
		'description' : 'Reflexões Petianas: discentes.',
		'place' : 'Campus 1 - Auditório'
	},
	{
		'start' : '10:00',
		'end' : '12:00',
		'description' : 'Reflexões Petianas: tutores.',
		'place' : 'Campus 1 - Sala'
	},
	{
		'start' : '12:00',
		'end' : '14:00',
		'description' : 'Intervalo - Almoço.',
		'place' : ''
	},
	{
		'start' : '14:00',
		'end' : '15:30',
		'description' : 'Desdobramentos do PET: apresentações de petianos egressos.',
		'place' : 'Campus 1 - Auditório'
	},
	{
		'start' : '15:30',
		'end' : '16:00',
		'description' : 'Coffe Break.',
		'place' : ''
	},
	{
		'start' : '16:00',
		'end' : '17:30',
		'description' : 'Encerramento: Elaboração de um documento de diretrizes do PET para os próximos anos.',
		'place' : 'Campus 1 - Auditório'
	},
	{
		'start' : '18:00',
		'end' : '',
		'description' : 'Confraternização.',
		'place' : 'Local a definir'
	}
]

function load_schedule(json, element) {
	$.each(json, function(j, i){
		if (i.end.length > 0) {
			$('<div class="page-header"> \
				<h3> \
					'+i.start+' às '+i.end+' \
					<small>'+i.place+'</small> \
				</h3> \
				<p>'+i.description+'</p></div>').appendTo(element)
		} else {
			$('<div class="page-header"> \
				<h3> \
					A partir de '+i.start+' \
					<small>'+i.place+'</small> \
				</h3> \
				<p>'+i.description+'</p></div>').appendTo(element)
		}
	});
}

$(document).ready(function() {
	console.log('ok')
	load_schedule(day1, '#day1');
	load_schedule(day2, '#day2');
});

$.localScroll({
	offset:-70
});

$('ul li').click(function(){
  $(this).addClass('active');
  $(this).parent().children('li').not(this).removeClass('active');

});

