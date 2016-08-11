from django.conf.urls import url
from . import views

urlpatterns = [
	url(r'^$', views.interpet),
	url(r'^inscricao/', views.inscricao),
	url(r'^inscritos/', views.inscritos),
	url(r'^inscritos.json', views.inscritosJson)
]