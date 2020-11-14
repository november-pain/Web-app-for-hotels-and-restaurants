from django.shortcuts import render
from .models import Menu, Category, Place, Order
from django.core import serializers
from django.http import JsonResponse


def index(request):
    return render(request, 'hot_res_app/index.html')


def load_from_db(request):
    cat = serializers.serialize("json", Category.objects.all())
    resp = JsonResponse(cat, safe=False)
    return resp