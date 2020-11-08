from django.shortcuts import render
from .models import Menu, Category, Place, Order


def index(request):
    context = {
        'category': Category.objects.all(),
        'items': Menu.objects.all()
    }
    return render(request, 'hot_res_app/index.html', context)
