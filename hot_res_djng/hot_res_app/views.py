from django.shortcuts import render
from .models import Menu, Category, Place, Order
from django.core.serializers import serialize
from django.http import JsonResponse


def index(request):
    return render(request, 'hot_res_app/index.html')


def load_from_db(request):
    menu = serialize("json", Menu.objects.all())
    return JsonResponse(menu, safe=False, json_dumps_params={"indent": 4})