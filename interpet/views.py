from django.shortcuts import render

# Create your views here.

def interpet(request):
	return render(request, 'interpet/interpet.html')

def apply(request):
	return render(request, 'interpet/inscricao.html')