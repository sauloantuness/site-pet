from django.db import models

# Create your models here.

class Inscricao(models.Model):
	Q1 = models.CharField(max_length=1000)
	Q2 = models.CharField(max_length=1000)
	Q3 = models.CharField(max_length=1000)
	Q4 = models.CharField(max_length=1000)
	Q5 = models.CharField(max_length=1000, blank=True)
	Q6 = models.CharField(max_length=1000)
	Q7 = models.CharField(max_length=1000)
	Q8 = models.CharField(max_length=1000)
	Q9 = models.CharField(max_length=1000)
	Q10 = models.CharField(max_length=1000)
	Q11 = models.CharField(max_length=1000)
	Q12 = models.CharField(max_length=1000)
	Q13 = models.CharField(max_length=1000)
	Q14 = models.CharField(max_length=1000)
	Q15 = models.CharField(max_length=1000)
	Q16 = models.CharField(max_length=1000)
	Q17 = models.CharField(max_length=1000)
	Q18 = models.CharField(max_length=1000)
	Q19 = models.CharField(max_length=1000)
	Q20 = models.CharField(max_length=1000)
	data = models.DateTimeField(auto_now=True, editable=True)

	def __str__(self):
		return self.Q1 + " - " + self.data.strftime("%H:%M %d/%m/%Y")

