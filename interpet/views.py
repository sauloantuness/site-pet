from django.shortcuts import render, redirect
from .models import *

# Create your views here.

def interpet(request):
	return render(request, 'interpet/interpet.html')

def inscricao(request):

	if request.method == 'POST':
		inscricao = Inscricao()
		inscricao.Q1 = request.POST.get('Q1')
		inscricao.Q2 = request.POST.get('Q2')
		inscricao.Q3 = request.POST.get('Q3')
		inscricao.Q4 = request.POST.getlist('Q4')
		inscricao.Q5 = request.POST.get('Q5')
		inscricao.Q6 = request.POST.get('Q6')
		inscricao.Q7 = request.POST.get('Q7')
		inscricao.Q8 = request.POST.get('Q8')
		inscricao.Q9 = request.POST.get('Q9')
		inscricao.Q10 = request.POST.get('Q10')
		inscricao.Q11 = request.POST.get('Q11')
		inscricao.Q12 = request.POST.get('Q12')
		inscricao.Q13 = request.POST.get('Q13')
		inscricao.Q14 = request.POST.get('Q14')
		inscricao.Q15 = request.POST.get('Q15')
		inscricao.Q16 = request.POST.get('Q16')
		inscricao.Q17 = request.POST.get('Q17')
		inscricao.Q18 = request.POST.get('Q18')
		inscricao.Q19 = request.POST.get('Q19')
		inscricao.Q20 = request.POST.get('Q20')

		inscricao.save()

		return render(request, 'interpet/interpet.html', {"inscricaoSucesso": True})

	return render(request, 'interpet/inscricao.html')

def inscricao_ouvinte(request):
	return render(request, 'interpet/inscricao-ouvinte.html')