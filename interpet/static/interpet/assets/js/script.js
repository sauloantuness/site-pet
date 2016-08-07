day1 = [
	{
		'start' : '8:00',
		'end' : '9:00',
		'description' : 'Credenciamento <br> Abertura: Diretoria Geral e Diretoria de Graduação',
		'place' : 'Campus I - Auditório'
	},
	{
		'start' : '9:00',
		'end' : '9:30',
		'description' : 'COFFEE BREAK',
		'place' : 'Campus I - Auditório'
	},
	{
		'start' : '9:30',
		'end' : '12:00',
		'description' : 'Mesa de abertura: A importância do PET para a indissociabilidade entre ensino, pesquisa e extensão <br> <b>Francisco José Gomes</b> (Professor Titular e Tutor do Programa de Educação Tutorial do curso de Engenharia Elétrica - UFJF) <br> <b>Sandra Isabel dos Reis</b> (Secretária do NAPq, do CENEX, do Sistema de Bolsas da FACE e do PET Administração e Economia - UFMG)',
		'place' : 'Campus I - Auditório'
	},
	{
		'start' : '12:00',
		'end' : '14:00',
		'description' : 'Intervalo - Almoço',
		'place' : ''
	},
	{
		'start' : '14:00',
		'end' : '16:00',
		'description' : 'Relatos de experiência dos Grupos PET CEFET-MG: tutores e discentes',
		'place' : 'Campus I - Auditório'
	},
	{
		'start' : '16:00',
		'end' : '16:30',
		'description' : 'COFFEE BREAK',
		'place' : 'Campus I - Auditório'
	},
	{
		'start' : '16:30',
		'end' : '18:00',
		'description' : 'Relatos de experiência dos Grupos PET CEFET-MG: tutores e discentes',
		'place' : 'Campus I - Auditório'
	},
	{
		'start' : '18:00',
		'end' : '',
		'description' : 'Confraternização',
		'place' : 'Local a definir'
	},
]

day2 = [
	{
		'start' : '8:30',
		'end' : '10:00',
		'description' : 'Mesa: O PET – Avaliações e Perspectivas <br> <b>Igor Mota Morici</b> (Presidente do Comitê Local de Acompanhamento e Avaliação – CLAA – do PET e Professor do Departamento de Ciências Sociais e Filosofia - CEFET-MG) <br> <b>Lindolpho Oliveira de Araújo Júnior</b> (Professor no curso de Engenharia de Controle e Automação e Tutor PET Controle e Automação, Campus Leopoldina - CEFET-MG)',
		'place' : 'Campus I - Auditório'
	},
	{
		'start' : '10:00',
		'end' : '10:30',
		'description' : 'COFFEE BREAK',
		'place' : 'Campus I - Auditório'
	},
	{
		'start' : '10:30',
		'end' : '12:00',
		'description' : 'Reflexões Petianas: encontro de discentes',
		'place' : 'Campus I - Auditório'
	},
	{
		'start' : '10:00',
		'end' : '12:00',
		'description' : 'Reflexões Petianas: encontro de tutores',
		'place' : 'Campus I - Sala'
	},
	{
		'start' : '12:00',
		'end' : '14:00',
		'description' : 'Intervalo - Almoço',
		'place' : ''
	},
	{
		'start' : '14:00',
		'end' : '15:30',
		'description' : 'Desdobramentos do PET: apresentações de petianos egressos',
		'place' : 'Campus I - Auditório'
	},
	{
		'start' : '15:30',
		'end' : '16:00',
		'description' : 'COFFEE BREAK',
		'place' : ''
	},
	{
		'start' : '16:00',
		'end' : '17:30',
		'description' : 'Encerramento: Elaboração de um documento de diretrizes do PET para os próximos anos',
		'place' : 'Campus I - Auditório'
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
					A partir das '+i.start+' \
					<small>'+i.place+'</small> \
				</h3> \
				<p>'+i.description+'</p></div>').appendTo(element)
		}
	});
}

$(document).ready(function() {
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

$('#other').change(function() {
	if ($('#specify').is(':visible')) {
		$('#specify').hide(100);
		$('#specify input').val('');
	} else
		$('#specify').show(100);
});
