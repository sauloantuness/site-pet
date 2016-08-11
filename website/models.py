from django.db import models
# Create your models here.
class User(models.Model):
	pass	

class Tag(models.Model):
	name = models.CharField(max_length=200)


class Post(models.Model):
	title = models.CharField(max_length=200)
	content = models.TextField()
	#cover = models.ImageField()
	user = models.ForeignKey('User')
	tags = models.ManyToManyField(Tag, related_name='posts')


	created = models.DateTimeField(auto_now_add=True,auto_now=False)
	updated = models.DateTimeField(auto_now_add=False,auto_now=True)

