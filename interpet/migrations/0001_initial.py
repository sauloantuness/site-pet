# -*- coding: utf-8 -*-
# Generated by Django 1.9.8 on 2016-08-04 10:43
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Inscricao',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Q1', models.CharField(max_length=1000)),
                ('Q2', models.CharField(max_length=1000)),
                ('Q3', models.CharField(max_length=1000)),
                ('Q4', models.CharField(max_length=1000)),
                ('Q5', models.CharField(blank=True, max_length=1000)),
                ('Q6', models.CharField(max_length=1000)),
                ('Q7', models.CharField(max_length=1000)),
                ('Q8', models.CharField(max_length=1000)),
                ('Q9', models.CharField(max_length=1000)),
                ('Q10', models.CharField(max_length=1000)),
                ('Q11', models.CharField(max_length=1000)),
                ('Q12', models.CharField(max_length=1000)),
                ('Q13', models.CharField(max_length=1000)),
                ('Q14', models.CharField(max_length=1000)),
                ('Q15', models.CharField(max_length=1000)),
                ('Q16', models.CharField(max_length=1000)),
                ('Q17', models.CharField(max_length=1000)),
                ('Q18', models.CharField(max_length=1000)),
                ('Q19', models.CharField(max_length=1000)),
                ('Q20', models.CharField(max_length=1000)),
                ('data', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
