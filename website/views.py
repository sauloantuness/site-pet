from django.shortcuts import render
from django.http import HttpResponse
from .forms import ExampleForm

def index(request):
    return render(request,'base.html',context=None)
def form(request):
	example_form = ExampleForm()
	context = {'example_form' : example_form,}
	return render(request,'forms.html',context)


	

# Create your views here.
