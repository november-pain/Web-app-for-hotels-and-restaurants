from django.db import models
from django.utils import timezone


class Menu(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField()
    category = models.ForeignKey('Category', on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Category(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField()

    def __str__(self):
        return self.name


class Order(models.Model):
    order = models.JSONField()
    date_time = models.DateTimeField(default=timezone.now)


class Place(models.Model):
    name = models.CharField(max_length=100)
    qr_code = models.ImageField()

    def __str__(self):
        return self.name
