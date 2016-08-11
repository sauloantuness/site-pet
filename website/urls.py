from django.conf.urls import include,url
from . import views

urlpatterns = [
	url(r'^$', views.index),
	url(r'^form$',views.form),
	url(r'^accounts/', include('registration.backends.default.urls')),
]