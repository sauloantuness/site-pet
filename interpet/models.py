from django.db import models

# Create your models here.

class Inscricao(models.Model):
	Q1 = models.CharField(max_length=1000)
	Q2 = models.CharField(max_length=1000, blank=True)
	Q3 = models.CharField(max_length=1000, blank=True)
	Q4 = models.CharField(max_length=1000, blank=True)
	Q5 = models.CharField(max_length=1000, blank=True)
	Q6 = models.CharField(max_length=1000, blank=True)
	Q7 = models.CharField(max_length=1000, blank=True)
	Q8 = models.CharField(max_length=1000, blank=True)
	Q9 = models.CharField(max_length=1000, blank=True)
	Q10 = models.CharField(max_length=1000, blank=True)
	Q11 = models.CharField(max_length=1000, blank=True)
	Q12 = models.CharField(max_length=1000, blank=True)
	Q13 = models.CharField(max_length=1000, blank=True)
	Q14 = models.CharField(max_length=1000, blank=True)
	Q15 = models.CharField(max_length=1000, blank=True)
	Q16 = models.CharField(max_length=1000, blank=True)
	Q17 = models.CharField(max_length=1000, blank=True)
	Q18 = models.CharField(max_length=1000, blank=True)
	Q19 = models.CharField(max_length=1000, blank=True)
	Q20 = models.CharField(max_length=1000, blank=True)

	# Ouvinte
	Q21 = models.CharField(max_length=1000, blank=True)
	Q22 = models.CharField(max_length=1000, blank=True)
	Q23 = models.CharField(max_length=1000, blank=True)

	ouvinte = models.BooleanField(default=False)
	data = models.DateTimeField(auto_now=True, editable=True)

	def __str__(self):
		return self.Q1 + " - " + self.data.strftime("%H:%M %d/%m/%Y")

