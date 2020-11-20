from django.shortcuts import render
from .models import Menu, Category, Place, Order
from django.core.serializers import serialize
from django.http import JsonResponse


def index(request):
    return render(request, 'hot_res_app/index.html')


def load_from_db(request, load):
    if load == 'menu':
        resp = serialize("json", Menu.objects.all())
    elif load == 'categories':
        resp = serialize("json", Category.objects.all())
    
    return JsonResponse(resp, safe=False, json_dumps_params={"indent": 4})