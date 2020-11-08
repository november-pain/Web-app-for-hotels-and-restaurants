from django.db import models
from django.utils import timezone


class Menu(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField()
    category = models.ForeignKey('Categories', on_delete=models.CASCADE)


class Categories(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField()


class Order(models.Model):
    order = models.JSONField()
    date_time = models.DateTimeField(default=timezone.now)


class Places(models.Model):
    name = models.CharField(max_length=100)
    qr_code = models.ImageField()
