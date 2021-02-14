from django.shortcuts import render
from .models import Menu, Category, Place, Order, Completed_Order
from django.core.serializers import serialize
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json


def index(request):
    return render(request, 'hot_res_app/index.html')


@csrf_exempt
def order_post(request):
    if request.method == "POST":
        data = json.loads(request.body.decode("utf-8"))
        Order.objects.create(order=data)
        return HttpResponse('')


def load_from_db(request, load):
    if request.method == "GET":
        if load == 'menu':
            resp = serialize("json", Menu.objects.all())
        elif load == 'categories':
            resp = serialize("json", Category.objects.all())

        return JsonResponse(resp, safe=False, json_dumps_params={"indent": 4})
