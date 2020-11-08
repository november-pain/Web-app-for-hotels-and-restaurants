from django.shortcuts import render
from .models import Menu, Category, Place, Order
from django.http import HttpResponse


def home(request):
    context = {
        'categories': Category.objects.all()
    }
    return render(request, 'hot_res_app/home.html', context)
